import React from "react";
import Mail from "./assets/mail.svg";
import Linked from "./assets/linked.svg";   
import Whatsapp from "./assets/whatsapp.svg";

function Contact(){
    return(
        <div className="flex flex-col justify-center items-center gap-5 mt-40" id="Contact">
            <h2 className="text-white font-bold text-4xl">
                Get In Touch
            </h2>

            <div className="flex flex-col md:flex md:flex-row gap-10 mt-10 ">
                <div className="bg-white w-[200px] h-[200px] rounded-3xl relative bottom-0 hover:bottom-6  transition-all duration-500">
                    <div className="flex flex-col justify-center items-center gap-7">
                        <img src={Mail} className="h-[60px] w-[60px]"/>
                        <p>ufrancis186@gmail.com</p>
                    </div>
                </div>
                <div className="bg-white w-[200px] h-[200px] rounded-3xl relative bottom-0 hover:bottom-6  transition-all duration-500">
                    <div className="flex flex-col justify-center items-center gap-7">
                        <img  src={Whatsapp} className="h-[60px] w-[60px]"/>
                        <p>+234-812-036-2926</p>
                    </div>
                </div>
                <div className="bg-white w-[200px] h-[200px] rounded-3xl relative bottom-0 hover:bottom-6  transition-all duration-500">
                    <div className="flex flex-col justify-center items-center gap-7">
                        <img src={Linked} className="h-[60px] w-[60px]" />
                        <p>Uchenna-Emeh</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;