import mongoose from "mongoose";
import bcrypt from "bcryptjs";

type UserType = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

export const User = mongoose.model<UserType>("user", userSchema);
