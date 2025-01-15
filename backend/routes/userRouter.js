import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
const router = express.Router();
import userValidate from "../middlewares/userMiddleware.js";

router.post("/register", userValidate, registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
