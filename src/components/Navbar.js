import React from 'react';
import Style from './Navbar.module.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: 'portfolio',
        active: 'portfolio'
    },
    {
        name: 'Contact',
        to: 'Contact',
        active: 'Contact'
    }
]

const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default function Navbar({ darkMode, handleClick, active, setActive }) {

    return (
        <aside className="w-64 h-full bg-gray-800 text-white md:block hidden">
        <Box 
            component={'nav'} 
            width={{ xs: '60vw', sm: '40vw', md: '20vw' }} 
            height={'100vh'} 
            position={'fixed'} 
            className={darkMode ? Style.dark : Style.light} 
            display={'flex'} 
            flexDirection={'column'} 
            justifyContent={'center'}
            alignItems={'center'}
            boxShadow={3}
        >
            <Box 
                component={'ul'} 
                display={'flex'} 
                flexDirection={'column'} 
                alignItems={'center'} 
                gap={{ xs: '2rem', md: '4rem' }} 
                textTransform={'lowercase'} 
                fontSize={'1rem'}
            >
                {links.map((link, index) => (
                    <Box 
                        key={index} 
                        component={'li'} 
                        id={'navli'} 
                        className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}
                    >
                        <Link 
                            to={singlePage ? `#${link.to}` : `/${link.to}`}
                            scroll={el => scrollWidthOffset(el)}
                            smooth
                            onClick={() => setActive(link.active)} 
                            className={Style.link}
                        >
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
        </aside>
    )
}
