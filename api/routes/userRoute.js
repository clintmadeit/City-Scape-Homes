import express from "express";
import {
  deleteUser,
  getUser,
  getUserListings,
  nodeMailer,
  updateUser,
} from "../contollers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);
router.post("/send-email", verifyToken, nodeMailer);

export default router;
