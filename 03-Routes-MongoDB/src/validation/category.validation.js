const Joi = require("joi");

const createCategory = {
    body: {
        _id: Joi.number().required(),
        category_image: Joi.string().required().trim(),
        category_name: Joi.string().required().trim(),
        category_desc: Joi.string().required().trim(),
        isActive: Joi.boolean()
    }
}

const updateCategory = {
    body: {
        category_image: Joi.string().trim(),
        category_name: Joi.string().trim(),
        category_desc: Joi.string().trim(),
        isActive: Joi.boolean()
    },
    params: {
        categoryId: Joi.string().required()
    }
};

const deleteCategory = {
    params: {
        categoryId: Joi.string().required().trim()
    }
};


module.exports = {
    createCategory,
    updateCategory,
    deleteCategory
}