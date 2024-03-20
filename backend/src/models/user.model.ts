import mongoose, { Schema } from "mongoose";

type UserType = {
  _id: string;
  googleId?: string;
  name: string;
  email: string;
  password?: string;
};

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  googleId: { type: String },
  password: { type: String },
});

userSchema.path("password").validate(function (value) {
  if (this.googleId) {
    return true;
  }

  return value !== null && value !== undefined;
}, "Password is required when not using Google sign on");

export const User = mongoose.model<UserType>("user", userSchema);
