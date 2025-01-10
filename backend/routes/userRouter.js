const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");
const { registerValidate } = require("../middlewares/user-middleware");

router.post("/register", registerValidate, registerUser);

module.exports = router;
