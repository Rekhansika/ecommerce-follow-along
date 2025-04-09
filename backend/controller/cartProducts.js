const express = require("express");

const cartRouter = express.Router();

const productModel = require("../models/productsModel");
const cartModel = require("../models/cartModel");

cartRouter.get('/cartproduct/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send({msg:"Please provide id"});
        }
        const product = await productModel.findOne({_id:id});
        if(!product){
            return res.status(404).send({msg:"Product not found"});
        }

        const {title,description} = product;

        const newCartProduct = await cartModel.insertOne({

        })

    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
})

module.exports = cartRouter;