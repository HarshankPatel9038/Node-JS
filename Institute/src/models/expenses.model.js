const mongoose = require('mongoose');

const expensesSchema = new mongoose.Schema(
    {
        batch_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Batches',
            required: true
        },
        expense_name: {
            type: String,
            required: true,
            trim: true,
        },
        expense_amount: {
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

const Expenses = mongoose.model("Expenses", expensesSchema);

module.exports = Expenses;