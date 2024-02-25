const Categories = require("../models/categories.model");

const getCategories = async (req, res) => {

    try {
        // ========= 01 list-category =========
        const category = await Categories.find();

        // ========= 02 get-category By Id =========
        // const categoryId = req.params.categoryId;
        // if (!categoryId) {
        //     return res.status(400).json({ message: 'Category ID is required' });
        // }
        // const category = await Categories.findById(categoryId);

        // ========= 03 count-active =========
        // const category = await Categories.aggregate([
        //     {
        //         $match: {
        //             isActive: true
        //         }
        //     },
        //     {
        //         $count: "Total Active Categories"
        //     }
        // ]);

        // ========= 04 inactive =========
        // const category = await Categories.aggregate([
        //     {
        //         $match: {
        //             isActive: false
        //         }
        //     }
        // ]);


        if (!category || category.length === 0) {
            return res.status(404).json({ message: 'No categories found' });
        }

        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
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

        return res.status(200).json({
            message: 'Create Category Successfully'
        });
    } catch (error) {
        return res.status(500).json({
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

        return res.status(200).json(updatedCategory);
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


const deleteCategories = async (req, res) => {
    try {
        const category = await Categories.findByIdAndDelete(req.params.categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        return res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {
    getCategories,
    createCategories,
    updateCategories,
    deleteCategories
}