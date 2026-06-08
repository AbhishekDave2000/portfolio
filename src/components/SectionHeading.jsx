import { useColor } from '../context/ThemeContext';

const SectionHeading = ({number, heading}) => {
    const { c, color } = useColor();
    
    return(
        <>
            <p className={`font-stretch-condensed font-bold text-3xl text-${c(400)}`}>{number} - {heading}</p>
            <div className="flex mt-2 mb-5 gap-2">
                <div className="flex gap-2 items-center">
                    <div className={`h-0.5 w-20 bg-gradient-to-r from-${c(500)} to-${c(900)}`}></div>
                    <div className={`h-1 w-1 rounded-full bg-${c(500)}`}></div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className={`h-1 w-1 rounded-full bg-${c(500)}`}></div>
                    <div className={`h-0.5 w-20 bg-gradient-to-l from-${c(500)} to-${c(900)}`}></div>
                </div>
            </div>
        </>
    )
}

export default SectionHeading;