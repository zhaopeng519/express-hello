var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("this is the homepage");
});

app.listen(3000);

console.log('listening to port 3000');

