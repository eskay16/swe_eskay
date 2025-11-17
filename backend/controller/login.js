import { loginUser } from "../db.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const loginTheUser = (req, res) => {
  const { userName, password } = req.body;

  loginUser(userName, (err, result) => {
    if (err) {
      return res.json({ message: "error :" + err });
    }
    if (!result) {
      return res.json({ message: "User does not exist" });
    }
    if (password !== result.password) {
      return res.json({ message: "Incorrect username or passowrd" });
    }

    const token = jwt.sign({ user_id: result.user_id }, JWT_SECRET,)
    return res.status(200).cookie(
      "bj",
      token,
      {
        http: true,
        maxAge: 1000 * 60 * 60
      }
    ).json({ message: "Welcome :" + userName, success: true });
  });
};
