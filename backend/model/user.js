import { model, Schema } from "mongoose";


const UserEskaySchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number }
}, {
  timestamps: true
});


export const UserEskay = new model("user_eskay", UserEskaySchema);
