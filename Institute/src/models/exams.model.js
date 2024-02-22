const mongoose = require('mongoose');

const examsSchema = new mongoose.Schema(
    {
        batch_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Batches',
            required: true
        },
        student_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Students',
            required: true
        },
        subcourse_id: {
            type: Date,
            required: true,
            trim: true,
        },
        paper: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Exams = mongoose.model("Exams", examsSchema);

module.exports = Exams;