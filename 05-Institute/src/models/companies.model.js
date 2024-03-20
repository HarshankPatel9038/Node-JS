const mongoose = require('mongoose');

const vacancy_postsSchema = new mongoose.Schema(
    {
        react: {
            type: Number,
            required: true
        },
        node: {
            type: Number,
            required: true
        }
    }
)

const companiesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        contact_number: {
            type: Number,
            required: true,
            trim: true,
        },
        vacancy_post: {
            type: [vacancy_postsSchema],
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

const Companies = mongoose.model("Companies", companiesSchema);

module.exports = Companies;