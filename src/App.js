import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Loign from "./Pages/Loign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />  
        <Route path="/loign" element={<Loign/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;