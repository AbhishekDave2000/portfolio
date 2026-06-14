// import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useColor } from '../context/ThemeContext';

const Navbar = () => {
    const [active, setActive]       = useState("hero");
    const [menuOpen, setMenuOpen]   = useState(false)
    const { c, color }              = useColor();

    const ACTIVE_STYLE = `font-medium border-b-2 text-${c(100)} hover:text-${c(400)} border-${c(600)} cursor-pointer` 
    const IN_ACTIVE_STYLE = `font-light text-${c(400)} hover:text-${c(600)} cursor-pointer` 

    const NAV_ITEMS = [
        "hero", "about", "skills",
        "experience", "projects",
        "education", "contact"
    ]

    const handleClick = (section) => {
        setActive(section);
        setMenuOpen(false)
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div className={`bg-gray-950 relative flex md:item-center justify-between w-full h-18 overflow-visible md:sticky top-0 px-6 py-3 outline-none border-b-2 border-gray-900 z-10 ${menuOpen && 'h-dvh items-start'}`}>
            <div className='flex flex-row items-center justify-between px-1 md:px-6 py-3 w-full'>
                
                <span onClick={() => handleClick("hero")} className={`text-2xl font-medium text-${c(400)} cursor-pointer`}>
                    AMD
                </span>
                
                <div className='hidden md:flex flex-nowrap item-center gap-4 text-md'>
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className={active === item ? ACTIVE_STYLE : IN_ACTIVE_STYLE}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>
                
                <div className="flex items-center justify-between gap-3">
                    <ThemeSwitcher />

                    {/* Hamburger — only on mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`md:hidden flex flex-col gap-1.5 cursor-pointer`}
                    >
                        <span className={`block w-6 h-0.5 bg-${c(400)} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-${c(400)} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-${c(400)} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>

                
            </div>
            {menuOpen && (
                <div className={`md:hidden flex flex-col items-start px-6 pb-4 gap-3 min-h-full border-t border-gray-900 absolute top-15 right-0`}>
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className={`text-left py-1 ${active === item ? ACTIVE_STYLE : IN_ACTIVE_STYLE}`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Navbar;