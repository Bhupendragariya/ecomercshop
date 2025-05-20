
import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



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
        default:""
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
    enum:["Active", "Inactive", "Suspended"],
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
    default: ""
  },
  role:{
    type: String,
    enum : ["ADMIN", "USER"],
    default: "USER"
  }


}, 
{timestamps: true});



userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        return next();
    } 
    this.password = await bcrypt.hash(this.password, 10);
    next();
    
})

userSchema.methods.comparePassword  =  async function (Password){
    return await bcrypt.compare(Password, this.password);
}


const User = mongoose.model("User", userSchema);

export default User;