// import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useColor } from '../context/ThemeContext';

const Navbar = () => {
    const [active, setActive] = useState("hero");
    const { c, color } = useColor();

    const ACTIVE_STYLE = `font-medium border-b-2 text-${c(100)} hover:text-${c(400)} border-${c(600)} cursor-pointer` 
    const IN_ACTIVE_STYLE = `font-light text-${c(400)} hover:text-${c(600)} cursor-pointer` 

    const handleClick = (section) => {
        setActive(section);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div className='bg-gray-950 flex item-center justify-between w-full sticky top-0 px-6 py-3 outline-none border-b-2 border-gray-900 z-10'>
            <div>
                <span onClick={() => handleClick("hero")} className={`text-2xl font-medium text-${c(400)} flex-1 cursor-pointer`}>
                    AMD
                </span>
            </div>
            <div className='flex flex-nowrap item-center justify-between gap-4 text-md'>
                <button onClick={() => handleClick("hero")} className={active === "hero" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Home
                </button>
                <button onClick={() => handleClick("about")} className={active === "about" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    About
                </button>
                <button onClick={() => handleClick("skills")} className={active === "skills" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Skills
                </button>
                <button onClick={() => handleClick("experience")} className={active === "experience" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Experience
                </button>
                <button onClick={() => handleClick("projects")} className={active === "projects" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Projects
                </button>
                <button onClick={() => handleClick("education")} className={active === "education" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Education
                </button>
                <button onClick={() => handleClick("contact")} className={active === "contact" ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Contact
                </button>
            </div>
            <ThemeSwitcher />
        </div>
    )
}

export default Navbar;