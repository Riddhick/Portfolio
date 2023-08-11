import React from "react";
import main1 from "./assets/projects/main1.jpg";
import main2 from "./assets/projects/main2.png";
import main3 from "./assets/projects/main3.jpg";
import Cards from "./Cards";

const template=[
    {
        image:main1,
        name:"Hospital Management Sysytem",
        tech:['HTML','CSS','JS','JAVA','ORACLE','APACHE'],
    },
    {
        image:main2,
        name:"Simple Snake Game",
        tech:['HTML','CSS','JS'],
    },
    {
        image:main3,
        name:"Portfolio v1",
        tech:['HTML','CSS','JS'],
    }
]
    
export default function Mainproject(){

    return(
        <div className="flex flex-col pb-10 justify-center items-center space-y-4">
            <div className="bg-black w-2/5 md:w-1/3 text-center h-10 md:h-12 py-1 md:py-2 rounded-full text-lg md:text-xl md:font">Main Projects</div>
            <Cards card={template}/>
        </div>
    )
}