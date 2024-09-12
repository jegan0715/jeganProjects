import "./App.css";
import About from "./companent/About";
import Home from "./companent/Home";
import Context from "./companent/Context";
import Conform from "./companent/Conform";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";


export const userContext=createContext()

function App() {
  const[id, setId]=useState(1)
  return (
    <userContext.Provider value={{id,setId}}>
     
      <BrowserRouter>
      <div>
        <Link to='/'>Home</Link><br/>
        <Link to='/about'>About</Link><br/>
        <Link to='/context'>Context</Link><br/>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="context" element={<Context />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
