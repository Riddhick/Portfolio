import React from "react";
import main1 from "./assets/projects/main1.jpg";
import { useState } from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";

const template=[
    {
        image:main1,
        name:"Hospital Management Sysytem",
        tech:['HTML','CSS','JS','JAVA','ORACLE','APACHE'],
    },
]
    
export default function Mainproject(){
    const [getProject,setProject]=useState(0);

    const nextSlide=()=>{
        const pos=getProject;
        const newPos=(pos+1)%template.length;
        setProject(newPos)
        console.log(newPos)
    }

    const prevSlide=()=>{
        const pos=getProject;
        const newPos=(pos+1)%template.length;
        setProject(newPos)
        console.log(newPos)
    }

    return(
        <div className="flex flex-col pb-10 justify-center items-center space-y-4">
            <div className="bg-black w-2/5 text-center h-10 py-1 rounded-full text-lg">Main Projects</div>
            <div className=" w-full flex flex-row justify-center gap-2" >
                <div className="w-1/12 pt-32"><BsChevronCompactLeft onClick={prevSlide} size={30}/></div>
                <div className="bg-black w-10/12 h-72 rounded-[20px] flex flex-col gap-0">
                    <div className="bg-slate-50 h-1/2 rounded-[20px_20px_0px_0px]">
                        <img className="rounded-[20px_20px_0px_0px]" src={template[getProject].image}></img>
                    </div>
                    <div className="text-center py-4">{template[getProject].name}</div>
                    <div className="grid grid-cols-3 gap-2 px-6 text-xs font-medium">
                        {template[getProject].tech.map(t=>(
                            <div className="bg-amber-400 w-11/12 text-center rounded-full">{t}</div>
                        ))}
                    </div>
                </div>
                <div className="w-1/12 pt-32 pl-2  "><BsChevronCompactRight  onClick={nextSlide} size={30}/></div>   
            </div> 
        </div>
    )
}