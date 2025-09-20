import React from "react";
import Linked from "./assets/In.png"
import Github from "./assets/Github.png"
import X from "./assets/X.png"
import Whatsapp from "./assets/Whatsapp.png"
function Footer(){
    return(
        <div className=" flex flex-col gap-4 w-full  h-[50px]items-center justify-center border-t-2 border-gray-800 text-center sticky top-full pt-10 pb-10">
            <p className="text-white ">&copy; 2025 Uchenna Emeh. All rights reserved.</p>

            <div className="flex flex-row gap-3 justify-center">
            
                    <div>
                        <a href="https://www.linkedin.com/in/uchenna-emeh-9b5833356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={Linked} className="w-[30px] hover:scale-125 transition-all duration-500"/></a>
                    </div>
                           
                    <div>
                        <a href=""><img src={Whatsapp} className="w-[30px] hover:scale-125 transition-all duration-500"/></a>
                    </div>
                        
                    <div>
                        <a href="https://x.com/doctype_franco?s=21"><img src={X} className="w-[30px] hover:scale-125 transition-all duration-500"/></a> 
                    </div>

                    <div>
                        <a href="https://github.com/DOCTYPE-FRANCO"><img src={Github} className="w-[30px] hover:scale-125 transition-all duration-500"/></a>
                    </div>
            
            </div>
        </div>
    );
}

export default Footer;