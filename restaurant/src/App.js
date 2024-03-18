import {React, useState} from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";

import Main from "./Components/Main";
import Test from "./Components/Test"

import Starters from "./Components/Starters";
import Salads from "./Components/Salads";
import MainCourses from "./Components/MainCourses";
import Desserts from "./Components/Desserts";
import Drinks from "./Components/Drinks";
import Random from "./Components/Random";


function App() {
  console.log("Hello from App")



  
  
  return (
    
    <div className="App">
        <p className="menu-text">MENU</p>
       
        <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/starters" element={<Starters/>} />
            <Route path="/salads" element={<Salads/>} />
            <Route path="/main_courses" element={<MainCourses/>} />
            <Route path="/desserts" element={<Desserts/>} />
            <Route path="/drinks" element={<Drinks/>} />
            <Route path="/" element={<Main/>} />
            <Route path="/random" element={<Random/>} />
        </Routes>
      
    </div>
    
  );
}

export default App;
