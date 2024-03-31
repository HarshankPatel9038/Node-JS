const Users = require("../models/users.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { uploadFile } = require("../services/cloudinary");
const mailSender = require("../services/mailSender");
const createPdf = require("../services/createPdf");

const createAccessRefreshToken = async (user_id) => {
  try {
    const user = await Users.findById(user_id);
    const access_token = await jwt.sign(
      {
        _id: user_id,
        name: user.name,
        role: user.role
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
    );
    const refresh_token = await jwt.sign(
      {
        _id: user_id
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRE }
    );

    user.refresh_token = refresh_token;

    user.save({ validateBeforeSave: false });

    return { access_token, refresh_token }
  } catch (error) {
    throw error.message
  }
}

const register = async (req, res) => {
  try {
    const path = await uploadFile(req.file.path);

    const { email, mobile_no, password } = req.body;

    const userExist = await Users.findOne({
      $or: [{ email }, { mobile_no }]
    });

    if (userExist) {
      return res.status(401).json({
        success: false,
        data: {},
        message: 'User Already Exist'
      });
    }

    const hashPass = await bcrypt.hash(password, 10);


    const avatar = {
      public_id: path.public_id,
      url: path.url
    };;

    const user = await Users.create({ ...req.body, password: hashPass, avatar });

    const userData = await Users.findById(user._id).select("-password -refresh_token");

    if (!userData) {
      return res.status(401).json({
        success: false,
        data: {},
        message: 'User Registration Failed Please Try Again Later'
      });
    }

    // createPdf(req.body);
    // mailSender(email);

    return res.status(200).json({
      success: true,
      data: userData,
      message: 'User Register Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error' + error.message
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, mobile_no, password } = req.body;

    const userExist = await Users.findOne({
      $or: [{ email }, { mobile_no }]
    });

    if (!userExist) {
      return res.status(401).json({
        success: false,
        data: {},
        message: 'User Not Exist'
      });
    }

    const hashPass = await bcrypt.compare(password, userExist.password);

    if (!hashPass) {
      return res.status(401).json({
        success: false,
        data: {},
        message: 'Invalid Email Or Password'
      });
    }

    const { access_token, refresh_token } = await createAccessRefreshToken(userExist._id);

    const user = await Users.findById(userExist._id).select("-password -refresh_token");

    const options = {
      httpOnly: true,
      secure: true,
      maxAge: 15 * 24 * 60 * 60
    };

    res
      .cookie("access_token", access_token, options)
      .cookie("refresh_token", refresh_token, options)
      .status(200)
      .json({
        success: true,
        data: { access_token, refresh_token, userData: user },
        message: 'User LogIn Successfully'
      });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const generateNewTokens = async (req, res) => {
  try {

    const getRefreshToken = req.cookies?.refresh_token || req.body.refresh_token;

    if (!getRefreshToken) {
      return res.status(401).json({
        success: false,
        message: 'Refresh Token Not Available'
      });
    }

    const userExist = await Users.findOne({ refresh_token: getRefreshToken });

    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: 'User Not Found'
      });
    }

    const { access_token, refresh_token } = await createAccessRefreshToken(userExist._id);

    const user = await Users.updateOne({ _id: userExist._id }, { $set: { refresh_token: refresh_token } });

    const options = {
      httpOnly: true,
      secure: true,
      maxAge: 15 * 24 * 60 * 60
    };

    res
      .cookie("access_token", access_token, options)
      .cookie("refresh_token", refresh_token, options)
      .status(200)
      .json({
        success: true,
        data: { access_token, refresh_token, userData: user },
        message: 'User LogIn Successfully'
      });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.cookies?.refresh_token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token Not Available'
      });
    }

    const userExist = await Users.findOne({ refresh_token: token });

    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: 'User Not Found'
      });
    }

    await Users.updateOne({ _id: userExist._id }, { $unset: { refresh_token: 1 } });

    res.clearCookie('access_token');
    res.clearCookie('refresh_token');

    return res.status(200).json({
      success: true,
      data: {},
      message: 'Logout Successful'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};


const listUser = async (req, res) => {
  try {
    const user = await Users.find();

    if (!user || user.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No User found'
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
      message: 'Get Users List Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};


const getUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required'
      });
    }

    const user = await Users.findById(userId);

    if (!user || user.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No User found'
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
      message: 'User Get Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};



const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userUpdates = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required'
      });
    }

    const updatedUser = await Users.findByIdAndUpdate(userId, userUpdates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedUser,
      message: 'Update User Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
      message: 'User deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const order = async (req, res) => {
  try {
    const userId = req.params.userId;
    const convertIdInNumber = +userId;
    const user = await Users.aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "_id",
          foreignField: "user_id",
          as: "orders"
        }
      },
      {
        $match: {
          _id: convertIdInNumber
        }
      },
      {
        $unwind: {
          path: "$orders"
        }
      },
      {
        $project: {
          order_id: "$orders._id",
          product_id: "$orders.products.product_id",
          total_amount: "$orders.total_amount",
          order_status: "$orders.status",
          discount: "$orders.discount"
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
      message: 'User Orders'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const review = async (req, res) => {
  try {
    const userId = req.params.userId;
    const convertIdInNumber = +userId;
    const user = await Users.aggregate([
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "user_id",
          as: "reviews"
        }
      },
      {
        $match: {
          _id: convertIdInNumber
        }
      },
      {
        $unwind: {
          path: "$reviews"
        }
      },
      {
        $project: {
          order_id: "$reviews._id",
          product_id: "$reviews.product_id",
          rating: "$reviews.rating",
          comment: "$reviews.comment"
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
      message: 'User Review'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const deactivate = async (req, res) => {
  try {
    const user = await Users.aggregate([
      {
        $match: {
          isActive: false
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
      message: 'Deactivate Users'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};


module.exports = {
  register,
  login,
  generateNewTokens,
  logout,
  listUser,
  getUser,
  updateUser,
  deleteUser,
  order,
  review,
  deactivate
}