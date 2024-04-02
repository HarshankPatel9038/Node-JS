const Carts = require("../models/carts.model");

const addToCart = async (req, res) => {
  try {
    const cart = await Carts.create(req.body);

    if (!cart) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: cart,
      message: 'Add-To-Cart Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      // message: 'Internal Server Error'
      message: error.message
    });
  }
};



const user = async (req, res) => {
  try {
    const userId = req.params.userId;
    const convertIdInNumber = +userId;
    const user = await Carts.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "users"
        }
      },
      {
        $unwind: {
          path: "$users"
        }
      },
      {
        $match: {
          "users._id": convertIdInNumber
        }
      },
      {
        $project: {
          _id: 0,
          order_id: "$_id",
          user_id: "$users._id",
          name: "$users.name",
          address: "$users.address",
          mobile_no: "$users.mobile_no",
          email: "$users.email"
        }
      }
    ]);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
      message: 'User By UserId'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      // message: 'Internal Server Error'
      message: error.message
    });
  }
};

const updateCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const bodyData = req.body;


    if (!cartId) {
      return res.status(400).json({
        success: false,
        message: 'Cart ID is required'
      });
    }
    const cart = await Carts.findByIdAndUpdate(cartId, bodyData, { new: true });

    if (!cart) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: cart,
      message: 'Cart Update Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const deleteCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;

    if (!cartId) {
      return res.status(400).json({
        success: false,
        message: 'Cart Id Is Required'
      })
    }

    const cart = await Carts.findByIdAndDelete(cartId);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      data: cart,
      message: 'Cart Delete Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};

const updateQuantity = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const updates = req.body;

    const cart = await Carts.findById(cartId);

    if (!cart) {
      return res.status(400).json({
        success: false,
        message: 'Cart Not Found'
      });
    }

    updates.forEach(update => {
      const item = cart.items.find(item => item.product_id === update.product_id);
      if (item) {
        item.quantity = update.quantity;
      }
    });

    await cart.save();

    return res.status(200).json({
      success: true,
      data: cart,
      message: 'Cart Quantity Update Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      // message: 'Internal Server Error'
      message: error.message
    });
  }
};


module.exports = {
  addToCart,
  user,
  updateCart,
  deleteCart,
  updateQuantity
}