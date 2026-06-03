const PRIMARY_SKILLS    = "text-xl text-zinc-700 px-2 py-1 rounded-lg bg-amber-200";
const SECONDARY_SKILLS  = "text-xl text-amber-100 px-2 py-1 rounded-lg border border-amber-200";

const SkillsRow = ({heading, skillType, skills}) => {
    return(
        <div className="grid grid-cols-3 items-center justify-center border-b border-zinc-900 pb-2">
            <div className="text-zinc-400 text-2xl col-span-1">
                {heading}
            </div>
            <div className="flex flex-row flex-wrap gap-2 item-center col-span-2">
                {skills.map((skill) => 
                    <span className={skillType === "primary" ? PRIMARY_SKILLS : SECONDARY_SKILLS}>{skill}</span>
                )}
            </div>
        </div>
    )
}

export default SkillsRow;