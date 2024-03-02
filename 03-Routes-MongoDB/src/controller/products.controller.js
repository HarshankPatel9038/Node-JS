const Products = require("../models/products.model");

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

module.exports = {
  listProducts,
  createProducts,
  updateProduct,
  deleteProduct
}