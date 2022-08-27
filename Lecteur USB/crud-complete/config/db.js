const mysql = require('mysql');
const env = require('./env');

const dbConnection = mysql.createConnection({
  host: env.dbHost,
  user: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
});

module.exports = dbConnection;
