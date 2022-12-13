//install axios --npm install axios   , to create api
import axios from "axios";

const URL = "http://localhost:8000";

export const addUser =async (data)=>{
    try{
        return await axios.post(`${URL}/add`,data)
    }catch(err){
        console.log("axios error",err);
    }
}


export const getUsers= async()=>{
    try{
        return await axios.get(`${URL}/all`)
    }catch(err){
        console.log(err);
    }
    
}

export const getUser = async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(err){
        console.log(err);
    }
}

export const editUser = async(user,id)=>{
    try{
        return await axios.post(`${URL}/${id}`,user)
    }catch(err){
        console.log(err)
    }
}

export const deleteUser = async(id)=>{
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(err){
        console.log(err)
    }
}