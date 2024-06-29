import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#resume", label: "Resume" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#footer", label: "Footer" },
];


import {c, javascript, python, typescript} from "../assets/icons";
import { bash, expressjs, git, github, githubactions, vscode, postman, nginx } from "../assets/icons";
import { mysql, mongodb, sqlite } from "../assets/icons";
import { nodejs, nextjs, flask } from "../assets/icons";
import { css, html, tailwind, react } from "../assets/icons";

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const Languages = [
    {alt: "C", src: c},
    {alt: "JavaScript", src: javascript},
    {alt: "Python", src: python},
    {alt: "TypeScript", src: typescript},
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
    {alt: "VS Code", src: vscode},
    {alt: "Postman", src: postman},
    {alt: "Nginx", src: nginx},
    
    {alt: "Bash", src: bash}
]

import { htmlbadge, reactbadge, typescriptbadge, tailwindbadge, databasebadge, nodejsbadge, pythonbadge, seleniumbadge, wwebjsbadge } from "../assets/icons";
import { portfolio, alx, imdb, bettyfixer, twitterout, weatherwave7 } from "../assets/images/";
export const projectData = [
    {
        title: 'Portfolio',
        description: 'Single Page Responsive Portfolio Website Using react and tailwindcss. Compatible with all mobile devices, with a beautiful and pleasant user interface',
        imgSrc: { src: portfolio, alt: "Portfolio" },
        repo: 'https://github.com/Moealsir/portfolio',
        link: 'https://moealsir.github.io',
        year: '06-2024',
        used: [
            { name: "Next Js", src: nextjs, bgClass: "green-badge" },
            { name: "React", src: reactbadge, bgClass: "black-badge" },
            { name: "HTML", src: htmlbadge, bgClass: "orange-badge" },
            { name: "Tailwind CSS", src: tailwindbadge, bgClass: "teal-badge" },
        ],
    },
    {
        title: 'WeatherWave7',
        description: 'WeatherWave7 is a cutting-edge weather forecasting application that provides real-time weather updates and forecasts for locations worldwide. Designed with a user-friendly interface, it ensures a seamless experience for users across all devices. Utilizing the latest in meteorological technology, WeatherWave delivers accurate and detailed weather information, helping users stay prepared for any conditions.',
        imgSrc: { src: weatherwave7, alt: "WeatherWave7" },
        repo: 'https://github.com/Moealsir/WeatherWave7/',
        link: 'https://moealsir.github.io/get_started',
        year: '2024',
        used: [
            { name: "Next Js", src: nextjs, bgClass: "green-badge" },
            { name: "React", src: reactbadge, bgClass: "black-badge" },
            { name: "HTML", src: htmlbadge, bgClass: "orange-badge" },
            { name: "Tailwind CSS", src: tailwindbadge, bgClass: "teal-badge" },
            { name: "TypeScript", src: typescriptbadge, bgClass: "blue-badge" },
        ],
    },
    {
        title: 'IMDB Top 250 Scraper',
        description: 'The IMDB Top 250 Scraper is a Python project that extracts detailed info on the top 250 IMDB movies, including titles, ratings, cast, crew, and storylines. Using Selenium and BeautifulSoup, it exports data to JSON, Excel, XML, and CSV for easy analysis and storage, providing seamless access to IMDB\'s top 250 list.',
        imgSrc: { src: imdb, alt: "IMDB Top 250 Scraper" },
        repo: 'https://github.com/Moealsir/imdb_scraper',
        link: '',
        year: '2024',
        used: [
            { name: "Python", src: pythonbadge, bgClass: "blue-badge" },
            { name: "Database", src: htmlbadge, bgClass: "black-badge" },
            { name: "Selenium", src: seleniumbadge, bgClass: "green-badge" },
            { name: "Web Scraping", src: htmlbadge, bgClass: "purple-badge" },
        ],
    },
    {
        title: 'Project Detail Reminder Automation',
        description: 'Automate project detail extraction and reminders using Selenium for web scraping and a WhatsApp bot built with JavaScript and Node.js using whatsapp-web.js. This tool fetches current and upcoming project details, sending reminders via terminal or WhatsApp. It optimizes workflow and organization efficiently.',
        imgSrc: { src: alx, alt: "Project Detail Reminder Automation" },
        repo: 'https://github.com/Moealsir/portfolio',
        link: '',
        year: '2024',
        used: [
            { name: "Python", src: pythonbadge, bgClass: "blue-badge" },
            { name: "Node Js", src: nodejsbadge, bgClass: "green-badge" },
            { name: "Selenium", src: seleniumbadge, bgClass: "green-badge" },
            { name: "Web Scraping", src: htmlbadge, bgClass: "purple-badge" },
            { name: "whatsapp web js", src: htmlbadge, bgClass: "teal-badge" },
        ],
    },
    {
        title: 'Twitter Bot Checker',
        description: 'Create a Twitter bot converting user data to JSON and Excel. Extracted: Username, Availability, DM Type, Account Type, Verification',
        imgSrc: { src: twitterout, alt: "Twitter Bot Checker" },
        repo: '',
        link: '',
        year: '2024',
        used: [
            { name: "Python", src: pythonbadge, bgClass: "blue-badge" },
            { name: "Node js", src: nodejsbadge, bgClass: "green-badge" },
            { name: "Selenium", src: htmlbadge, bgClass: "green-badge" },
            { name: "Web Scraping", src: htmlbadge, bgClass: "purple-badge" },
            { name: "Data Extraction", src: htmlbadge, bgClass: "red-badge" },
        ],
    },
    {
        title: 'BettyFixer',
        description: 'Betty Fixer is a tool designed to automatically fix coding style issues in C files based on the Betty coding style guidelines. It performs corrections to ensure that the code complies with the Betty style, making it more readable and consistent.',
        imgSrc: { src: bettyfixer, alt: "BettyFixer" },
        repo: 'https://github.com/Moealsir/betty_fixer',
        link: '',
        year: '2024',
        used: [
            { name: "Python", src: pythonbadge, bgClass: "blue-badge" },
            { name: "Node js", src: nodejsbadge, bgClass: "green-badge" },
            { name: "Selenium", src: seleniumbadge, bgClass: "green-badge" },
            { name: "Web Scraping", src: html, bgClass: "purple-badge" },
            { name: "Data Extraction", src: html, bgClass: "red-badge" },
        ],
    }
];


export const Education = [
    {
        subject: "Bachelor of Science in Computer Science",
        school: "Sudan International University",
        year: "2017 - 2022"
    },
    {
        subject: "Software Engineering",
        school: "ALX Africa",
        year: "2023 - present",
    },
]


export const Certificates = [
    {
        title: "efecQECQWEfw",
        by: "sfDSSDFsdf",
        year: "1230",
    }, 
    {
        title: "efawE aEQVQefw",
        by: "sfsdQecqeqecf",
        year: "1230",
    },
    {
        title: "qeqwe",
        by: "SDFADF",
        year: "1230",
    }
]

export const Experiences = [
    {
        position: "Software Engineer",
        company: "ALX Africa",
        year: "2023 - present",
    }
]

export const Position = [
    {
        subject: "Bachelor of Science in Computer Science",
        school: "Sudan International University",
        year: "2017 - 2022"
    },
    {
        subject: "Software Engineering",
        school: "ALX Africa",
        year: "2023 - present",
    },
]

import educationIcon from "../assets/icons/education.svg";
import { programming, frontend, backend, webdev, typing, dns } from "../assets/icons/index.js";
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
        icon: educationIcon,
    },
    {
        title: "Data Fetching",
        icon: educationIcon,
    },
    {
        title: "Automating",
        icon: educationIcon,
    },
    {
        title: "Domain & DNS",
        icon: dns,
    },
]   

// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

