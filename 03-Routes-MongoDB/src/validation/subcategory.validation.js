const Joi = require("joi");

const createSubcategory = {
  body: {
    _id: Joi.number().required(),
    category_id: Joi.number().required(),
    subcategory_image: Joi.string().required().trim(),
    subcategory_name: Joi.string().required().trim(),
    subcategory_desc: Joi.string().required().trim(),
    isActive: Joi.boolean().required()
  }
}

const updateSubcategory = {
  body: {
    category_id: Joi.number(),
    subcategory_image: Joi.string().trim(),
    subcategory_name: Joi.string().trim(),
    subcategory_desc: Joi.string().trim(),
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