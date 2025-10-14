import React from "react";
import {motion} from "motion/react"
import TypeWriter from "typewriter-effect";
import Pic from "./assets/pic.jpg"
function Herosection(){
    return(
        <div className="md:mt-30 flex flex-col  justify-center items-center gap-30 md:flex-row md:items-center md:justify-center z-40" >
                <div className="flex flex-col justify-center items-center gap-5 text-center  mt-7 md:mt-0">
                    <h1 className="text-white text-5xl font-bold px-10 py-10 md:px-3 md:py-10">Hi, I'm <br/><span className="block mt-5 md:mt-0 w-[400px]">Uchenna Emeh</span></h1>
                    <TypeWriter
                        options={{
                            strings: ['Software Developer', 'Web Developer', ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 100,
                            wrapperClassName: "text-white text-3xl font-semibold",
                            cursorClassName: "text-white text-3xl font-semibold"
                        }}
                    />
                        
                
                    <p className="text-white max-w-85 md:max-w-90 font-bold">I’m a Web Developer who loves bringing ideas to life on the web. I work with HTML, CSS, JavaScript, Tailwind CSS, and React JS on the Frontend to build clean, responsive, and user-friendly interfaces, whilst using Java's SpringBoot framework to write backend logic.</p>
                </div>
                <div>
                    <motion.img
                        initial= {{opacity:0, x:100}}
                        animate={{opacity:1, x:0}}
                        transition={{duration: 2}}
                        src={Pic}
                        className="rounded-full w-[250px] object-cover md:w-[350px]"/>
                </div>
            </div>
    );
}

export default Herosection;