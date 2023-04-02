const express = require("express");
const router = express.Router();
const {
  addTask,
  getAllTask,
  getOneTask,
  deleteTask,
  updateTask,
} = require("../controlers/task-controlers");

router.post("/add-task", addTask);

router.get("/get-all-task", getAllTask);

router.get("/get-one-task/:id", getOneTask);

router.delete("/delete-task/:id", deleteTask);

router.patch("/update-one-task/:id", updateTask);

module.exports = router;
