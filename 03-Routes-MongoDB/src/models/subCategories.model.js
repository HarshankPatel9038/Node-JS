const mongoose = require('mongoose');

const subcategoriesSchema = new mongoose.Schema(
    {
        _id: {
            type: Number
        },
        category_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Categories',
            required: true
        },
        subcategory_image: {
            type: String,
            required: true,
        },
        subcategory_name: {
            type: String,
            required: true,
            trim: true,
        },
        subcategory_desc: {
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

const SubCategories = mongoose.model("SubCategories", subcategoriesSchema);

module.exports = SubCategories;