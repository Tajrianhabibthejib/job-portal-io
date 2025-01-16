import express from "express";
import { createJob } from "../controllers/jobController.js";
const router = express.Router();
import isAuthenticated from "../middlewares/isAutheticated.js";

router.post("/create", isAuthenticated, createJob);

export default router;
