import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import database from "./config/database.js";
database();

import userRouter from "./routes/userRouter.js";
import indexRouter from "./routes/indexRouter.js";

const app = express();

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:5173"], // Replace with your allowed domain(s)
  credentials: true, // Enable this if you need to send cookies or authentication tokens
};

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions)); // Use configured CORS options

app.use("/api/user", userRouter);
app.use("/", indexRouter);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
