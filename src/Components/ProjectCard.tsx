import type { ProjectCardProps } from "../lib/types";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProjectCard: React.FC<{ projects: ProjectCardProps }> = ({ projects }) => {

    return (
        <div
            className="group w-auto rounded-[8px] bg-[#11192b] shadow hover:shadow-xl hover:-translate-y-1 
      transition duration-300 overflow-hidden"
        >
            {/* Image */}
            <div className="h-56 relative overflow-hidden">
                <img
                    src={projects.image}
                    alt={projects.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* 🔥 Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
          opacity-0 group-hover:opacity-100 transition duration-300">

                    <a
                        href={`${projects.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white flex gap-1 items-center text-black px-4 py-2 rounded-md font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition duration-300"
                    >
                        View Demo <IoIosArrowRoundForward />
                    </a>
                </div>

                {/* Tag */}
                <span
                    className={`absolute top-4 right-3 text-xs font-bold px-2 py-1 rounded-2xl bg-whitew bg-amber-400`}
                >
                    {projects.tag}
                </span>
            </div>

            {/* Content */}
            <div className="px-5 py-4 flex flex-col gap-3 h-45">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-lg text-white uppercase">{projects.projectName}</h2>
                    <span className="text-sm flex items-center gap-1 text-gray-400"><CiCalendar size={20} /> {projects.year}</span>
                </div>

                <div>
                    <h3 className="font-bold text-[16px] uppercase mb-2 text-gray-400">{projects.stack}</h3>

                    <div className="grid grid-cols-4 gap-5">
                        {projects.stacks.map((stack) => (
                            <div
                                key={stack}
                                className="rounded-full bg-gray-300/40 text-gray-300 px-3 text-sm"
                            >
                                {stack}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-auto">
                    <a
                        href={`${projects.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-500 font-semibold text-sm flex items-center gap-1"
                    >
                        View Project <IoIosArrowRoundForward />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;