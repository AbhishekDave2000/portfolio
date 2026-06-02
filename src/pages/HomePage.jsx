import Navbar from "../components/Navbar";

const HomePage = () => {
    return(
        <>
            {/* Navigation Bar */}
            <Navbar />

            {/* Hero Section */}
            <section id="hero" className="flex flex-col items-start justify-center w-full max-w-5xl h-auto mx-auto tracking-wide px-5 mt-20 mb-5">
                <marquee className="w-80 font-light text-3xl text-amber-300 mb-1">Full Stack Software Developer</marquee >
                <div className="font-semibold text-6xl text-white">
                    {"<Abhishek />"}
                </div>
                <div className="font-light text-lg text-amber-200 mb-3">
                    Ruby on Rails • React • Node.js | Building scalable Applications, Microservice Architecture, APIs, and cloud-native solutions.
                </div>

                {/* ============================= */}
                {/* Button Links to be Added here */}
                {/* ============================= */}
                <div className="flex gap-4 mt-5 tracking-tight">
                    <button className="bg-white font-semibold text-black px-4 py-1 rounded-lg hover:bg-amber-200 cursor-pointer">View Projects</button>
                    <button className="bg-white font-semibold text-black px-4 py-1 rounded-lg hover:bg-amber-200 cursor-pointer">Contact</button>
                </div>
            </section>
            
            <hr className="text-gray-800" />
            
            {/* About Section */}
            <section id="about" className="flex item-center justify-center mt-5 w-full max-w-5xl mx-auto border-gray-100 border">
                <h2 className="text-white font-stretch-semi-condensed text-4xl">About Me</h2>
                {/* Left About Section */}
                <div>
                    
                </div>

                {/* Right About Section */}
                <div>

                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="flex item-center justify-center mt-5 w-full max-w-5xl mx-auto">
                <h2 className="text-white font-stretch-semi-condensed text-4xl">Experience</h2>
            </section>

            {/* Contact */}
            <section id="contact" className="flex item-center justify-center mt-5 w-full max-w-5xl mx-auto">
                <h2 className="text-white font-stretch-semi-condensed text-4xl">Contact</h2>
            </section>
        </>
    )
}

export default HomePage;