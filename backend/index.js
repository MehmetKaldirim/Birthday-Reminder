import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

mongoose
  .connect(process.env.MANGO_URI)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
