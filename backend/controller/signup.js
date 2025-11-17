import { CreateNewUser } from "../db.js";

export function Signup(req, res) {
  const { userName, password } = req.body;

  if (!userName || !password) {
    console.log("Validator no work");
    return res.status(400).json({ message: "Username or password is missing" });
  }
  console.log("working");
  CreateNewUser(userName, password, (worked) => {
    if (!worked.status) {
      return res.status(400).json({ message: "unable to add " + worked.message });
    }
    return res
      .status(200)
      .json({ message: "successfully added " + worked.userName });
  });
}