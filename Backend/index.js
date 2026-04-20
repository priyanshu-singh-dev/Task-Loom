import dotEnv from "dotenv";
dotEnv.config();
import express from "express";
import cors from "cors";
import dbConnection from "./db/connection.db.js";
import cookieParser from "cookie-parser";
import signinController from "./controllers/auth/signin.controller.js";
import loginController from "./controllers/auth/login.controller.js";

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
dbConnection();
app.get("/", (req, res) => {
  res
    .status(200)
    .cookie("hello", "coookie")
    .json({ message: "We got you request" });
});
app.get("/home", (req, res) => {
  res
    .status(200)
    .cookie("hello", "coookie")
    .json({ message: "we got your request on home route" });
});
app.post("/signin", signinController);
app.post("/login", loginController);
app.listen(port, () => {
  console.log(`your app is running ${port}`);
});
