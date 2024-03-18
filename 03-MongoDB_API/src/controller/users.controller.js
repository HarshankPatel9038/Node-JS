const Users = require("../models/users.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createAccessRefreshToken = async (user_id) => {
  try {
    const user = await Users.findById(user_id);
    const accessToken = await jwt.sign(
      {
        _id: user_id,
        name: user.name,
        role: user.role
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
    );
    const refreshToken = await jwt.sign(
      {
        _id: user_id
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRE }
    );

    return { accessToken, refreshToken }
  } catch (error) {
    console.log(error.message);
    throw error.message
  }
}

const register = async (req, res) => {
  try {
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

    const user = await Users.create({ ...req.body, password: hashPass });

    const userData = await Users.findById(user._id).select("-password -refresh_token");

    if (!userData) {
      return res.status(401).json({
        success: false,
        data: {},
        message: 'User Registration Failed Please Try Again Later'
      });
    }

    return res.status(200).json({
      success: true,
      data: userData,
      message: 'User Register Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
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

    const { accessToken, refreshToken } = await createAccessRefreshToken(userExist._id);

    console.log(accessToken);
    console.log(refreshToken);

    // return res.status(200).json({
    //   success: true,
    //   data: userData,
    //   message: 'User Register Successfully'
    // });
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


module.exports = {
  register,
  login,
  listUser,
  getUser
}