import { UserEskay } from "../model/user.js";

export const getUser = async (req, res) => {
  try {
    const { firstName } = req.body;

    const findUser = await UserEskay.findOne({ firstName: firstName });

    if (!findUser) {
      res.status(500).json({ message: "User not found" });
      return;
    }

    res.status(200).json(findUser);


  } catch (err) {
    console.log("=>getUser path: ", err.message);
    res.status(500).json({ message: "something wrong" })
  }
}
