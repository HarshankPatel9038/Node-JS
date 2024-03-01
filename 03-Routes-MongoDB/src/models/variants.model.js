// const mongoose = require('mongoose');

// const attributesSchema = new mongoose.Schema(
//     {
//         color: {
//             type: String,
//             required: true
//         },
//         size: {
//             type: String,
//             required: true
//         },
//         price: {
//             type: Number,
//             required: true
//         },
//         Quantity: {
//             type: Number,
//             required: true
//         }
//     }
// )

// const variantsSchema = new mongoose.Schema(
//     {
//         _id: {
//             type: Number
//         },
//         product_id: {
//             // type: mongoose.Types.ObjectId,
//             type: Number,
//             ref: 'Products',
//             required: true
//         },
//         attributes: [attributesSchema],
//         isActive: {
//             type: Boolean,
//             required: true,
//             default: true,
//         }
//     },
//     {
//         timestamps: true,
//         versionKey: false
//     }
// )

// const Variants = mongoose.model("Variants", variantsSchema);

// module.exports = Variants;