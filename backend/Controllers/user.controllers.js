import User from "../models/user.models.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import sendEmailFun from "../utils/sendEmail.js";
import verifycationEmail from "../utils/verifyEmailTemplet.js";
import { token } from "morgan";

export const registerUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return next(new ErrorHandler("Please fill out the full form!", 400));
    }

    const isUser = await User.findOne({ email });
    if (isUser) {
      return next(new ErrorHandler("User already exists", 400));
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const verifyEmail = await sendEmailFun({
      sendTo: email,
      subject: "Verify email from E-commerce app",
      text: "",
      html: verifycationEmail(name, otp),
    });

    if (!verifyEmail) {
      return next(new ErrorHandler("Failed to send verification email", 500));
    }

    await User.create({
      email,
      password,
      name,
      otp,
      otp_expiry: Date.now() + 600000,
      isVerified: false,
      expireAt: Date.now() + 10 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});


export const verifyOTP = catchAsyncErrors(async (req, res, next) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  if (user.otp !== otp) {
    return next(new ErrorHandler("Invalid OTP", 400));
  }

  if (user.otp_expiry < Date.now()) {
    return next(new ErrorHandler("OTP has expired", 400));
  }

  user.isVerified = true;
  user.otp = undefined;
  user.otp_expiry = undefined;
  user.expireAt = undefined;
  await user.save();

  const token = user.generateJwtToken();

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      success: true,
      message: "Email verified successfully! You can now login.",
      user,
    });
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password || !role) {
      return next(new ErrorHandler("Please provide email and password",  400));
    }

    const user = await User.findOne({ email });
console.log(user, "user log")
 
    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 400));
    }

    const isPasswordMatched = await user.comparePassword(password);


    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 400));
    }
    console.log("test there ", isPasswordMatched)

    if (user.role != role) {
      return next(
        new ErrorHandler("You are not authorized to access this resource", 403)
      );
    }
    console.log("test four", token)
      res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,

      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      success: true,
      message: "logged in successfully.",
      user,
    });
    
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
