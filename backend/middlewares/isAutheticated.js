import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Unauthorized user" });
    } else {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized error" });
  }
};

export default isAuthenticated;
