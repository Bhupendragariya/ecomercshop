import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  address_line: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  pincode: {
    type: String,
    trim: true,

    validate: {
      validator: function (value) {
        return /^[1-9][0-9]{5}$/.test(value); // Indian 6-digit pincode
      },
      message: "Please provide a valid 6-digit pincode",
    },
  },
  country: {
    type: String,
  },
  mobile: {
    type: String,
    default: null,
    trim: true,
    validate: {
      validator: function (v) {
        return /^([6-9]\d{9})$/.test(v);
      },
      message: (props) => `${props.value} is not a valid mobile number`,
    },
  },
  status:{
    type: Boolean,
    default: true
  },
  userId:{
    type: mongoose.Schema.ObjectId,
    default:""
  }
},{timestamps:true});


const Address = mongoose.model("Address", addressSchema);

export default Address;
