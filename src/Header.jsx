import React from "react";
import TypeWriter from "typewriter-effect";
import Pic from "./assets/pic.jpg"
import Navbar from "./Navbar.jsx";
import Herosection from "./Herosection.jsx";


function Header(){
    return (
        <div className="min-h-screen flex flex-col pt-32 md:pt-10 items-center overflow-hidden z-40" id="Header">
            
            <Herosection />
            
        </div>
    );
}

export default Header;