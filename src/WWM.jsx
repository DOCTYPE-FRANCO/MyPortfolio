import React, {useRef, useEffect} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Target, Goal } from "lucide-react";
function WWM(){
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2);
    const mainControls2 = useAnimation();
    const variants2 =    {
                            hidden:{opacity: 0, x: 75},
                            visible:{opacity: 1, x: 0 }
                        };

    useEffect(() =>{
        if(isInView2){
            mainControls2.start("visible");
        }
    },[isInView2]);

    return(
        <div>
             <motion.section
                initial="hidden"
                animate={mainControls2}
                ref={ref2}
                variants={{
                    hidden:{opacity: 0},
                    visible: {opacity: 1, transition:{staggerChildren: 0.5}}
                }}
                className="flex flex-col justify-center items-center shadow-md shadow-blue-500 mt-20 mb-20 w-[80vw] md:w-[45vw] md:h-[300px] mx-auto rounded-md p-5 md:p-0 bg-white"
            >
                <motion.div variants={variants2} className="flex flex-row justify-center gap-3 mt-10 font-extrabold">
                    <Target color="#000000" />
                    <p className="text-2xl font-bold text-black">Why Work with Me</p>
                </motion.div>

                <section className="flex flex-col gap-3 items-start justify-self-center mt-16">
                    <motion.div variants={variants2} className="flex flex-row gap-5">
                        <Goal color="#000000"/>
                        <p className="text-black font-bold">Problem-solving skills</p>
                    </motion.div>


                    <motion.div variants={variants2} className="flex flex-row gap-5">
                        <Goal color="#000000"/>
                        <p className="text-black font-bold">Attention to detail</p>
                    </motion.div>

                    
                    <motion.div variants={variants2} className="flex flex-row gap-5">
                        <Goal color="#000000"/>
                        <p className="text-black font-bold">Professional and timely communication</p>
                    </motion.div>

                    <motion.div variants={variants2} className="flex flex-row gap-5">
                        <Goal color="#000000"/>
                        <p className="text-black font-bold">Willingness to learn</p>
                    </motion.div>

                </section>
            </motion.section>
        </div>
    );
}

export default WWM;