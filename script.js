//nodejs basics
//introduction to nodejs
//installing nodejs and npm
//working with modules
//file system opeartions
//understanding operations

const fs = require("fs");

fs.writeFile("hey.txt", "hjey kaise ho", function (err) {
  if (err) console.log(err);
  else console.log(" write done");
});

fs.appendFile("hey.txt", "\n acha hu", function (err) {
  if (err) console.log(err);
  else console.log(" append done");
});

fs.rename("hey.txt", "hello.txt", function (err) {
  if (err) console.log(err);
  else console.log(" rename done");
});

fs.copyFile("hello.txt", "./copy/copyHello.txt", function (err) {
  if (err) console.log(err.message);
  else console.log(" copy file done");
});

fs.unlink("hello.txt", function (err) {
  if (err) console.log(err);
  else console.log(" unlink done");
});

// creating a server

const http = require("http");
const server = http.createServer(function (req, res) {
  res.end("hello world, the server is started");
  
});
server.listen(3000);
