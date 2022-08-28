const {
  readProductImage,
  readProductImageById,
  createproductImage,
  updateProductImage,
  removeProductImage,
} = require('../models/productImage');

const getAllProductImage = (req, res) => {
  readProductImage((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productImage: result });
  });
};

const getProductImageById = (req, res) => {
  const id = req.params.id;
  readProductImageById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productImage: result[0] });
  });
};

const postProductImage = (req, res) => {
  const data = req.body;
  console.log(data);
  createproductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, productImage: result });
  });
};

const patchProductImage = (req, res) => {
  const data = req.body;
  console.log(data);
  updateProductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productImage updated! ' });
    }
  });
};

const deleteProductImage = (req, res) => {
  const id = req.params.id;
  removeProductImage(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productImage deleted!' });
    }
  });
};

module.exports = {
  getAllProductImage,
  getProductImageById,
  postProductImage,
  patchProductImage,
  deleteProductImage,
};
