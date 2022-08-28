const {
  readDiscount,
  readDiscountById,
  createDiscount,
  updateDiscount,
  removeDiscount,
} = require('../models/discount');

const getAllDiscount = (req, res) => {
  readDiscount((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, discount: result });
  });
};

const getAllDiscountById = (req, res) => {
  const id = req.params.id;
  readDiscountById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, discount: result[0] });
  });
};

const postDiscount = (req, res) => {
  const data = req.body;

  createDiscount(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json({ success: 1, message: 'Discount created' });
    }
  });
};

const patchDiscount = (req, res) => {
  const data = req.body;
  updateDiscount(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json({ succes: 1, message: 'Discount updated !' });
    }
  });
};

const deleteDiscount = (req, res) => {
  const id = req.params.id;
  removeDiscount(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ succes: 1, message: 'Discount deleted !' });
    }
  });
};
module.exports = {
  getAllDiscount,
  getAllDiscountById,
  postDiscount,
  patchDiscount,
  deleteDiscount,
};
