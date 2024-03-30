const SubCategories = require("../models/subCategories.model");

const createSubcategories = async (req, res) => {
  try {
    const subcategory = await SubCategories.create(req.body);

    if (!subcategory) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Create Subcategory Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const listSubcategories = async (req, res) => {
  try {
    const subcategory = await SubCategories.find();

    if (!subcategory || subcategory.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Subcategories found'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Subcategory List Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const getSubcategories = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const convertIdInNumber = +categoryId;
    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: 'Category ID is required'
      });
    }
    const subcategory = await SubCategories.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "result"
        }
      },
      {
        $unwind: {
          path: "$result",
        }
      },
      {
        $match: {
          "result._id": { $eq: convertIdInNumber }
        }
      },
      {
        $group: {
          _id: "$result._id",
          category_name: {
            $first: "$result.category_name"
          },
          subcategory: {
            $push: "$subcategory_name"
          }
        }
      },
    ]);

    if (!subcategory || subcategory.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Subcategories found'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Subcategory Get Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const updateSubcategories = async (req, res) => {
  try {
    const subCategoryId = req.params.subcategoryId;
    const bodyData = req.body;


    if (!subCategoryId) {
      return res.status(400).json({
        success: false,
        message: 'subcategory ID is required'
      });
    }
    const subcategory = await SubCategories.findByIdAndUpdate(subCategoryId, bodyData, { new: true });

    if (!subcategory) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Update Subcategory Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const deleteSubcategory = async (req, res) => {
  try {
    const subCategoryId = req.params.subcategoryId;

    if (!subCategoryId) {
      return res.status(400).json({
        success: false,
        message: 'Subcategory Not Found'
      })
    }

    const subCategory = await SubCategories.findByIdAndDelete(subCategoryId);

    if (!subCategory) {
      return res.status(404).json({
        success: false,
        message: 'Subcategory Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      data: subCategory,
      message: 'Delete Subcategory Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};

const parentOfSubcategory = async (req, res) => {
  try {
    const subCategoryId = req.params.subcategoryId;
    const convertIdInNumber = +subCategoryId;
    if (!subCategoryId) {
      return res.status(400).json({
        success: false,
        message: 'subcategory ID is required'
      });
    }
    const subcategory = await SubCategories.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "result"
        }
      },
      {
        $unwind: {
          path: "$result",
        }
      },
      {
        $match: {
          _id: { $eq: convertIdInNumber }
        }
      },
      {
        $project: {
          _id: "$_id",
          category_name: "$result.category_name",
          subcategory_name: "$subcategory_name"
        }
      }
    ])

    if (!subcategory || subcategory.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Subcategories found'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Get Subcategory Parent Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

// const listByCategory = async (req, res) => {
//   try {
//     const subCategoryId = req.params.subcategoryId;
//     const convertIdInNumber = +subCategoryId;
//     if (!subCategoryId) {
//       return res.status(400).json({
//         success: false,
//         message: 'subcategory ID is required'
//       });
//     }
//     const subcategory = await SubCategories.aggregate([
//       {
//         $lookup: {
//           from: "categories",
//           localField: "category_id",
//           foreignField: "_id",
//           as: "result"
//         }
//       },
//       {
//         $unwind: {
//           path: "$result",
//         }
//       },
//       {
//         $match: {
//           _id: { $eq: convertIdInNumber }
//         }
//       },
//       {
//         $group: {
//           _id: "$result._id",
//           category_name: {
//             $first: "$result.category_name"
//           },
//           subcategory: {
//             $push: "$subcategory_name"
//           }
//         }
//       },
//     ])

//     if (!subcategory || subcategory.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'No Subcategories found'
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: subcategory,
//       message: 'Get Subcategory By List Successfully'
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: 'Internal Server Error'
//     });
//   }
// };

const countActiveSubcategory = async (req, res) => {
  try {
    const subcategory = await SubCategories.aggregate([
      {
        $match: {
          isActive: true
        }
      },
      {
        $count: 'Total Active SubCategory'
      }
    ]);

    if (!subcategory || subcategory.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Subcategories found'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Count Active Subcategory Successfully'
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
    const subcategory = await SubCategories.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: 'subcategory_id',
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
          subcategory_name: {
            $first: "$subcategory_name"
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
          subcategory_name: '$subcategory_name',
          total_product: '$total_products',
          products_name: '$product_name'
        }
      }
    ])

    if (!subcategory || subcategory.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Subcategories found'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Get MostProduct Subcategory Successfully'
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
    const subcategory = await SubCategories.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "subcategory_id",
          as: "products"
        }
      },
      {
        $addFields: {
          "productCount": { $size: "$products" }
        }
      },
      {
        $match: {
          productCount: { $gt: 0 }
        }
      },
      {
        $group: {
          _id: null,
          "totalProducts": { $sum: "$productCount" },
          data: { $push: '$$ROOT' }
        }
      },
      {
        $unwind: {
          path: '$data'
        }
      },
      {
        $addFields: {
          "percentage": {
            $multiply: [
              { $divide: ["$data.productCount", "$totalProducts"] },
              100
            ]
          }
        }
      },
      {
        $project: {
          _id: 0,
          subcategory_id: '$data._id',
          subcategory_name: '$data.subcategory_name',
          products: '$data.products',
          productCount: "$data.productCount",
          percentage: 1
        }
      }
    ]);

    if (!subcategory || subcategory.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No subcategory found'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Get Average Product Subcategory Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const inActiveSubcategory = async (req, res) => {
  try {
    const subcategory = await SubCategories.aggregate([
      {
        $match: {
          isActive: false
        }
      }
    ]);

    if (!subcategory || subcategory.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Subcategories found'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Get InActive Subcategory Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const countProducts = async (req, res) => {
  try {
    const subcategory = await SubCategories.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: 'subcategory_id',
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
          subcategory_name: {
            $first: "$subcategory_name"
          },
        }
      },
    ])

    if (!subcategory || subcategory.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Subcategories found'
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: 'Count Product By Subcategory Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

module.exports = {
  createSubcategories,
  listSubcategories,
  getSubcategories,
  updateSubcategories,
  deleteSubcategory,
  parentOfSubcategory,
  // listByCategory,
  countActiveSubcategory,
  mostProducts,
  averageProducts,
  inActiveSubcategory,
  countProducts
}