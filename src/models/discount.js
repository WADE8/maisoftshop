const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readDiscount = (callback) => {
  db.query('SELECT * from discount', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};
const readDiscountById = (id, callback) => {
  db.query('SELECT * FROM discount where id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createDiscount = (data, callback) => {
  const id = uuidv4();
  db.query(
    'INSERT INTO `discount` (`id`,`name`,`desc`,`image`,`amount`,`createAt`,`UpdateAt`) VALUES (?,?,?,?,?,?,?)',
    [id, data.name, data.desc, data.image, data.amount, new Date(), new Date()],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateDiscount = (data, callback) => {
  db.query(
    'UPDATE discount set `name`=?, `desc`=?, `image`=?, `amount`=? , `updateAt`=? WHERE `id`=?',
    [data.name, data.desc, data.image, data.amount, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeDiscount = (id, callback) => {
  db.query('DELETE  FROM discount WHERE id=?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};
module.exports = {
  readDiscount,
  readDiscountById,
  createDiscount,
  updateDiscount,
  removeDiscount,
};
