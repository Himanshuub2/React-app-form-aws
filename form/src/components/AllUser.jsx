import React from 'react'

import {useEffect,useState} from "react";   //this is used to make sure that api is called when the all user page is loaded, instead of when api is called using a button.
import {Table,TableHead,TableRow,TableCell,TableBody,styled,Button} from "@mui/material";
import {getUsers,deleteUser} from "../Service/api.js";

import {Link} from "react-router-dom";


export default function AllUser() {

  const StyledTable = styled(Table)`
    width:100%
    margin-top:50px auto 0 auto;

  `
  const Thead = styled(TableRow)`
    
    background:#000000;
    &>th{
      color:#fff;
    }
    
  `
  const Tbody = styled(TableRow)`
    &>td{
      font-size:20px;
    }
  `

  

  const[users,setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers();
  },[])

  const getAllUsers = async ()=>{
    let response = await getUsers();
    setUsers(response.data);
  }

  const deleteUserDetails=async (id)=>{
    await deleteUser(id);
    getAllUsers();
  }
  return (
    <StyledTable>
      <TableHead >
        <Thead>
          <TableCell>Id </TableCell>
          <TableCell>Name </TableCell>
          <TableCell>UserName </TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone </TableCell>
          <TableCell> </TableCell>


        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map(user=>(
            <Tbody>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>

              <TableCell>{user.username}</TableCell>

              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell><Button variant='contained' style={{marginRight:10}} component = {Link} to = {`/edit/${user._id}`}>Edit</Button>
              <Button variant='contained' color="secondary" onClick = {()=>deleteUserDetails(user._id)}>Delete</Button>
              </TableCell>



            </Tbody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}


// react router dom can be used to route only via links to route via a button we need to use {Link } component.