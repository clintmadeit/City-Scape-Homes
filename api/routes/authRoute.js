import express from "express";
import {
  signup,
  confirmEmail,
  signin,
  google,
  signOut,
  requestPasswordReset,
  updatePassword,
} from "../contollers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/confirm-email/:token", confirmEmail);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);
router.post("/request-password-reset", requestPasswordReset);
router.post("/update-password", updatePassword);

export default router;
