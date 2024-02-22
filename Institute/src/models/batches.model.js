const mongoose = require('mongoose');

const batchesSchema = new mongoose.Schema(
    {
        branch_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Branches',
            required: true
        },
        subcourse_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Subcourses',
            required: true
        },
        student_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Students',
            required: true
        },
        faculty_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Facultes',
            required: true
        },
        batchtime: {
            type: Date,
            required: true,
            trim: true,
        },
        seat: {
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

const Batches = mongoose.model("Batches", batchesSchema);

module.exports = Batches;