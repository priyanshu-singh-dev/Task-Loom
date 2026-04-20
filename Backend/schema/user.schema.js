import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
    unique: true,
  },
  userPassword: {
    type: String,
    require: true,
  },
  userCountry: {
    type: String,
    require: true,
  },
  userGender: {
    type: String,
    enum: ["male", "female", "other"],
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default userSchema;
