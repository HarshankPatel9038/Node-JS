const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema(
    {
        product_id: {
            // type: mongoose.Types.ObjectId,
            type: Number,
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
        _id: {
            type: Number
        },
        user_id: {
            // type: mongoose.Types.ObjectId,
            type: Number,
            ref: 'Users',
            required: true
        },
        // seller_id: {
        //     // type: mongoose.Types.ObjectId,
        //     type: Number,
        //     ref: 'Categories',
        //     required: true
        // },
        payment_id: {
            // type: mongoose.Types.ObjectId,
            type: Number,
            ref: 'Payments',
            required: true
        },
        products: [itemsSchema],
        shipping_address: {
            type: String,
            required: true,
        },
        total_amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        discount: {
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