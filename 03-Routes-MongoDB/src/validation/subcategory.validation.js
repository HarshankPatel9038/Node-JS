const Joi = require("joi");

const createSubcategory = {
  body: {
    category_id: Joi.string().required(),
    name: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    image: Joi.string().required().trim(),
    isActive: Joi.boolean().required()
  }
}

const updateSubcategory = {
  body: {
    category_id: Joi.string(),
    name: Joi.string().trim(),
    description: Joi.string().trim(),
    image: Joi.string().trim(),
    isActive: Joi.boolean()
  },
  params: {
    subcategoryId: Joi.string().required()
  }
};

const deleteSubcategory = {
  params: {
    subcategoryId: Joi.string().required().trim()
  }
};


module.exports = {
  createSubcategory,
  updateSubcategory,
  deleteSubcategory
}