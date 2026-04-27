import { Schema } from "mongoose";
const taskSchema = Schema.create({
  userId: {
    type: String,
    require: true,
  },
  taskTitle: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  createAT: {
    type: Date,
    default: Date.now,
  },
});
export default taskSchema;
