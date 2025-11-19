import { UserEskay } from "../model/user.js";

export const addUser = async (req, res) => {
  try {
    const { email, firstName, lastName, age } = req.body;

    const newUser = await UserEskay.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      age: age
    });
    newUser.save();

    if (newUser['_id']) {
      res.status(200).json({ message: "user successfully added." })
      return
    }

    res.status(500).json({ message: "Failure to add user." })

  } catch (err) {
    console.log("=>addUser path: ", err.message);
    res.status(500).json({ message: "something wrong" })
  }
}
