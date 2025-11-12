import React from 'react';
import Skill from './Skill/Skill';
import { FaCode } from "react-icons/fa6";
import { FaServer, FaTachometerAlt, FaLaptopCode } from "react-icons/fa";
import { FaHtml5, FaReact } from "react-icons/fa";

const Skills = () => {
    return (
        <div className='container mx-auto max-w-7xl py-4 md:py-6 lg:py-10 xl:py-14 grid gap-2.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <Skill icon={<FaReact size={40} />}>Frontend</Skill>
            <Skill icon={<FaServer size={40} />}>Backend</Skill>
            <Skill icon={<FaTachometerAlt size={40} />}>Optimization</Skill>
            <Skill icon={<FaLaptopCode size={40} />}>Web App</Skill>
        </div>
    );
};

export default Skills;