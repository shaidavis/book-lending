var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: { type: String },
  image: { type: String },
  author: { type: String },
  pageNo: { type: Number },
  description: { type: String },
  language: {type: String},
  available: {type: Boolean},
  lenderEmail: {type: String}
});

var Book = mongoose.model("Book", bookSchema);
module.exports = Book;