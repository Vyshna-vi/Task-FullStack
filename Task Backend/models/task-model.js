const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task_name: {
    type: String,
    maxLength: 100,
    minLength: 3,
    default: false,
  },
  task_descrip: {
    type: String,
    maxLength: 100,
    minLength: 3,
    default: false,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
}); 

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
