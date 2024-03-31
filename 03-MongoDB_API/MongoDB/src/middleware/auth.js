const jwt = require('jsonwebtoken');
const Users = require('../models/users.model');

const auth = (roles) => async (req, res, next) => {
  if (req.isAuthenticated()) {
    try {
      const user = await Users.findById(req.user._id);
      const access_token = jwt.sign(
        {
          _id: req.user._id,
          name: user.name,
          role: user.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
      );
      const refresh_token = jwt.sign(
        {
          _id: req.user._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRE }
      );

      user.refresh_token = refresh_token;
      await user.save({ validateBeforeSave: false });

      const options = {
        httpOnly: true,
        secure: true,
        maxAge: 15 * 24 * 60 * 60
      };

      res.cookie('access_token', access_token, options);
      res.cookie('refresh_token', refresh_token, options);

      next();
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
  } else {
    try {
      const token = req.cookies?.access_token || req.header("Authorization")?.replace("Bearer ", "");

      if (!token) {
        res.status(401).json({
          success: false,
          message: 'Token Not Avalable'
        });
      }

      try {
        const tokenValidation = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await Users.findById(tokenValidation._id).select("-password -refresh_token");

        if (!user) {
          res.status(404).json({
            success: false,
            message: 'User Not Found'
          });
        }

        if (!roles.some((v) => v === user.role)) {
          return res.status(400).json({
            success: false,
            message: 'You Have Not Permission TO Access'
          });
        }

        req.user = user;

        next();

      } catch (error) {
        res.status(401).json({
          success: false,
          message: 'Invalid Token'
        });
      }


    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
  }
}

module.exports = auth;