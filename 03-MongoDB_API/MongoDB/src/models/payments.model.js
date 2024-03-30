const mongoose = require('mongoose');

const paymentsSchema = new mongoose.Schema(
    {
        _id: {
            type: Number
        },
        order_id: {
            // type: mongoose.Types.ObjectId,
            type: Number,
            ref: 'Orders',
            required: true
        },
        gateway: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
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

const Payments = mongoose.model("Payments", paymentsSchema);

module.exports = Payments;