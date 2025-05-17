import express from "express";
import {
  editUser,
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
const router = express.Router();
import userValidate from "../middlewares/userMiddleware.js";
import isAuthenticated from "../middlewares/isAutheticated.js";
import upload from "../middlewares/multer.js";

router.post("/register", userValidate, registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", isAuthenticated, getUser);
router.post("/edit", isAuthenticated, upload.single("profileImage"), editUser);

export default router;
