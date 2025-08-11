import React from 'react';
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


const menuItems = [
    {
        icon: <Home className="h-5 w-5" />,
        label: "Home",
        href: "#",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
    {
        icon: <Info className="h-5 w-5" />,
        label: "About",
        href: "#",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
    {
        icon: <FaCode className="h-5 w-5" />,
        label: "Skills",
        href: "#",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
    {
        icon: <GraduationCap className="h-5 w-5" />,
        label: "Education",
        href: "#",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
    {
        icon: <FolderKanban className="h-5 w-5" />,
        label: "Projects",
        href: "#",
        gradient: "radial-gradient(circle, rgba(255,1,79,0.15) 0%, rgba(255,1,79,0.06) 50%, rgba(255,1,79,0) 100%)",
        iconColor: "group-hover:text-[#ff014f]",

    },
    {
        icon: <Mail className="h-5 w-5" />,
        label: "Contact",
        href: "#",
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
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 relative z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl text-sm sm:text-base"
                        variants={itemVariants}
                        transition={sharedTransition}
                        style={{
                            transformStyle: "preserve-3d",
                            transformOrigin: "center bottom",
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
                    {/* Back face */}
                    <motion.a
                        href={item.href}
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 absolute inset-0 z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl text-sm sm:text-base"
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
    return (
        <div className="navbar shadow-sm py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center gap-1 px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <Button></Button>
            </div>
        </div>
    );
};

export default Navbar;