const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readCustomer = (callback) => {
  db.query('SELECT * FROM customer', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCustomerById = (id, callback) => {
  db.query('SELECT * FROM customer WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createCustomer = (data, callback) => {
  const id = uuidv4();
  db.query(
    `INSERT INTO customer (id, firstName, lastName, email, hash, image, status, 
      createdAt, updatedAt) VALUES (?,?,?,?,?,?,?,?,?)`,
    [
      id,
      data.firstName,
      data.lastName,
      data.email,
      data.hash,
      data.image,
      data.status || 'INACTIVE',
      new Date(),
      new Date(),
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

const updateCustomer = (data, callback) => {
  db.query(
    `UPDATE customer SET firstName=?, lastName=?,
     hash=?, image=?, updatedAt=? WHERE id=?`,
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
