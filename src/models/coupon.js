const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readCoupon = (callback) => {
  db.query('SELECT * from coupon', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCouponById = (id, callback) => {
  db.query('SELECT * from coupon where id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};
const createCoupon = (data, callback) => {
  db.query(
    'INSERT INTO `coupon` (`id`,`status`, `amount`,`count`, `code`,`expireAt`, `createAt`,`updateAt`,`idCustomer`) VALUES (?, ?, ?, ?,?, ?,?,?,?)',
    [
      uuidv4(),
      data.status || 'ACTIVE',
      data.amount,
      data.count,
      data.code,
      new Date(),
      new Date(),
      new Date(),
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

const updateCoupon = (data, callback) => {
  db.query(
    'UPDATE `coupon` SET `status`=?, `amount`=?, `code`=? , `updateAt`=?   where `id`=?',
    [data.status, data.amount, data.code, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeCoupon = (id, callback) => {
  db.query('DELETE FROM coupon WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readCoupon,
  readCouponById,
  createCoupon,
  updateCoupon,
  removeCoupon,
};
