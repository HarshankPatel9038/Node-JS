const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema(
    {
        pid: {
            type: mongoose.Types.ObjectId,
            ref: 'Products',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
)

const wishlistsSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Users',
            required: true
        },
        items: [itemsSchema]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Wishlists = mongoose.model("Wishlists", wishlistsSchema);

module.exports = Wishlists;