import SkillTag from "./SkillTag";


const SkillsRow = ({heading, skillType, skills}) => {
    return(
        <div className="flex flex-col md:grid md:grid-cols-3 md:items-center md:justify-center border-b border-zinc-900 pb-2">
            <div className="text-zinc-400 text-md md:text-2xl col-span-1">
                {heading}
            </div>
            <div className="flex flex-row flex-wrap gap-2 items-center col-span-2 my-1.5 md:my-0">
                {skills.map((skill, index) => 
                    <SkillTag 
                        key={`${skill}-${index}`}
                        skill={skill} 
                        skillType={skillType} 
                        style={{
                            animationDelay: `${index * 100}ms`
                        }} 
                        index={index}
                    />
                )}
            </div>
        </div>
    )
}

export default SkillsRow;