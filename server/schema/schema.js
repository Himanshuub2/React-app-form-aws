import mongoose  from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema =mongoose.Schema({
    
    name:{type:String,required:true},
    username:String,
    email:String,
    phone:String
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,"user");


const user = mongoose.model("user",userSchema)  //user is the table in whihc it will add userSchema 
export default user;

// npm install --legacy-peer-deps mongoose-auto-increment  -- to auto increment id of user