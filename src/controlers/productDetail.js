const {
  readProdctDetail,
  readProductDetailById,
  createProductDetail,
  updateProductDetail,
  removeProductDetail,
} = require('../models/productDetail');

const getAllProductDetail = (req, res) => {
  readProdctDetail((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productDetail: result });
  });
};

const getProductDetailById = (req, res) => {
  const id = req.params.id;
  readProductDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productDetail: result[0] });
  });
};

const postProductDetail = (req, res) => {
  const data = req.body;
  console.log(data);
  createProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productDetail: result });
  });
};

const patchProductDetail = (req, res) => {
  const data = req.body;
  console.log(data);
  updateProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productDetail updated! ' });
    }
  });
};

const deleteProductDetail = (req, res) => {
  const id = req.params.id;
  removeProductDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productDetail deleted!' });
    }
  });
};

module.exports = {
  getAllProductDetail,
  getProductDetailById,
  postProductDetail,
  patchProductDetail,
  deleteProductDetail,
};
