import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";


const Info = {
  name: "Luis Gomez",
  stack: [
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "Web Application Developer"
  ],
  bio: `I build software that isn’t just fast and scalable — it feels good to use. 
  As a Software Engineer, I specialize in crafting smooth, high-performance applications with React, .NET, and Kubernetes, 
  ensuring every interaction is seamless, intuitive, and efficient. Whether it’s designing pixel-perfect UIs, optimizing backend workflows, 
  or securing cloud infrastructure, my focus is on creating tech that not only works flawlessly but also enhances user experience at every level.

  Before I was writing clean, scalable code, I was choreographing performances as a dancer. I earned a BFA in Dance from UCSB, 
  and that experience shaped the way I think about problem-solving—balancing structure with creativity, precision with flexibility. 
  Outside of engineering, I train in kickboxing, experiment with photography using my Panasonic GX85, and host a podcast, The Bottom Left Pane, 
  where I explore stories of resilience, mental health, and personal growth.

  If you’re looking for a developer who values clean code, agile collaboration, and problem-solving, let’s connect.`
};

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Angular",
      "Redux",
      "SCSS",
      "CSS Grid",
      "Flexbox"
    ]
  },
  {
    title: "Backend",
    skills: [
      ".NET Core",
      "C#",
      "Java (Spring Boot)",
      "Node.js",
      "Express.js",
      "REST APIs"
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Google Cloud Platform (GCP)",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines (Azure DevOps)",
      "Jenkins",
      "Splunk",
      "PagerDuty"
    ]
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Firebase"
    ]
  },
  {
    title: "Authentication & Security",
    skills: [
      "Okta",
      "Firebase Authentication",
      "ASP.NET Core Identity"
    ]
  },
  {
    title: "Testing & Tools",
    skills: [
      "Jest",
      "Git",
      "Adobe Target (A/B Testing)",
      "Agile/Scrum",
      "Microservices"
    ]
  }
];

const socialLinks = [
  { link: "https://github.com/gomez714", icon: IconBrandGithub },
  { link: "https://www.linkedin.com/in/luis-gomez-g714", icon: IconBrandLinkedin },
  { link: "https://www.instagram.com/gomez_714", icon: IconBrandInstagram }, 
  { link: "https://leetcode.com/u/gomez714", icon: IconBrandLeetcode }
];

export { Info, SkillInfo, socialLinks };