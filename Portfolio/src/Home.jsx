import React from "react";
import image from "./assets/image.jpg"
import git from "./assets/git.png"

export default function Home(){
    return (<>
        <div className="px-10 lg:px-28 flex flex-row my-10 justify-around">
            <div className="pl-5 lg:pl-10 py-2 lg:py-4 h-auto space-y-4 w-4/5 lg:w-2/5 flex flex-col text-gray-50">
                <div className="text-6xl lg:text-8xl font-semibold">Hi</div>
                <div className="text-2xl lg:text-4xl font-semibold"> I am</div>
                <div className="text-4xl lg:text-6xl font-semibold">Riddhick Dalal</div>
                <div className="flex flex-col pt-10">
                    <div className="text-sm md:text-lg font-medium">Full Stack | Game Development</div>
                    <div className="text-sm md:text-lg font-medium">Android | Machine Learning</div>
                </div>
                <div className="h-20 pt-10  mx-0 md:mx-20 md:h-28 flex flex-row space-x-8 justify-center items-center">
                    <button><img className="h-[63px] w-[64px] bg-slate-50 rounded-full " src={git}></img></button>
                    <button className="bg-black w-3/5 h-12 rounded-full">Get Resume</button>
                </div>
            </div>
            <div className="pr-10 md:pr-16 w-0 sm:w-2/5 py-10">
                <img className="rounded-[1000px] shadow-[0px_0px_50px_-5px] shadow-amber-400 " src={image}></img>
            </div> 
        </div>
        <hr className="w-11/12 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10"></hr>
        </>
    )
}