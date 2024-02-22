const Joi = require("joi");

const getCategory = {
    body: {
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        image: Joi.string().required().trim(),
        isActive: Joi.boolean()
    }
}

const createCategory = {
    body: {
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        image: Joi.string().required().trim()
    }
}

const updateCategory = {
    params: {
        categoryId: Joi.string().trim(),
        name: Joi.string().trim(),
        description: Joi.string().trim(),
        image: Joi.string().trim(),
        isActive: Joi.boolean()
    }
};

const deleteCategory = {
    params: {
        categoryId: Joi.string().required().trim()
    }
};


module.exports = {
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}