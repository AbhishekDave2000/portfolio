import SkillTag from "./SkillTag";


const SkillsRow = ({heading, skillType, skills}) => {
    return(
        <div className="grid grid-cols-3 items-center justify-center border-b border-zinc-900 pb-2">
            <div className="text-zinc-400 text-2xl col-span-1">
                {heading}
            </div>
            <div className="flex flex-row flex-wrap gap-2 items-center col-span-2">
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