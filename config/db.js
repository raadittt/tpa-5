const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/tpa5");

module.exports = db;
