import express from "express";
import isAuthenticated from "../middlewares/isAutheticated.js";
import jobModel from "../models/jobModel.js";
const router = express.Router();

router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const user = req.user;
    if (user) {
      return res.status(200).json({
        success: true,
        message: "User is authenticated!",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.get("/jobs", isAuthenticated, async (req, res, next) => {
  try {
    const job = await jobModel.find();
    const user = req.user;
    res.json({ user, job });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
