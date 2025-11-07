import React, {useState, useRef, useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import emailjs from "emailjs-com";


function Contact(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    useEffect(() =>{
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView]);

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }));
    }

    function handleSubmit(e){
        e.preventDefault()
        sendEmail(e);
        setFormData({name : "", email: "", message: ""})
    }

    
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_vsh58jn",   // from EmailJS
        "template_s8t2hec",  // from EmailJS
        formData,
        "QO3Bc1-skumtpIPBZ"    // from EmailJS
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Something went wrong!");
        }
      );
  }

    return(
        <motion.div 
            variants={{
                hidden: {opacity: 0, x: 100},
                visible: {opacity: 1, x: 0, transition: {duration: 1}}
            }}
            initial = "hidden"
            animate={mainControls}
            className="z-50 flex flex-col justify-center items-center gap-5 mt-40 mb-10" 
            id="Contact"
            ref={ref}
        >
            <h2 className="text-white font-bold text-4xl">
                Get In Touch
            </h2>

            <div className="bg-white w-[300px] h-[390px] md:w-[600px] md:h-[390px] rounded-2xl ">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-5 gap-2">
                    <label className="flex flex-col font-bold">
                        Name
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Enter your name"
                            onChange={handleChange}
                            className="flex justify-center items-center border md:w-[350px] w-[250px] h-[50px] rounded-full pl-5 "
                        />  
                    </label>

                    <label className="flex flex-col font-bold">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="eg. youremail@gmail.com"
                            onChange={handleChange}
                            className="flex justify-center items-center border md:w-[350px] w-[250px] h-[50px] rounded-full pl-5 focus:outline-none focus:ring-0"
                        />  
                    </label>

                    <label className="flex flex-col font-bold">
                        Message
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            placeholder="Write us a message"
                            onChange={handleChange}
                            className="flex border md:w-[350px] w-[250px] h-[100px] rounded-md pl-5 focus:outline-none focus:ring-0"
                        />  
                    </label>

                    <button className="font-bold m-2 text-white bg-blue-900 hover:text-black hover:bg-gray-400 px-10 py-3 md:px-10 rounded-full active:bg-gray-600">Send</button>
                </form>
            </div>

            
        </motion.div>
    );
}

export default Contact;