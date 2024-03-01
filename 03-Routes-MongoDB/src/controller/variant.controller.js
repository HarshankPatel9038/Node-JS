// const Variants = require("../models/variants.model");

// const listVariant = async (req, res) => {

//   try {
//     const variant = await Variants.find();

//     console.log(variant)

//     if (!variant || variant.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'No variant found'
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: variant,
//       message: 'Variant List Successfully'
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: 'Internal Server Error'
//     });
//   }
// }


// const getVariant = async (req, res) => {

//   try {
//     const variantId = req.params.variantId;

//     if (!variantId) {
//       return res.status(400).json({
//         success: false,
//         message: 'Variant ID is required'
//       });
//     }
//     const variant = await Variants.findById(variantId);

//     if (!variant || variant.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'No categories found'
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: variant,
//       message: 'Variant Get Successfully'
//     });
//   } catch (error) {
//     console.log(error.message)
//     return res.status(500).json({
//       success: false,
//       message: 'Internal Server Error'
//     });
//   }
// }
// const countActiveVariant = async (req, res) => {
//   try {
//     const variant = await Variants.aggregate([
//       {
//         $match: {
//           isActive: true
//         }
//       },
//       {
//         $count: 'Total Active variant'
//       }
//     ]);

//     if (!variant || variant.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'No Variants found'
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: variant,
//       message: 'Count Active Variant Successfully'
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: 'Internal Server Error'
//     });
//   }
// };

// const inActiveVariant = async (req, res) => {
//   try {
//     const variant = await Variants.aggregate([
//       {
//         $match: {
//           isActive: false
//         }
//       }
//     ]);

//     if (!variant || variant.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'No Variants found'
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: variant,
//       message: 'Get InActive Variant Successfully'
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: 'Internal Server Error'
//     });
//   }
// };
// const createCategories = async (req, res) => {
//     try {
//         const category = await Categories.create(req.body);

//         if (!category) {
//             return res.status(500).json({
//                 message: 'Internal Server Error'
//             });
//         }

//         return res.status(200).json({
//             success: true,
//             data: req.body,
//             message: 'Create Category Successfully'
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: 'Internal Server Error'
//         });
//     }
// };


// module.exports = {
//   listVariant,
//   getVariant,
//   countActiveVariant,
//   inActiveVariant,
// }