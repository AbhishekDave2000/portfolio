// import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const ACTIVE_STYLE = "font-medium border-b-2 hover:text-amber-300 border-amber-400 cursor-pointer" 
const IN_ACTIVE_STYLE = "font-light text-amber-100 hover:text-amber-300 cursor-pointer" 

const Navbar = () => {
    const [active, setActive] = useState("hero");

    const handleClick = (section) => {
        setActive(section);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div className='bg-gray-950 flex item-center justify-between w-full sticky top-0 px-6 py-3 outline-none border-b-2 border-gray-900'>
            <div>
                <span onClick={() => handleClick("hero")} className='text-2xl font-medium text-amber-300 flex-1 cursor-pointer'>
                    Abhishek Dave
                </span>
            </div>
            <div className='flex flex-nowrap item-center justify-between gap-4 text-md'>
                <button onClick={() => handleClick("hero")} className={active === "hero" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Home
                </button>
                <button onClick={() => handleClick("about")} className={active === "about" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    About
                </button>
                <button onClick={() => handleClick("experience")} className={active === "experience" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Experience
                </button>
                <button onClick={() => handleClick("contact")} className={active === "contact" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Contact
                </button>
            </div>
            <div className="flex gap-4 items-center">
                <a href="https://www.linkedin.com/in/abhishek-dave-15b3711a4/" target="_blank">
                    <FaLinkedin className="text-amber-400 text-2xl hover:text-amber-300 cursor-pointer" />
                </a>
                <a href="https://github.com/AbhishekDave2000" target="_blank">
                    <FaGithub className="text-amber-400 text-2xl hover:text-amber-300 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/__abhi2208__/" target="_blank">
                    <FaInstagram className="text-amber-400 text-2xl hover:text-amber-300 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default Navbar;