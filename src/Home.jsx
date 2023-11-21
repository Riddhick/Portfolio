import React from "react";
import image from "./assets/image.png"
import git from "./assets/git.png"
import resume from "./assets/downloadables/Resume.pdf"

export default function Home(){
    return (<>
        <div className="px-16 lg:px-28 flex flex-row my-10 justify-around">
            <div className="pl-5 lg:pl-10 py-2 lg:py-4 h-auto space-y-4 w-4/5 lg:w-2/5 flex flex-col text-gray-50">
                <div className="text-6xl lg:text-8xl font-semibold">Hi</div>
                <div className="text-2xl lg:text-4xl font-semibold"> I am</div>
                <div className="text-4xl lg:text-6xl font-semibold">Riddhick Dalal</div>
                <div className="flex flex-col pt-10">
                    <div className="text-sm md:text-lg font-medium">Full Stack | Game Development</div>
                    <div className="text-sm md:text-lg font-medium">Android | Machine Learning</div>
                </div>
                <div className="h-20 pt-10  mx-0 md:mx-20 md:h-28 flex flex-row space-x-8 justify-center items-center">
                    <button><a href="https://github.com/Riddhick"><img className="h-[63px] w-[64px] lg:w-[72px] lg:h-[65px] bg-slate-50 rounded-full " src={git}></img></a></button>
                    <button className="bg-black w-3/5 lg:w-4/5 h-12 rounded-full"><a href={resume} download="Riddhick_Dalal">Get Resume</a></button>
                </div>
            </div>
        <div className="pr-10 md:pr-10 w-0 sm:w-2/5 py-10">
            <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
            >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(23.536, 23.166, 22.991, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(139.709, 138.221, 135.765, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>

          <mask id="mask1" mask-type="alpha">
            <path
              fill="url(#sw-gradient)"
              d="M24.5,-32.9C31.3,-28.7,36.2,-21,39.1,-12.6C42.1,-4.1,43.1,5.1,39.8,12.2C36.4,19.3,28.8,24.2,21.5,28.2C14.1,32.2,7.1,35.3,-1,36.7C-9.1,38.2,-18.3,37.9,-23.7,33.3C-29.1,28.6,-30.8,19.6,-31.6,11.6C-32.5,3.5,-32.5,-3.5,-30.8,-10.4C-29.1,-17.3,-25.7,-24,-20.3,-28.7C-14.9,-33.4,-7.4,-36,0.7,-36.9C8.8,-37.9,17.6,-37.1,24.5,-32.9Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: "all 0.3s ease 0s" }}
              stroke="url(#sw-gradient)"
            ></path>
          </mask>
          <g mask="url(#mask1)">
            <path
              fill="url(#sw-gradient)"
              d="M24.5,-32.9C31.3,-28.7,36.2,-21,39.1,-12.6C42.1,-4.1,43.1,5.1,39.8,12.2C36.4,19.3,28.8,24.2,21.5,28.2C14.1,32.2,7.1,35.3,-1,36.7C-9.1,38.2,-18.3,37.9,-23.7,33.3C-29.1,28.6,-30.8,19.6,-31.6,11.6C-32.5,3.5,-32.5,-3.5,-30.8,-10.4C-29.1,-17.3,-25.7,-24,-20.3,-28.7C-14.9,-33.4,-7.4,-36,0.7,-36.9C8.8,-37.9,17.6,-37.1,24.5,-32.9Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: "all 0.3s ease 0s" }}
              stroke="url(#sw-gradient)"
            ></path>
            <image
              className="w-3/5"  x='20' y='8'
              href={image}
            ></image>
            </g>
            </svg>
            </div> 
        </div>
        <hr className="w-11/12 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10"></hr>
        </>
    )
}