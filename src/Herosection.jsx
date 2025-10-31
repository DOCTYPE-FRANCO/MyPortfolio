import React, {useState, useRef, useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import TypeWriter from "typewriter-effect";
import Pic from "./assets/pic.jpg"
function Herosection(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() =>{
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);
    return(
        <div className="md:mt-10 flex flex-col  justify-center items-center md:flex-row md:items-center md:justify-center z-30" >
                <motion.div 
                    ref = {ref}
                    variants={{
                        hidden: {opacity: 0, x: 100},
                        visible: {opacity: 1, x: 0, transition: {duration: 1}},
                    }}
                    initial="hidden"
                    animate={mainControls}
                    className="flex flex-col justify-center items-center gap-5 text-center md:mt-0"
                >
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold px-10 py-10 md:px-3 md:py-10">Franco Emeh</h1>
                    <TypeWriter
                        options={{
                            strings: ['Software Developer', 'Web Developer', ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 100,
                            wrapperClassName: "text-white md:text-5xl text-3xl font-extrabold",
                            cursorClassName: "text-white md:text-4xl text-3xl font-bold"
                        }}
                    />
                    <p className="text-gray-300 max-w-85 md:max-w-200 font-extrabold">I’m a Web Developer who loves bringing ideas to life on the web. I work mainly with HTML, JavaScript, Tailwind CSS, and React JS on the Frontend to build clean, responsive, and user-friendly interfaces, whilst using Java's SpringBoot framework to write backend logic.</p>
                </motion.div>
                
            </div>
    );
}

export default Herosection;