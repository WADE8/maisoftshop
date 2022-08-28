const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProductImageById = (id, callback) => {
  db.query('SELECT * FROM `productimage` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductImage = (callback) => {
  db.query('SELECT * FROM productimage', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createproductImage = (data, callback) => {
  const id = uuidv4();
  db.query(
    'INSERT INTO `productimage` (`id`, `url`,`createAt`,`updateAt` , `idProduct`) VALUES (?,?,?,?,?)',
    [id, data.url, new Date(), new Date(), data.idProduct],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductImage = (id, callback) => {
  db.query('DELETE FROM `productimage` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const updateProductImage = (data, callback) => {
  db.query(
    'UPDATE `productimage` SET `url` =?, `updateAt`=? WHERE `id`=?',
    [data.url, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

module.exports = {
  readProductImage,
  readProductImageById,
  createproductImage,
  updateProductImage,
  removeProductImage,
};
