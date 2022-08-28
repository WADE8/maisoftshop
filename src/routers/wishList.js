const { Router } = require('express');
const {
  getWhishListById,
  postWhishList,
  deleteWhishList,
} = require('../controlers/wishList');

const router = Router();

router.get('/:id', getWhishListById);
router.post('/', postWhishList);
router.delete('/:id', deleteWhishList);

module.exports = router;
