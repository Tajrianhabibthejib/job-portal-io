import express from "express";
import { createJob, getJobs } from "../controllers/jobController.js";
const router = express.Router();
import isAuthenticated from "../middlewares/isAutheticated.js";

router.post("/create", isAuthenticated, createJob);
router.get("/:salary", getJobs);

export default router;
