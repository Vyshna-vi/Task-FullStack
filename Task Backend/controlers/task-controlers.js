const TaskModel = require("../models/task-model");

const addTask = async (req, res) => {
  try {
    await TaskModel.create(req.body);
    res.json({ sucess: true, message: "Added Task Sucessfully" });
  } catch (error) {
    res.json({ sucess: false, message: "Cannot Add Task" });
    console.log(error);
  }
};

const getAllTask = async (req, res) => {
  try {
    let allTask = await TaskModel.find();
    res.json({ sucess: true, message: "Get All Task", allTask });
  } catch (error) {
    res.json({ sucess: false, message: "Cannot Get Data Of All Tasks" });
  }
};

const getOneTask = async (req, res) => {
  try {
    let Task = await TaskModel.findOne({ _id: req.params.id });
    res.json({ sucess: true, message: "Get One Task", Task });
  } catch (error) {
    res.json({ sucess: false, message: "Cannot Find Task" });
  }
};

const updateTask = async (req, res) => {
  try {
    let updatetask = await TaskModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.json({ sucess: true, message: "Updated Successfully" });
  } catch (error) {
    res.json({ sucess: false, message: "Cannot Update Data" });
    console.log("update adt ",error);
  }
};

const deleteTask = async (req, res) => {
  try {
    let delTask = await TaskModel.findOneAndDelete({
      _id: req.params.id,
    });
    res.json({ sucess: true, message: "Task Deleted!!" });
  } catch (error) {
    res.json({ sucess: false, message: "Cannot Delete Task" });
  }
};

module.exports = {
  addTask,
  getAllTask,
  getOneTask,
  deleteTask,
  updateTask,
};
