import React from 'react';
import { Link } from 'react-router';

const Button2 = ({ children }) => {
    return (
        <Link target='blank' to={'https://drive.google.com/file/d/1NNTzwTKQxFzTrKjHxKt-lnbIieBA8T74/view?usp=sharing'} class="relative cursor-pointer inline-flex items-center px-6 md:px-8 lg:px-10 py-1 md:py-2 overflow-hidden text-base md:text-lg font-medium text-white border-2 border-primary rounded-full hover:text-primary group bg-primary hover:bg-gray-50">
            <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

            <span class="absolute -right-1 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            
            <span class="relative">{children}</span>
        </Link>
    );
};

export default Button2;