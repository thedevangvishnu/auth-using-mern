import mongoose from "mongoose";

export const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_URL as string);
};

export const disconnectToMongo = async () => {
  await mongoose.disconnect();
};

mongoose.connection.once("open", () => {
  console.log("MongoDB connection successfull!");
});

mongoose.connection.on("error", (error) => {
  console.log(`Error connecting to MongoDB ${error}`);
});
