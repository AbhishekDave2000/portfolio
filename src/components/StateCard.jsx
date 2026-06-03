const StateCard = ({value, label}) => {
    return(
        <div className="border border-amber-200 p-2 flex flex-col items-center justify-center rounded-lg shadow-amber-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gray-200 hover:text-amber-200 hover:shadow-white">
            <span className="text-4xl font-bold">{value}</span>
            <span>{label}</span>
        </div>
    )
}

export default StateCard;