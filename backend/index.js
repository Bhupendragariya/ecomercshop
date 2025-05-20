import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { connectDB } from "./config/connectDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: "include",
}))

app.use(express.json());
app.use(cookieParser());

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Server is running" + PORT,
  });
});

connectDB();

app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
