import userModel from "../models/user.model.js";
export default async function cookieChecker(req, res, next) {
  console.log("request reaches to the backend middleware");
  console.log(req.cookies.uId);
  const user = await userModel.findById(req.cookies.uId);
  console.log(user);
  if (!user) {
    res.statu(404).json({ success: false, message: "user not found" });
  } else {
    next();
  }
}
