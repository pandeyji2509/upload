const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  name: {
    type: String,

    unique:true
  },
  email: { 
    type: String, 
    unique: true 
  },
  phone: {
    type: String,
  },
  carmodel:{
    type:String
  },
  plateNumber:{
    type:String
  },
  comments:{
    type:String
  }
});
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique:true
  },
  email: { 
    type: String, 
    unique: true 
  },
  city:{
    type:String,
  },
  phone: {
    type: String,
  },
  comments:{
    type:String
  }
});
const JoinSchema = new mongoose.Schema({
  name: {
    type: String,
    unique:true
  },
  email: { 
    type: String, 
    unique: true 
  },
  phone: {
    type: String,
  },
  comments:{
    type:String
  }
});

const Driver = mongoose.model("Driver", DriverSchema);
const User = mongoose.model("User", UserSchema);
const Join = mongoose.model("Join", JoinSchema);
module.exports = {User,Driver,Join};