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
app.use(express.static('node_modules'));
app.use(express.static('templates'));
app.use(express.static('js'));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.get('/books', function (req, res) {
  Book.find(function (error, books) {
    res.send(books);
  });
});


app.post('/offerbook', function (req, res, next) {
  var book = new Book(req.body);
  console.log(req.body)

  book.save(function(err, book) {
    if (err) { return next(err); }

    res.json(book);
  });
});

app.listen(8000);

