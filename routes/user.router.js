const express = require("express");
const router = express.Router();

const { login, register, getDataUser } = require("../controllers/user.controller");

router.get("/", getDataUser);
router.post("/login", login);
router.post("/register", register);

module.exports = router;
