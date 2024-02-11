import React from "react";
import main1 from "./assets/projects/main1.jpg";
import main2 from "./assets/projects/main2.png";
import main4 from "./assets/projects/main4.jpg";
import Cards from "./Cards";

const template=[
    {
        image:main1,
        name:"Hospital Management Sysytem",
        tech:['HTML','CSS','JS','JAVA','ORACLE','APACHE'],
    },
    {
        image:main4,
        name:"Bengali Speaker Identification",
        tech:['Python','ML','Keras','TF'],
    },
    {
        image:main2,
        name:"Price Tracker App",
        tech:['NextJs','MongoDb','Tailwind'],
    }
]
    
export default function Mainproject(){

    return(
        <div className="flex flex-col pb-10 justify-center items-center space-y-4 lg:space-y-10">
            <div className="bg-black w-2/5 md:w-1/3 lg:w-2/12 text-center h-10 md:h-12 py-2 md:py-1 rounded-full text-sm md:text-2xl md:font-semibold lg:text-lg lg:py-2 lg:font-normal">Complete Projects</div>
            <Cards card={template}/>
        </div>
    )
}