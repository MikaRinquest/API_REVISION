const sql = require("mysql");
require("dotenv").config();

const con = sql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.NAME,
  mulitpleStatements: true,
});

module.exports = con;
