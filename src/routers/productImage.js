const { Router } = require('express');
const {
  getAllProductImage,
  getProductImageById,
  postProductImage,
  patchProductImage,
  deleteProductImage,
} = require('../controlers/productImage');

const router = Router();

router.get('/', getAllProductImage);
router.get('/:id', getProductImageById);
router.post('/', postProductImage);
router.patch('/', patchProductImage);
router.delete('/:id', deleteProductImage);

module.exports = router;
