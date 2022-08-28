const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readOrderDetail = (callback) => {
  db.query('SELECT * FROM orderdetail', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readOrderDetailById = (id, callback) => {
  db.query('SELECT * FROM `orderdetail` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createOrderDetail = (data, callback) => {
  const id = uuidv4();
  db.query(
    'INSERT INTO `orderdetail` (`id`, `name`,`quantity`, `price`, `idOrder`) VALUES (?,?,?,?,?)',
    [id, data.name, data.quantity, data.price, data.idOrder],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateOrderDetail = (data, callback) => {
  db.query(
    'UPDATE `orderdetail` SET `name` =?, `quantity`=?,`price`=? WHERE `id`=?',
    [data.name, data.quantity, data.price, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeOrderDetail = (id, callback) => {
  db.query('DELETE FROM `orderdetail` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readOrderDetail,
  readOrderDetailById,
  createOrderDetail,
  updateOrderDetail,
  removeOrderDetail,
};
