export const experiences = [
    {
        id: 1,
        role: "Full Stack Developer — Intern",
        company: "ICE Robotics",
        location: "Toronto, ON",
        period: "May 2025 - Aug 2025",
        points: [
            "Built React.js/TypeScript components connected to Node.js/Express REST APIs",
            "Reduced page load time by 15% via code splitting and lazy loading",
            "Refactored state management with React hooks, cutting unnecessary re-renders",
        ],
        tags: ["React", "TypeScript", "Node.js", "Express"],
        active: true   // latest job = gold dot
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Tatvasoft",
        location: "Gujarat, India",
        period: "Jan 2022 - Aug 2024",
        points: [
            "Designed and scaled REST APIs in Ruby on Rails for CRM and Charging Station microservices serving 5,000+ users",
            "Built and maintained React.js front-end interfaces connected to Rails and Node.js backends",
            "Cut data retrieval time by 50% through PostgreSQL/MongoDB query optimization and indexing",
            "Improved API response time by 60% using Redis caching for real-time data across microservices",
            "Integrated back-end services with third-party APIs — payment gateways, email/SMS providers",
            "Achieved 100% RSpec test coverage; led code reviews and maintained technical documentation",
            "Shortened release cycles by 60% with CI/CD pipelines on GitLab and ActionCable real-time features",
        ],
        tags: ["Ruby on Rails", "PostgreSQL", "Redis", "Kafka", "AWS"],
        active: false
    },
]