import logo from './logo.svg';
import './App.css';
import "./components/AddUser";
import AddUser from './components/AddUser';
import Navbar from './components/Navabar';
import AllUser from './components/AllUser';
import MyUsers from './components/MyUsers';
import EditUser from "./components/EditUser";

import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element ={<MyUsers/>}/>
      <Route path = "/add" element={<AddUser/>}/>
      <Route path = "/all" element = {<AllUser/>}/>
      <Route path = "/edit/:id" element = {<EditUser/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
