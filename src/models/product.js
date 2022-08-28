const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProduct = (callback) => {
  db.query('SELECT * FROM product', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductById = (id, callback) => {
  db.query('SELECT * FROM `product` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createProduct = (data, callback) => {
  const id = uuidv4();
  db.query(
    'INSERT INTO `product` (`id`, `name`,`longDesc`, `shortDesc`, `price`,`quantity`,`image`,`createdAt`,`updateAt`,`idProductCategory`,`idDiscount`) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [
      id,
      data.name,
      data.londDesc,
      data.shortDesc,
      data.price,
      data.quantity,
      data.image,
      new Date(),
      new Date(),
      data.idProductCategory,
      data.idDiscount,
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

const updateProduct = (data, callback) => {
  db.query(
    'UPDATE `product` SET `name` =?, `longDesc`=?,`shortDesc`=? , `price`=?, `quantity` = ?,`image`=? , `updateAt`=?  WHERE `id`=?',
    [
      data.name,
      data.longDesc,
      data.shortDesc,
      data.price,
      data.quantity,
      data.image,
      new Date(),
      data.id,
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

const removeProduct = (id, callback) => {
  db.query('DELETE FROM `product` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProduct,
  readProductById,
  createProduct,
  updateProduct,
  removeProduct,
};
