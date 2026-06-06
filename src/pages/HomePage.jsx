import Navbar from "../components/Navbar";
import SectionHeading from '../components/SectionHeading';
import StateCard from "../components/StateCard";
import SkillsRow from "../components/SkillsRow";
import ExperienceCard from "../components/ExperienceCard";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import { skills } from "../data/skills";
import { experiences } from "../data/experience";
import { education } from "../data/education";
import { BsJavascript } from "react-icons/bs";
import EducationCard from "../components/EducationCard";

const HomePage = () => {
    return(
        <>
            {/* Navigation Bar */}
            <Navbar />

            {/* Hero Section */}
            <section id="hero" className="flex flex-col items-start justify-center w-full max-w-5xl h-auto mx-auto tracking-wide px-5 my-5 pt-20 pb-10">
                
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
            <section id="about" className="flex flex-col item-center justify-center w-full max-w-5xl mx-auto my-5 pt-20 pb-10">
                <SectionHeading number="01" heading="ABOUT ME" />
                <div className="flex flex-row gap-4">
                    {/* Left About Section */}
                    <div className="basis-3/5">
                        <h2 className="text-amber-200 text-6xl py-2">Who I Am</h2>
                        <div className="font-light text-2xl">
                            Full-stack Ruby on Rails Developer with 3+ years building cloud-native, scalable web applications in Agile/DevOps environments.
                            Proven experience delivering production Rails services with CI/CD pipelines, Redis, PostgreSQL, and RESTful APIs. Comfortable
                            owning features end-to-end across iterative sprints.
                        </div>
                    </div>

                    {/* Right About Section */}
                    <div className="basis-2/5 grid grid-cols-2 gap-6">
                        <StateCard value="3 +" label="Years Experience" />
                        <StateCard value="15 +" label="Production Features" />
                        <StateCard value="10000 +" label="User Impected" />
                        <StateCard value="100%" label="Test Coverage" />
                    </div>
                </div>
            </section>

            <hr className="text-gray-900" />

            {/* Skills Section */}
            <section id="skills" className="flex flex-col item-center justify-center my-5 pt-20 pb-10 w-full max-w-5xl mx-auto">
                <SectionHeading number="02" heading="SKILLS" />
                <div className="flex flex-col gap-4">
                    <SkillsRow heading="LANGUAGES" skillType="primary" skills={skills.languages} />
                    <SkillsRow heading="FRAMEWORKS & LIBRARIES" skillType="secondary" skills={skills.frameworks} />
                    <SkillsRow heading="DATABASES" skillType="secondary" skills={skills.databases} />
                    <SkillsRow heading="TOOLS & TECHNOLOGIES" skillType="secondary" skills={skills.tools} />
                    <SkillsRow heading="METHODOLOGIES" skillType="secondary" skills={skills.methods} />
                </div>
            </section>

            <hr className="text-gray-900" />

            {/* Experience Section */}
            <section id="experience" className="flex flex-col item-center justify-center my-5 pt-20 pb-10 w-full max-w-5xl mx-auto">
                <SectionHeading number="03" heading="EXPERIENCE" />
                {experiences.map((exp) => <ExperienceCard key={exp.id} exp={exp} />)}
            </section>

            <hr className="text-gray-900" />

            {/* Education Section */}
            <section id="education" className="flex flex-col item-center justify-center my-5 pt-20 pb-10 w-full max-w-5xl mx-auto">
                <SectionHeading number="04" heading="EDUCATION" />
                <div className="flex flex-row flex-wrap justify-between gap-6 mt-2">
                    {education.map( (edu, index) => <EducationCard key={index} edu={edu} />)}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="flex flex-col item-center justify-center my-5 pt-20 pb-10 w-full max-w-5xl mx-auto mb-5">
                <SectionHeading number="05" heading="CONTACT" />
                <div className="max-w-7xl mx-auto mt-5">
                    <div className="grid grid-cols-2 gap-8">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;