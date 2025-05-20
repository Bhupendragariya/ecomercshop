import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFun from "../utils/sendEmail.js";
import verifycationEmail from "../utils/verifyEmailTemplet.js";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Provide name"] 
    },
    email:{
        type: String,
        required:[true, "Provide email"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email",
        },
        unique: true,  
    },
    password:{
        type: String,
        required: [true, "Provide password"] 
    },
    avatar:{
        type: String,
        default: ""
    },
    mobile: {
        type: String,
        default: null
    },
    verify_email: {
        type: Boolean,
        default: false
    },
    last_login_date:{
        type : Date,
        default: null
    },
    status:{
        type : String,
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active"
    },
    address_details:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Address"
        }
    ],
    shopping_cart: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "CartProduct"
        }
    ],
    orderHistory:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Order"
        }
    ],
    otp:{
        type: String,
        default: null
    },
    otp_expiry:{
        type: Date,
        default: null
    },
    role:{
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    }
}, 
{timestamps: true});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    if (this.isNew) {
        this.otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
        this.otp_expiry = Date.now() + 10 * 60 * 1000; // Expires in 10 minutes

        try {
            await sendVerificationEmail(this.email, this.name, this.otp);
        } catch (error) {
            return next(error);
        }
    }

    next();
});

userSchema.methods.comparePassword  =  async function (Password){
    return await bcrypt.compare(Password, this.password);
}

userSchema.methods.generateJwtToken = function () {
    return jwt.sign({
        id: this._id,
        email: this.email
    },
    process.env.JWT_TOKEN_SECRET,
    {
        expiresIn : process.env.JWT_TOKEN_EXPIRY
    });
}

async function sendVerificationEmail(email, name, otp) {
  try {
  
    console.log("Sending verification email to:", email);

    
    if (!validator.isEmail(email)) {
        throw new Error("Invalid recipient email address.");
    }

    const emailContent = verifycationEmail(name, otp);
    const mailResponse = await sendEmailFun({
      sendTo: email,
      subject: "Verify Your Email - E-commerce App",
      text: "Please verify your email address by using the OTP sent.",
      html: emailContent, 
    });

    console.log("Email sent successfully:", mailResponse.info);
  } catch (err) {
    console.error("Error while sending verification email:", err.message);
    throw err;
  }
}

const User = mongoose.model("User", userSchema);

export default User;
