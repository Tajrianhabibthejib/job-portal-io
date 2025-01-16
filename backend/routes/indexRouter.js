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

router.get("/get-jobs", async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.status(200).json({ jobs });
  } catch (error) {
    console.log(error.message);
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

router.get("/jobs/read-more/:jobId", async (req, res) => {
  try {
    const { jobId } = req.params;
    const findJob = await jobModel.findById({
      _id: jobId,
    });
    if (findJob) {
      return res.status(200).json({
        success: true,
        findJob,
      });
    }
    res.status(400).json({ success: false, message: "Job not found" });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
