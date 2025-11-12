import React from 'react';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';
import NeonBadgeView from '../Baze/Baze';
import SpotlightCard from '../New/New';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'lucide-react';

const projects = [
    {
        title: "Wanderix",
        description: "Wanderix is a modern tourist management system designed to simplify travel planning, booking, and guide services for travelers.",
        image: "https://i.ibb.co.com/vvmVsdZP/Screenshot-50.png",
        skills: ["React", "JavaScript", "MongoDB", "Stripe", "Tailwind", "Node.js", "Express", "Firebase"],
        liveDemo: "https://wanderix.netlify.app/",
        clientCode: "https://github.com/Sabbir-75/Wanderix"
    },
    {
        title: "Study Sync",
        description: "Study Sync is an online platform for collaborative learning, group study, and exam preparation.",
        image: "https://i.ibb.co.com/pjD81h5q/Screenshot-47.png",
        skills: ["React", "JavaScript", "MongoDB", "Stripe", "Tailwind", "Node.js", "Express", "Firebase"],
        liveDemo: "https://my-studysync.netlify.app/",
        clientCode: "https://github.com/Sabbir-75/study-sync"
    },
    {
        title: "Roommate Finder",
        description: "RoomMateMatch is a smart and user-friendly roommate finder platform designed to simplify the search for compatible housemates.",
        image: "https://i.ibb.co.com/spvqks91/Screenshot-49.png",
        skills: ["React", "Node.js", "MongoDB", "Tailwind", "Firebase", "JavaScript"],
        liveDemo: "https://roommate-hunt.netlify.app/",
        clientCode: "https://github.com/Sabbir-75/Roommate-Finder"
    }
];

const MyProject = () => {
    return (
        <section id='Projects' className="text-white max-w-7xl mx-auto py-2 md:py-3 lg:py-6 xl:py-8">
            <SpotlightCard>
                <h2 className="text-4xl font-bold text-center mb-3">My <span className="text-primary">Projects</span></h2>
                <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
                    A selection of my recent work demonstrating my skills in web development, full-stack projects, and UI/UX design.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-[#1c1e22] to-[#22262a] 
                hover:from-[#22262a] hover:to-[#1c1e22] 
                transition-colors duration-300 rounded-xl shadow-lg overflow-hidden flex flex-col">
                            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.skills.map((skill, i) => (

                                        <NeonBadgeView>{skill}</NeonBadgeView>

                                    ))}
                                </div>

                                <div className="mt-auto flex w-full gap-3">
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                                        className="flex w-1/2 items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-content hover:bg-[#ff2659] rounded-tl-lg text-sm font-medium transition">
                                        View Live <LuSquareArrowOutUpRight />
                                    </a>
                                    <a href={project.clientCode} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-1/2 px-4 py-2 bg-primary text-primary-content hover:bg-[#ff2659] rounded-br-lg text-sm font-medium transition">
                                        Client Code <FaGithub className='-mt-1' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex gap-2 mt-8 justify-center items-center'>
                    <h1 className='text-xl flex gap-2 font-bold text-white hover:text-primary duration-300'>View More Projects on <FaArrowRightLong size={25} />
                    </h1>
                    <div className="w-9 group cursor-pointer hover:bg-primary h-9 border-[2px] border-primary rounded-full flex justify-center duration-300 items-center">
                        <a href={"https://github.com/Sabbir-75"} target='blank' className="group-hover:text-white text-primary">
                            <FaGithub className=" rounded-full duration-300 text-3xl" />
                        </a>
                    </div>
                </div>

            </SpotlightCard>
        </section>
    );
};

export default MyProject;
