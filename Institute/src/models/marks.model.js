const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema(
    {
        exam_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Exams',
            required: true
        },
        student_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Students',
            required: true
        },
        marks: {
            type: Number,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Marks = mongoose.model("Marks", marksSchema);

module.exports = Marks;