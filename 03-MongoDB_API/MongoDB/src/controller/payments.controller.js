const Payments = require("../models/payments.model");

const createPayment = async (req, res) => {
  try {
    const payment = await Payments.create(req.body);

    if (!payment) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: payment,
      message: 'Create Payment Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      // message: 'Internal Server Error'
      message: error.message
    });
  }
};

const listPayment = async (req, res) => {

  try {
    const payment = await Payments.find();

    if (!payment || payment.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Payments found'
      });
    }

    return res.status(200).json({
      success: true,
      data: payment,
      message: 'Get Payment List Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const getPaymentById = async (req, res) => {

  try {
    const paymentId = req.params.paymentId;

    if (!paymentId) {
      return res.status(400).json({
        success: false,
        message: 'Payment ID is required'
      });
    }
    const payment = await Payments.findById(paymentId);

    if (!payment || payment.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Payments found'
      });
    }

    return res.status(200).json({
      success: true,
      data: payment,
      message: 'Get Payment By Id Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    const bodyData = req.body;


    if (!paymentId) {
      return res.status(400).json({
        success: false,
        message: 'Payment ID is required'
      });
    }
    const payment = await Payments.findByIdAndUpdate(paymentId, bodyData, { new: true });

    if (!payment) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }

    return res.status(200).json({
      success: true,
      data: payment,
      message: 'Payment Update Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;

    if (!paymentId) {
      return res.status(400).json({
        success: false,
        message: 'Payment Not Found'
      })
    }

    const payment = await Payments.findByIdAndDelete(paymentId);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'payment Not Found'
      })
    }

    return res.status(200).json({
      success: true,
      data: payment,
      message: 'Payment Delete Successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
};

const order = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: 'Order ID is required'
      });
    }
    const convertIdInNumber = +orderId;
    const order = await Payments.aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "order_id",
          foreignField: "_id",
          as: "orders"
        }
      },
      {
        $unwind: {
          path: "$orders"
        }
      },
      {
        $match: {
          "orders._id": convertIdInNumber
        }
      },
      {
        $project: {
          _id: 0,
          payment_id: "$_id",
          order_id: "$orders._id",
          product_id: "$orders.products.product_id",
          total_amount: "$orders.total_amount",
          order_status: "$orders.status",
          discount: "$orders.discount"
        }
      }
    ]);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
      message: 'Order Orders'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};


module.exports = {
  createPayment,
  listPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
  order
}