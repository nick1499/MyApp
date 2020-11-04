const hostname = 'localhost';
const port = 80;
const express = require('express')
const app = express()
const path = require("path");

var mysql = require('mysql');
var con = mysql.createConnection({
  socketPath : '/var/run/mysqld/mysqld.sock',
  host: hostname,
  port: '80',
  user: 'root',
  password: 'GoodGuy1n',
  database : 'aliens',
  insecureAuth : false 
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Database connected!");
// });

// app.get('/', function (req, res) {
//   res.send(express.)
// })

// app.use(express.static(path.join(__dirname, "..", "public/build")));
// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "public/", "index.html"));
// });

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});