const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.json({
      message: "Please fill in all fields",
    });
  }
  const findEmail = await userModel.findOne({
    email: email,
  });
  if (findEmail) {
    return res.json({
      message: "Email already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username: username,
    email: email,
    password: hashedPassword,
  });
  const token = await jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  return res.json({
    message: "User created successfully",
    token,
  });
};

module.exports = {
  registerUser,
};
