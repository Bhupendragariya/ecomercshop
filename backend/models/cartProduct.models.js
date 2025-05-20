import mongoose, { mongo } from "mongoose";

const cartProductSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    validate: {
      validator: (v) => v > 0,
      message: "Quantity must be greater than zero",
    },
  },
  userId:{
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }

},{timestamps: true});


const CartProduct =  mongoose.model("CartProduct", cartProductSchema )

export default CartProduct