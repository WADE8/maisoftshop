const { Router } = require('express');
const {
  getAllProduct,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct,
} = require('../controlers/product');

const router = Router();

router.get('/', getAllProduct);
router.get('/:id', getProductById);
router.post('/', postProduct);
router.patch('/', patchProduct);
router.delete('/', deleteProduct);

module.exports = router;
