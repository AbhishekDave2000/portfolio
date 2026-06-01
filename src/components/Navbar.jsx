import { NavLink, Link, useNavigate } from 'react-router-dom';

const ACTIVE_STYLE = "font-medium border-b-2 border-amber-400" 
const IN_ACTIVE_STYLE = "font-light text-amber-100" 

const Navbar = () => {
    return(
        <div className='bg-gray-950 flex item-center justify-between gap-2 w-full sticky top-0 px-6 py-3 outline-none border-b-2 border-gray-900'>
            <div>
                <NavLink to="/" className='text-2xl font-medium text-amber-300 flex-1'>
                    Abhishek Dave
                </NavLink>
            </div>
            <div className='flex item-center justify-between gap-4 flex-wrap text-lg'>
                <NavLink to="/" className={({isActive}) => isActive ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    About
                </NavLink>
                <NavLink to="/experience" className={({isActive}) => isActive ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Experience
                </NavLink>
                <NavLink to="/contact-us" className={({isActive}) => isActive ? ACTIVE_STYLE : IN_ACTIVE_STYLE}>
                    Contact
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;