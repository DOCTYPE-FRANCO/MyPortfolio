import React from "react";
import LekkiD from "./assets/LekkiD.png"
import lekkip from "./assets/lekkiP.png"
import LMSD from "./assets/LMSD.png"
import LMSP from "./assets/LMSP.png"
import ManiaD from "./assets/ManiaD.png"
import ManiaP from "./assets/ManiaP.png"
import ScrollD from "./assets/SCD.png"
import ScrollP from "./assets/scrp.png"
import {motion} from "motion/react"
import Link from "./assets/lii.png"
import Github from "./assets/Github.png"

function Projects(){
    const projects = [

        {
            id: 1,
            imgD : ScrollD,
            imgP : ScrollP,
            stack: "ReactJS + TailWindCSS + SpringBoot + MySql + Fly(Hosting Service)",
            link : "https://scroll-zcx5.vercel.app/",
            name : "Web Application for Accessing Past Questions"
        },

        {
            id: 2,
            imgD : LekkiD,
            imgP : lekkip,
            stack: "ReactJS + TailWindCSS",
            link : "https://lekkibrothers.com.ng",
            name : "Landing Page Website for an Organization"
        },

        {
            id: 3,
            imgD : LMSD,
            imgP : LMSP,
            stack: "ReactJS + TailWindCSS + SpringBoot(Backend) + mySql(Database)",
            link: "https://lab-management-software.vercel.app/",
            name : "Custom Web Application, For Lab Management"
        },

        {
            id: 4,
            imgD : ManiaD,
            imgP : ManiaP,
            stack: "ReactJS + TailWindCSS + SpringBoot",
            link: "https://maniacrumble-6f42.vercel.app/",
            name : "E-Commerce Website for Headwear Brand"
        },
    ]

    return(
        <div className="mt-10 z-50" id="Projects">
            <div className="mb-10"><h2 className="text-white font-bold text-center text-2xl md:text-3xl">Projects I Have Worked On</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-y-10 gap-x-5">
                {projects.map((project) => (
                    <motion.div 
                        key={project.id}
                        initial={{opacity: 0, x:100}}
                        animate={{opacity:1, x:0}}
                        transition={{duration: 2}}
                        className="flex flex-col justify-center items-center border border-blue-700 py-3 px-0 rounded-2xl"
                    >
                        <div className="flex flex-row mb-6">
                            <div>
                                <img src={project.imgD} className="md:w-[300px] w-[350px]" />
                            </div>
                            <div className="md:block hidden">
                                <img src={project.imgP} className="md:w-[150px] w-[70px]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-white font-bold text-2xl text-center">{project.name}</p>
                            <p className="text-white font-bold text-center">{project.stack}</p>

                            <div className="flex flex-row text-white gap-3 font-bold items-center justify-center">
                                <div className="flex flex-row gap-2">
                                    <a href="https://github.com/DOCTYPE-FRANCO" className="hover:text-gray-600 active:text-amber-50">Code</a>
                                    <img src={Github} className="w-8 h-6 " />
                                </div>

                                <div className="flex flex-row gap-2 cursor-pointer">
                                    <a href={project.link} className="hover:text-gray-600 active:text-amber-50">View </a>
                                    <img src={Link} className="w-6 h-6 rounded-full" />
                                </div>
                                
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;