//install express
import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";

const app = express();
const port = 8000;
import cors from "cors";
import bodyParser from "body-parser";
app.use(bodyParser.json({extended:true}));    //to parse api body
app.use(bodyParser.urlencoded({extended:true})) 





//---for .env files 
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);
//----------------

app.use(cors());                   //cors for cross origin

import Routes from "./Routes/routes.js";
app.use("/",Routes);


app.listen(port,()=>{
    try{
        console.log("server is running good");
    }catch(err){
        console.log(err);
    }
})

//need body parser to parse api 
  //to parse url when it is encoded .eg spaces are replaced by %



//install npm install cors  -- to allow cross origin data transfer between port 3000 and 8000

