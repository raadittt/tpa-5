const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  status: String,
  hari: String,
  kegiatan: String,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
