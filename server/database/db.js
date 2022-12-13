//import mongoose and dotenv --dotenv is used to store username and passwords.

import mongoose from "mongoose";


const Connection =async (username,password)=>{
const url = `mongodb://${username}:${password}@cluster0-shard-00-00.thkmk.mongodb.net:27017,cluster0-shard-00-01.thkmk.mongodb.net:27017,cluster0-shard-00-02.thkmk.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-jciqwa-shard-0&authSource=admin&retryWrites=true&w=majority`

    try{
        await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})     //takes two argument url of db and object {}.  //to create conection with db
        console.log("DB connected fine");
    }catch(err){
        console.log("error with dB",err);
    }            
}


export default Connection;

//mongodb and mongoose are two different liberaries.

