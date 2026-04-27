import userModel from "../../models/user.model.js";
export default async function loginController(req, res) {
  const { userEmail, userPassword } = req.body;
  try {
    const user = await userModel.findOne({ userEmail });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }
    if (user.userPassword !== userPassword) {
      return res.status(401).json({
        success: false,
        message: "Wrong password",
      });
    }
    res.status(200).cookie("uId", user._id).json({
      success: true,
      message: "Welcome to Task Loom",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
