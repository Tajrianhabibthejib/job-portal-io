import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { validationResult } from "express-validator";

export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }
  const findUser = await userModel.findOne({ email });
  if (findUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists!",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
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
  res.cookie("token", token, {
    httpOnly: true,
  });
  return res.status(200).json({
    success: true,
    message: "User created successfully!",
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }
  const findEmail = await userModel.findOne({ email });
  if (!findEmail) {
    return res.status(400).json({
      success: false,
      message: "User not found",
    });
  }
  const isValidPassword = await bcrypt.compare(password, findEmail.password);
  if (!isValidPassword) {
    return res.status(400).json({
      success: false,
      message: "Invalid password",
    });
  }
  const token = await jwt.sign(
    {
      id: findEmail._id,
      username: findEmail.username,
      email: findEmail.email,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token, {
    httpOnly: true,
  });
  return res.status(200).json({
    success: true,
    message: "User logged in successfully!",
  });
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "None", // Add this if you're testing on localhost with different ports
      secure: true, // Add this if you're using HTTPS
    });
    return res.status(200).json({
      success: true,
      message: "User logged out successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getUser = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
    console.log(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const editUser = async (req, res) => {
  const { username, bio } = req.body;
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Unauthorized",
    });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const findUser = await userModel.findByIdAndUpdate(decoded.id, {
    username,
    bio,
  });
  console.log(findUser);
};
