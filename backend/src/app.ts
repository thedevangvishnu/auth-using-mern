import express from "express";
import cors from "cors";

import userRoute from "./routes/users.routes";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
