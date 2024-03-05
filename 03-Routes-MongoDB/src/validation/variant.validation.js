const Joi = require("joi");

const createVariant = {
  body: {
    _id: Joi.number().required(),
    product_id: Joi.number().required(),
    attributes: Joi.object().required(),
    isActive: Joi.boolean()
  }
}

const updateVariant = {
  body: {
    product_id: Joi.number(),
    attributes: Joi.object(),
    isActive: Joi.boolean()
  },
  params: {
    variantId: Joi.string().required().trim()
  }
};

const deleteVariant = {
  params: {
    variantId: Joi.string().required().trim()
  }
};


module.exports = {
  createVariant,
  updateVariant,
  deleteVariant
}