const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema(
    {
        pid: {
            type: mongoose.Types.ObjectId,
            ref: 'Products',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
)

const ordersSchema = new mongoose.Schema(
    {
        items: [itemsSchema],
        shipping_address: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        total_amount: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;