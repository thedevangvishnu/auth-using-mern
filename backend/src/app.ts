import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import passport from "passport";
import cookieSession from "cookie-session";

import userRoute from "./routes/users.routes";
import authRoute from "./routes/auth.routes";

import { setupGoogleStrategy, setupSession } from "./services/passport";

export const app = express();

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    secure: true,
    httpOnly: true,
    keys: [
      process.env.COOKIE_KEY_1 as string,
      process.env.COOKIE_KEY_2 as string,
    ],
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.session && !req.session.regenerate) {
    req.session.regenerate = (cb: () => void) => {
      cb();
    };
  }

  if (req.session && !req.session.save) {
    req.session.save = (cb: () => void) => {
      cb();
    };
  }
  next();
});

app.use(passport.initialize());
app.use(passport.session());

setupSession();
setupGoogleStrategy();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET, PUT, POST, DELETE",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});
