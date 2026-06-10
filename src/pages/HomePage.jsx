import Navbar from "../components/Navbar";
import SectionHeading from '../components/SectionHeading';
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsRow from "../components/SkillsRow";
import ExperienceCard from "../components/ExperienceCard";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ProjectCard from "../components/ProjectCard";
import { skills } from "../data/skills";
import { experiences } from "../data/experience";
import { education } from "../data/education";
import { projects } from "../data/project";
import { BsJavascript } from "react-icons/bs";
import EducationCard from "../components/EducationCard";
import ScrollUpButton from "../components/ScrollUpButton";
import { useColor } from "../context/ThemeContext";

const HomePage = () => {
    const { c } = useColor();
    return(
        <>
            {/* Navigation Bar */}
            <Navbar />

            {/* Scroll Top button */}
            <ScrollUpButton />

            {/* Hero Section */}
            <section id="hero" className="flex flex-col items-start justify-center w-full max-w-5xl h-auto mx-auto tracking-wide px-5 py-20">
                <HeroSection />
            </section>
            <div className={`h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent`} />
            
            {/* About Section */}
            <section id="about" className="flex flex-col item-center justify-center w-full max-w-5xl mx-auto py-20">
                <SectionHeading number="01" heading="ABOUT ME" />
                <AboutSection />
            </section>
            <div className={`h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent`} />

            {/* Skills Section */}
            <section id="skills" className="flex flex-col item-center justify-center py-20 w-full max-w-5xl mx-auto">
                <SectionHeading number="02" heading="SKILLS" />
                <div className="flex flex-col gap-4">
                    <SkillsRow heading="LANGUAGES" skillType="primary" skills={skills.languages} />
                    <SkillsRow heading="FRAMEWORKS & LIBRARIES" skillType="secondary" skills={skills.frameworks} />
                    <SkillsRow heading="DATABASES" skillType="secondary" skills={skills.databases} />
                    <SkillsRow heading="TOOLS & TECHNOLOGIES" skillType="secondary" skills={skills.tools} />
                    <SkillsRow heading="METHODOLOGIES" skillType="secondary" skills={skills.methods} />
                </div>
            </section>
            <div className={`h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent`} />

            {/* Experience Section */}
            <section id="experience" className="flex flex-col item-center justify-center py-20 w-full max-w-5xl mx-auto">
                <SectionHeading number="03" heading="EXPERIENCE" />
                {experiences.map((exp, index) => <ExperienceCard key={exp.id} exp={exp} isLast={index === experiences.length - 1} />)}
            </section>
            <div className={`h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent`} />

            {/* Project Section */}
            <section id="projects" className="flex flex-col item-center justify-center py-20 w-full max-w-5xl mx-auto">
                <SectionHeading number="04" heading="PROJECTS" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {projects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
                </div>
            </section>
            <div className={`h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent`} />

            {/* Education Section */}
            <section id="education" className="flex flex-col item-center justify-center py-20 w-full max-w-5xl mx-auto">
                <SectionHeading number="05" heading="EDUCATION" />
                <div className="flex flex-row flex-wrap justify-between gap-6 mt-2">
                    {education.map( (edu, index) => <EducationCard key={index} edu={edu} />)}
                </div>
            </section>
            <div className={`h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent`} />

            {/* Contact */}
            <section id="contact" className="flex flex-col item-center justify-center py-20 w-full max-w-5xl mx-auto mb-5">
                <SectionHeading number="06" heading="CONTACT" />
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