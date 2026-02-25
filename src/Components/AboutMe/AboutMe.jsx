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
                        As a Frontend Developer with over a year of hands-on experience, I design and build intuitive, high-performing web applications that blend functionality with thoughtful aesthetics. What began as simple curiosity soon evolved into a deep commitment to engineering meaningful digital experiences through clean architecture and user-centered design.
                    </p>
                    <p className="mt-4 text-start text-gray-300 leading-relaxed">
                        I’m driven by the challenge of transforming complex ideas into seamless interfaces that feel effortless to use. Writing maintainable, scalable, and purposeful code is not just a task for me — it’s a craft I continuously refine. Beyond development, I actively explore emerging technologies, experiment with modern tools, and stay aligned with the ever-evolving tech ecosystem. I value collaboration, knowledge-sharing, and contributing to initiatives that foster innovation within the developer community.


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
