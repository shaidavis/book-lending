var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/books');


var Book = require("./models/BookModel");


var app = express();
console.log("STATUS: you're running app.js. don't forget to restart the server if you make changes")

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('js'));
app.use(express.static('node_modules'));
app.use(express.static('templates'));


app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
})



app.listen(8000);

