import Navbar from "../components/Navbar";

const HomePage = () => {
    return(
        <>
            {/* Navigation Bar */}
            <Navbar />

            {/* Hero Section */}
            <section id="hero" className="flex flex-col items-start justify-center w-full max-w-5xl h-auto mx-auto tracking-wide px-5 mt-20 mb-16">
                
                <span className="max-w-fit font-light text-3xl text-amber-300 mb-1 animate-bounce">Full Stack Software Developer</span >
                
                <div className="font-semibold text-7xl text-white">
                    {"<Abhishek />"}
                </div>
                
                <div className="font-light text-lg text-amber-200 mb-3">
                    Ruby on Rails • React • Node.js | Building scalable Applications, Microservice Architecture, APIs, and cloud-native solutions.
                </div>

                <div className="flex gap-4 mt-5 tracking-tight">
                    <button className="bg-zinc-200 font-semibold text-black px-3 py-1.5 rounded-xl hover:bg-amber-200 transition duration-400 hover:shadow-sm hover:shadow-amber-200 cursor-pointer">View Projects</button>
                    <button className="bg-zinc-200 font-semibold text-black px-3 py-1.5 rounded-xl hover:bg-amber-200 transition duration-400 hover:shadow-sm hover:shadow-amber-200 cursor-pointer">Resume</button>
                </div>
            </section>
            
            <hr className="text-gray-900" />
            
            {/* About Section */}
            <section id="about" className="flex item-center justify-center w-full max-w-5xl mx-auto py-16">
                {/* <h2 className="text-white font-stretch-semi-condensed text-4xl">About Me</h2> */}
                {/* Left About Section */}
                <div className="flex flex-row gap-4">
                    <div className="basis-3/5">
                        <p className="font-stretch-condensed font-bold text-4xl">01 - ABOUT ME</p>
                        <div className="w-16 h-px bg-amber-400 text-xl font-light mb-4 mt-0.5"></div>
                        <div className="font-light text-2xl">
                            Full-stack Ruby on Rails Developer with 3+ years building cloud-native, scalable web applications in Agile/DevOps environments.
                            Proven experience delivering production Rails services with CI/CD pipelines, Redis, PostgreSQL, and RESTful APIs. Comfortable
                            owning features end-to-end across iterative sprints.
                        </div>
                    </div>
                    <div className="basis-2/5 grid grid-cols-2 gap-6">
                        <div className="border border-amber-200 p-2 flex flex-col items-center justify-center rounded-lg shadow-amber-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gray-200 hover:text-amber-200 hover:shadow-white">
                            <span className="text-4xl font-bold">3 +</span>
                            <span>Years Experience</span>
                        </div>
                        <div className="border border-amber-200 p-2 flex flex-col items-center justify-center rounded-lg shadow-amber-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gray-200 hover:text-amber-200 hover:shadow-white">
                            <span className="text-4xl font-bold">15 +</span>
                            <span>Production Features</span>
                        </div>
                        <div className="border border-amber-200 p-2 flex flex-col items-center justify-center rounded-lg shadow-amber-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gray-200 hover:text-amber-200 hover:shadow-white">
                            <span className="text-4xl font-bold">10000 +</span>
                            <span>User Impected</span>
                        </div>
                        <div className="border border-amber-200 p-2 flex flex-col items-center justify-center rounded-lg shadow-amber-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gray-200 hover:text-amber-200 hover:shadow-white">
                            <span className="text-4xl font-bold">100%</span>
                            <span>Test Coverage</span>
                        </div>
                    </div>
                </div>

                {/* Right About Section */}
                <div >

                </div>
            </section>

            <hr className="text-gray-900" />

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