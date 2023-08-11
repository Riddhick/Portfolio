import React from "react";
import { useState } from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";

export default function Cards(prpos){
    const [getProject,setProject]=useState(0);

    const nextSlide=()=>{
        const pos=getProject;
        const newPos=(pos+1)%prpos.card.length;
        setProject(newPos)
        console.log(newPos)
    }

    const prevSlide=()=>{
        const pos=getProject;
        const newPos=(pos+1)%prpos.card.length;
        setProject(newPos)
        console.log(newPos)
    }
    return(
        <div className=" w-full flex flex-row justify-center gap-2" >
                <div className="w-1/12 pt-32 md:pt-64"><BsChevronCompactLeft onClick={prevSlide} size={30}/></div>
                <div className="bg-black w-10/12 h-72  md:h-[550px] rounded-[20px] flex flex-col gap-0">
                    <div className="bg-slate-50 rounded-[20px_20px_0px_0px]">
                        <img className="rounded-[20px_20px_0px_0px] md:h-fit md:w-full" src={prpos.card[getProject].image}></img>
                    </div>
                    <div className="text-center py-4 md:py-10 md:text-2xl md:font-medium">{prpos.card[getProject].name}</div>
                    <div className="grid grid-cols-3 gap-2 md:gap-4 px-6  md:px-4 text-xs text-black font-medium md:text-lg md:font-semibold">
                        {prpos.card[getProject].tech.map(t=>(
                            <div className="bg-amber-400 w-11/12 md:h-8 text-center  rounded-full">{t}</div>
                        ))}
                    </div>
                </div>
                <div className="w-1/12 pt-32 md:pt-64 pl-2 md:pl-4  "><BsChevronCompactRight onClick={nextSlide} size={30}/></div>   
            </div> 
    )
}