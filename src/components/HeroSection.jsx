import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { IoDocumentText } from "react-icons/io5";
import { useColor } from '../context/ThemeContext';

const HeroSection = () => {
    const { c, color } = useColor();

    return(
        <>
            <span className={`max-w-fit font-light text-3xl text-${c(300)} mb-1 animate-bounce`}>Full Stack Software Developer</span >
            <div className="font-semibold text-7xl text-white">
                {"<Abhishek />"}
            </div>
            <div className={`font-light text-lg text-${c(200)} mb-3`}>
                Ruby on Rails • React • Node.js | Building scalable Applications, Microservice Architecture, APIs, and cloud-native solutions.
            </div>
            {/* <div className="flex gap-4 mt-5 tracking-tight">
                <a 
                    href="https://github.com/AbhishekDave2000" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-950 font-semibold text-amber-100 border border-amber-800 px-3 py-1.5 rounded-xl hover:bg-amber-300 hover:text-zinc-700 hover:border hover:border-amber-300 transition duration-400 hover:shadow-amber-300 cursor-pointer"
                >
                    View Projects
                </a>
                <a 
                    href="/Abhishek_Dave.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-950 font-semibold text-amber-100 border border-amber-800 px-3 py-1.5 rounded-xl hover:bg-amber-300 hover:text-zinc-700 hover:border hover:border-amber-300 transition duration-400 hover:shadow-amber-300 cursor-pointer"
                >
                    Resume
                </a>
            </div> */}
            <div className="flex gap-4 items-center">
                <a href="https://www.linkedin.com/in/abhishek-dave-15b3711a4/" target="_blank" title='Linkedin'>
                    <FaLinkedin className="text-blue-400 text-2xl hover:text-blue-600 cursor-pointer" />
                </a>
                <a href="https://github.com/AbhishekDave2000" target="_blank" title='Github'>
                    <FaGithub className="text-zinc-400 text-2xl hover:text-zinc-200 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/__abhi2208__/" target="_blank" title='Instagram'>
                    <FaInstagram className="text-red-400 text-2xl hover:text-red-600 cursor-pointer" />
                </a>
                <a href="/Abhishek_Dave.pdf" target="_blank" title='Resume'>
                    <IoDocumentText className="text-emerald-400 text-2xl hover:text-emerald-600 cursor-pointer" />
                </a>
            </div>
        </>
    )
}

export default HeroSection;