const Joi = require("joi");

const placeOrder = {
  body: {
    _id: Joi.number().required(),
    user_id: Joi.number().required(),
    // seller_id: Joi.number().required(),
    payment_id: Joi.number().required(),
    products: Joi.array().required(),
    shipping_address: Joi.string().required().trim(),
    total_amount: Joi.number().required(),
    status: Joi.string().required().trim(),
    discount: Joi.number().required(),
    isActive: Joi.boolean()
  }
}

const updateOrder = {
  body: {
    user_id: Joi.number().required(),
    // seller_id: Joi.number().required(),
    payment_id: Joi.number().required(),
    products: Joi.array().required(),
    shipping_address: Joi.string().required(),
    total_amount: Joi.number().required(),
    status: Joi.string().required(),
    discount: Joi.number(),
    isActive: Joi.boolean()
  },
  params: {
    orderId: Joi.string().required().trim()
  }
};

const deleteOrder = {
  params: {
    orderId: Joi.string().required().trim()
  }
};


module.exports = {
  placeOrder,
  updateOrder,
  deleteOrder
}