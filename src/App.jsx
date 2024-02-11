import React from "react";
import {useRef,useEffect} from "react";
import { useInView,useAnimation } from "framer-motion";
import {motion} from "framer-motion";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Techstack from "./Techstack";

function App() {
  const myref=useRef(null);
  const isInview=useInView(myref,{once:false})
  const animation=useAnimation()

  useEffect(()=>{
    isInview?animation.start({opacity:1,trasition:{type:'tween',duration:0.3}}): animation.start({ opacity:0})
  },[isInview])

  return (
    <>
    <div className="lg:px-10">
      <Navbar/>
     <section id="home" > <Home /></section>
     <section id="projects"><Projects/></section>
      
    </div >
    <Techstack/>
    <motion.section id="contact" ref={myref} animate={animation}>
    <Contact />
    </motion.section>
    </>
  )
    
}

export default App
