import React from "react";
import { HashLink as Link} from "react-router-hash-link";
import {BrowserRouter } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="py-4 bg-zinc-900 px-10 lg:px-32 w-full flex flex-row text-gray-50 justify-between sticky top-0">
            <div className="underline underline-offset-16 decoration-amber-400 decoration-4 font-medium" ><Link smooth to="#home" >HOME</Link></div>
            <div className="flex flex-row space-x-8">
                <div className="hover:underline underline-offset-16 decoration-amber-400 decoration-4"><Link smooth to="#projects" >Projects</Link></div>
                <div className="hover:underline underline-offset-16 decoration-amber-400 decoration-4"><Link smooth to="#contact" >Contact</Link></div>
            </div>
        </div>
    )
};