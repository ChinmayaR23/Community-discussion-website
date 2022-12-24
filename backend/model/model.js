const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  ques: String,
  post:String,
  comm: String  
  
});

module.exports = mongoose.model("C++", detail)