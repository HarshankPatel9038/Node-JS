const mongoose = require('mongoose');

const facultesSchema = new mongoose.Schema(
    {
        branch_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Branches',
            required: true
        },
        subCourse_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Subcourses',
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        contact_number: {
            type: Number,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        salary: {
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

const Facultes = mongoose.model("Facultes", facultesSchema);

module.exports = Facultes;