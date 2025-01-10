const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Your React app's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], // Ensure 'Authorization' is allowed if you're passing JWT tokens
  })
);

const database = require("./config/database");

// Initialize the database and handle potential errors
database().catch((err) => {
  console.error("Database connection failed:", err);
  process.exit(1); // Exit the application if the database connection fails
});

const userRouter = require("./routes/userRouter");
app.use("/user", userRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
