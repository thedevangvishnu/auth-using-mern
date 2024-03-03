import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectToMongo } from "./services/mongo";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8000;

const startServer = async () => {
  await connectToMongo();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
  });
};

startServer();
