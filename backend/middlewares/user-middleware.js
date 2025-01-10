const { body } = require("express-validator");

const registerValidate = [
  // Username validation: Should be alphanumeric, at least 3 characters long, and no spaces allowed
  body("username")
    .isAlphanumeric()
    .withMessage("Username should contain only letters and numbers")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long")
    .notEmpty()
    .withMessage("Username cannot be empty")
    .matches(/^\S+$/)
    .withMessage("Username cannot contain spaces")
    .trim(),

  // Email validation: Should be a valid email format, contain at least one alphabetic character, and not be purely numeric
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .matches(/[a-zA-Z]/)
    .withMessage("Email must contain at least one letter") // Ensures email contains letters
    .notEmpty()
    .withMessage("Email cannot be empty")
    .matches(/^(?!\d+@)[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/)
    .withMessage("Email cannot be purely numeric")
    .normalizeEmail(),

  // Password validation: Should be at least 8 characters, include at least one letter, one number, one special character,
  // and should not contain spaces
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[a-zA-Z]/)
    .withMessage("Password must contain at least one letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number")
    .matches(/[\W_]/)
    .withMessage("Password must contain at least one special character")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .matches(/^\S+$/)
    .withMessage("Password cannot contain spaces")
    .trim(),
];

module.exports = { registerValidate };
