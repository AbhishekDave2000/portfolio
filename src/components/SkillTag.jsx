const PRIMARY_SKILLS    = "text-lg text-zinc-700 px-2 py-1 rounded-lg bg-amber-200";
const SECONDARY_SKILLS  = "text-lg text-amber-100 px-2 py-1 rounded-lg border border-amber-200";

const SkillTag = ({skill,skillType}) => {
    return(
        <span className={skillType === "primary" ? PRIMARY_SKILLS : SECONDARY_SKILLS}>{skill}</span>
    )
}

export default SkillTag;