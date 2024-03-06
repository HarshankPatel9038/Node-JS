const Products = require("../models/products.model");

const createProducts = async (req, res) => {
  try {
    const product = await Products.create(req.body);

    if (!product) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Create Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const listProducts = async (req, res) => {

  try {
    const product = await Products.find();

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Product List Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const getProducts = async (req, res) => {

  try {
    const productId = req.params.productId;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required'
      });
    }
    const product = await Products.findById(productId);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Get Product By Id Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const bodyData = req.body;


    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required'
      });
    }
    const product = await Products.findByIdAndUpdate(productId, bodyData, { new: true });

    if (!product) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Update Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID Is Not required'
      })
    }

    const product = await Products.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'product Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Delete Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};

const searchByName = async (req, res) => {

  try {
    const productName = req.params.productName;
    console.log(productName)

    if (!productName) {
      return res.status(400).json({
        success: false,
        message: 'Product Name is required'
      });
    }
    const product = await Products.aggregate([
      {
        $match: {
          'name': { $eq: productName }
        }
      }
    ]);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Get Product By Name Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const listProductByCategory = async (req, res) => {

  try {
    const categoryId = req.params.categoryId;
    const convertIdInNumber = +categoryId;

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: 'Category ID is required'
      });
    }
    const product = await Products.aggregate([
      {
        $match: {
          category_id: convertIdInNumber
        }
      }
    ]);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Get Product By CategoryId Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const listProductBySubcategory = async (req, res) => {

  try {
    const subcategoryId = req.params.subcategoryId;
    const convertIdInNumber = +subcategoryId;

    if (!subcategoryId) {
      return res.status(400).json({
        success: false,
        message: 'Subcategory ID is required'
      });
    }
    const product = await Products.aggregate([
      {
        $match: {
          subcategory_id: convertIdInNumber
        }
      }
    ]);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Get Product By SubcategoryId Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const variantDetails = async (req, res) => {

  try {
    const productId = req.params.productId;
    const convertIdInNumber = +productId;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required'
      });
    }
    const product = await Products.aggregate([
      {
        $match: {
          _id: convertIdInNumber
        }
      },
      {
        $lookup: {
          from: 'variants',
          localField: '_id',
          foreignField: 'product_id',
          as: 'variants'
        }
      },
      {
        $unwind: {
          path: '$variants'
        }
      },
      {
        $project: {
          'variants.product_id': 0
        }
      }
    ]);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No variant found in this Products'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Get Variant By Product Id Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const topRated = async (req, res) => {

  try {
    const product = await Products.aggregate([
      {
        $lookup: {
          from: 'reviews',
          localField: '_id',
          foreignField: 'product_id',
          as: 'reviews'
        }
      },
      {
        $unwind: {
          path: '$reviews'
        }
      },
      {
        $sort: {
          'reviews.rating': -1
        }
      },
      {
        $limit: 1
      },
      {
        $group: {
          _id: '$_id',
          product_name: {
            $first: '$name'
          },
          rating: {
            $first: '$reviews.rating'
          }
        }
      }
    ]);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Get Top Rated Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const newArrivals = async (req, res) => {

  try {
    const product = await Products.aggregate([
      {
        $sort: {
          _id: -1
        }
      },
      {
        $limit: 1
      }
    ]);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Count Product By Category Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const discounts = async (req, res) => {

  try {
    const product = await Products.aggregate([
      {
        $lookup: {
          from: 'variants',
          localField: '_id',
          foreignField: 'product_id',
          as: 'variants'
        }
      },
      {
        $unwind: {
          path: '$variants'
        }
      },
      {
        $match: {
          'variants.attributes.Discount': {$gt: 0}
        }
      },
      {
        $project: {
          product_name: '$name',
          discount: '$variants.attributes.Discount'
        }
      }
    ]);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Product Currently On Sale'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const outOfStock = async (req, res) => {

  try {
    const product = await Products.aggregate([
      {
        $lookup: {
          from: 'variants',
          localField: '_id',
          foreignField: 'product_id',
          as: 'variants'
        }
      },
      {
        $match: {
          variants: []
        }
      }
    ]);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Count Product By Category Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const countProductByCategory = async (req, res) => {

  try {
    const product = await Products.aggregate([
      {
        $group: {
          _id: '$category_id',
          product_name: {
            $first: '$name'
          },
          total_product: {
            $sum: 1
          }
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ]);

    if (!product || product.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Products found'
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Count Product By Category Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

module.exports = {
  createProducts,
  listProducts,
  getProducts,
  updateProduct,
  deleteProduct,
  searchByName,
  listProductByCategory,
  listProductBySubcategory,
  variantDetails,
  topRated,
  newArrivals,
  discounts,
  outOfStock,
  countProductByCategory
}