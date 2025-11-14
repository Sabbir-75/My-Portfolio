// components/TechnicalSkills.jsx
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiJsonwebtokens, SiVercel, } from "react-icons/si";
import vscode from "../../assets/png-transparent-visual-studio-code-hd-logo-removebg-preview.png"
import SpotlightCard from "../New/New";


const skills = {
    frontend: [
        { icon: <FaReact size={35} color="#61DAFB" />, name: "React" },
        {
        icon: (
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black rounded">
                <SiNextdotjs size={37} color="white" />
            </div>
        ),
        name: "Next.js",
    },
        { icon: <SiJavascript size={34} color="#F7DF1E" />, name: "JavaScript" },
        
    {
        icon: (
            <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-white rounded border border-gray-300">
                <SiTypescript size={29} color="#3178C6" />
            </div>
        ),
        name: "TypeScript",
    },
        { icon: <SiTailwindcss size={35} color="#38BDF8" />, name: "Tailwind" },

    ],
    backend: [
        { icon: <SiMongodb size={37} color="#4DB33D" />, name: "MongoDB" },
        { icon: <FaNodeJs size={34} color="#68A063" />, name: "Node.js" },
        { icon: <SiExpress size={34} color="#FFFFFF" />, name: "Express" },
        { icon: <SiFirebase size={34} color="#FFCA28" />, name: "Firebase" },
        { icon: <SiJsonwebtokens size={34} color="#F50057" />, name: "JWT" },
    ],
    tools: [
        { icon: <FaGitAlt size={34} color="#F05032" />, name: "Git" },
        { icon: <FaGithub size={34} color="#FFFFFF" />, name: "Github" },
        { icon: <SiVercel size={34} color="#FFFFFF" />, name: "Vercel" },
        { icon: <FaFigma size={34} color="#F24E1E" />, name: "Figma" },
    ],
};

const SkillCategory = ({ title, items }) => (
    <div className="rounded-lg p-4">
        <div className="max-w-[180px] mx-auto">
            <h3 className="text-lg text-primary border-b-2 border-primary font-semibold mb-4">{title}</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {items.map((skill, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-[#1c1e22] to-[#22262a] 
                hover:from-[#22262a] hover:to-[#1c1e22]  duration-300 border border-gray-700 rounded-lg hover:scale-105 transition-transform"
                >
                    {skill.icon}
                    <p className="mt-2 text-sm">{skill.name}</p>
                </div>
            ))}
            {
                items === skills.tools
                && <div
                    className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-[#1c1e22] to-[#22262a] 
                hover:from-[#22262a] hover:to-[#1c1e22] 
                duration-300 border border-gray-700 rounded-lg hover:scale-105 transition-transform"
                >
                    <img className="w-[35px]" src={vscode} alt={vscode} />
                    <p className="mt-2 text-sm">VS Code</p>
                </div>
            }

        </div>
    </div>
);

export default function TechnicalSkills() {
    return (
        <section id="Skills" className="text-white max-w-7xl mx-auto py-2 md:py-3 lg:py-6 xl:py-8">
            <SpotlightCard>
                <div className="p-3 w-full">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <p className="text-center text-gray-400 mb-8">
                        Tools & Technologies I Use
                    </p>
                    <div className="space-y-6">
                        <SkillCategory title="Frontend" items={skills.frontend} />
                        <SkillCategory title="Backend" items={skills.backend} />
                        <SkillCategory title="Tools & Platforms" items={skills.tools} />
                    </div>
                </div>

            </SpotlightCard>

        </section>
    );
}
