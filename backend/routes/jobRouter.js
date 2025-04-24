import express from "express";
import { createJob, getJobs } from "../controllers/jobController.js";
const router = express.Router();
import isAuthenticated from "../middlewares/isAutheticated.js";
import upload from "../middlewares/multer.js";

router.post("/create", upload.single("companyImage"), isAuthenticated, createJob);
router.get("/salary/:salary/category/:category/country/:country", getJobs);

export default router;
