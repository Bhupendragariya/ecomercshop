import express from "express";
import {changePasswordUser, forgotPassword, loginUser, logoutUser, registerUser, resetPassword, verifyOTP }from "../Controllers/user.controllers.js";
import { isUserAuthenticated } from "../middlewares/authontication.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/change-password", isUserAuthenticated, changePasswordUser);
router.post("/forgotPassword" , isUserAuthenticated, forgotPassword)
router.put("/resetPassword" , isUserAuthenticated, resetPassword)



export default router;
