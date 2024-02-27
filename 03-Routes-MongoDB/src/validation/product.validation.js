const Joi = require("joi");

const createProducts = {
  body: {
    category_id: Joi.string().required(),
    subcategory_id: Joi.string().required(),
    name: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    image: Joi.string().required().trim(),
    isActive: Joi.boolean().required()
  }
}

module.exports = {
  createProducts
}