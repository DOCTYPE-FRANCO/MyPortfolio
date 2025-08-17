import React from "react";
 function Stack(){
    return(
        <div className="flex flex-col justify-center items-center gap-5 mt-40 " id="Stack">
            <h2 className="text-white text-4xl font-bold">
                Tech Stack
            </h2>

            <div className=" mt-6 mb-10 grid grid-cols-3 gap-9 ">
                <button className=" font-bold text-black bg-white p-3 rounded-full hover:bg-gray-400">React JS</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full hover:bg-gray-400" >Javascript</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full hover:bg-gray-400">Core Java</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full hover:bg-gray-400">Spring</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full hover:bg-gray-400">SpringBoot</button>
                <button className=" font-bold text-black bg-white p-3 rounded-full hover:bg-gray-400">MySql</button>
            </div>
        </div>
    );
 }

 export default Stack;