const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  Name: String,
  Email:String,
  password: String  
  
});

module.exports = mongoose.model("Login", detail)