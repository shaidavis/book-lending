var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: { type: String },
  image_url: { type: String },
  author: [String],
  pageNo: { type: Number },
  description: { type: String },
  language: {type: String}
});

var Book = mongoose.model("Book", bookSchema);
module.exports = Book;