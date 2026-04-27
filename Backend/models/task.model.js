import taskSchema from "../schema/task.schema.js";
import { model } from "mongoose";
const taskModel = model("userTask", taskSchema);
export default taskModel;
