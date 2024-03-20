const mongoose = require('mongoose');

const documentsSchema = new mongoose.Schema(
    {
        hsc_result: {
            type: String,
            required: true
        },
        lc: {
            type: String,
            required: true
        }
    }
)

const admissionsSchema = new mongoose.Schema(
    {
        student_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Students',
            required: true
        },
        branch_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Branches',
            required: true
        },
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Courses',
            required: true
        },
        documents: {
            type: [documentsSchema],
        },
        discount: {
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

const Admissions = mongoose.model("Admissions", admissionsSchema);

module.exports = Admissions;