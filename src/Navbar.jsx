import React, {useState} from "react";
import X from "./assets/Xicon.svg"
import Menu from "./assets/Ham.png";


function Navbar() {

  const [mobile, setMobile] = useState(false);
  return (
    <div className="fixed bg-black top-0 left-0 w-full h-[50px] bg-transperent overflow-hidden">

      <div className="flex justify-between items-center h-full">
        <div className="ml-10">
          <a href="#Header"><p className="text-white font-extrabold text-2xl">UCHENNA</p></a>
        </div>
        <div>
          <ul className="hidden md:flex gap-8 text-white">
            <li><a href="#Header" className="cursor-pointer hover:text-gray-600 font-bold">Home</a></li>
            <li><a href="#Stack" className="cursor-pointer hover:text-gray-600 font-bold">Stack</a></li>
            <li><a href="#Project" className="cursor-pointer hover:text-gray-600 font-bold">Projects</a></li>
            <li><a href="#Contact" className="cursor-pointer hover:text-gray-600 font-bold">Get In Touch</a></li>
          </ul>
        </div>

        <div>
          
        </div>

        <div className="md:hidden flex justify-end w-full mt-3 mr-3">
          <img src={Menu} onClick={()=> setMobile(true)} className="w-[40px]"/>
        </div>
        { /*  Mobile View */}
        <div className={`md:hidden  ${mobile ? "fixed w-full" : "w-0 h-0"} bg-white right-0 left-0 top-0 bottom-0  justify-center items-center`}>
          <div className=" flex cursor-pointer w-full justify-end mb-10">
            <img src={X} onClick={()=> setMobile(false)} className="w-[50px]" />
          </div>
          <ul className="flex flex-col  gap-9  font-bold text-2xl items-center justify-center">
            <li onClick={() => setMobile(false)}><a href="#Header" className="cursor-pointer hover:text-gray-600 font-bold">Home</a></li>
            <li onClick={() => setMobile(false)}><a href="#Stack" className="cursor-pointer hover:text-gray-600 font-bold">Stack</a></li>
            <li onClick={() => setMobile(false)}><a href="#Project" className="cursor-pointer hover:text-gray-600 font-bold">Projects</a></li>
            <li onClick={() => setMobile(false)}><a href="#Contact" className="cursor-pointer hover:text-gray-600 font-bold">Get In Touch</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
