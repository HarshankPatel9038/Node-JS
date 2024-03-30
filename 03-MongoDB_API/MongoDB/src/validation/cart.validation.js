const Joi = require("joi");

const addToCart = {
  body: {
    _id: Joi.number().required(),
    user_id: Joi.number().required(),
    items: Joi.array().required(),
    isActive: Joi.boolean()
  }
}

const updateCart = {
  body: {
    user_id: Joi.number(),
    items: Joi.array(),
    isActive: Joi.boolean()
  },
  params: {
    cartId: Joi.string().required().trim()
  }
};

const deleteCart = {
  params: {
    cartId: Joi.string().required().trim(),
    productId: Joi.string().required().trim(),
  }
};


module.exports = {
  addToCart,
  updateCart,
  deleteCart
}