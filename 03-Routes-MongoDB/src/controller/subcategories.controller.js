const Sub_categories = require("../models/sub_categories.model");

const getSubcategories = async (req, res) => {
  try {
    // ========= 01 list-subcategory =========
    // const subcategory = await Sub_categories.find();

    // ========= 02 get-subcategory By Id =========
    // const subCategoryId = req.params.subcategoryId;
    // if (!subCategoryId) {
    //   return res.status(400).json({ message: 'subCategory ID is required' });
    // }
    // const subcategory = await Sub_categories.findById(subCategoryId);

    // ========= 03 parent-of-subcategory =========
    // const subCategoryId = req.params.subcategoryId;
    // if (!subCategoryId) {
    //   return res.status(400).json({ message: 'subCategory ID is required' });
    // }
    // const subcategory = await Sub_categories.aggregate([])

    // ========= 05 count-active =========
    // const subcategory = await Sub_categories.aggregate([
    //   {
    //     $match: {
    //       isActive: true
    //     }
    //   },
    //   {
    //     $count: 'Total Active SubCategory'
    //   }
    // ]);

    // ========= 09 inactive =========
    // const subcategory = await Sub_categories.aggregate([
    //   {
    //     $match: {
    //       isActive: false
    //     }
    //   }
    // ]);

    if (!subcategory || subcategory.length === 0) {
      return res.status(404).json({
        message: 'No SubCategories found'
      });
    }

    return res.status(200).json(subcategory);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};

const createSubcategories = async (req, res) => {
  try {
    const subcategory = await Sub_categories.create(req.body);

    if (!subcategory) {
      return res.status(500).json({
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      message: 'Create Subcategory Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};

const updateSubcategories = async (req, res) => {
  try {
    const subCategoryId = req.params.subcategoryId;
    const bodyData = req.body;


    if (!subCategoryId) {
      return res.status(400).json({ message: 'subCategory ID is required' });
    }
    const subcategory = await Sub_categories.findByIdAndUpdate(subCategoryId, bodyData, { new: true });

    if (!subcategory) {
      return res.status(500).json({
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      message: 'Update Subcategory Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};

const deleteSubcategory = async (req, res) => {
  try {
    const subCategoryId = req.params.subcategoryId;

    if (!subCategoryId) {
      return res.status(400).json({
        message: 'SubCategory ID Is Not required'
      })
    }

    const subCategory = await Sub_categories.findByIdAndDelete(subCategoryId);

    if (!subCategory) {
      return res.status(404).json({
        message: 'SubCategory Not Found'
      })
    }

    return res.status(200).json({
      message: 'Delete SubCategory Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

module.exports = {
  getSubcategories,
  createSubcategories,
  updateSubcategories,
  deleteSubcategory
}