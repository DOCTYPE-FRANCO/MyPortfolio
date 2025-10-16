import React, {useState} from "react";
import { XIcon, HomeIcon, Laptop, Mail, Book, MenuIcon} from "lucide-react";


function Navbar() {

  const [mobile, setMobile] = useState(false);
  return (
    <div className="fixed  z-50 bg-blue-950/90  top-0 left-0 w-full h-[50px] bg-transperent overflow-hidden">

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

        

        <div onClick={()=> setMobile(!mobile)} className="flex md:hidden text-white text-3xl pr-3.5">
          {mobile ? <XIcon size={34}/> : <MenuIcon size={34}/>}
        </div>

        {mobile && (
          <div className="fixed top-12 right-2.5 w-[150px] bg-blue-900/80 backdrop-blur-sm flex flex-col gap-7 py-4 justify-center items-center">
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


        { /*  Mobile View */}
        <div className={`hidden  ${mobile ? "fixed w-full h-[300px] transition-all duration-500" : "w-0 h-0 transition-all duration-500"} bg-blue-950 right-0 left-0 top-0 bottom-0  justify-center items-center`}>
          <div className=" flex cursor-pointer w-full justify-between mb-10">
            <p className="text-white font-thin text-3xl pl-3">MENU</p>
            <XIcon onClick={()=> setMobile(false)} size={40} color="#FFFFFF" />
          </div>
          <ul className="flex flex-col gap-2 pl-10 font-bold text-2xl  w-full">

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
