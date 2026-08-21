import React, {useEffect, useState} from 'react';
import {Link} from 'react-scroll'
import { IoCloseSharp } from 'react-icons/io5'
import {FaBars} from 'react-icons/fa'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menuLinks = [
        {name: 'Home', to: 'home'},
        {name: 'About', to: 'about'},
        {name: 'Services', to: 'services'},
        {name: 'Packages', to: 'packages'},
        {name: 'Contact', to: 'contact'},
    ];

    // Disable scroll effect when menu is open
    useEffect(() => {
        if(menuOpen) return;
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [menuOpen]);

    // lock body scroll properly when mobile menu is open

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        }
        else{
            document.body.style.overflow = '';
            document.body.style.height = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.height = '';
        };
    }, [menuOpen]);


    return (
        <>
        {/* header */}
        <header className={`fixed top-0 z-50 left-0 w-full py-4 lg:px-[100px] px-7 transition-all duration-300 ${menuOpen ? 'bg-black' : scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>

        <div className='flex justify-between items-center '>
            {/* logo */}
            <div className='text-orange-600 font-bold lg:text-4xl text-3xl'>
                Tripify <span className='text-white'>.</span>
            </div>

            {/* mobile toggle */}
            <button className='text-white text-2xl md:hidden z-[60] ' onClick={() => setMenuOpen(true)}>
                <FaBars/>
            </button>

            {/* desktop menu */}
            <nav className='hidden md:block'>
                <ul className='flex space-x-10 text-lg text-white font-poppins'>
                    {menuLinks.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to} smooth duration={500}
                            className='cursor-pointer hover:text-orange-600 transition'>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        </header>

        {/* mobile full screen menu */}
        <div className={`fixed inset-0 bg-black text-white z-[55] transform transition-transform duration-300 ease-out will-change-transfor
            ${menuOpen ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-center overscroll-none`}>

                {/* close button */}
                <IoCloseSharp className='absolute top-5  right-6 text-3xl cursor-pointer'
                onClick={() => setMenuOpen(false)}/>

                {/* menu items */}
                <ul className='flex flex-col space-y-8 text-2xl text-center font-poppins'>
                    {menuLinks.map((link) => (
                        <li key={link.to}><Link to={link.to} duration={500} onClick={() => {
                            setMenuOpen(false)
                        }}
                        className='cursor-pointer hover:text-red-500 transition'>{link.name}</Link></li>
                    ))}
                </ul>

        </div>
        </>
    );
}

export default Header;
