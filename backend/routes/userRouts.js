import express from "express";
import {registerUser, verifyOTP }from "../Controllers/user.controllers.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-otp", verifyOTP)

export default router;
