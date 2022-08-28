const {
  readWhishListById,
  createWhishList,
  removeWhishList,
} = require('../models/wishlist');

const getWhishListById = (req, res) => {
  const id = req.params.id;
  readWhishListById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, whishList: result[0] });
  });
};

const postWhishList = (req, res) => {
  const data = req.body;
  console.log(data);
  createWhishList(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, whishList: result });
  });
};

const deleteWhishList = (req, res) => {
  const id = req.params.id;
  removeWhishList(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'whishList deleted!' });
    }
  });
};

module.exports = {
  getWhishListById,
  postWhishList,
  deleteWhishList,
};
