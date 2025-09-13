import React from "react";
import TypeWriter from "typewriter-effect";
import Pic from "./assets/pic.jpg"
import Navbar from "./Navbar.jsx";

function Header(){
    return (
        <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <Navbar />
            
            <div className="md:mt-30 flex flex-col  justify-center items-center gap-30 md:flex-row md:items-center md:justify-center" >
                <div className="flex flex-col justify-center items-center gap-5 text-center">
                    <h1 className="text-white text-5xl font-bold px-60 py-10 md:px-3 md:py-10">Hi, I'm Uchenna Emeh</h1>
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
                        
                
                    <p className="text-white max-w-85">Skilled developer dedicated to building efficient solutions, writing clean and maintainable code, and solving complex problems with creativity and precision.</p>
                </div>
                <div>
                    <img src={Pic}  className="rounded-full w-[250px] object-cover md:w-[350px]"/>
                </div>
            </div>
        </div>
    );
}

export default Header;