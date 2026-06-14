import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsRocketTakeoff } from "react-icons/bs";

import { MdOutlineDateRange } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { useColor } from "../context/ThemeContext";

const ContactInfo = () => {
    const { c } = useColor();

    return(
        <div className={`flex flex-col gap-4 py-10 px-5 mx-auto w-full md:col-span-1 border border-${c(950)} rounded-2xl`}>
            {/* Header Section */}
            <div className='mb-0 lg:mb-5'>
                <div className='flex gap-4'>
                    <div className={`h-14 w-14 flex items-start justify-center text-${c(400)} font-light`}>
                        <IoPersonOutline className='text-2xl lg:text-5xl mt-1.5'/>
                    </div>

                    <div>
                        <h2 className="text-2xl lg:text-5xl font-light text-white">
                            Let's Connect
                        </h2>
                        <div className="flex gap-2 items-center">
                            <div className={`h-0.5 w-20 bg-linear-to-r from-${c(500)} to-${c(900)}`}></div>
                            <div className={`h-1 w-1 rounded-full bg-${c(500)}`}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="felx flex-col my-2">
                
                {/* Email Info */}
                <div className="flex flex-row items-center gap-4 p-2">
                    <div className={`border border-amber-900 rounded-lg w-fit p-2.5`}>
                        <MdOutlineMail className={`text-md lg:text-2xl text-amber-500`}/>
                    </div>
                    <div className="flex flex-col font-light">
                        <span className="text-sm lg:text-xl">Email</span>
                        <a href="mailto:abhishek.dave.ca@gmail.com" className="text-xs lg:text-xl text-amber-200">abhishek.dave.ca@gmail.com</a>
                    </div>
                </div>


                {/* Linkedin info */}
                <div className="flex flex-row items-center gap-4 p-2">
                    <div className="border border-blue-900 rounded-lg w-fit p-2.5">
                        <FaLinkedinIn className="text-md lg:text-2xl text-blue-400"/>
                    </div>
                    <div className="flex flex-col font-light">
                        <span className="text-sm lg:text-xl">Linkedin</span>
                        <a href="https://www.linkedin.com/in/abhishek-dave-15b3711a4/" target="_blank" rel="noopener noreferrer" className="text-xs lg:text-xl text-blue-400">linkedin.com/abhishek-dave</a>
                    </div>
                </div>

                {/* Github info */}
                <div className="flex flex-row items-center gap-4 p-2">
                    <div className="border border-zinc-800 rounded-lg w-fit p-2.5">
                        <FaGithub className="text-md lg:text-2xl text-zinc-500"/>
                    </div>
                    <div className="flex flex-col font-light">
                        <span className="text-sm lg:text-xl">Github</span>
                        <a href="https://github.com/AbhishekDave2000" target="_blank" rel="noopener noreferrer" className="text-xs lg:text-xl text-zinc-500">github.com/abhishek-dave</a>
                    </div>
                </div>


                <div className="flex flex-row items-center gap-4 p-2">
                    <div className="border border-emerald-800 rounded-lg w-fit p-2.5">
                        <IoDocumentTextOutline className="text-md lg:text-2xl text-emerald-400"/>
                    </div>
                    <div className="flex flex-col font-light">
                        <span className="text-sm lg:text-xl">Resume</span>
                        <a href="/Abhishek_Dave.pdf" target="_blank" rel="noopener noreferrer" className="text-xs lg:text-xl text-emerald-400">Download Resume</a>
                    </div>
                </div>
            </div>

            <hr className="text-emerald-900" />

            {/* Opportunity Cards */}
            <div className="flex flex-col">

                {/* Heading */}
                <div className="flex flex-row gap-4 my-1">
                    <div className={`text-${c(500)}`}>
                        <BsRocketTakeoff className="text-xl lg:text-4xl mt-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className={`text-${c(300)} text-xl`}>Open To Opportunities</h2>
                        <span className="text-zinc-400 text-sm">Actively Looking for full time opportunities and exciting new challanges</span>
                    </div>
                </div>

                {/* cards */}
                <div className="flex flex-wrap items-center justify-between gap-2 my-4">
                    <div className="flex flex-col h-fit w-25 lg:h-40 lg:w-25 rounded-lg items-center justify-center gap-0.5 border border-zinc-600 p-3.5">
                        <div className={`text-amber-400`}>
                            <MdOutlineDateRange className="text-xl lg:text-3xl"/>
                        </div>
                        <span className={`text-amber-400 text-center text-lg lg:text-2xl`}>3+</span>
                        <span className="text-xs lg:text-sm text-center text-zinc-500">Years Of Experience</span>
                    </div>
                    
                    <div className="flex flex-col h-fit w-25 lg:h-40 lg:w-25 rounded-lg items-center justify-center gap-0.5 border border-zinc-600 p-3.5">
                        <div className="text-blue-300">
                            <FaRegBuilding className="text-xl lg:text-3xl" />
                        </div>
                        <span className="text-blue-300 text-center text-lg lg:text-2xl">2</span>
                        <span className="text-xs lg:text-sm text-center text-zinc-500">Company's Experience</span>
                    </div>

                    <div className="flex flex-col h-fit w-25 lg:h-40 lg:w-25 rounded-lg items-center justify-center gap-0.5 border border-zinc-600 p-3.5">
                        <div className="text-purple-700">
                            <BsGraphUpArrow className="text-xl lg:text-3xl" />
                        </div>
                        <span className="text-purple-700 text-center text-lg lg:text-2xl">60%</span>
                        <span className="text-xs lg:text-sm text-center text-zinc-500">Performance Improvement</span>
                    </div>

                    <div className="flex flex-col h-fit w-25 lg:h-40 lg:w-25 rounded-lg items-center justify-center gap-0.5 border border-zinc-600 p-3.5">
                        <div className="text-green-400">
                            <GoShieldCheck className="text-xl lg:text-3xl" />
                        </div>
                        <span className="text-green-400 text-center text-lg lg:text-2xl">100</span>
                        <span className="text-xs lg:text-sm text-center text-zinc-500">Test Coverage</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;