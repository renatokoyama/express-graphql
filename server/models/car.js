const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  model: String,
  value: Number,
  userId: String
});

module.exports = mongoose.model("Car", carSchema);
