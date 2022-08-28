const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readCustomer = (callback) => {
  db.query('SELECT * from customer', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCustomerById = (id, callback) => {
  db.query('SELECT * from customer where id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};
const createCustomer = (data, callback) => {
  db.query(
    'INSERT INTO customer (id, firstName, lastName, email, phoneNumber, hash, image, status, createdAt, updatedAt) VALUES (?, ?, ?, ?,?, ?,?,?,?,?)',
    [
      uuidv4(),
      data.firstName,
      data.lastName,
      data.email,
      data.phoneNumber,
      data.hash,
      data.image,
      data.status || 'ACTIVE',
      new Date(),
      new Date(),
    ],

    (err, res) => {
      if (err && err.errno === 1062) {
        callback({ errCode: 'Customer_exist' }, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateCustomer = (data, callback) => {
  db.query(
    'UPDATE customer SET firstName=?, lastName=?, hash=? , image=? , updatedAt=? where id=?',
    [data.firstName, data.lastName, data.hash, data.image, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeCustomer = (id, callback) => {
  db.query('DELETE FROM customer WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readCustomer,
  readCustomerById,
  createCustomer,
  updateCustomer,
  removeCustomer,
};
