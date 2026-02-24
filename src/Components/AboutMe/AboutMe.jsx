import { FaMapMarkerAlt, FaGift, FaLightbulb } from "react-icons/fa";
import image from "../../assets/Black Simple Minimalist Professional Corporate Facebook Profile Picture (1).png"
import SpotlightCard from "../New/New";
import Base from "../Base/Base";
import GlowLine from "../GlowLine/GlowLine";
export default function AboutMe() {
    return (
        <section id="About" className="text-white mx-auto max-w-7xl py-2 md:py-3 lg:py-6 xl:py-8">
            <SpotlightCard>
                <div className="p-6">
                    <div className="text-center space-y-3 mb-8">
                        <h1 className="text-5xl font-bold text-white">About <span className="text-primary ">Me</span></h1>
                        <p className="text-base font-medium text-white">A passionate developer bringing ideas to life with modern, cutting-edge technologies.</p>
                    </div>


                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                            src={image}
                            alt="Profile"
                            className="w-28 h-28 rounded-full border-4 border-primary"
                        />
                        <div className="text-start">
                            <h2 className="text-2xl font-bold">
                                Hello I'm <span className="text-primary">Sabbir</span>
                            </h2>
                            <p className="text-gray-400">Frontend Web Developer</p>
                        </div>
                    </div>

                    <p className="mt-6 text-start text-gray-300 leading-relaxed">
                        As a frontend developer with over a year of hands-on experience, I specialize in crafting functional and visually engaging web applications. My journey into tech began with curiosity and quickly grew into a genuine passion for solving real-world problems through clean, efficient, and user-focused code.
                    </p>
                    <p className="mt-4 text-start text-gray-300 leading-relaxed">
                        Beyond coding, I’m deeply passionate about exploring emerging technologies, experimenting with new tools, and staying ahead in the fast-evolving tech landscape. I love contributing to open-source projects, engaging with the developer community, and exchanging ideas that inspire growth. For me, continuous learning and meaningful collaboration are the keys to building impactful solutions.


                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 mt-6">

                        <Base icon={<FaMapMarkerAlt className="mx-auto text-primary" size={24} />} txt={"Based in"}>Dhaka, Bangladesh</Base>

                        <Base icon={<FaGift className="mx-auto text-primary" size={24} />} txt={"Self-taught & Project-based"}>2+ Years</Base>

                        <Base icon={<FaLightbulb className="mx-auto text-primary" size={24} />} txt={"Passion"}>Problem Solving</Base>
                    </div>

                      <GlowLine></GlowLine>

                    <div className=" pt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
                        <div>
                            <h3 className="text-2xl font-bold">2+</h3>
                            <p className="text-gray-400">Self-taught & Project-based</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">16+</h3>
                            <p className="text-gray-400">Projects Completed</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">100%</h3>
                            <p className="text-gray-400">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </SpotlightCard>
        </section>
    );
}
