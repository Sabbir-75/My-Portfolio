import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import {
    Home,
    Info,
    GraduationCap,
    FolderKanban,
    Mail
} from "lucide-react";
import Button from '../Button/Button';
import NavMenu from '../NavMenu/NavMenu';
import logo from "../../assets/Black_and_White_Modern_Personal_Brand_Logo-removebg-preview.png"
import TEXT from "../../assets/Black_and_White_Modern_Personal_Brand_Logo__2_-removebg-preview.png"
import { TiThMenu } from "react-icons/ti";


const menuItems = [
    {
        icon: <Home className="h-5 w-5" />,
        label: "Home",
        href: "#",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: `group-hover:text-[#ff014f]`,

    },
    {
        icon: <Info className="h-5 w-5" />,
        label: "About",
        href: "#About",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
    {
        icon: <FaCode className="h-5 w-5" />,
        label: "Skills",
        href: "#Skills",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
    {
        icon: <GraduationCap className="h-5 w-5" />,
        label: "Education",
        href: "#Education",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
    {
        icon: <FolderKanban className="h-5 w-5" />,
        label: "Projects",
        href: "#Projects",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
    {
        icon: <Mail className="h-5 w-5" />,
        label: "Contact",
        href: "#Contact",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
];
const itemVariants = {
    initial: {
        rotateX: 0,
        opacity: 1,
    },
    hover: {
        rotateX: -90,
        opacity: 0,
    },
};
const backVariants = {
    initial: {
        rotateX: 90,
        opacity: 0,
    },
    hover: {
        rotateX: 1,
        opacity: 1,
    },
};
const glowVariants = {
    initial: {
        opacity: 0,
        scale: 0.3,
    },
    hover: {
        opacity: 1,
        scale: 1.2,
        transition: {
            opacity: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
            },
            scale: {
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 25,
            },
        },
    },
};
const sharedTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: 0.5,
};

const Navbar = () => {
    const nav = <>
        {menuItems.map((item) => (
            <motion.li key={item.label} className="relative flex-shrink-0">
                <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{
                        perspective: "600px",
                    }}
                    whileHover="hover"
                    initial="initial"
                >
                    {/* Glow background */}
                    <motion.div
                        className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                        variants={glowVariants}
                        style={{
                            background: item.gradient,
                            opacity: 0,
                        }}
                    />
                    {/* Front face */}
                    <motion.a
                        href={item.href}
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 relative z-10 bg-transparent text-gray-300 group-hover:text-gray-900 transition-colors rounded-xl text-sm sm:text-base"
                        variants={itemVariants}
                        transition={sharedTransition}
                        style={{
                            transformStyle: "preserve-3d",
                            transformOrigin: "center bottom",
                        }}
                    >
                        <span
                            className={`transition-colors duration-300  ${item.iconColor}`}
                        >
                            {item.icon}
                        </span>
                        <span className="font-medium whitespace-nowrap">
                            {item.label}
                        </span>
                    </motion.a>
                    {/* Back face */}
                    <motion.a
                        href={item.href}
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 absolute inset-0 z-10 bg-transparent text-gray-300 group-hover:text-primary  transition-colors rounded-xl text-sm sm:text-base"
                        variants={backVariants}
                        transition={sharedTransition}
                        style={{
                            transformStyle: "preserve-3d",
                            transformOrigin: "center top",
                            transform: "rotateX(90deg)",
                        }}
                    >
                        <span
                            className={`transition-colors duration-300 ${item.iconColor}`}
                        >
                            {item.icon}
                        </span>
                        <span className="font-medium whitespace-nowrap">
                            {item.label}
                        </span>
                    </motion.a>
                </motion.div>
            </motion.li>
        ))}
    </>

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = document.getElementById("navbarId").offsetHeight;
            if (window.scrollY > navbarHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="navbarId" className={`navbar bg-info shadow-sm z-50 transition-all duration-500 ease-in-out sticky ${isFixed
            ? 'fixed top-0 left-0 right-0 z-50 translate-y-0 backdrop-blur-xl bg-info/60 shadow-md'
            : 'relative -top-30'
            }
        `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <TiThMenu size={25} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gradient-to-br from-[#1c1e22] to-[#22262a] 
                hover:from-[#22262a] hover:to-[#1c1e22] 
                transition-colors duration-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <div className='flex items-center'>

                    <div className='max-w-[60px]'>
                        <img src={logo} alt={logo} />
                    </div>
                    <div className='max-w-[70px]'>
                        <img src={TEXT} alt={TEXT} />
                    </div>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <NavMenu>
                    <ul className="flex justify-center gap-1 px-2">
                        {nav}
                    </ul>
                </NavMenu>
            </div>
            <div className="navbar-end">
                <Button>Resume</Button>
            </div>
        </div>
    );
};

export default Navbar;