import { Schema, model, models } from "mongoose";

// Create the schema
const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
});

// Build and export
const Task = models.Task || model("Task", taskSchema);

export default Task;
