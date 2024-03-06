const express = require('express');
const route = express.Router();
const validate = require('../../middleware/validate');
const { reviewValidation } = require('../../validation');
const { reviewController } = require('../../controller');

// {
//   "_id": 50,
//   "user_id": 1,
//   "product_id": 1,
//   "rating": 4.2,
//   "comment": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
// }
route.post('/create-review',
  validate(reviewValidation.createReview),
  reviewController.createReviews
);

route.get('/list-review',
  reviewController.listReviews
);

route.get('/get-review/:reviewId',
  reviewController.getReviews
);

route.put('/update-review/:reviewId',
  validate(reviewValidation.updateReview),
  reviewController.updateReviews
);

route.delete('/delete-review/:reviewId',
  validate(reviewValidation.deleteReview),
  reviewController.deleteReviews
);

route.get('/user-with-product/:userId',
  reviewController.userWithProduct
);

route.get('/top-rated-products',
  reviewController.topRatedProducts
);

route.get('/review-with-user/:userId',
  reviewController.reviewWithUser
);

route.get('/with-comments',
  reviewController.withComments
);

route.get('/count-review-by-product',
  reviewController.countReviewByProduct
);

module.exports = route;