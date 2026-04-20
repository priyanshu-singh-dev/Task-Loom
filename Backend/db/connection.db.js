import mongoose from "mongoose";
export default async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URL).then((response) => {
      console.log("database is connected successfully");
    });
  } catch (e) {
    console.log("we are facing some error while connecting to the database");
    console.log(e);
  }
}
