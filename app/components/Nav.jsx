"use client";
import { useState, useEffect } from 'react';
import headerLogo from '../assets/images/header-logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants';
import Image from 'next/image';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';

const Nav = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeLink, setActiveLink] = useState(''); // Define activeLink state

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navBackgroundClass = scrollPosition > 100 ? 'bg-blue-20 shadow shadow-xl' : 'bg-blue-20';
    const navTextColorClass = scrollPosition > 100 ? 'text-white' : 'text-blue-40';

    const handleClick = (label) => {
        setActiveLink(label);
    };

    return (
        <header className={`padding-x sticky top-0 py-2 z-10 w-full ${navBackgroundClass} max-lg:flex max-lg:justify-end max-lg:items-end max-lg:px-4`}>
            <nav className={`flex justify-between items-center max-container ${navTextColorClass}`}>
                {/* Logo */}
                {/* <a href="/">
                    <Image src={headerLogo} alt="logo" width={130} height={29} />
                </a> */}

                {/* Navigation Links */}
                <ul className="flex flex-1 justify-center items-center gap-12 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={`font-montserrat leading-normal text-2xl  ${
                                    activeLink === item.label ? 'font-montserrat leading-normal text-2xl font-bold text-blue-15' : navTextColorClass
                                }`}
                                onClick={() => handleClick(item.label)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu */}
                <Menu>
                    <MenuButton as={Button} variant="link" className='cursor-pointer hidden max-lg:block'>
                        <Image className='hidden max-lg:block shadow-md shadow-nlue-50' src={hamburger} alt="hamburger" width={25} height={25} />
                    </MenuButton>
                    <MenuList className='bg-blue-20 px-4 shadow-lg shadow-nlue-50'>
                        {navLinks.map((item) => (
                            <MenuItem className='text-white font-montserrat leading-normal text-xl' key={item.label}>
                                <a className={`font-montserrat leading-normal text-2xl hover:border hover:border-spacing-2 hover:rounded-lg px-0 py-1 hover:border-gray-50 hover:bg-gray-50 hover:bg-opacity-5 hover:border-opacity-5 ${
                                    activeLink === item.label ? 'text-blue-15 rounded-lg border-gray-50 bg-gray-50 bg-opacity-5 border-opacity-5' : navTextColorClass
                                }`}
                                onClick={() => handleClick(item.label)} href={item.href}>{item.label}</a>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </nav>
        </header>
    );
};

export default Nav;
