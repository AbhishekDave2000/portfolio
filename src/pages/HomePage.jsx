import Navbar from "../components/Navbar";

const HomePage = () => {
    return(
        <>
            <Navbar />
            <div className="flex flex-col items-start justify-center w-full max-w-5xl h-auto mx-auto tracking-wide px-5 mt-20 mb-5">
                <marquee  className="w-80 font-light text-3xl text-amber-300 mb-1 animate-pulse">Full Stack Software Developer</marquee >
                <div className="font-semibold text-6xl text-white">
                    {"<Abhishek />"}
                </div>
                <div className="font-light text-lg text-amber-200 mb-3">
                    Ruby on Rails • React • Node.js | Building scalable Applications, Microservice Architecture, APIs, and cloud-native solutions.
                </div>
                <div className="flex gap-4 mt-5">
                    <button className="bg-white font-semibold text-black px-4 py-1 rounded-lg hover:bg-amber-200 cursor-pointer">View Projects</button>
                    <button className="bg-white font-semibold text-black px-4 py-1 rounded-lg hover:bg-amber-200 cursor-pointer">Contact</button>
                </div>
            </div>
            <hr className="text-gray-800" />
            <div className="flex flex-col item-center justify-center">

            </div>
        </>
    )
}

export default HomePage;