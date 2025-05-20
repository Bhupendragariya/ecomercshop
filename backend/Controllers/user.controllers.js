import User from "../models/user.models";
import ErrorHandler from "../middlewares/errorMiddleware";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import sendEmailFun from "../utils/sendEmail";
import verifycationEmail from "../utils/verifyEmailTemplet";


export const  registerUser = catchAsyncErrors( async (req, res, next) =>{
    try {
        const {name, email, password} =req.body;
        if (!name || !email || !password) {
            return next( new ErrorHandler("Please fill out the full form!", 400))
        }

        const  isUser = await User.findOne({email})
        if (isUser) {
            return next(new ErrorHandler("User already exists", 400))
        }
         const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

       

       const user = await User.create({
            email,
            password,
            name,
            otp: verifyCode,
            otp_expiry: Date.now()+ 600000
        });

        const verifyEmail = await sendEmailFun({
            sendTo : email,
            subject : "Verify email from E-commerce app",
            text: "",
            html: verifycationEmail(name, verifyCode)
        });




        res.status(201).json|({
            success: true, 
            message: "User registered successfully",
            user
        })



        

        
    } catch (error) {
       return next(new ErrorHandler(error.message, 500));
    }
});

