import { log } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    log("Database is connected successfully!");
  })
  .catch((err) => {
    log("Database connection failed!", err);
  });

const app = express();

app.listen(3000, () => {
  log("Server is running on port 3000!");
});

app.use("/api/user", userRouter);
