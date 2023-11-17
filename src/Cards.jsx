import React from "react";
import { useState } from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";
import { motion } from "framer-motion";

export default function Cards(prpos){
    const [getProject,setProject]=useState(1);
    const [getleft,setleft]=useState(0);
    const [getright,setRight]=useState(2);
    const nextSlide=()=>{
        const pos=getProject;
        const newPos=(pos+1)%prpos.card.length;
        setProject(newPos)
        setRight((newPos+1)%prpos.card.length)
        setleft((pos))
        console.log(newPos)
    }

    const prevSlide=()=>{
        const pos=getProject;
        var newPos=(pos+1)%prpos.card.length;
        setProject(newPos)
        setleft((newPos+1)%prpos.card.length)
        setRight(pos)
        console.log(newPos)
    }
    return(
        <div className=" w-full flex flex-row justify-center gap-2 lg:items-center lg:w-5/6" >
                <motion.div  variants={{hidden:{opacity:0},visible:{opacity:1}}} initial="hidden" animate="visible" exit="hidden" transition={{ease:"linear",duration:2.5}} className="w-1/12 pt-32 md:pt-44 lg:h-[300px] lg:w-2/4 lg:pt-0 lg:rounded-[20px_20px_20px_20px] ">
                    <img className="h-0 w-0 lg:h-[300px] lg:w-full lg:rounded-[20px_20px_20px_20px]" src={prpos.card[getleft].image} onClick={prevSlide}></img>
                    <BsChevronCompactLeft className="lg:w-0" onClick={prevSlide} size={30}/>
                </motion.div>
                <motion.div key={prpos.card[getProject].name} variants={{hidden:{opacity:0},visible:{opacity:1}}} initial="hidden" animate="visible" exit="hidden" transition={{ease:"linear",duration:2.5}} className="bg-black w-10/12 h-72  md:h-[400px] md:w-2/4 lg:h-[400px] lg:w-2/3  rounded-[20px] flex flex-col gap-0">
                    <div className="bg-black rounded-[20px_20px_0px_0px]">
                        <img className="rounded-[20px_20px_0px_0px] md:h-fit md:w-full" src={prpos.card[getProject].image}></img>
                    </div>
                    <div className="text-center py-4 md:py-6 md:text-2xl md:font-medium lg:text-sm lg:py-6">{prpos.card[getProject].name}</div>
                    <div className="grid grid-cols-3 gap-2 md:gap-4 px-6 lg:px-16 md:px-4 text-xs text-black font-medium md:text-lg md:font-semibold lg:text-sm">
                        {prpos.card[getProject].tech.map(t=>(
                            <div className="bg-amber-400 w-11/12 md:h-8 lg:h-[20px] lg:w-[70px] text-center  rounded-full">{t}</div>
                        ))}
                    </div>
                </motion.div>
                <motion.div  variants={{hidden:{opacity:0},visible:{opacity:1}}} initial="hidden" animate="visible" exit="hidden" transition={{ease:"linear",duration:2.5}} className="w-1/12 pt-32  md:pt-44 pl-2 md:pl-4 lg:pt-0 lg:pl-0 lg:w-2/4 lg:rounded-[20px_20px_20px_20px] lg:h-[300px] lg:pr-0">
                    <img className="h-0 w-0 lg:h-[300px] lg:w-full lg:rounded-[20px_20px_20px_20px] " src={prpos.card[getright].image} onClick={nextSlide}></img>
                    <BsChevronCompactRight className="lg:w-0" onClick={nextSlide} size={30}/>
                </motion.div>   
            </div> 
    )
}