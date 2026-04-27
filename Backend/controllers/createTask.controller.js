import taskModel from "../models/task.model.js";
export default async function createTask(req, res) {
  const { taskTitle, taskDescription } = req.body;
  const data = {
    userId: req.cookies.uId,
    ...req.body,
  };
  console.log(data);
  await taskModel
    .insertOne(data)
    .then((response) => {
      res.status(201).json({
        success: true,
        message: "Your task is created successfully",
      });
    })
    .catch((e) => {
      res.status(401).json({
        success: true,
        message: "You are unathorized",
      });
    });
}
