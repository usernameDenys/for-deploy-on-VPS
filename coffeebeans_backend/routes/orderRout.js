import express from "express";
import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
  updateOrderStatus,
} from "../controllers/orderController.js";

import adminAuth from "../middleware/adminAuthentication.js";
import { userAuth } from "../middleware/userAuthentication.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, getAllOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);

// Place order
orderRouter.post("/place", userAuth, placeOrderCOD);

// // User features
orderRouter.post("/userorders", userAuth, getUserOrders);

export default orderRouter;
