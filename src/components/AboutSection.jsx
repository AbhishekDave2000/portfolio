import StateCard from "./StateCard";
import { FaCode, FaNetworkWired  } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import { useColor } from '../context/ThemeContext';

const AboutSection = () => {
    const { c, color } = useColor();

    return(
        <div className="flex flex-row flex-wrap md:flex-nowrap gap-4">
            {/* Left About Section */}
            <div className="mx-auto basis-full md:basis-3/5">
                <h2 className={`text-${c(200)} text-3xl md:text-5xl py-2`}>Who I Am</h2>
                <div className="font-light text-md md:text-2xl">
                    Full-stack Engineer with 3+ years of experience across React, TypeScript, Node.js, Express.js, and Ruby on Rails, delivering scalable web applications and RESTful APIs in cloud-native, Agile environments. Collaborated closely with cross-functional teams to translate ambiguous requirements into reliable, well-documented solutions, owning features end-to-end across iterative sprints.
                </div>
            </div>

            {/* Right About Section */}
            <div className="basis-full md:basis-2/5 grid grid-cols-2 gap-6 mx-auto">
                <StateCard value="3 +" label="Years Experience" elementLabel={<FaNetworkWired size={36} />} style="blue" />
                <StateCard value="15 +" label="Production Features" elementLabel={<FaCode size={36} />} style="red" />
                <StateCard value="10000 +" label="User Impected" elementLabel={<FaUsers size={36} />} style="purple" />
                <StateCard value="100%" label="Test Coverage" elementLabel={<SiAdguard size={36} />} style="green" />
            </div>
        </div>
    )
}

export default AboutSection;