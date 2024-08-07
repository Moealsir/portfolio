import { facebook, instagram, twitter, linkedin, whatsapp } from "../assets/icons"; // Footer Icons
import { programming, frontend, backend, webdev, typing, dns, datafetch, scrap, automation } from "../assets/icons/index.js"; // Interests Icons

import {c, javascript, python, typescript} from "../assets/icons"; // Skills Icons .. Languages 
import { css, html, tailwind, react } from "../assets/icons"; // Skills Icons .. Frontend
import { nodejs, nextjs, flask, expressjs } from "../assets/icons"; // Skills Icons .. Backend
import { mysql, mongodb, sqlite } from "../assets/icons"; // Skills Icons .. Database
import { bash, git, github, githubactions, vscode, postman, nginx } from "../assets/icons"; // Skills Icons .. Tools

import { htmlbadge, reactbadge, typescriptbadge, tailwindbadge, databasebadge, nodejsbadge, pythonbadge, seleniumbadge, wwebjsbadge } from "../assets/icons"; // Projects Badges
import { portfolio, alxproj, alxterm, alxmsg, imdb, bettyfixer, weatherwave7 } from "../assets/images/"; // Projects Images
import { tcexcelout, tcjsonout, exceloutput, ondemand, sqloutput } from "../assets/images/"; // Projects Images

// Navbar 
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#resume", label: "Resume" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

// Interests
export const Interests = [
    {
        title: "Web Development",
        icon: webdev,
    },
    {
        title: "Frontend Development",
        icon: frontend,
    },
    {
        title: "Backend Development",
        icon: backend,
    },
    {
        title: "Touch Typing",
        icon: typing,
    },
    {
        title: "Scraping",
        icon: scrap,
    },
    {
        title: "Data Fetching",
        icon: datafetch,
    },
    {
        title: "Automation",
        icon: automation,
    },
    {
        title: "Domain & DNS",
        icon: dns,
    },
]   

// Skills
export const Languages = [
    {alt: "Python", src: python},
    {alt: "TypeScript", src: typescript},
    {alt: "JavaScript", src: javascript},
    {alt: "C", src: c},
]

export const Frontend = [
    {alt: "CSS", src: css},
    {alt: "HTML", src: html},
    {alt: "Tailwind CSS", src: tailwind},
    {alt: "React", src: react},
]

export const Backend = [
    // {alt: "Express.js", src: expressjs},
    {alt: "Node.js", src: nodejs},
    {alt: "Next.js", src: nextjs},
    {alt: "Flask", src: flask},
]

export const Database = [
    {alt: "MySQL", src: mysql},
    {alt: "MongoDB", src: mongodb},
    {alt: "SQLite", src: sqlite},
]

export const Tools = [
    {alt: "Git", src: git},
    {alt: "GitHub", src: github},
    {alt: "GitHub Actions", src: githubactions},
    {alt: "Nginx", src: nginx},
    {alt: "VS Code", src: vscode},
    {alt: "Postman", src: postman},
    {alt: "Bash", src: bash}
]

export const projectData = [
    {
        title: 'Portfolio',
        description: 'Single Page Responsive Portfolio Website Using react and tailwindcss. Compatible with all mobile devices, with a beautiful and pleasant user interface',
        imgSrc: [{ url: portfolio.src, alt: "portfolio" },],
        repo: 'https://github.com/Moealsir/portfolio',
        link: 'https://moealsir.github.io',
        year: '06-2024',
        used: [
            { name: "Next Js", src: nextjs },
            { name: "React", src: reactbadge },
            { name: "HTML", src: htmlbadge },
            { name: "TypeScript", src: typescriptbadge },
            { name: "Tailwind CSS", src: tailwindbadge },
        ],
    },
    {
        title: 'WeatherWave7',
        description: 'WeatherWave7 is a cutting-edge weather forecasting application that provides real-time weather updates and forecasts for locations worldwide. Designed with a user-friendly interface, it ensures a seamless experience for users across all devices. Utilizing the latest in meteorological technology, WeatherWave delivers accurate and detailed weather information, helping users stay prepared for any conditions.',
        imgSrc: [{ url: weatherwave7.src, alt: "WeatherWave7" },],
        repo: 'https://github.com/Moealsir/WeatherWave7/',
        link: 'https://moealsir.github.io/get_started',
        year: '2024',
        used: [
            { name: "Next Js", src: nextjs},
            { name: "React", src: reactbadge },
            { name: "HTML", src: htmlbadge },
            { name: "Tailwind CSS", src: tailwindbadge },
            { name: "TypeScript", src: typescriptbadge },
        ],
    },
    {
        title: 'IMDB Top 250 Scraper',
        description: 'The IMDB Top 250 Scraper is a Python project that extracts detailed info on the top 250 IMDB movies, including titles, ratings, cast, crew, and storylines. Using Selenium and BeautifulSoup, it exports data to JSON, Excel, XML, and CSV for easy analysis and storage, providing seamless access to IMDB\'s top 250 list.',
        imgSrc: [
            { url: imdb.src, alt: "IMDB Top 250 Scraper" },
            { url: ondemand.src, alt: "Twitter Bot Checker" },
            { url: exceloutput.src, alt: "Twitter Bot Checker" },
            { url: sqloutput.src, alt: "Twitter Bot Checker" },

        ],
        repo: 'https://github.com/Moealsir/imdb_scraper',
        link: '',
        year: '2024',
        used: [
            { name: "Python", src: pythonbadge },
            { name: "Database", src: htmlbadge },
            { name: "Selenium", src: seleniumbadge },
            { name: "Web Scraping", src: scrap },
        ],
    },
    {
        title: 'Project Detail Reminder Automation',
        description: 'Automate project detail extraction and reminders using Selenium for web scraping and a WhatsApp bot built with JavaScript and Node.js using whatsapp-web.js. This tool fetches current and upcoming project details, sending reminders via terminal or WhatsApp. It optimizes workflow and organization efficiently.',
        imgSrc: [
            { url: alxproj.src, alt: "Project Detail Reminder Automation" },
            { url: alxterm.src, alt: "Project Detail Reminder Automation" },
            { url: alxmsg.src, alt: "Project Detail Reminder Automation" },
        ],
        repo: 'https://github.com/Moealsir/portfolio',
        link: '',
        year: '2024',
        used: [
            { name: "Python", src: pythonbadge },
            { name: "Node Js", src: nodejsbadge },
            { name: "Selenium", src: seleniumbadge },
            { name: "Web Scraping", src: scrap },
            { name: "whatsapp web js", src: wwebjsbadge },
        ],
    },
    {
        title: 'Twitter Bot Checker',
        description: 'Create a Twitter bot converting user data to JSON and Excel. Extracted: Username, Availability, DM Type, Account Type, Verification',
        imgSrc: [
            { url: tcexcelout.src, alt: "Twitter Bot Checker" },
            { url: tcjsonout.src, alt: "Twitter Bot Checker" },
        ],
        repo: '',
        link: '',
        year: '2024',
        used: [
            { name: "Python", src: pythonbadge },
            { name: "Node js", src: nodejsbadge },
            { name: "Selenium", src: htmlbadge },
            { name: "Web Scraping", src: scrap },
            { name: "Data Extraction", src: datafetch },
        ],
    },
    {
        title: 'BettyFixer',
        description: 'Betty Fixer is a tool designed to automatically fix coding style issues in C files based on the Betty coding style guidelines. It performs corrections to ensure that the code complies with the Betty style, making it more readable and consistent.',
        imgSrc: [{ url: bettyfixer.src, alt: "BettyFixer" },],
        repo: 'https://github.com/Moealsir/betty_fixer',
        link: '',
        year: '2024',
        used: [
            { name: "Python", src: pythonbadge },
            { name: "Node js", src: nodejsbadge },
            { name: "Selenium", src: seleniumbadge },
            { name: "Web Scraping", src: scrap },
            { name: "Data Extraction", src: datafetch },
        ],
    }
];

// Resume
export const Education = [
    {
        subject: "Bachelor of Science in Control System Engineering",
        school: "Sudan International University",
        year: "Oct 2017 - May 2022"
    },
    {
        subject: "Software Engineering",
        school: "ALX Africa",
        year: "Sep 2023 - present",
    },
]

export const Certificates = [
    {
        title: "PLC basic applications",
        by: "Creative Solutions Co.Ltd",
        year: "Mar 2021",
    }, 
    {
        title: "Industrial PLC Advance applications",
        by: "Creative Solutions Co.Ltd",
        year: "Apr 2021",
    },
]

export const Experiences = [
    {
        position: "Software Engineering Intern",
        company: "ALX Africa",
        year: "Sep 2023 - present",
    },
]

export const Position = [
    {
        subject: "Electrical Engineer - Solar Engineer",
        school: "Planet Energy",
        responsibilities: [
            "• Presented at 5+ national exhibitions with technical talks.", 
            "• Achieved 20% efficiency increase as Sector Manager.", 
            "• Enhanced project efficiency by 25% with solar solutions.",
            "• Designed innovative solar systems for clients.",
            "• Coordinated installation, boosting quality and satisfaction.",
            "• Improved system efficiency by 20% with maintenance.",
        ],
        year: "Mar 2022 – Apr 2023",
    },
    {
        subject: "Volunteer",
        school: "3-2-1 Qatar Olympic",
        responsibilities: [
            "• Explained Olympic games to 100+ children and adults.", 
            "• Demonstrated games, ensuring 95% satisfaction.", 
            "• Coordinated with organizers, achieving 30% event efficiency increase.",
        ],
        year: "Jun 2024 – Jul 2024",
    },
]

// Footer Links
export const socialMedia = [
    { src: facebook, alt: "facebook logo", url: "https://www.facebook.com/profile.php?id=100084065914928&mibextid=ZbWKwL" },
    { src: linkedin, alt: "linkedin logo", url: "https://www.linkedin.com/in/mohamed-suliman-27a723259/" },
    { src: github, alt: "github logo", url: "https://github.com/Moealsir" },
    { src: twitter, alt: "twitter logo", url: "https://twitter.com/sonofsecret" },
    { src: instagram, alt: "instagram logo", url: "https://instagram.com/sonofsecret" },
    { src: whatsapp, alt: "whatsapp logo", url: "https://api.whatsapp.com/send/?phone=97439900342" },
];
