const mongoose = require('mongoose');

const facultyattendencesSchema = new mongoose.Schema(
    {
        branch_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Branches',
            required: true
        },
        in_time: {
            type: Number,
            required: true,
            trim: true,
        },
        out_time: {
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

const Facultyattendences = mongoose.model("Facultyattendences", facultyattendencesSchema);

module.exports = Facultyattendences;