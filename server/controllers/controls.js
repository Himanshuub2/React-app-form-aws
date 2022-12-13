import { request } from "express";
import User from "../schema/schema.js";



export const addUser =async (req,res)=>{
    const user = req.body;
    //console.log(user);
    const newUser = new User(user);   //new instant to pass through schema
    try{
        await newUser.save();   //to save into db
        res.status(201).json(newUser);
    }catch(err){
        res.status(409).json()
    }
}

export const getUsers = async(req,res)=>{
    try{
        const users = await User.find({});
        res.status(200).json(users);
        
    }catch(err){
        res.status(404).json({message:err.message})
    }
}

export const getUser = async (req,res)=>{
    try{
        console.log(req.params.id)
        const user = await User.find({_id:req.params.id});
        res.status(200).json(user);
        
    }catch(err){
        res.status(404).json({message:err.message})
    }
}

export const editUser = async(req,res)=>{
    let user = req.body;
    const editUser = new User(user);
    try{
        await User.updateOne({_id:req.params.id},editUser);
        res.status(201).json()
        
    }catch(err){
        res.status(409).json({message:err.message})
    }
}

export const deleteUser = async (req,res)=>{
    try{
        await User.deleteOne({_id:req.params.id})
        res.status(200).json({message:"user is deleted successfully"})
    }catch(err){
        console.log(err);
    }
}
