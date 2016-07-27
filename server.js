var express=require("express");
var path = require("path");

var app=express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(5001);
console.log('running on port 5001');