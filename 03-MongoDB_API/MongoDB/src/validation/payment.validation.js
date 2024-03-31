const Joi = require("joi");

const createPayment = {
  body: {
    _id: Joi.number().required(),
    order_id: Joi.number().required(),
    gateway: Joi.string().required().trim(),
    status: Joi.string().required().trim(),
    isActive: Joi.boolean()
  }
}

const updatePayment = {
  body: {
    order_id: Joi.number(),
    gateway: Joi.string().trim(),
    status: Joi.string().trim(),
    isActive: Joi.boolean()
  },
  params: {
    paymentId: Joi.string().required().trim()
  }
};

const deletePayment = {
  params: {
    paymentId: Joi.string().required().trim()
  }
};


module.exports = {
  createPayment,
  updatePayment,
  deletePayment
}