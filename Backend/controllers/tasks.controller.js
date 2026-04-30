import taskModel from "../models/task.model.js";
export async function allTasksController(req, res) {
  const task = await taskModel
    .find(
      { userId: req.cookies.uId },
      { _id: 1, taskTitle: 1, taskDescription: 1 }
    )
    .then((response) => {
      if (response.length == 0) {
        res.status(200).json({ success: false, message: [] });
      } else {
        res.status(200).json({ success: true, message: response });
      }
    })
    .catch((er) => {
      res.status(400).json({
        success: false,
        message: "Got some error while getting all the note",
      });
    });
}
export async function singleTaskController(req, res) {
  const { id } = req.query;
  console.log(id);
  const result = await taskModel.findById(id);
  console.log(result);
  if (result) {
    res.status(200).json({ success: true, message: result });
  } else {
    res.status(404).json({ success: false, message: "We don't find you Task" });
  }
}
