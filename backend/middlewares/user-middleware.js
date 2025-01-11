const { body } = require("express-validator");

const registerValidate = [
  // Username validation: Should contain at least one letter and may include numbers, no spaces allowed
  body("username")
    .matches(/^(?=.*[A-Za-z])[A-Za-z0-9]*$/)
    .withMessage(
      "Username must contain at least one letter and may contain numbers"
    )
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long")
    .notEmpty()
    .withMessage("Username cannot be empty")
    .matches(/^\S+$/)
    .withMessage("Username cannot contain spaces")
    .trim(),

  // Enhanced Email validation
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .matches(/[a-zA-Z]/)
    .withMessage("Email must contain at least one letter") // Ensures email contains letters
    .notEmpty()
    .withMessage("Email cannot be empty")
    .matches(/^(?!\d+@)[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/)
    .withMessage("Email cannot be purely numeric")
    .isLength({ min: 8 }) // Sets a minimum length of 8 characters
    .withMessage("Email must be at least 8 characters long")
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
    .withMessage("Email format is invalid (e.g., example@domain.com)") // Standard email format check
    .custom((value) => {
      // Custom validation to ensure the email doesn't look like just a number followed by '@domain.com'
      const regex = /^[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!regex.test(value)) {
        throw new Error(
          "Email must be more meaningful and cannot be purely numeric or too short."
        );
      }
      return true;
    })
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
