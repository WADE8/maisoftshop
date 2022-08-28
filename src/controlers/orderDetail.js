const {
  readOrderDetail,
  createOrderDetail,
  readOrderDetailById,
  updateOrderDetail,
  removeOrderDetail,
} = require('../models/orderDetail');

const getAllOrderDetail = (req, res) => {
  readOrderDetail((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, orderDetail: result });
  });
};
const getOrderDetailById = (req, res) => {
  const id = req.params.id;

  readOrderDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, orderDetail: result });
  });
};

const postOrderDetail = (req, res) => {
  const data = req.body;
  createOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, res: result });
  });
};

const patchOrderDetail = (req, res) => {
  const data = req.body;
  updateOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ succes: 1, res: result });
    }
  });
};

const deleteOrderDetail = (req, res) => {
  const id = req.params.id;
  removeOrderDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OrderDetail deleted!' });
    }
  });
};

module.exports = {
  getAllOrderDetail,
  getOrderDetailById,
  postOrderDetail,
  patchOrderDetail,
  deleteOrderDetail,
};
