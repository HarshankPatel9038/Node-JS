const mongoose = require('mongoose');

const certificatesSchema = new mongoose.Schema(
    {
        student_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Students',
            required: true
        },
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Courses',
            required: true
        },
        issue_date: {
            type: Date,
            required: true,
            trim: true,
        },
        grade: {
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

const Certificates = mongoose.model("Certificates", certificatesSchema);

module.exports = Certificates;