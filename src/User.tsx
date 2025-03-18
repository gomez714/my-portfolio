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

const ProjectInfo = [
  {
      title: "Ekart E-comm App",
      desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
      image: "Ekart.png",
      live: true,
      technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
      link: "#",
      github: "#"
  },
  {
      title: "Facebook Clone",
      desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
      image: "Facebook.png",
      live: false,
      technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
      link: "#",
      github: "#"
  },
  {
      title: "Spotify Clone",
      desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
      image: "Spotify.png",
      live: false,
      technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
      link: "#",
      github: "#"
  },
  {
      title: "Travel Tracker",
      desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
      image: "Travel.png",
      live: false,
      technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
      link: "#",
      github: "#"
  },
  {
      title: "Instagram Clone",
      desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
      image: "Instagram.png",
      live: false,
      technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
      link: "#",
      github: "#"
  },
  {
      title: "CodeX Code Editor",
      desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
      image: "CodeX.png",
      live: false,
      technologies: ["React", "Tailwind", "Ace Editor"],
      link: "#",
      github: "#"
  }
]

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

const ExperienceInfo = [
  {
      role: "Software Engineer",
      company: "Capital One",
      date: "Apr 2022 - Apr 2024",
      desc: "Engineered high-performance digital experiences for Capital One’s credit decisioning platform, enhancing system reliability and user engagement. Developed scalable, responsive UI components in React and .NET, reducing production downtime by 30% through real-time monitoring with Splunk. Led A/B testing strategies using Adobe Target, optimizing user flows and driving a $2M+ revenue increase. Designed dynamic, mobile-first forms that boosted application completion rates by 25%.",
      skills: ["React", "Java", "Spring Boot", ".NET Core", "Redux", "Adobe Target", "Splunk", "PostgreSQL", "GCP", "CI/CD"]
  },
  {
      role: "Contract Software Engineer",
      company: "Cognizant (via Revature, LLC)",
      date: "Jun 2020 - Mar 2022",
      desc: "Developed enterprise applications, including an internal assessment platform that streamlined hiring, reduced costs, and accelerated onboarding by 40%. Built Kubernetes-based training environments, cutting project ramp-up time and improving developer efficiency. Conducted 75+ technical interviews, emphasizing TDD and pair programming to elevate code quality. Led development of scalable back-end services, improving application performance and maintainability.",
      skills: ["Next.js", "Spring Boot", "MongoDB", "Kubernetes", "Node.js", "CI/CD", "Docker", "Jenkins", "Agile/Scrum"]
  },
  {
      role: "Full Stack Engineering Fellow",
      company: "Formation",
      date: "Jun 2021 - Mar 2022 (Part-time)",
      desc: "Selected for a competitive engineering fellowship, refining skills in full-stack development through hands-on projects and mentorship. Built production-ready features, including pagination, infinite scrolling, and real-time search optimizations. Strengthened React and JavaScript fundamentals through rigorous technical challenges, peer programming, and code reviews.",
      skills: ["React", "TypeScript", "JavaScript", "Node.js", "CSS", "Algorithms & Data Structures", "Pair Programming"]
  }
];

const socialLinks = [
  { link: "https://github.com/gomez714", icon: IconBrandGithub },
  { link: "https://www.linkedin.com/in/luis-gomez-g714", icon: IconBrandLinkedin },
  { link: "https://www.instagram.com/gomez_714", icon: IconBrandInstagram }, 
  { link: "https://leetcode.com/u/gomez714", icon: IconBrandLeetcode }
];

export { Info, SkillInfo, socialLinks, ProjectInfo, ExperienceInfo };