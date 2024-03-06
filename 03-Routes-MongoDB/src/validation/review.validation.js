const Joi = require("joi");

const createReview = {
  body: {
    _id: Joi.number().required(),
    user_id: Joi.number().required(),
    product_id: Joi.number().required(),
    rating: Joi.number().required(),
    comment: Joi.string().required().trim(),
    isActive: Joi.boolean()
  }
}

const updateReview = {
  body: {
    user_id: Joi.number(),
    product_id: Joi.number(),
    rating: Joi.number(),
    comment: Joi.string().trim(),
    isActive: Joi.boolean()
  },
  params: {
    reviewId: Joi.string().required().trim()
  }
};

const deleteReview = {
  params: {
    reviewId: Joi.string().required().trim()
  }
};


module.exports = {
  createReview,
  updateReview,
  deleteReview
}