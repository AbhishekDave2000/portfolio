import { useColor } from '../context/ThemeContext';

const SkillTag = ({skill,skillType}) => {
    const { c, color } = useColor();

    const PRIMARY_SKILLS    = `text-lg text-zinc-700 px-2 py-1 rounded-lg bg-${c(200)} 
                                transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:bg-${c(300)} cursor-pointer`;
    const SECONDARY_SKILLS  = `text-lg text-${c(100)} px-2 py-1 rounded-lg border border-${c(700)} 
                                transition-all duration-300 ease-out hover:border-${c(400)} hover:scale-105 hover:text-${c(300)} hover:bg-${c(900)}/50 hover:shadow-md cursor-pointer`;

    return(
        <span className={skillType === "primary" ? PRIMARY_SKILLS : SECONDARY_SKILLS}>{skill}</span>
    )
}

export default SkillTag;