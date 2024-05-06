const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// app.get("/",function(req,res){
//     res.send("chal rha h ")
// })

// it finds in views folder
app.get("/", function (req, res) {
  res.render("index");
});


//dynamic routing

app.get("/profile/:username", function (req, res) { //: represents dynamic part
  res.send(`WELCOME ${ req.params.username}`);
});



app.listen(3000, function () {
  console.log("ist running");
});
