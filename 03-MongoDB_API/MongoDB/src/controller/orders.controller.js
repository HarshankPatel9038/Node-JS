const path = require("path");
const Orders = require("../models/orders.model");
const createPdf = require("../services/createPdf");
const mailSender = require("../services/mailSender");
const fs = require('fs');

const placeOrder = async (req, res) => {
  try {
    const order = await Orders.create(req.body);

    if (!order) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    const user = await Orders.aggregate([
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
          "users._id": req.body.user_id
        }
      }
    ]);

    createPdf(user[0]);
    mailSender(user[0].users.email);
    fs.unlinkSync(path.join(__dirname, '../services/document/invoice.pdf'));

    return res.status(200).json({
      success: true,
      data: order,
      message: 'Create Order Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      // message: 'Internal Server Error'
      message: error.message
    });
  }
};

const listOrders = async (req, res) => {

  try {
    const order = await Orders.find();

    if (!order || order.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Orders found'
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
      message: 'Get Order List Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const getOrdersById = async (req, res) => {

  try {
    const orderId = req.params.orderId;

    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: 'Order ID is required'
      });
    }
    const order = await Orders.findById(orderId);

    if (!order || order.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Orders found'
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
      message: 'Get Order By Id Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const bodyData = req.body;


    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: 'Order ID is required'
      });
    }
    const order = await Orders.findByIdAndUpdate(orderId, bodyData, { new: true });

    if (!order) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
      message: 'Order Update Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: 'Order Not Found'
      })
    }

    const order = await Orders.findByIdAndDelete(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'order Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      data: order,
      message: 'Order Delete Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};


const user = async (req, res) => {
  try {
    const userId = req.params.userId;
    const convertIdInNumber = +userId;
    const user = await Orders.aggregate([
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
      message: 'Order By User Id'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};


const product = async (req, res) => {
  try {
    const productId = req.params.productId;
    const convertIdInNumber = +productId;
    const product = await Orders.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "products.product_id",
          foreignField: "_id",
          as: "products"
        }
      },
      {
        $unwind: {
          path: "$products"
        }
      },
      {
        $match: {
          "products._id": convertIdInNumber
        }
      },
      {
        $project: {
          _id: 0,
          order_id: "$_id",
          product_id: "$products._id",
          product_name: "$products.name",
          product_description: "$products.description"
        }
      }
    ]);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Orders By Product Id'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};


module.exports = {
  placeOrder,
  listOrders,
  getOrdersById,
  updateOrder,
  deleteOrder,
  user,
  product
}