import React from "react";

export default function Navbar(){
    return (
        <div className="py-4 px-10 lg:px-20 w-full flex flex-row text-gray-50 justify-between">
            <div className="underline underline-offset-16 decoration-amber-400 decoration-4 font-medium" >HOME</div>
            <div className="flex flex-row space-x-8">
                <div className="">Projects</div>
                <div className="">Contact</div>
            </div>
        </div>
    )
};