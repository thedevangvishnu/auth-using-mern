import express from "express";
import cors from "cors";

import userRoute from "./routes/users.routes";
import authRoute from "./routes/auth.routes";

export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
