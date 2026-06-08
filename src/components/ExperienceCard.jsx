import { experiences } from "../data/experience";
import { useColor } from '../context/ThemeContext';

const ExperienceCard = ({exp}) => {
    const { c } = useColor();

    return(
        <div className="flex gap-6 pl-5">
            {/* Side Section Line */}
            <div className="flex flex-col items-center">
                <div className={`w-8 h-9 rounded-full bg-${c(300)}`}></div>
                <div className="h-full w-px bg-zinc-700"></div>
            </div>

            {/* Main Experience Card */}
            <div className="flex flex-col">
                {/* Job Title & Position */}
                <h2 className={`text-3xl text-${c(200)}`}>{exp.role}</h2>
                {/* Location & Duration */}
                <p className="flex gap-4 text-xl"> 
                    <span>
                        {exp.company},   
                    </span>
                    <span>
                        {exp.location}
                    </span>
                    <span>
                        {exp.period}
                    </span>
                </p>
                <div className="flex flex-col gap-2 pl-6 py-3 text-lg">
                    {exp.points.map((point, index) => (
                        <span key={index} className="flex"><span className={`text-${c(200)} pr-2`}>➤</span>{point}</span>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;