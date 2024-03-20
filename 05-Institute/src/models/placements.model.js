const mongoose = require('mongoose');

const placementsSchema = new mongoose.Schema(
    {
        student_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Students',
            required: true
        },
        company_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Companies',
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Placements = mongoose.model("Placements", placementsSchema);

module.exports = Placements;