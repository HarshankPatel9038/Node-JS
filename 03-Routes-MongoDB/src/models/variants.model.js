const mongoose = require('mongoose');

const attributesSchema = new mongoose.Schema(
    {
        color: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
)

const variantsSchema = new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Products',
            required: true
        },
        attribute: [attributesSchema],
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Variants = mongoose.model("Variants", variantsSchema);

module.exports = Variants;