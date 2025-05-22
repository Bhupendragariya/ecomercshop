import User from "../models/user.models.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import sendEmailFun from "../utils/sendEmail.js";
import verifycationEmail from "../utils/verifyEmailTemplet.js";
import crypto from "crypto";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Token generation error:", error);
    throw new Error("Something went wrong while generating tokens");
  }
};


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
      role: "USER",
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
  user.set("expireAt", undefined, { strict: false });

  user.last_login_date = new Date();
  await user.save();

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  res
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
    })
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
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
      return next(new ErrorHandler("Please provide email and password", 400));
    }

    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 400));
    }

    if (user.status !== "Active") {
      return next(new ErrorHandler("connect with admin", 400));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 400));
    }

    if (user.role !== role) {
      return next(
        new ErrorHandler("You are not authorized to access this resource", 403)
      );
    }

    user.last_login_date = new Date();

    await user.save();

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
        user._id
    );

    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
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

export const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return next(new ErrorHandler("User not found", 404));

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `
    Hi ${user.name},

    You requested to reset your password. Please click the link below:

    ${resetUrl}

    This link will expire in 15 minutes.

    If you did not request this, please ignore this email.
  `;

  try {
    await sendEmailFun({
      sendTo: user.email,
      subject: "Password Reset Link",
      text: message,
    });

    res.status(200).json({
      success: true,
      message: `Password reset email sent to ${user.email}`,
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler("Failed to send email", 500));
  }
});

export const resetPassword = catchAsyncErrors(async (req, res, next) => {
  try {
    const { userToken } = req.params;
    const { newPassword } = req.body;

    if (!userToken) {
      return next(new ErrorHandler("Reset token is missing", 400));
    }

    const resetTokenHashed = crypto
      .createHash("sha256")
      .update(userToken)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: resetTokenHashed,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!newPassword || newPassword.length <= 6) {
      return next(
        new ErrorHandler("Password must be at least 6 characters", 400)
      );
    }

    if (!user) {
      return next(new ErrorHandler("Invalid or expired token", 400));
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    const token = user.generateJwtToken();

    res
      .cookie("userToken", token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({
        success: true,
        message: "Password reset successful!",
        user,
      });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

export const logoutUser = catchAsyncErrors(async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(
      req.user_id,
      {
        $set: { refreshToken: undefined },
      },
      {
        new: true,
      }
    );

    res
      .clearCookie("accessToken",  {
        httpOnly: true,
        secure: true,
      })
      .clearCookie("refreshToken",{
         httpOnly: true,
        secure: true,
      }).json({
      success: true,
      message: "Logged out successfully.",
    });


  } catch (error) {


    return next(new ErrorHandler(error.message, 500));
  }
  
});
