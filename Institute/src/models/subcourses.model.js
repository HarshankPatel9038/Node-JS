const mongoose = require('mongoose');

const subcoursesSchema = new mongoose.Schema(
    {
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Courses',
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
            required: true,
            trim: true,
        },
        duration: {
            type: Date,
            required: true,
            trim: true,
        },
        fees: {
            type: Number,
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

const Subcourses = mongoose.model("Subcourses", subcoursesSchema);

module.exports = Subcourses;