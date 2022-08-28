const { Router } = require('express');
const {
  getAllProductCategory,
  getAllProductCategoryById,
  postProductCategory,
  patchProductCategory,
  deleteProductCategory,
} = require('../controlers/productCategory');

const router = Router();

router.get('/', getAllProductCategory);
router.get('/:id', getAllProductCategoryById);
router.post('/', postProductCategory);
router.patch('/', patchProductCategory);
router.delete('/:id', deleteProductCategory);

module.exports = router;
