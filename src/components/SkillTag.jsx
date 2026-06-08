import { useColor } from '../context/ThemeContext';

const SkillTag = ({skill,skillType}) => {
    const { c, color } = useColor();

    const PRIMARY_SKILLS    = `text-lg text-zinc-700 px-2 py-1 rounded-lg bg-${c(200)}`;
    const SECONDARY_SKILLS  = `text-lg text-${c(100)} px-2 py-1 rounded-lg border border-${c(700)}`;

    return(
        <span className={skillType === "primary" ? PRIMARY_SKILLS : SECONDARY_SKILLS}>{skill}</span>
    )
}

export default SkillTag;