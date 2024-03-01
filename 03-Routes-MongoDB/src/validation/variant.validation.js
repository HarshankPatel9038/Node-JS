// const Joi = require("joi");

// const createVariant = {
//   body: {
//     _id: Joi.number().required(),
//     product_id: Joi.number().required(),
//     attributes: Joi.object().required(),
//     isActive: Joi.boolean().required()
//   }
// }

// const updateVariant = {
//   body: {
//     product_id: Joi.number(),
//     attributes: Joi.object(),
//     isActive: Joi.boolean()
//   },
//   params: {
//     variantId: Joi.string().required()
//   }
// };

// const deleteVariant = {
//   params: {
//     variantId: Joi.string().required().trim()
//   }
// };


// module.exports = {
//   createVariant,
//   updateVariant,
//   deleteVariant
// }