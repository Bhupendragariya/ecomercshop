import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { connectDB } from "./config/connectDB.js";
import userRouter from "./routes/userRouts.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

dotenv.config();



const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;



app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: "include",
}))


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
app.use('/api/user', userRouter)








connectDB();


app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
