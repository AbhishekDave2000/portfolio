import { SiPivotaltracker } from "react-icons/si";
import { MdElectricBolt } from "react-icons/md";
import { FaHome } from 'react-icons/fa';

export const projects = [
    {
        title: "Jab Tracker",
        description: "Developed a job tracking platform that streamlines application management, interview scheduling, and follow-up tracking through an intuitive dashboard, helping users efficiently monitor their job search progress.",
        tags: ["Ruby on Rails", "React.js", "PostgreSQL"],
        github: "https://github.com/AbhishekDave2000/job-tracker-frontend",
        live: null,
        icon: SiPivotaltracker,
    },
    {
        title: "Helperland",
        description: "Developed a full-featured service booking platform with appointment scheduling, user and provider management, automated workflow orchestration, secure authentication, and real-time booking updates to streamline service operations and enhance user experience.",
        tags: ["PHP", "MySQL", "Bootstrap"],
        github: "https://github.com/AbhishekDave2000/Halperhand",
        live: "https://abhishekdave2000.github.io/Halperhand/HTML/",
        icon: MdElectricBolt,
    },
    {
        title: "Voltup CRM",
        description: "Engineered a scalable EV charging ecosystem used by 10,000+ users, integrating automated business workflows, real-time inventory tracking, payment gateways, Redis graph-based data modeling, and high-performance PostgreSQL databases to support reliable production operations.",
        tags: ["PHP", "MySQL", "Bootstrap"],
        github: "",
        live: "https://www.voltup.in/",
        icon: FaHome,
    }
]