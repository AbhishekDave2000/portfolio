import { useState, useEffect } from 'react';
import { useColor } from '../context/ThemeContext';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUpButton = () => {
    const { c } = useColor();
    const [visible, setVisible] = useState(false);

    useEffect( () => {
        const handleScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll",   handleScroll);
        return () => removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

    if(!visible) return null;

    return(
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-${c(500)} hover:bg-${c(400)} text-white flex items-center justify-center shadow-lg shadow-${c(500)}/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
        >
            <FaArrowUp size={16} />
        </button>
    );
};

export default ScrollUpButton;