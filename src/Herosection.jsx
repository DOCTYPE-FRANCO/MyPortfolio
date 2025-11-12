import React, {useState, useRef, useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import TypeWriter from "typewriter-effect";
import Pic from "./assets/pic.jpg"
function Herosection(){
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
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
                            strings: ['Web Developer', 'Web 3 Developer', ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 100,
                            wrapperClassName: "text-white md:text-5xl text-3xl font-extrabold",
                            cursorClassName: "text-white md:text-4xl text-3xl font-bold"
                        }}
                    />
                    <p className="text-gray-300 text-md max-w-85 md:max-w-200 font-extrabold">I’m a Full-Stack Web Developer skilled in building responsive and dynamic web applications. My frontend expertise includes React JS, Tailwind CSS, JavaScript, and HTML, while my backend work leverages Spring Boot for scalable and efficient APIs. In addition, I develop Web3 applications, utilizing Solidity and blockchain frameworks to integrate decentralized functionality into modern web experiences.</p>
                </motion.div>
                
            </div>
    );
}

export default Herosection;