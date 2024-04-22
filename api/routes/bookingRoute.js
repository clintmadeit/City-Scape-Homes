import express from "express";
import {
  createBooking,
  getBooking,
  updateBooking,
  deleteBooking,
} from "../contollers/bookingController.js";

import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createBooking);
router.get("/get/:id", verifyToken, getBooking);
router.post("/update/:id", verifyToken, updateBooking);
router.delete("/delete/:id", verifyToken, deleteBooking);

export default router;
