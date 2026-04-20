import { model } from "mongoose";
import userSchema from "../schema/user.schema.js";
const userModel = model("user", userSchema);
export default userModel;
