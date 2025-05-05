import express from "express";
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
const router = express.Router();
import userValidate from "../middlewares/userMiddleware.js";
import isAuthenticated from "../middlewares/isAutheticated.js";

router.post("/register", userValidate, registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", isAuthenticated, getUser);

export default router;
