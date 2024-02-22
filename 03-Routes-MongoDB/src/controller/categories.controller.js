const Categories = require("../models/categories.model");

const getCategories = async (req, res) => {

    try {
        const category = await Categories.find();

        if (!category || category.length === 0) {
            return res.status(404).json({ message: 'No categories found' });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const createCategories = async (req, res) => {
    try {
        const category = await Categories.create(req.body);

        if (!category) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }

        res.status(200).json({
            message: 'Create Category Successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};



const updateCategories = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryUpdates = req.body;

        if (!categoryId) {
            return res.status(400).json({ message: 'Category ID is required' });
        }

        const updatedCategory = await Categories.findByIdAndUpdate(categoryId, categoryUpdates, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const deleteCategories = async (req, res) => {
    try {
        const category = await Categories.findByIdAndDelete(req.params.categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {
    getCategories,
    createCategories,
    updateCategories,
    deleteCategories
}