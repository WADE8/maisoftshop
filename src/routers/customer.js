const { Router } = require('express');
const {
  getAllCustomer,
  getCustomerById,
  postCustomer,
  patchCustomer,
  deleteCustomer,
} = require('../controlers/customer');

const router = Router();
router.get('/', getAllCustomer);
router.get('/:id', getCustomerById);
router.post('/', postCustomer);
router.patch('/', patchCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
