const { categoryModule } = require("../models");

const createCategories = async (req, res) => {

    try {
        const category = await categoryModule.insertCategory(req.body);
        console.log(category);
    } catch (error) {
        console.log(error.message);
    }
};

const getCategories = async (req, res) => {

    try {
        const category = await categoryModule.selectCategory();
        console.log(category);
    } catch (error) {
        console.log(error.message);
    }
};

const listCategories = async (req, res) => {

    try {
        const id = +req.params.Id;
        const category = await categoryModule.listCategory(id);
        console.log(category);
    } catch (error) {
        console.log(error.message);
    }
};

const updateCategory = async (req, res) => {

    try {

        const id = +req.params.Id;
        const data = req.body;
        console.log(data, id);

        const category = await categoryModule.updateCategory(data, id);
        console.log(category);
    } catch (error) {
        console.log(error.message);
    }
};

const deleteCategory = async (req, res) => {

    try {

        const id = +req.params.Id
        console.log(id)

        const category = await categoryModule.deleteCategory(id);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    createCategories,
    getCategories,
    listCategories,
    updateCategory,
    deleteCategory
}