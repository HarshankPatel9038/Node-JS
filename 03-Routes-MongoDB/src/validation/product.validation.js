const Joi = require("joi");

const createProduct = {
  body: {
    _id: Joi.number().required(),
    category_id: Joi.number().required(),
    subcategory_id: Joi.number().required(),
    variant_id: Joi.number().required(),
    image: Joi.string().required().trim(),
    name: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    isActive: Joi.boolean()
  }
};

const updateProduct = {
  body: {
    category_id: Joi.number(),
    subcategory_id: Joi.number(),
    variant_id: Joi.number(),
    image: Joi.string().trim(),
    name: Joi.string().trim(),
    description: Joi.string().trim(),
    isActive: Joi.boolean()
  },
  params: {
    productId: Joi.string().required().trim()
  }
};

const deleteProduct = {
  params: {
    productId: Joi.string().required().trim()
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct
}