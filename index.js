// Express.js framework

// manages everything from requesting and receiving from the server

const express = require("express");
const app = express();

//middleware
app.use(function (req, res, next) {
  console.log("middleware chlega");
  next();
});

app.get("/", function (req, res) {
  res.send("hello world, epress server is started on first");
});

app.get("/second", function (req, res) {
  res.send("hello world, epress server is started on second");
});

app.get("/third", function (req, res, next) {
  return next(new Error("something went wrong"));
});

//error handler

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something went wrong");
});
app.listen(3000);
