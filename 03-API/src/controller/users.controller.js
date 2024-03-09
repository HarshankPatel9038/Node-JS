const Users = require("../models/users.model");

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
  listUser,
  getUser
}