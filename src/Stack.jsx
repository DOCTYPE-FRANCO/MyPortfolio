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

            

            <div className="grid grid-cols-4 gap-5 ">
                <div className="flex flex-col bg-white w-[100px] h-[100px] items-center justify-center rounded-xl">
                    <img src={HTML} className="w-[60px] flex justify-center"/>
                    <p className="font-bold">HTML</p>
                </div>

                <div className="flex flex-col bg-white w-[100px] h-[100px] items-center justify-center rounded-xl gap-1">
                    <img src={CSS} className="w-[60px] flex justify-center"/>
                    <p className="font-bold">CSS</p>
                </div>

                <div className="flex flex-col bg-white w-[100px] h-[100px] items-center justify-center rounded-xl gap-1">
                    <img src={JS} className="w-[60px] flex justify-center"/>
                    <p className="font-bold">Javascript</p>
                </div>

                <div className="flex flex-col bg-white w-[100px] h-[100px] items-center justify-center rounded-xl gap-3">
                    <img src={TAILWIND} className="w-[60px] flex justify-center"/>
                    <p className="font-bold">Talilwind CSS</p>
                </div>

                <div className="flex flex-col bg-white w-[100px] h-[100px] items-center justify-center rounded-xl gap-1">
                    <img src={REACT} className="w-[60px] flex justify-center"/>
                    <p className="font-bold">React</p>
                </div>

                <div className="flex flex-col bg-white w-[100px] h-[100px] items-center justify-center rounded-xl gap-1">
                    <img src={JAVA} className="w-[60px] flex justify-center"/>
                    <p className="font-bold">Java</p>
                </div>

                <div className="flex flex-col bg-white w-[100px] h-[100px] items-center justify-center rounded-xl gap-1">
                    <img src={SPRING} className="w-[60px] flex justify-center"/>
                    <p className="font-bold">SpringBoot</p>
                </div>

            </div>
        </div>
    );
 }

 export default Stack;