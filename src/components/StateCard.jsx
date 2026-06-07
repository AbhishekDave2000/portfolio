const colorMapCss = {
    blue:       "text-blue-300",
    red:        "text-red-300",
    purple:    "text-purple-300",
    green:      "text-green-300",
}

const boxCss = {
    blue:       "text-blue-300 border-blue-200 hover:border-gray-200 hover:text-blue-200 hover:shadow-blue-500",
    red:        "text-red-300 border-red-200 hover:border-gray-200 hover:text-red-200 hover:shadow-red-500",
    purple:    "text-purple-300 border-purple-200 hover:border-gray-200 hover:text-purple-200 hover:shadow-purple-500",
    green:      "text-green-300 border-green-200 hover:border-gray-200 hover:text-green-200 hover:shadow-green-500",
}

const StateCard = ({value, label, elementLabel, style}) => {
    return(
        <div className={`border py-5 flex flex-col items-center justify-center rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 ${boxCss[style]}`}>
            <span className={ colorMapCss[style] } >{ elementLabel }</span>
            <span className={`text-3xl font-bold ${colorMapCss[style]}`}>{value}</span>
            <span className="text-md">{label}</span>
        </div>
    )
}

export default StateCard;