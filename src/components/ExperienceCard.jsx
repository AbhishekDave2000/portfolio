import { experiences } from "../data/experience";
import { useColor } from '../context/ThemeContext';

const ExperienceCard = ({exp, isLast}) => {
    const { c } = useColor();

    return(
        <div className="flex gap-6 pl-5">
            {/* Side Section Line */}
            <div className="flex flex-col items-center">
                <div className={`relative flex items-center justify-center w-5 h-5 rounded-full bg-${c(500)} ring-6 ring-${c(500)}/30 mt-2 shrink-0`}>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                {!isLast && <div className={`w-px flex-1 mt-1 bg-linear-to-b from-${c(800)} to-zinc-800`}></div>}
            </div>

            {/* Main Experience Card */}
            <div className="flex flex-col mb-8">
                
                {/* Time Line */}
                <span className={`text-xs font-medium px-3 py-1 rounded-full bg-${c(500)}/10 text-${c(400)} border border-${c(500)}/20 w-fit my-2`}>
                    {exp.period}
                </span>

                {/* Job Title & Position */}
                <h2 className={`text-3xl text-${c(300)}`}>{exp.role}</h2>
                
                {/* Location & Duration */}
                <p className="flex gap-2 text-xl items-center"> 
                    <span className={`text-md text-${c(200)}`}>
                        {exp.company}
                    </span>
                    <span className="text-zinc-600 text-4xl text-center">•</span>
                    <span className={`text-md`}>
                        {exp.location}
                    </span>
                </p>

                {/* Divider */}
                <div className={`h-px w-full bg-linear-to-r from-${c(500)}/30 to-transparent mb-4`}></div>

                <div className="flex flex-col gap-2 pl-6 text-lg">
                    {exp.points.map((point, index) => (
                        <div key={index} className="flex gap-3 items-start">
                            <span className={`text-${c(400)} mt-1 shrink-0 text-sm`}>▹</span>
                            <span className="text-zinc-300 text-base leading-relaxed">{point}</span>
                        </div>
                    ))} 
                </div>

            </div>
        </div>
    )
}

export default ExperienceCard;