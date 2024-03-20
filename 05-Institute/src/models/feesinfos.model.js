const mongoose = require('mongoose');

const feesinfosSchema = new mongoose.Schema(
    {
        admission_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Admissions',
            required: true
        },
        installment_amout: {
            type: Number,
            required: true,
            trim: true,
        },
        mode: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
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

const Feesinfos = mongoose.model("Feesinfos", feesinfosSchema);

module.exports = Feesinfos;