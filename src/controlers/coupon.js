const {
  readCoupon,
  readCouponById,
  createCoupon,
  updateCoupon,
  removeCoupon,
} = require('../models/coupon');

const getAllCoupon = (req, res) => {
  readCoupon((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, coupon: result });
  });
};
const getCouponById = (req, res) => {
  const id = req.params.id;

  readCouponById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, coupon: result });
  });
};

const postCoupon = (req, res) => {
  const data = req.body;
  createCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, res: result });
  });
};

const patchCoupon = (req, res) => {
  const data = req.body;
  updateCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ succes: 1, res: result });
    }
  });
};

const deleteCoupon = (req, res) => {
  const id = req.params.id;
  removeCoupon(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Coupon deleted!' });
    }
  });
};

module.exports = {
  getAllCoupon,
  getCouponById,
  postCoupon,
  patchCoupon,
  deleteCoupon,
};
