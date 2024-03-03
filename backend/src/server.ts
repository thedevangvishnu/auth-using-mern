import http from "node:http";
import "dotenv/config";

import { app } from "./app";
import { connectToMongo } from "./services/mongo";

const server = http.createServer(app);

const PORT = 8000;

const startServer = async () => {
  await connectToMongo();

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
  });
};

startServer();
