const { Router } = require('express');
const {
  getAllProductDetail,
  getProductDetailById,
  postProductDetail,
  patchProductDetail,
  deleteProductDetail,
} = require('../controlers/productDetail');

const router = Router();

router.get('/', getAllProductDetail);
router.get('/:id', getProductDetailById);
router.post('/', postProductDetail);
router.patch('/', patchProductDetail);
router.delete('/:id', deleteProductDetail);

module.exports = router;
