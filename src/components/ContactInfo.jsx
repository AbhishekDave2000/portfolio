import { IoPersonOutline } from "react-icons/io5";

const ContactInfo = () => {
    return(
        <div className="flex flex-col gap-4 py-10 px-10">
            {/* Header Section */}
            <div className="flex flex-row item-center gap-2">
                <IoPersonOutline size={30}/>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl text-white">Let's Connect</h1>
                    <div className="flex gap-2 items-center">
                        <div className="h-0.5 w-20 bg-gradient-to-r from-amber-500 to-amber-900"></div>
                        <div className="h-1 w-1 rounded-full bg-amber-500"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactInfo;