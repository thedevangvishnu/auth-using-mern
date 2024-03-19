import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passportSetup from "./services/passport";

import userRoute from "./routes/users.routes";
import authRoute from "./routes/auth.routes";

export const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
