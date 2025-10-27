import React, {useState} from "react";
import { XIcon, HomeIcon, Laptop, Mail, Book, MenuIcon} from "lucide-react";


function Navbar() {

  const [mobile, setMobile] = useState(false);
  return (
    <div className="fixed z-40 top-4 left-1/2 -translate-x-1/2 w-[85vw] h-[50px] bg-blue-950/90 overflow-visible flex flex-col justify-center rounded-md mx-auto">

      <div className="flex flex-row md:justify-around justify-between items-center h-full ">
        <div className="pl-10">
          <a href="#Header"><p className="text-white font-extrabold text-2xl">FRANCO</p></a>
        </div>
        <div>
          <ul className="hidden md:flex gap-8 text-white">
            <li><a href="#Header" className="cursor-pointer hover:text-gray-600 font-bold">Home</a></li>
            <li><a href="#Stack" className="cursor-pointer hover:text-gray-600 font-bold">Stack</a></li>
            <li><a href="#Projects" className="cursor-pointer hover:text-gray-600 font-bold">Projects</a></li>
            <li><a href="#Contact" className="cursor-pointer hover:text-gray-600 font-bold">Get In Touch</a></li>
          </ul>
        </div>

        

        <div onClick={()=> setMobile(!mobile)} className="flex md:hidden text-white text-3xl pr-3.5">
          {mobile ? <XIcon size={34}/> : <MenuIcon size={34}/>}
        </div>

        {mobile && (
          <div className=" fixed top-14 right-2.5 w-[150px] bg-blue-950/80 backdrop-blur-sm flex flex-col gap-7 py-4 justify-center items-center rounded-sm z-50">
            <li onClick={() => setMobile(false)} className="flex flex-row gap-1 text-white font-thin">
              <HomeIcon  color="#FFFFFF"/>
              <a href="#Header" >Home</a>
            </li>
            <li onClick={() => setMobile(false)} className="flex flex-row gap-1 text-white font-thin">
              <Laptop color="#FFFFFF"/>
              <a href="#Stack">Stack</a>
            </li>
            <li onClick={() => setMobile(false)} className="flex flex-row gap-1 text-white font-thin">
              <Book color="#FFFFFF"/>
              <a href="#Projects" >Projects</a>
            </li>
            <li onClick={() => setMobile(false)} className="flex flex-row gap-1 text-white font-thin">
              <Mail color="#FFFFFF"/>
              <a href="#Contact" >Get In Touch</a>
            </li>
          </div>
        )}


        
      </div>
    </div>
  );
}

export default Navbar;
