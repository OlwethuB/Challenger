require("dotenv").config();
const mysql = require("mysql2");

// Create connection to db

const con = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_pass,
  port: process.env.DB_port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
