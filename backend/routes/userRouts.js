import express from "express";
import {forgotPassword, loginUser, logoutUser, registerUser, resetPassword, verifyOTP }from "../Controllers/user.controllers.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:userToken", resetPassword);


export default router;
