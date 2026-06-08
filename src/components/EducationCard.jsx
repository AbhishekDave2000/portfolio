import { useColor } from '../context/ThemeContext';

const EducationCard = ({edu}) => {
    const { c, color } = useColor();

    return(
        <>
            <div className="flex flex-row min-w-max">
                <div className={`h-full w-1 bg-${c(500)} rounded-4xl`}></div>
                <div className={`flex flex-col gap-1 border border-${c(950)} bg-zinc-950 p-6 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:border hover:shadow-xl hover:shadow-${c(500)}/20 hover:border-${c(500)}`}>
                    <h2 className={`text-4xl text-${c(300)}`}>{edu.degree}</h2>
                    <p className="text-2xl">{edu.major}</p>
                    <span className="text-zinc-400 text-xl">{edu.institute}, {edu.location}</span>
                    <span className="text-zinc-400 text-xl">{edu.duration} . GPA {edu.gpa} </span>
                </div>
            </div>
        </>
    )
}

export default EducationCard;