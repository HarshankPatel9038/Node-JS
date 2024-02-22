const mongoose = require('mongoose');

const salariesSchema = new mongoose.Schema(
    {
        faculty_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Facultes',
            required: true
        },
        date: {
            type: Date,
            required: true,
            trim: true,
        },
        salary: {
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

const Salaries = mongoose.model("Salaries", salariesSchema);

module.exports = Salaries;