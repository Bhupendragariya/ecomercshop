import User from "../models/user.models.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";


export const isUserAuthenticated = catchAsyncErrors(async(req, res, next) =>{
    const token = req.cookies.userToken;

    try {
        if (!token) {
            return (next(new ErrorHandler("UserToken in not Authenticated", 400)))
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);

        const user = req.user = await User.findById(decoded.id)

        if (!user || user.role !== "USER") {
            return (next(new ErrorHandler(`${req.user.role} is not authorized to access this resource`, 403 )))
            
        }

        req.user = user;
        next();


    } catch (error) {
        return (next (new ErrorHandler("Invalid token", 401)))
    }
})
