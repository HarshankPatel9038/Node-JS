const mongoose = require('mongoose');

const feedbacksSchema = new mongoose.Schema(
    {
        student_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Students',
            required: true
        },
        rating: {
            type: Number,
            required: true,
            trim: true,
        },
        review: {
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

const Feedbacks = mongoose.model("Feedbacks", feedbacksSchema);

module.exports = Feedbacks;