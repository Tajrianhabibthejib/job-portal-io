import { body } from "express-validator";

const userValidate = [
  // Validate 'username'
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required.")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 characters.")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage(
      "Username can only contain letters, numbers, and underscores."
    ),

  // Validate 'email'
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Invalid email format.")
    .isLength({ min: 5 })
    .withMessage("Email must be at least 5 characters long.")
    .custom((value) => {
      const [localPart] = value.split("@"); // Extract part before '@'
      if (/^\d+$/.test(localPart)) {
        throw new Error("Email username cannot be purely numeric.");
      }
      return true;
    })
    .normalizeEmail(),

  // Validate 'password'
  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters.")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter.")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter.")
    .matches(/\d/)
    .withMessage("Password must contain at least one number.")
    .matches(/[@$!%*?&]/)
    .withMessage("Password must contain at least one special character."),
];

export default userValidate;
