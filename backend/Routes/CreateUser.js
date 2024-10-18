const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    // Validate email: must be a valid email and not empty
    body("email", "Enter a valid email").isEmail().notEmpty(),

    // Validate name: must be at least 5 characters and not empty
    body("name", "Name must be at least 5 characters")
      .isLength({ min: 5 })
      .notEmpty(),

    // Validate password: must be at least 5 characters and not empty
    body("password", "Password must be at least 5 characters")
      .isLength({ min: 5 })
      .notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // If there are validation errors, return them
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // You should hash the password before saving it to the database

      // Create a new user with the validated and hashed data
      await User.create({
        name: req.body.name,
        password: req.body.password, // Save hashed password
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
);

router.post(
  "/loginuser",
  [
    // Validate email: must be a valid email and not empty
    body("email", "Enter a valid email").isEmail().notEmpty(),

    // Validate password: must be at least 5 characters and not empty
    body("password", "Password must be at least 5 characters")
      .isLength({ min: 5 })
      .notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // If there are validation errors, return them
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let email = req.body.email;
      let userData = await User.findOne({ email });

      if (!userData) {
        return res.status(500).json({
          errors: "try logging with correct credentials",
        });
      }
      if (req.body.password !== userData.password) {
        return res.status(500).json({
          errors: "try logging with correct credentials",
        });
      }
      return res.json({ success: true });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
);

module.exports = router;
