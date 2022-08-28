const { Router } = require('express');
const {
  getAllOrder,
  getOrderById,
  postOrder,
  patchOrder,
  deleteOrder,
} = require('../controlers/order');

const router = Router();

router.get('/', getAllOrder);
router.get('/:id', getOrderById);
router.post('/', postOrder);
router.patch('/', patchOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
