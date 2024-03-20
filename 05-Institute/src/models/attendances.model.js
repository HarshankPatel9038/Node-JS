const mongoose = require('mongoose');

const attendancesSchema = new mongoose.Schema(
    {
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
        batch_id: {
            type: Date,
            required: true,
            trim: true,
        },
        status: {
            type: Boolean,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Attendances = mongoose.model("Attendances", attendancesSchema);

module.exports = Attendances;