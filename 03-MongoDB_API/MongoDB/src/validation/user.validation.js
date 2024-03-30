const Joi = require("joi");

const registerUser = {
  body: {
    // _id: Joi.number().required(),
    name: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    mobile_no: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    role: Joi.string().required().trim(),
    refresh_token: Joi.string().trim(),
    isActive: Joi.boolean()
  }
}

const updateUser = {
  body: {
    name: Joi.string().trim(),
    address: Joi.string().trim(),
    mobile_no: Joi.string().trim(),
    email: Joi.string().trim(),
    password: Joi.string().trim(),
    isActive: Joi.boolean()
  },
  params: {
    userId: Joi.string().required().trim()
  }
};

const deleteUser = {
  params: {
    userId: Joi.string().required().trim()
  }
};


module.exports = {
  registerUser,
  updateUser,
  deleteUser
}