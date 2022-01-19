import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom"
import AddAnimal from "./componenet/AddAnimal";
import Edite from "./componenet/Edite";
import Home from "./componenet/Home";
import Login from "./componenet/Login";
import Nav from "./componenet/Nav"
import Register from "./componenet/Register";
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" exact={true} element={<Home/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>} /> 
   <Route path="/add" element={<AddAnimal/>} />
   <Route path="/edit" element={<Edite/>} />
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
