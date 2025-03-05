const express = require("express");

const userRouter = express.Router();

const uploaduserImage = require("../middlewares/multer");

const {userModel} = require("../models/userModel");

userRouter.post("/signup",uploaduserImage.single("image"),async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(name!="" || email!="" || password!=""){
            return res.status(400).send({msg:"All fields are required"});
        }

        const user = await userModel.findOne({email:email});
        if(user){
            return res.status(200).send({msg:"user already exists"});
        }

        const newUser = await userModel.insertOne({name,email,password});

        return res.status(200).send({msg:"User registered successfully"});


    } catch (error) {
        return res.status(500).send({msg:"Something went wrong",error});
    }

})

userModel.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(email!="" || password!=""){
            return res.status(400).send({msg:"All fields are required"});
        }
        const user = await userModel.findOne({email:email,password:password});
        if(user){
            return res.status(200).send({msg:"user already exists"});
        }
        return res.status(200).send({msg:"User logged in successfully"});

        
    } catch (error) {
        return res.status(500).send({msg:"Something went wrong",error});
    }
})


module.exports = userRouter;