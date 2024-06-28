import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { bash, expressjs, git, github, githubactions, vscode, postman, nginx } from "../assets/icons";

import { mysql, mongodb, sqlite } from "../assets/icons";
import { nodejs, nextjs, flask } from "../assets/icons";
import { css, html, tailwind, react } from "../assets/icons";
import { test1, portfolio, alx, imdb, bettyfixer, twitterout } from "../assets/images/";
import { test2 } from "../assets/images/";
import { test3 } from "../assets/images/";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#resume", label: "Resume" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#footer", label: "Footer" },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

import {c, javascript, python, typescript} from "../assets/icons";
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

export const projectData = [
    {
      title: 'Portfolio',
      description: 'Single Page Responsive Portfolio Website Using react and tailwindcss. Compatible with all mobile devices, with a beautiful and pleasant user interface',
      imgSrc: {src: portfolio, alt: "Poerfolio"},
      repo: 'https://github.com/Moealsir/portfolio',
      link: 'https://moealsir.github.io',
      year: '06-2024',
      used: [
         {name: "HTML", src: html, bgClass: "html"},
         {name: "Tailwind CSS", src: tailwind, bgClass: "javascript"},
         {name: "React", src: react, bgClass: "express"}
        ],
    },
    {
        title: 'WeatherWave7',
        description: 'WeatherWave is a cutting-edge weather forecasting application that provides real-time weather updates and forecasts for locations worldwide. Designed with a user-friendly interface, it ensures a seamless experience for users across all devices. Utilizing the latest in meteorological technology, WeatherWave delivers accurate and detailed weather information, helping users stay prepared for any conditions.',
        imgSrc: {src: portfolio, alt: "test1"},
        repo: 'https://github.com/Moealsir/portfolio',
        link: '#!',
        year: '2024',
        used: [{name: "Next Js", src: nextjs, bgClass: "html"},
         {name: "HTML", src: html, bgClass: "html"},
         {name: "Tailwind CSS", src: tailwind, bgClass: "html"},
         {name: "TypeScript", src: typescript, bgClass: "html"},
         {name: "React", src: react, bgClass: "html"}],
    },
    {
        title: 'IMDB Top 250 Scraper',
        description: 'The IMDB Top 250 Scraper is a Python project that extracts detailed info on the top 250 IMDB movies, including titles, ratings, cast, crew, and storylines. Using Selenium and BeautifulSoup, it exports data to JSON, Excel, XML, and CSV for easy analysis and storage, providing seamless access to IMDB\'s top 250 list.',
        imgSrc: {src: imdb, alt: "test1"},
        repo: 'https://github.com/Moealsir/imdb_scraper',
        link: '#!',
        year: '2024',
        used: [{name: "Python", src: css, bgClass: "html"},
            {name: "Database", src: html, bgClass: "html"},
            {name: "Selenium", src: tailwind, bgClass: "html"},
            {name: "Web Scraping", src: react, bgClass: "html"}],
    },
    {
        title: 'Project Detail Reminder Automation',
        description: 'Automate project detail extraction and reminders using Selenium for web scraping and a WhatsApp bot built with JavaScript and Node.js using whatsapp-web.js. This tool fetches current and upcoming project details, sending reminders via terminal or WhatsApp. It optimizes workflow and organization efficiently.',
        imgSrc: {src: alx, alt: "test1"},
        repo: 'https://github.com/Moealsir/portfolio',
        link: '#!',
        year: '2024',
        used: [{name: "Python", src: css, bgClass: "html"},
         {name: "Node Js", src: html, bgClass: "html"},
         {name: "Selenium", src: tailwind, bgClass: "html"},
         {name: "Web Scraping", src: react, bgClass: "html"},
         {name: "whatsapp web js", src: react, bgClass: "html"}],
    },
    {
        title: 'Twitter Bot Checker',
        description: 'Create a Twitter bot converting user data to JSON and Excel. Extracted: Username, Availability, DM Type, Account Type, Verification',
        imgSrc: {src: twitterout, alt: "test1"},
        repo: '',
        link: '#!',
        year: '2024',
        used: [{name: "Python", src: css, bgClass: "html"},
         {name: "Node js", src: html, bgClass: "html"},
         {name: "Selenium", src: tailwind, bgClass: "html"},
         {name: "Web Scraping", src: react, bgClass: "html"},
         {name: "Data Extraction", src: react, bgClass: "html"}],
    },
    {
        title: 'BettyFixer',
        description: 'Betty Fixer is a tool designed to automatically fix coding style issues in C files based on the Betty coding style guidelines. It performs corrections to ensure that the code complies with the Betty style, making it more readable and consistent.',
        imgSrc: {src: bettyfixer, alt: "test1"},
        repo: '',
        link: '#!',
        year: '2024',
        used: [{name: "Python", src: css, bgClass: "html"},
         {name: "Node js", src: html, bgClass: "html"},
         {name: "Selenium", src: tailwind, bgClass: "html"},
         {name: "Web Scraping", src: react, bgClass: "html"},
         {name: "Data Extraction", src: react, bgClass: "html"}],
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

