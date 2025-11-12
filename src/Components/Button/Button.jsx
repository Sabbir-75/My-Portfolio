import React from 'react';
import { NavLink } from 'react-router';
import { FiDownload } from "react-icons/fi";

const Button = ({ children }) => {
  return (
    <a href="https://drive.google.com/uc?export=download&id=1NNTzwTKQxFzTrKjHxKt-lnbIieBA8T74" className="relative inline-flex items-center justify-start py-2 md:py-3 pl-2.5 md:pl-4 pr-6 md:pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gradient-to-br from-[#1c1e22] to-[#22262a] group">
      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
      <span className="absolute right-0 pr-0.5 md:pr-4 duration-200 ease-out group-hover:translate-x-12">
        <FiDownload className="w-5 md:w-5 h-4 md:h-5 text-primary" />
      </span>
      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">{children}</span>
    </a>
  );
};

export default Button;