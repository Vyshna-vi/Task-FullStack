const express = require("express");
const app = express();
const mongoose = require("mongoose");
const taskRouter = require("./routes/task");
const cors = require("cors")

mongoose.connect(
  "mongodb+srv://Vyshnavi:Vyshnavi@cluster0.w6wycc3.mongodb.net/taskdb?retryWrites=true&w=majority"
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

app.use(cors())

app.use("/", taskRouter);

app.listen(5000, (err) => {
  if (err) {
    console.log("Failed to load");
  } else {
    console.log("Server running  successfully at port 5000");
  }
});
