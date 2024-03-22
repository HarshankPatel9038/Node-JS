const Variants = require("../models/variants.model");

const createVariants = async (req, res) => {
  try {
    const variant = await Variants.create(req.body);

    if (!variant) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Create Variant Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const listVariants = async (req, res) => {

  try {
    const variant = await Variants.find();

    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variants found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Variant List Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const getVariants = async (req, res) => {
  try {
    const variantId = req.params.variantId;
    const convertIdInNumber = +variantId;
    if (!variantId) {
      return res.status(400).json({
        success: false,
        message: 'Variant ID is required'
      });
    }
    const variant = await Variants.findById(variantId);

    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variant found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'variant Get Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const updateVariants = async (req, res) => {
  try {
    const variantId = req.params.variantId;
    const bodyData = req.body;


    if (!variantId) {
      return res.status(400).json({
        success: false,
        message: 'Variant ID is required'
      });
    }
    const variant = await Variants.findByIdAndUpdate(variantId, bodyData, { new: true });

    if (!variant) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Update Variant Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const deleteVariant = async (req, res) => {
  try {
    const variantId = req.params.variantId;

    if (!variantId) {
      return res.status(400).json({
        success: false,
        message: 'Variant ID Is Not required'
      })
    }

    const variant = await Variants.findByIdAndDelete(variantId);

    if (!variant) {
      return res.status(404).json({
        success: false,
        message: 'Variant Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Delete Variant Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};

const product = async (req, res) => {
  try {
    const productId = req.params.productId;
    const convertIdInNumber = +productId;
    console.log(convertIdInNumber)
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required'
      });
    }
    const variant = await Variants.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
          as: 'result'
        }
      },
      {
        $unwind: {
          path: '$result',
        }
      },
      {
        $match: {
          product_id: convertIdInNumber
        }
      },
      {
        $project: {
          'result._id': 0,
        }
      }
    ]);

    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variants found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Get Product & Variant Detail Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const listVariantByProductId = async (req, res) => {
  try {
    const productId = req.params.productId;
    const convertIdInNumber = +productId;
    console.log(convertIdInNumber)
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required'
      });
    }
    const variant = await Variants.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
          as: 'result'
        }
      },
      {
        $unwind: {
          path: '$result',
        }
      },
      {
        $match: {
          product_id: convertIdInNumber
        }
      },
      {
        $group: {
          _id: '$product_id',
          'product_name': {
            $first: '$result.name'
          },
          'variant': {
            $push: '$attributes'
          }
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ]);


    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variants found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Get List Of Variant In Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const countStock = async (req, res) => {
  try {
    const productId = req.params.productId;
    const convertIdInNumber = +productId;
    console.log(convertIdInNumber)
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required'
      });
    }
    const variant = await Variants.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
          as: 'result'
        }
      },
      {
        $unwind: {
          path: '$result',
        }
      },
      {
        $match: {
          product_id: convertIdInNumber
        }
      },
      {
        $group: {
          _id: '$product_id',
          product_name: {
            $first: '$result.name'
          },
          stock: {
            $sum: '$attributes.Quantity'
          }
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ]);


    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variants found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Get List Of Variant In Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const lowQuantity = async (req, res) => {
  try {
    const variant = await Variants.aggregate([
      {
        $sort: {
          'attributes.Quantity': 1
        }
      },
      {
        $limit: 1
      },
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
          as: 'result'
        }
      },
      {
        $unwind: {
          path: '$result',
        }
      },
      {
        $project: {
          _id: 0,
          name: '$result.name',
          Quantity: '$attributes.Quantity'
        }
      }
    ]);


    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variants found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Get Low Quantity Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const highPrice = async (req, res) => {
  try {
    const variant = await Variants.aggregate([
      {
        $sort: {
          'attributes.Price': -1
        }
      },
      {
        $limit: 1
      },
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
          as: 'result'
        }
      },
      {
        $unwind: {
          path: '$result',
        }
      },
      {
        $project: {
          _id: 0,
          name: '$result.name',
          price: '$attributes.Price'
        }
      }
    ]);


    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variants found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Get Low Quantity Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const multipleVariants = async (req, res) => {
  try {
    const variant = await Variants.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
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
          _id: '$product_id',
          product_name: {
            $first: '$result.name'
          },
          total_attributes: {
            $sum: 1
          },
          attributes: {
            $push: '$attributes'
          }
        }
      },
      {
        $match: {
          total_attributes: { $gt: 1 }
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ]);


    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variants found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Get Low Quantity Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const activeVariant = async (req, res) => {
  try {
    const variant = await Variants.aggregate([
      {
        $match: {
          isActive: true
        }
      }
    ]);

    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variants found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Get Active Variants Successfully'
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
    const variant = await Variants.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
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
          _id: '$result._id',
          product_name: {
            $first: '$result.name',
          },
          'total_variant': {
            $sum: 1
          },
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ]);

    if (!variant || variant.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Variants found'
      });
    }

    return res.status(200).json({
      success: true,
      data: variant,
      message: 'Get Count Of Variants By Product Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

module.exports = {
  createVariants,
  listVariants,
  getVariants,
  updateVariants,
  deleteVariant,
  product,
  listVariantByProductId,
  countStock,
  lowQuantity,
  highPrice,
  multipleVariants,
  activeVariant,
  countProducts
}