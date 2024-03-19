import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

import { User } from "../models/user.model";
import verifyToken from "../middlewares/auth.middleware";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "This field is required!").isEmail(),
    check("password", "Password must be 6 or more characters!").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

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

    return res.status(200).json({ userId: user._id });
  }
);

router.use(passport.initialize());

router.get("/google", (req: Request, res: Response) => {});
router.get("/google/callback", (req: Request, res: Response) => {});

router.get("/validate-token", verifyToken, (req: Request, res: Response) => {
  return res.status(200).json({ userId: req.userId });
});

router.post("/logout", (req: Request, res: Response) => {
  res.cookie("auth_token", "", {
    expires: new Date(0),
  });

  return res.status(200).json({ message: "Log out successfull" });
});

export default router;
