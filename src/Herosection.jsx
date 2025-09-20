import React from "react";
import TypeWriter from "typewriter-effect";
import Pic from "./assets/pic.jpg"
function Herosection(){
    return(
        <div className="md:mt-30 flex flex-col  justify-center items-center gap-30 md:flex-row md:items-center md:justify-center" >
                <div className="flex flex-col justify-center items-center gap-5 text-center">
                    <h1 className="text-white text-5xl font-bold px-60 py-10 md:px-3 md:py-10">Hi, I'm <br/><span className="block max-w-[400px]">Uchenna Emeh</span></h1>
                    <TypeWriter
                        options={{
                            strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 100,
                            wrapperClassName: "text-white text-3xl font-semibold",
                            cursorClassName: "text-white text-3xl font-semibold"
                        }}
                    />
                        
                
                    <p className="text-white max-w-85 md:max-w-90 font-bold">I’m a Full-Stack Developer who loves bringing ideas to life on the web. I work with HTML, CSS, JavaScript, Tailwind CSS, and React JS on the Frontend to build clean, responsive, and user-friendly interfaces, whilst using Java's SpringBoot framework to write backend logic.</p>
                </div>
                <div>
                    <img src={Pic}  className="rounded-full w-[250px] object-cover md:w-[350px]"/>
                </div>
            </div>
    );
}

export default Herosection;