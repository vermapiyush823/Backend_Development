const User = require('../models/user')
const mongoose = require('mongoose')
async function getAllUsers(req,res){
    const data = await User.find({});
    // res.setHeader("X-name","Piyush");
    return res.json(data);
}

async function getUserById(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"user not found"});
    return res.json(user)
} 

async function changeUserInfo(req,res){
    // Update user details
    await User.findByIdAndUpdate(req.params.id,{lastName:'Changed'});
    return res.json({status:'success'});
}

async function deleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:'deleted'});
}

async function addNewUser(req,res){
    // Add new user
    const body = req.body;
    console.log("Body",body);
    if (!body
        ||!body.first_name
        ||!body.last_name
        ||!body.email
        ||!body.gender
        ||!body.job_title)
    {
        return res.status(400).json({msg:"All fields required"});
    }
    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title
    });
    console.log(result)
    return res.status(201).json({msg:'success'});
}


module.exports = {getAllUsers,getUserById,changeUserInfo,deleteUserById,addNewUser} 