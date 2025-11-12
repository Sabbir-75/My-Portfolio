"use client";

import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import image from '../../assets/Black Simple Minimalist Professional Corporate Facebook Profile Picture.png'

import Button2 from "../Button2/Button2";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import OrbitingSkills from "../pic/Pic";
const DotIcon = () => <svg width="8" height="8" className="text-red-500" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
</svg>;
const CoderProfileCard = () => {
    return (
        <div>
            {/* <img src={image}/> */}
            <OrbitingSkills image={image}></OrbitingSkills>
        </div>
    );
};
const Portfolio = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Frontend Web Developer _",
                "Problem Solver _",
                "Programmer _"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1200,
            startDelay: 300,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });

        return () => typed.destroy();
    }, []);
    return <div className=" w-full relative flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">

        { }
        <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 xl:gap-12 items-center">

                { }
                <div className="flex flex-col gap-3 sm:gap-6 items-start text-left order-2 lg:order-1 animate-fade-in-up">
                    <div className="inline-flex group items-center gap-2 px-3 py-1 bg-gray-900/80 dark:bg-white/10 border border-primary/40 rounded-full text-xs sm:text-sm font-medium text-gray-200 dark:text-gray-300 backdrop-blur-sm">
                        <DotIcon />
                        Welcome to my universe
                    </div>

                    <div className="relative">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-bold leading-tight text-white">
                            Hi, I&apos;m{' '}
                            <span className="text-primary">
                                Sabbir Hossain
                            </span>
                            <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary">
                                <span ref={el}></span>
                            </div>
                        </h1>
                    </div>



                    <p className="text-gray-300 text-sm sm:text-lg lg:text-xl max-w-lg leading-relaxed">
                        Skilled in React, MongoDB, Express.js and Node.js — I craft high-performance, secure, and scalable full-stack applications tailored for exceptional user experiences.
                    </p>
                    <div className="flex gap-3 md:gap-6 justify-between">
                        <div>
                            <Button2>Resume</Button2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-7 md:w-8 lg:w-10 group hover:bg-primary h-7 md:h-8 lg:h-10 border-[2px] border-primary rounded-full flex justify-center duration-300 items-center">
                                <a href="https://github.com/Sabbir-75" target="blank" className="group-hover:text-white text-primary">
                                    <FaGithub className=" rounded-full duration-300 text-3xl" />
                                </a>
                            </div>
                            <div className="w-7 md:w-8 lg:w-10 group hover:bg-primary h-7 md:h-8 lg:h-10 duration-300 border-[2px] border-primary rounded-full flex justify-center items-center">
                                <a href="https://www.linkedin.com/in/md-sabbir75/" target="blank" className="group-hover:text-white text-primary duration-300">
                                    <FaLinkedin className="text-[18px]" />
                                </a>
                            </div>
                            <div className="w-7 md:w-8 lg:w-10 cursor-pointer group hover:bg-primary h-7 md:h-8 lg:h-10 duration-300 border-[2px] border-primary rounded-full flex justify-center items-center">
                                <a href="https://www.facebook.com/share/19xnNnuazu/" target="blank" className="group-hover:text-white text-primary duration-300">
                                    <FaFacebook className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                { }
                <div className="order-1 lg:order-2 animate-fade-in-up">
                    <CoderProfileCard />
                </div>

            </div>
        </div>
    </div>;
};
export default Portfolio;
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .hover\\:shadow-3xl:hover {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
`;
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}