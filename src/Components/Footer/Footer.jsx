import React from "react";
import logo from "../../assets/Black_and_White_Modern_Personal_Brand_Logo-removebg-preview.png"
import TEXT from "../../assets/Black_and_White_Modern_Personal_Brand_Logo__2_-removebg-preview.png"
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const Footer = () => {
  return <footer className="text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-primary/50">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="space-y-4">
        <div className='flex items-center'>

          <div className='max-w-[60px]'>
            <img src={logo} alt={logo} />
          </div>
          <div className='max-w-[70px]'>
            <img src={TEXT} alt={TEXT} />
          </div>
        </div>
        <p className="text-primary text-lg leading-relaxed">
          I’m passionate about building clean, user-friendly, and high-performance web applications that solve real-world problems.
        </p>
      </div>
      <div className="space-y-4 text-primary">
        <h3 className="text-xl font-bold text-primary">
          Skills & Expertise
        </h3>
        <p className="flex gap-3 items-center">
          <MdDeveloperBoard /> Frontend Web Developer
        </p>
        <p className="flex gap-3 items-center">
          <FaServer /> REST API & Backend Integration
        </p>
        <p className="flex gap-3 items-center">
          <FaCode /> UI/UX Focused Design
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-primary font-bold text-xl">Connect</h1>
        <div className="flex space-x-5 pt-2">
          <div className="w-9 cursor-pointer group hover:bg-primary h-9 border-[2px] border-primary rounded-full flex justify-center duration-300 items-center">
            <a href="https://github.com/Sabbir-75" target="blank" className="group-hover:text-white text-primary">
              <FaGithub className=" rounded-full duration-300 text-3xl" />
            </a>
          </div>
          <div className="w-9 cursor-pointer group hover:bg-primary h-9 duration-300 border-[2px] border-primary rounded-full flex justify-center items-center">
            <a href="https://www.linkedin.com/in/md-sabbir75/" target="blank" className="group-hover:text-white text-primary duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
          <div className="w-9 cursor-pointer group hover:bg-primary h-9 duration-300 border-[2px] border-primary rounded-full flex justify-center items-center">
            <a href="https://www.facebook.com/share/19xnNnuazu/" target="blank" className="group-hover:text-white text-primary duration-300">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

    </div>
    <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 border-t border-gray-200 dark:border-gray-700">
      <div className="py-6 text-sm text-center dark:text-gray-400">© {new Date().getFullYear()} Room Hunt. All rights reserved by LS Coder.</div>

    </div>
  </footer>;
};
export default Footer;