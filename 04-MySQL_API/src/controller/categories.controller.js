const { categoryModule } = require("../models");

const createCategories = async (req, res) => {

    try {
        const result = await categoryModule.insertCategory(req.body);

        res.status(200).json({
            success: true,
            data: result,
            message: 'Create Category successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: 'Internal Server Error'
        });
    }
};

const getCategories = async (req, res) => {

    try {
        const result = await categoryModule.selectCategory();

        console.log(result)

        res.status(200).json({
            success: true,
            data: result,
            message: 'Get Category successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: 'Internal Server Error'
        });
    }
};

const listCategories = async (req, res) => {

    try {
        const id = +req.params.Id;
        const result = await categoryModule.listCategory(id);

        res.status(200).json({
            success: true,
            data: result,
            message: 'List Category By Id successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: 'Internal Server Error'
        });
    }
};

const updateCategory = async (req, res) => {

    try {

        const id = +req.params.Id;
        const data = req.body;
        console.log(data, id);

        const result = await categoryModule.updateCategory(data, id);

        res.status(200).json({
            success: true,
            data: result,
            message: 'Update Category successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: 'Internal Server Error'
        });
    }
};

const deleteCategory = async (req, res) => {

    try {

        const id = +req.params.Id
        console.log(id)

        const result = await categoryModule.deleteCategory(id);

        res.status(200).json({
            success: true,
            data: result,
            message: 'Delete Category successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: [],
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    createCategories,
    getCategories,
    listCategories,
    updateCategory,
    deleteCategory
}