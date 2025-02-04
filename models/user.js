import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "email already exist"],
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "email already exist"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema); // Using `models.User` to prevent multiple model definitions

export default User;
