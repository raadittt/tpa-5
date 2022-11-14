const express = require("express");
const router = express.Router();

const { getAllToDo, getDetailToDo, addToDo, updateToDo, deleteToDo, deleteAllToDo } = require("../controllers/todo.controller");

router.get("/", getAllToDo);
router.get("/:id", getDetailToDo);
router.post("/", addToDo);
router.patch("/:id", updateToDo);
router.delete("/:id", deleteToDo);
router.delete("/", deleteAllToDo);

module.exports = router;
