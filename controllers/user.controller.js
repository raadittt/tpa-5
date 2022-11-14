const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  getDataUser: async (req, res) => {
    try {
      const user = await User.find({}, "-password -__v");

      res.status(200).json({
        message: "success get data user",
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  },

  login: async (req, res) => {
    const data = req.body;
    const user = await User.findOne({ email: data.email });
    const KEY = "ljksfjlkaslkjlkjf";

    const cekLogin = bcrypt.compareSync(data.password, user.password);

    const token = jwt.sign(
      {
        email: data.email,
        password: data.password,
      },
      KEY
    );

    if (cekLogin) {
      res.status(200).json({
        message: "Login berhasil !",
        token,
      });
    } else {
      res.status(401).json({
        message: "Login gagal !",
      });
    }
  },

  register: (req, res) => {
    const data = req.body;

    const saltRounds = 10;
    const hash = bcrypt.hashSync(data.password, saltRounds);
    data.password = hash;

    const user = new User(data);

    user.save();

    res.status(200).json({
      message: "Register berhasil !",
    });
  },
};
