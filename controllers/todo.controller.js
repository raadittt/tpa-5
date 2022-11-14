const Todo = require("../models/todo");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllToDo: async (req, res, next) => {
    const KEY = "ljksfjlkaslkjlkjf";
    const token = req.headers.token;

    if (token) {
      const verif = jwt.verify(token, KEY);

      User.findOne({ email: verif.email }).then((user) => {
        if (user) {
          req.verif = verif;
          next();
        }
      });
      try {
        const todo = await Todo.find({}, "-status -hari -__v");

        res.status(200).json({
          message: "success get data user",
          data: todo,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      res.status(401).json({
        message: "Silahkan masukkan token yang valid !",
      });
    }
  },

  getDetailToDo: async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findById(id, "-__v -_id");

      res.status(200).json({
        message: "success get data user",
        data: todo,
      });
    } catch (error) {
      console.log(error);
    }
  },

  addToDo: (req, res) => {
    const data = req.body;
    const todo = new Todo(data);

    todo.save();

    res.status(200).json({
      message: "To Do List baru berhasil ditambahkan !",
    });
  },

  updateToDo: async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const todo = await Todo.findByIdAndUpdate(id, data);

    await todo.save();

    res.status(200).json({
      message: "Data berhasil di Update !",
    });
    todo.save();
  },

  deleteToDo: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    await todo.remove();
    res.json({
      message: "Data yang dipilih berhasil dihapus !",
      data: "terhapus",
    });
  },

  deleteAllToDo: async (req, res) => {
    try {
      await Todo.deleteMany({});

      res.json({
        message: "Semua To Do List berhasil dihapus !",
        data: "terhapus",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
