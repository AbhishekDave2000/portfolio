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

const ContactInfo = () => {
    return(
        <div className="flex flex-col gap-4 py-10 px-10 border border-amber-950 rounded-2xl">
            {/* Header Section */}
            <div className="flex flex-row item-center gap-3">
                <IoPersonOutline size={40} className="mt-1.5"/>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl text-white">Let's Connect</h1>
                    <div className="flex gap-2 items-center">
                        <div className="h-0.5 w-20 bg-linear-to-r from-amber-500 to-amber-900"></div>
                        <div className="h-1 w-1 rounded-full bg-amber-500"></div>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="felx flex-col my-2">
                
                {/* Email Info */}
                <div className="flex flex-row items-center gap-4 p-2">
                    <div className="border border-amber-900 rounded-lg w-fit p-2.5">
                        <MdOutlineMail size={28} className="text-amber-500"/>
                    </div>
                    <div className="flex flex-col font-light">
                        <span>Email</span>
                        <a href="mailto:abhishek.dave.ca@gmail.com">abhishek.dave.ca@gmail.com</a>
                    </div>
                </div>


                {/* Linkedin info */}
                <div className="flex flex-row items-center gap-4 p-2">
                    <div className="border border-blue-900 rounded-lg w-fit p-2.5">
                        <FaLinkedinIn size={28} className="text-blue-400"/>
                    </div>
                    <div className="flex flex-col font-light">
                        <span>Linkedin</span>
                        <a href="https://www.linkedin.com/in/abhishek-dave-15b3711a4/" target="_blank" rel="noopener noreferrer">linkedin.com/abhishek-dave</a>
                    </div>
                </div>

                {/* Github info */}
                <div className="flex flex-row items-center gap-4 p-2">
                    <div className="border border-zinc-800 rounded-lg w-fit p-2.5">
                        <FaGithub size={28} className="text-zinc-500"/>
                    </div>
                    <div className="flex flex-col font-light">
                        <span>Github</span>
                        <a href="https://github.com/AbhishekDave2000" target="_blank" rel="noopener noreferrer">github.com/abhishek-dave</a>
                    </div>
                </div>


                <div className="flex flex-row items-center gap-4 p-2">
                    <div className="border border-emerald-800 rounded-lg w-fit p-2.5">
                        <IoDocumentTextOutline size={28} className="text-emerald-400"/>
                    </div>
                    <div className="flex flex-col font-light">
                        <span>Resume</span>
                        <a href="/Abhishek_Dave.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-400">Download My Resume</a>
                    </div>
                </div>
            </div>

            <hr className="text-emerald-900" />

            {/* Opportunity Cards */}
            <div className="flex flex-col">

                {/* Heading */}
                <div className="flex flex-row gap-4 my-1">
                    <div className="text-amber-500">
                        <BsRocketTakeoff size={40} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-amber-500 text-xl">Open To Opportunities</h2>
                        <span className="text-zinc-400 text-sm">Actively Looking for full time opportunities and exciting new challanges</span>
                    </div>
                </div>

                {/* cards */}
                <div className="flex items-center justify-between gap-2 my-4">
                    <div className="flex flex-col h-full rounded-lg items-center gap-0.5 border border-zinc-600 p-3.5">
                        <div className="text-amber-400">
                            <MdOutlineDateRange size={32}/>
                        </div>
                        <span className="text-amber-400 text-center text-2xl">3+</span>
                        <span className="text-sm text-center text-zinc-500">Years Of Experience</span>
                    </div>
                    
                    <div className="flex flex-col h-full rounded-lg items-center gap-0.5 border border-zinc-600 p-3.5">
                        <div className="text-blue-300">
                            <FaRegBuilding size={32} />
                        </div>
                        <span className="text-blue-300 text-center text-2xl">2</span>
                        <span className="text-sm text-center text-zinc-500">Company's Experience</span>
                    </div>

                    <div className="flex flex-col h-full rounded-lg items-center gap-0.5 border border-zinc-600 p-3.5">
                        <div className="text-purple-700">
                            <BsGraphUpArrow size={32} />
                        </div>
                        <span className="text-purple-700 text-center text-2xl">60%</span>
                        <span className="text-sm text-center text-zinc-500">Performance Improvement</span>
                    </div>

                    <div className="flex flex-col h-full rounded-lg items-center gap-0.5 border border-zinc-600 p-3.5">
                        <div className="text-green-400">
                            <GoShieldCheck size={32} />
                        </div>
                        <span className="text-green-400 text-center text-2xl">100</span>
                        <span className="text-sm text-center text-zinc-500">Test Coverage</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;