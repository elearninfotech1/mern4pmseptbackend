const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "123456",
  database: "db4pmsept",
});

connection.connect((err) => {
  if (err) throw err;
  //console.log("Connected to the database!");
});

module.exports = connection;
