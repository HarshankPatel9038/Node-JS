const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema(
    {
        _id: {
            type: Number
        },
        category_image: {
            type: String
        },
        category_name: {
            type: String,
            required: true,
            trim: true,
        },
        category_desc: {
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

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = Categories;