const Joi = require("joi");

const createCategory = {
    body: {
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        image: Joi.string().required().trim()
    }
}

const updateCategory = {
    body: {
        name: Joi.string().trim(),
        description: Joi.string().trim(),
        image: Joi.string().trim(),
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