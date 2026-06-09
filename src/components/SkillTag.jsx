import { useColor } from '../context/ThemeContext';
import { motion } from "motion/react";

const SkillTag = ({skill,skillType, style, index}) => {
    const { c, color } = useColor();

    const PRIMARY_SKILLS    = `text-lg text-zinc-700 px-2 py-1 rounded-lg bg-${c(200)}/90 
                                transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:bg-${c(300)} cursor-pointer`;
    const SECONDARY_SKILLS  = `text-lg text-${c(100)} px-2 py-1 rounded-lg border border-${c(700)} 
                                transition-all duration-300 ease-out hover:border-${c(400)} hover:scale-105 hover:text-${c(300)} hover:bg-${c(900)}/50 hover:shadow-md cursor-pointer`;

    return(
        <motion.span 
            style={style}
            className={`${skillType === "primary" ? PRIMARY_SKILLS : SECONDARY_SKILLS}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.1
            }}
        >
            {skill}
        </motion.span>
    )
}

export default SkillTag;