import { log } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listingRoute.js";
import bookingRouter from "./routes/bookingRoute.js";
import path from "path";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    log("Database is connected successfully!");
  })
  .catch((err) => {
    log("Database connection failed!", err);
  });

const __dirname = path.resolve();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    origin: "https://cityscape-homes.onrender.com",
    credentials: true,
  })
);

app.set("trust proxy", true);

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  log("Server is running on port 3000!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use("/api/booking", bookingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
