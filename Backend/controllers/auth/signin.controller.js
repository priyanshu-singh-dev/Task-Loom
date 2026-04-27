import userModel from "../../models/user.model.js";
export default async function signinController(req, res) {
  const user = new userModel(req.body);
  try {
    const result = await user.save();
    res.status(201).json({
      success: true,
      message: "you are signed in",
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "We are facing some error",
    });
  }
}
