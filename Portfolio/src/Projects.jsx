import React from "react";
import Mainproject from "./Mainproject";
import Subproject from "./Subproject";

export default function Projects(){
    return(
        <div className="px-4 md:px-8 lg:px-14 flex flex-col  text-gray-50 gap-4 ">
            <div className="text-2xl font-semibold text-center">Projects</div>
            <hr className="w-full h-1 my-4 bg-gray-400 border-0 rounded"></hr>
            <Mainproject />
            <Subproject />
        </div>
    )
}