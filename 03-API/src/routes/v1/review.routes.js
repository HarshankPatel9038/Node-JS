const express = require('express');
const router = express.Router();
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
router.post('/create-review',
  validate(reviewValidation.createReview),
  reviewController.createReviews
);

router.get('/list-review',
  reviewController.listReviews
);

router.get('/get-review/:reviewId',
  reviewController.getReviews
);

router.put('/update-review/:reviewId',
  validate(reviewValidation.updateReview),
  reviewController.updateReviews
);

router.delete('/delete-review/:reviewId',
  validate(reviewValidation.deleteReview),
  reviewController.deleteReviews
);

router.get('/user-with-product/:userId',
  reviewController.userWithProduct
);

router.get('/list-review-by-product/:productId',
  reviewController.listReviewsByProduct
);

router.get('/no-reviews',
  reviewController.noReviews
);

router.get('/top-rated-products',
  reviewController.topRatedProducts
);

router.get('/review-with-user/:userId',
  reviewController.reviewWithUser
);

router.get('/with-comments',
  reviewController.withComments
);

router.get('/count-review-by-product',
  reviewController.countReviewByProduct
);

module.exports = router;