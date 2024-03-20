import express, { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import passport from "passport";

import { User } from "../models/user.model";

const router = express.Router();

router.post(
  "/register",
  [
    check("name", "Name is required!").isString(),
    check("email", "Email is required!").isEmail(),
    check("password", "Password of 6 or more characters is required!").isLength(
      {
        min: 6,
      }
    ),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      if (!req.body.googleId) {
        // Hash the password if the user is signing up manually
        req.body.password = await bcrypt.hash(req.body.password, 8);
      }

      user = new User(req.body);

      await user.save();

      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      return res.status(201).json({ messgae: "User created" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

export default router;
