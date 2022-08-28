const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readWhishListById = (id, callback) => {
  db.query('SELECT * FROM `wishlist` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createWhishList = (data, callback) => {
  const id = uuidv4();
  db.query(
    'INSERT INTO `wishlist` (`id`, `idCustomer`,`idProduct`) VALUES (?,?,?)',
    [id, data.idCustomer, data.idProduct],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeWhishList = (id, callback) => {
  db.query('DELETE FROM `wishlist` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};
module.exports = {
  readWhishListById,
  createWhishList,
  removeWhishList,
};
