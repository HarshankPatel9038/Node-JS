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

const cartsSchema = new mongoose.Schema(
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
        items: [itemsSchema]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Carts = mongoose.model("Carts", cartsSchema);

module.exports = Carts;