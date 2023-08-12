import React from "react";
import { useState } from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";

export default function Cards(prpos){
    const [getProject,setProject]=useState(0);
    const [getleft,setleft]=useState(1);
    const [getright,setRight]=useState(1);
    const nextSlide=()=>{
        const pos=getProject;
        const newPos=(pos+1)%prpos.card.length;
        setProject(newPos)
        setRight((newPos+1)%prpos.card.length)
        console.log(newPos)
    }

    const prevSlide=()=>{
        const pos=getProject;
        var newPos=(pos+1)%prpos.card.length;
        setProject(newPos)
        setleft((newPos+1)%prpos.card.length)
        console.log(newPos)
    }
    return(
        <div className=" w-full flex flex-row justify-center gap-2 lg:items-center lg:w-2/3" >
                <div className="w-1/12 pt-32 md:pt-64 lg:h-[300px] lg:w-1/3 lg:pt-0 lg:rounded-[20px_20px_20px_20px] lg:bg-gradient-to-r from-zinc-900">
                    <img className="h-0 w-0 lg:h-[300px] lg:w-full lg:rounded-[20px_20px_20px_20px] lg:opacity-5" src={prpos.card[getleft].image} onClick={prevSlide}></img>
                    <BsChevronCompactLeft className="lg:w-0" onClick={prevSlide} size={30}/></div>
                <div className="bg-black w-10/12 h-72  md:h-[550px] lg:h-[350px] lg:w-1/3 rounded-[20px] flex flex-col gap-0">
                    <div className="bg-black rounded-[20px_20px_0px_0px]">
                        <img className="rounded-[20px_20px_0px_0px] md:h-fit md:w-full" src={prpos.card[getProject].image}></img>
                    </div>
                    <div className="text-center py-4 md:py-10 md:text-2xl md:font-medium lg:text-sm lg:py-6">{prpos.card[getProject].name}</div>
                    <div className="grid grid-cols-3 gap-2 md:gap-4 px-6  md:px-4 text-xs text-black font-medium md:text-lg md:font-semibold lg:text-sm">
                        {prpos.card[getProject].tech.map(t=>(
                            <div className="bg-amber-400 w-11/12 md:h-8 lg:h-[20px] text-center  rounded-full">{t}</div>
                        ))}
                    </div>
                </div>
                <div className="w-1/12 pt-32 md:pt-64 pl-2 md:pl-4 lg:pt-0 lg:pl-0 lg:w-1/3 lg:rounded-[20px_20px_20px_20px] lg:bg-gradient-to-r from-zinc-900 to-zinc-900 lg:h-[300px] lg:pr-8">
                <img className="h-0 w-0 lg:h-[300px] lg:w-full lg:rounded-[20px_20px_20px_20px] lg:opacity-5" src={prpos.card[getright].image} onClick={nextSlide}></img>
                    <BsChevronCompactRight className="lg:w-0" onClick={nextSlide} size={30}/></div>   
            </div> 
    )
}