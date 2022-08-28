const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readOrder = (callback) => {
  db.query('SELECT * FROM order', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readOrderById = (id, callback) => {
  db.query('SELECT * FROM `order` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createOrder = (data, callback) => {
  const id = uuidv4();
  db.query(
    'INSERT INTO `order` (`id`, `amount`,`tax`, `email`, `adress`, `status`, `idCustomer`) VALUES (?,?,?,?,?,?,?)',
    [
      id,
      data.amount,
      data.tax,
      data.email,
      data.adress,
      data.status || 'INTRANSIT',
      data.idCustomer,
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

const updateOrder = (data, callback) => {
  db.query(
    'UPDATE `order` SET `amount` =?, `tax`=?,`email`=?, `adress`=?, `status`=? WHERE `id`=?',
    [data.amount, data.tax, data.email, data.adress, data.status, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeOrder = (id, callback) => {
  db.query('DELETE FROM `order` WHERE `id` = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readOrder,
  readOrderById,
  createOrder,
  updateOrder,
  removeOrder,
};
