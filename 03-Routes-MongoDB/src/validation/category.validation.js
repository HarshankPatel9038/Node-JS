const Joi = require("joi");

const createCategory = {
    body: {
        // id: Joi.number().required(),
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        image: Joi.string().required().trim()
    },
    // param: {
    //     category_id: Joi.number().required(),
    //     category_name: Joi.string().required().trim(),
    //     category_description: Joi.string().required().trim()
    // }
}

module.exports = {
    createCategory
}