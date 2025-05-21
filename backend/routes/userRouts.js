import express from "express";
import {loginUser, registerUser, verifyOTP }from "../Controllers/user.controllers.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser)

export default router;
