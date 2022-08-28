const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProdctDetail = (callback) => {
  db.query('SELECT * FROM productdetail', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductDetailById = (id, callback) => {
  db.query('SELECT * FROM `productdetail` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createProductDetail = (data, callback) => {
  const id = uuidv4();
  db.query(
    'INSERT INTO `productdetail` (`id`, `size`,`age`, `color`, `brand`,`gender`,`idProduct`) VALUES (?,?,?,?,?,?,?)',
    [
      id,
      data.size || 'M',
      data.age,
      data.color,
      data.brand,
      data.gender || 'M',
      data.idProduct,
    ],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateProductDetail = (data, callback) => {
  db.query(
    'UPDATE `productdetail` SET `size` =?, `age`=?,`color`=? , `brand`=?, `gender` = ?  WHERE `id`=?',
    [data.size, data.age, data.color, data.brand, data.gender, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductDetail = (id, callback) => {
  db.query('DELETE FROM `productdetail` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProdctDetail,
  readProductDetailById,
  createProductDetail,
  updateProductDetail,
  removeProductDetail,
};
