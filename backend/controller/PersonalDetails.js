import { insertDetails } from "../db.js";

export function personalDetails(req, res) {
  insertDetails(req, (response) => {
    if (!response.status) {
      return res.status(400).json({ message: "Failed to add personal details " + response.message });
    }
    return res.status(200).json({ message: "Personal details added successful" });
  })
}
