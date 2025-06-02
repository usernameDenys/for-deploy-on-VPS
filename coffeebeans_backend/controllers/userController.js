import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import { sendRegistrationEmail } from "../middleware/emailService.js";

//generator jwt tokens, date limit 7 days
const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//Route for User login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    //check if user exist
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User doesn't exist" });
    }

    // check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    let token = createToken(user._id);
    const { password: _, ...userData } = user._doc;

    res.status(200).json({
      success: true,
      message: "User signed in successfully",
      data: {
        token,
        user: userData,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Rout for User registration(sign-up)
export const registUser = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    //checking if fields not empty
    if (
      !name.trim() ||
      !lastName.trim() ||
      !email.trim().toLowerCase() ||
      !password.trim()
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    //checking if user exist
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    //validation email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    //checking if password is strong
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    if (!hasUpper || !hasNumber || !hasSpecial) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least one uppercase letter, one number, and one special character",
      });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //add new user
    const newUser = new UserModel({
      name,
      lastName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    let token = createToken(savedUser._id);

    await sendRegistrationEmail(email, name);

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        user: savedUser,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for admin login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      return res.status(200).json({
        success: true,
        message: "Admin signed in successfully",
        data: {
          token,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route to get current user info
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await UserModel.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route to update user profile info
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, lastName } = req.body;

    if (!name && !lastName) {
      return res.status(400).json({
        success: false,
        message: "No data provided for update.",
      });
    }

    const updateFields = {};
    if (name) updateFields.name = name;
    if (lastName) updateFields.lastName = lastName;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $set: updateFields },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
