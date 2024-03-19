import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import userRoute from "./routes/users.routes";
import authRoute from "./routes/auth.routes";

export const app = express();

app.use(cookieParser());
app.use(express.json());
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
