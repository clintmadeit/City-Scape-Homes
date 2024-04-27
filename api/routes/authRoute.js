import express from "express";
import {
  confirmEmail,
  google,
  signOut,
  signin,
  signup,
} from "../contollers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/api/confirm-email/:token", confirmEmail);
router.post("/google", google);
router.get("/signout", signOut);

export default router;
