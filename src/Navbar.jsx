import React, {useState} from "react";
import X from "./assets/Xicon.svg"
import Menu from "./assets/Ham.png";
import { XIcon, HomeIcon, Laptop, Mail, Book} from "lucide-react";


function Navbar() {

  const [mobile, setMobile] = useState(false);
  return (
    <div className="fixed shadow-white shadow-xs z-50 bg-blue-950 top-0 left-0 w-full h-[50px] bg-transperent overflow-hidden">

      <div className="flex flex-row md:justify-around justify-between items-center h-full">
        <div className="pl-10">
          <a href="#Header"><p className="text-white font-extrabold text-2xl">UCHENNA</p></a>
        </div>
        <div>
          <ul className="hidden md:flex gap-8 text-white">
            <li><a href="#Header" className="cursor-pointer hover:text-gray-600 font-bold">Home</a></li>
            <li><a href="#Stack" className="cursor-pointer hover:text-gray-600 font-bold">Stack</a></li>
            <li><a href="#Projects" className="cursor-pointer hover:text-gray-600 font-bold">Projects</a></li>
            <li><a href="#Contact" className="cursor-pointer hover:text-gray-600 font-bold">Get In Touch</a></li>
          </ul>
        </div>

        

        <div onClick={()=> setMobile(true)} className="flex md:hidden text-white text-3xl -mr-16">
          ☰
        </div>
        { /*  Mobile View */}
        <div className={`md:hidden  ${mobile ? "fixed w-full h-[300px] transition-all duration-500" : "w-0 h-0 transition-all duration-500"} bg-blue-950 right-0 left-0 top-0 bottom-0  justify-center items-center`}>
          <div className=" flex cursor-pointer w-full justify-between mb-10">
            <p className="text-white font-thin text-3xl pl-3">MENU</p>
            <XIcon onClick={()=> setMobile(false)} size={40} color="#FFFFFF" />
          </div>
          <ul className="flex flex-col gap-2 pl-10 font-bold text-2xl  w-full">
            <li onClick={() => setMobile(false)} className="flex flex-row gap-10 text-white font-thin w-[200px] items-center">
              <HomeIcon  color="#FFFFFF"/>
              <a href="#Header" >Home</a>
            </li>
            <li onClick={() => setMobile(false)} className="flex flex-row gap-10 text-white font-thin w-[200px] items-center">
              <Laptop color="#FFFFFF"/>
              <a href="#Stack">Stack</a>
            </li>
            <li onClick={() => setMobile(false)} className="flex flex-row gap-10 text-white font-thin w-[200px] items-center">
              <Book color="#FFFFFF"/>
              <a href="#Projects" >Projects</a>
            </li>
            <li onClick={() => setMobile(false)} className="flex flex-row gap-10 text-white font-thin w-[200px] items-center">
              <Mail color="#FFFFFF"/>
              <a href="#Contact" >Get In Touch</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
