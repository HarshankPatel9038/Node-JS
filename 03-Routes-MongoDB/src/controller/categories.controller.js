const Categories = require("../models/categories.model");

const createCategories = async (req, res) => {
    try {
        const category = await Categories.create(req.body);

        if (!category) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }

        return res.status(200).json({
            success: true,
            data: req.body,
            message: 'Create Category Successfully'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};

const listCategories = async (req, res) => {

    try {
        const category = await Categories.find();

        if (!category || category.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No categories found'
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
            message: 'Category List Successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const getCategories = async (req, res) => {

    try {
        const categoryId = req.params.categoryId;

        if (!categoryId) {
            return res.status(400).json({
                success: false,
                message: 'Category ID is required'
            });
        }
        const category = await Categories.findById(categoryId);

        if (!category || category.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No categories found'
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
            message: 'Category Get Successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const updateCategories = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryUpdates = req.body;

        if (!categoryId) {
            return res.status(400).json({
                success: false,
                message: 'Category ID is required'
            });
        }

        const updatedCategory = await Categories.findByIdAndUpdate(categoryId, categoryUpdates, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedCategory,
            message: 'Update Category Successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const deleteCategories = async (req, res) => {
    try {
        const category = await Categories.findByIdAndDelete(req.params.categoryId);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
            message: 'Category deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const countActive = async (req, res) => {

    try {
        const category = await Categories.aggregate([
            {
                $match: {
                    isActive: true
                }
            },
            {
                $count: "Total Active Categories"
            }
        ]);

        if (!category || category.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No categories found'
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
            message: 'Count Active Category Successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const mostProducts = async (req, res) => {

    try {
        const category = await Categories.aggregate([
            {
                $lookup: {
                    from: 'products',
                    localField: '_id',
                    foreignField: 'category_id',
                    as: 'result'
                }
            },
            {
                $unwind: {
                    path: '$result',
                }
            },
            {
                $group: {
                    _id: "$_id",
                    'total_products': {
                        $sum: 1
                    },
                    'product_name': {
                        $push: '$result.name'
                    },
                    category_name: {
                        $first: "$category_name"
                    },
                }
            },
            {
                $sort: {
                    total_products: -1
                }
            },
            {
                $limit: 1
            },
            {
                $project: {
                    category_name: '$category_name',
                    total_product: '$total_products',
                    products_name: '$product_name'
                }
            }
        ]);

        if (!category || category.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No categories found'
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
            message: 'Get MostProduct Category Successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const averageProducts = async (req, res) => {

    try {
        const category = await Categories.aggregate();

        if (!category || category.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No categories found'
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
            message: 'Get Average Product Category Successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const inActive = async (req, res) => {

    try {
        const category = await Categories.aggregate([
            {
                $match: {
                    isActive: false
                }
            }
        ]);

        if (!category || category.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No categories found'
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
            message: 'Get InActive Category Successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const countSubcategories = async (req, res) => {

    try {
        const category = await Categories.aggregate([
            {
                $lookup: {
                    from: "subcategories",
                    localField: "_id",
                    foreignField: "category_id",
                    as: "result"
                }
            },
            {
                $unwind: {
                    path: "$result"
                }
            },
            {
                $group: {
                    _id: "$_id",
                    total_subcategory: {
                        $sum: 1
                    },
                    "category_name": {
                        $first: "$category_name"
                    }
                }
            },
        ]);

        if (!category || category.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No categories found'
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
            message: 'Count Subcategory Successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    createCategories,
    listCategories,
    getCategories,
    updateCategories,
    deleteCategories,
    countActive,
    mostProducts,
    averageProducts,
    inActive,
    countSubcategories
}