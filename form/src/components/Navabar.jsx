import React from 'react'
import {AppBar,Toolbar,styled} from "@mui/material";

import {NavLink} from "react-router-dom";

const Header = styled(AppBar)`
    background:#111111;
`
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:25px;
    color:inherit;
    text-decoration:none;

`

export default function Navabar() {
  return (
    <Header position="static">
        <Toolbar>
            <Tabs to="/">User Details</Tabs>
            <Tabs to="/all">All Users</Tabs>
            <Tabs to="/add">Add User</Tabs>

        </Toolbar>
    </Header>
  )
}
