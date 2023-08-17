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
     <section id="home"> <Home /></section>
     <section id="projects"><Projects/></section>
      
    </div >
    <section id="contact">
    <Contact />
    </section>
    </>
  )
    
}

export default App
