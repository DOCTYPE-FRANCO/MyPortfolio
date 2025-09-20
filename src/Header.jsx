import React from "react";
import TypeWriter from "typewriter-effect";
import Pic from "./assets/pic.jpg"
import Navbar from "./Navbar.jsx";
import Herosection from "./Herosection.jsx";


function Header(){
    return (
        <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
            
            <Herosection />
            
        </div>
    );
}

export default Header;