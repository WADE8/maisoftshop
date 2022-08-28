const {
  readProduct,
  readProductById,
  createProduct,
  updateProduct,
  removeProduct,
} = require('../models/product');

const getAllProduct = (req, res) => {
  readProduct((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, product: result });
  });
};
const getProductById = (req, res) => {
  const id = req.params.id;

  readProductById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, product: result });
  });
};

const postProduct = (req, res) => {
  const data = req.body;
  createProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ succes: 1, res: result });
  });
};

const patchProduct = (req, res) => {
  const data = req.body;
  updateProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ succes: 1, res: result });
    }
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  removeProduct(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Product deleted!' });
    }
  });
};

module.exports = {
  getAllProduct,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct,
};
