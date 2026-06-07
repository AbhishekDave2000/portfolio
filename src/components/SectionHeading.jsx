const SectionHeading = ({number, heading}) => {
    return(
        <>
            <p className="font-stretch-condensed font-bold text-3xl text-amber-50">{number} - {heading}</p>
            <div className="flex mt-2 mb-5 gap-2">
                <div className="flex gap-2 items-center">
                    <div className="h-0.5 w-20 bg-linear-to-r from-amber-500 to-amber-900"></div>
                    <div className="h-1 w-1 rounded-full bg-amber-500"></div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="h-1 w-1 rounded-full bg-amber-500"></div>
                    <div className="h-0.5 w-20 bg-linear-to-l from-amber-500 to-amber-900"></div>
                </div>
            </div>
        </>
    )
}

export default SectionHeading;