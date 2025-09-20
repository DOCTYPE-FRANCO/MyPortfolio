import React from "react";
import HTML from "./assets/html.png"
import CSS from "./assets/css.png"
import JS from "./assets/js.png"
import TAILWIND from "./assets/tailwind.png"
import REACT from "./assets/react-BzCHfcRJ.png"
import JAVA from "./assets/java.png"
import SPRING from "./assets/spring.png"
 function Stack(){
    return(
        <div className="flex flex-col justify-center items-center gap-5 mt-40 " id="Stack">
            <h2 className="text-white text-4xl font-bold">
                Tech Stack
            </h2>

            <div className=" mt-6 mb-10 grid grid-cols-3 gap-9 ">
                <button className=" font-bold text-black bg-white p-3 rounded-full  border-4 hover:border-white transition-all duration-1000">React JS</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full border-4 hover:border-white transition-all duration-1000" >Javascript</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full border-4 hover:border-white transition-all duration-1000">Core Java</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full border-4 hover:border-white transition-all duration-1000">Spring</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full border-4 hover:border-white transition-all duration-1000">SpringBoot</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full border-4 hover:border-white transition-all duration-1000">MySql</button>
            </div>
        </div>
    );
 }

 export default Stack;