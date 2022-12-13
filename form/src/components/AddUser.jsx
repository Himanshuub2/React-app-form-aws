import React from 'react'
import { FormControl, FormGroup,InputLabel,Input, Typography,styled,Button} from '@mui/material'
import {useState} from "react";

import {addUser} from "../Service/api"
import {useNavigate} from "react-router-dom";



const Container = styled(FormGroup)`
  width : 50%;
  margin:10% auto 0 auto;
  &>div{
    margin-top:20px;
  }
  `
const defaultValue = {
  name:"",
  username : "",
  email : "",
  phone : "",
}

export default function AddUser() {

  const [user,setUser] = useState(defaultValue);
  const navigate = useNavigate();

const setValue = (e)=>{
  //console.log(e.target.name , e.target.value)
  setUser({...user,[e.target.name]:e.target.value});      ///...user is used to make sure the previous user remain as it is and only the new value is added.
  
  
}
const addUserDetails =async()=>{
  //need to call api when submit is clicked, creating api in service/api.js
  
  await addUser(user);
  navigate("/all");
}

  return (
    <Container>
      <Typography variant ="h4" >Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange ={(e)=>setValue(e)} name = "name"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange ={(e)=>setValue(e)} name= "username"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange ={(e)=>setValue(e)} name = "email"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange ={(e)=>setValue(e)} name = "phone"></Input>

      </FormControl>
      <FormControl>
        <Button variant ="contained" onClick = {addUserDetails}>Add User</Button>
        
      </FormControl>
     
    </Container>
  )
}
