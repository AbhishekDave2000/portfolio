const SectionHeading = ({number, heading}) => {
    return(
        <>
            <p className="font-stretch-condensed font-bold text-3xl">{number} - {heading}</p>
            <div className="w-16 h-0.5 bg-amber-400 text-xl font-light mb-4 mt-0.5"></div>
        </>
    )
}

export default SectionHeading;