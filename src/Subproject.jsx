import React from "react";
import Cards from "./Cards";

import sub1 from "./assets/projects/sub1.png";
import sub2 from "./assets/projects/sub2.png"
import sub3 from "./assets/projects/sub3.png"
import sub4 from "./assets/projects/main3.jpg";

const templates=[
    {
        image:sub1,
        name:"Cart System",
        tech:['React','Redux','Tailwind']
    },
    {
        image:sub2,
        name:"Login Module",
        tech:['React','Express','MongoDB','Tailwind','Node']
    },
    {
        image:sub3,
        name:"Simple Snake Game",
        tech:['HTML','CSS','JS'],
    },
    {
        image:sub4,
        name:"Portfolio v1",
        tech:['HTML','CSS','JS'],
    }
    

]

export default function Subproject(){

    return(
        <div className="flex flex-col pb-10 justify-center items-center space-y-4">
            <div className="bg-black w-2/5 md:w-1/3 lg:w-2/12 text-center h-10 md:h-12 py-2 md:py-1 rounded-full text-sm md:text-2xl md:font-semibold lg:text-lg lg:py-2 lg:font-normal">Sub Projects</div>
            <Cards card={templates}/>
        </div>
    )
}