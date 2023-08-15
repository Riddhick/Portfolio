import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
function App() {
 
  return (
    <>
    <div className="lg:px-10">
     <Navbar/>
      <Home />
      <Projects/>
      
    </div>
    <Contact />
    </>
  )
    
}

export default App
