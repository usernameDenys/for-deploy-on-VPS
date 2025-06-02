import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRout.js";
import productRouter from "./routes/productRout.js";
import cartRouter from "./routes/cartRout.js";
import orderRouter from "./routes/orderRout.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json()); //request in json
app.use(cors()); //allows all domains to access API

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log("server started on PORT : " + port));
