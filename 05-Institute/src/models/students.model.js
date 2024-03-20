const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema(
    {
        batch_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Batches',
            required: true
        },
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Courses',
            required: true
        },
        image: {
            type: String,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        mobile_number: {
            type: Number,
            required: true,
            trim: true,
        },
        mode: {
            type: String,
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

const Students = mongoose.model("Students", studentsSchema);

module.exports = Students;