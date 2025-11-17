import { addFriend } from "../db.js";

function addNewFriend(req, res) {
  addFriend(req, (err, response) => {
    if (err) {
      return res.status(400).json({ message: "An error occured: " + err.message });
    }
    return res.status(200).json({ success: response.success });
  })
}

export default addNewFriend;
