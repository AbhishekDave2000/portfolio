import { useColor } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt, FaHome } from 'react-icons/fa';
import { SiPivotaltracker } from "react-icons/si";
import { MdElectricBolt } from "react-icons/md";

const ProjectCard = ({project, index}) => {
    const { c } = useColor();
    const Icon = project.icon;

    return(
        <div className={`flex flex-col bg-zinc-900/30 border border-${c(700)} rounded-xl overflow-hidden transition-all hover:-translate-y-1`}>
            {/* Top right image section */}
            <div className='h-36 bg-zinc-950 flex items-center justify-center relative border-b border-zinc-800'>
                <Icon className={`text-${c(700)} text-5xl`} size={48} />

                <div className='absolute top-3 right-3 flex gap-2'>
                    {project.github && (
                            <a 
                                href={project.github} 
                                target='_blank' 
                                className='w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors'
                            >
                                <FaGithub className="text-zinc-300 text-sm" />
                            </a>
                    )}
                    {project.live && (
                        <a 
                            href={project.live} 
                            target="_blank"
                            className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                        >
                            <FaExternalLinkAlt className="text-zinc-300 text-xs" />
                        </a>
                    )}
                </div>
            </div>
            
            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className={`text-lg font-semibold text-${c(200)} mb-2`}>{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span 
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-full bg-${c(500)}/10 text-${c(400)} border border-${c(500)}/20`}
                    >
                        {tag}
                    </span>
                ))}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;