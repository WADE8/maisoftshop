const {
  readCustomer,
  readCustomerById,
  createCustomer,
  updateCustomer,
  removeCustomer,
} = require('../models/customer');

const getAllCustomer = (req, res) => {
  readCustomer((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customers: result });
  });
};

const getCustomerById = (req, res) => {
  const id = req.params.id;
  readCustomerById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customer: result[0] });
  });
};

const postCustomer = (req, res) => {
  const data = req.body;
  createCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Customer created !' });
    }
  });
};

const patchCustomer = (req, res) => {
  const data = req.body;
  updateCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Customer updated !' });
    }
  });
};

const deleteCustomer = (req, res) => {
  const id = req.params.id;
  removeCustomer(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Customer deleted!' });
    }
  });
};

module.exports = {
  getAllCustomer,
  getCustomerById,
  postCustomer,
  patchCustomer,
  deleteCustomer,
};
