const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
    {
        _id: {
            type: Number
        },
        category_id: {
            // type: mongoose.Types.ObjectId,
            type: Number,
            ref: 'categories',
            required: true
        },
        subcategory_id: {
            // type: mongoose.Types.ObjectId,
            type: Number,
            ref: 'Subcategories',
            required: true
        },
        variant_id: {
            // type: mongoose.Types.ObjectId,
            type: Number,
            ref: 'variants',
            required: true
        },
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
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

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;