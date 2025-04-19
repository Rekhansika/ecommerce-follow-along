const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    country:{type:String,required:true},
    address1:{type:String,required:true},
    address2:{type:String,required:true},
    zipCode:{type:Number,required:true}
})

const schema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    image:{type:String},
    address:addressSchema


}) 

const userModel = mongoose.model("users",schema);

module.exports = {userModel}