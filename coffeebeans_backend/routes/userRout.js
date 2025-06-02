import express from "express";
import {
  loginUser,
  registUser,
  adminLogin,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { userAuth } from "../middleware/userAuthentication.js";

const userRouter = express.Router();

userRouter.post("/register", registUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/me", userAuth, getUserProfile);
userRouter.patch("/me", userAuth, updateUserProfile);

export default userRouter;
