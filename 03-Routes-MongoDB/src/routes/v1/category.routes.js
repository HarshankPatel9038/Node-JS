const express = require('express');
const route = express.Router();
const joi = require('joi');
const validate = require('../../middleware/validate');
const { categoryValidation } = require('../../validation');
const { categoryControlller } = require('../../controller');

route.get('/', (req, res) => {
    console.log('Category Get Successfully');
});

route.post('/create-category',
    validate(categoryValidation.createCategory),
    // (req, res) => {

    //     let bodyData = req.body;
    //     return res.status(200).json({
    //         success: true,
    //         data: bodyData,
    //         message: 'Post Category Data Successfully'
    //     });
    // }
    categoryControlller.createCategories


);

route.put('/:id',
    validate(categoryValidation.createCategory),
    (req, res) => {

        let bodyData = req.body;
        return res.status(200).json({
            success: true,
            data: bodyData,
            message: 'Update Category Data Successfully'
        });
    }
);

route.delete('/delete-category',
    validate(categoryValidation.createCategory),
    categoryControlller.deleteCategory
);

module.exports = route;