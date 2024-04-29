import express from "express";
import {
  signup,
  confirmEmail,
  signin,
  google,
  signOut,
} from "../contollers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/confirm-email/:token", confirmEmail);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);

export default router;
