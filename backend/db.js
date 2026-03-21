const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",   // your MySQL password
  database: "trustseal"
});

db.connect(err => {
  if (err) {
    console.log("DB Error");
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

module.exports = db;
