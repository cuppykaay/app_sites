const express = require("express");
const {createPost, findByIdAndUpdate, findOneAndDelete}= require("./userServices")

const User = require("./userModel");


const router = express.Router()

router.get("/feeds", async (req, res) => {
    const makePost = await User.find({});
    res.json({makePost})
})

router.get("/feeds/:id", async(req, res) => {
    const id = req.params.id;
    const makePost = await User.findOne({_id:id});
    res.json({makePost})
})

router.post("/signup", async(req, res) => {
    const user = {phoneNumber, email} = req.body;
    const findUserbyPhonenumber = await User.findOne({phoneNumber: phoneNumber});
    const findUseByEmail = await User.findOne({email: email})
    if(findUserbyPhonenumber && findUseByEmail){
        res.json({ message: "User with such phoneNumber already exists"})
    }else{
        const post = await User.create({phoneNumber, email});
        res.json({ post})
    }
})
router.post("/login", async(req, res)=> {
    const user = {phoneNumber}= req.body;
    const findUserbyPhonenumber = await User.findOne({phoneNumber: phoneNumber});
    if(findUserbyPhonenumber){
        res.json({ messsage: "You're logged in"})
    }else{
        res.json({messsage: "Please create an account"})
    }
})









module.exports = router