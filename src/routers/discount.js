const { Router } = require('express');

const {
  getAllDiscount,
  getAllDiscountById,
  postDiscount,
  patchDiscount,
  deleteDiscount,
} = require('../controlers/discount');

const router = Router();
router.get('/', getAllDiscount);
router.get('/:id', getAllDiscountById);
router.post('/', postDiscount);
router.patch('/', patchDiscount);
router.delete('/:id', deleteDiscount);
module.exports = router;
