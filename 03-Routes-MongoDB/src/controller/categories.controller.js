const Categories = require("../models/categories.model");

const createCategories = async (req, res) => {

    const category = await Categories.create(req.body)

    console.log(category);

    if (!category) {
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }

    res.status(200).json({
        message: 'Create Category Successfully'
    })
}

const deleteCategory = async (req, res) => {

    const category = await Categories.create(req.body)

    console.log(category);

    if (!category) {
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }

    res.status(200).json({
        message: 'Delete Category Successfully'
    })
}


module.exports = {
    createCategories,
    deleteCategory
}