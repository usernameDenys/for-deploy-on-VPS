import mongoose from "mongoose";

mongoose.connection.on("connected", () => {
  console.log("DB Connected");
});

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}/coffee_db`);
};

export default connectDB;
