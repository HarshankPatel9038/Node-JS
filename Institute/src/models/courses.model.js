const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema(
    {
        branch_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Branches',
            required: true
        },
        fees: {
            type: Number,
            required: true,
            trim: true,
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
            required: true,
            trim: true,
        },
        duration: {
            type: Date,
            required: true,
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

const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;