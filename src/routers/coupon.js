const { Router } = require('express');
const {
  getAllCoupon,
  getCouponById,
  postCoupon,
  patchCoupon,
  deleteCoupon,
} = require('../controlers/coupon');

const router = Router();

router.get('/', getAllCoupon);
router.get('/:id', getCouponById);
router.post('/', postCoupon);
router.patch('/', patchCoupon);
router.delete('/:idwo', deleteCoupon);

module.exports = router;
