const mysql = require('mysql');

//connection with the database(blogdb)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'blogdb'
});

module.exports = connection;
