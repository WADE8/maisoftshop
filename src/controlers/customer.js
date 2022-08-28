const {
  createCustomer,
  readCustomer,
  readCustomerById,
  updateCustomer,
  removeCustomer,
} = require('../models/customer');

const getAllCustomer = (req, res) => {
  readCustomer((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, customers: result });
  });
};
const getCustomerById = (req, res) => {
  const id = req.params.id;

  readCustomerById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, customer: result });
  });
};

const postCustomer = (req, res) => {
  const data = req.body;
  createCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
      res.json({ succes: 0, err });
    } else if (result.affectedRows)
      res.json({ succes: 1, message: 'custom created ' });
  });
};

const patchCustomer = (req, res) => {
  const data = req.body;
  updateCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ succes: 1, res: result });
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
