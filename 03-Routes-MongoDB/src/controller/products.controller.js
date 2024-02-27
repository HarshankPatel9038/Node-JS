const Products = require("../models/products.model")

const createProducts = async (req, res) => {
  try {
    const products = await Products.create(req.body);
    if (!products) {
      return res.status(500).json({
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      message: 'Create Products Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

module.exports = {
  createProducts
}