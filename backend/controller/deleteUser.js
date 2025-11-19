import { UserEskay } from "../model/user.js";

export const deleteUser = async (req, res) => {
  try {
    const { firstName } = req.body;

    const deletionAck = await UserEskay.deleteOne({ firstName: firstName })

    if (deletionAck['acknowledged']) {
      res.status(200).json(deletionAck)
      return
    }

    res.status(500).json({ message: "Failure to delete user." })

  } catch (err) {
    console.log("=>deleteUser path: ", err.message);
    res.status(500).json({ message: "something wrong" })
  }
}
