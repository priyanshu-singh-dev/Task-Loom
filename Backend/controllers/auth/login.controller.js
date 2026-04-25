import userModel from "../../models/user.model.js";

export default async function loginController(req, res) {
  const { userEmail, userPassword } = req.body;
  console.log(req.body);
  try {
    const user = await userModel.findOne(
      { userEmail },
      { userPassword: 1, _id: 0 }
    );
    if (user.userPassword == userPassword) {
      res
        .status(200)
        .cookie(_uId, user._id)
        .json({ success: true, message: "welcome to Task loom" });
    } else {
      res
        .status(404)
        .json({ success: false, message: "your password is wrong" });
    }
  } catch (e) {
    res.status(404).json({ success: false, message: "user not found" });
  }
}
