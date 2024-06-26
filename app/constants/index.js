import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { bash, expressjs, git, github, githubactions, vscode, postman, nginx } from "../assets/icons";

import { mysql, mongodb, sqlite } from "../assets/icons";
import { nodejs, nextjs, flask } from "../assets/icons";
import { css, html, tailwind, react } from "../assets/icons";
import { test1 } from "../assets/images/";
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
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur aiscing elit. Nam nec facilisis.',
      imgSrc: {src: test1, alt: "test1"},
      link: '#!',
      year: '2024',
      used: [{name: "CSS", src: css, bgClass: "css"},
         {name: "HTML", src: html, bgClass: "html"},
         {name: "Tailwind CSS", src: tailwind, bgClass: "javascript"},
         {name: "React", src: react, bgClass: "express"}],
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adicing elit. Nam nec facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.',
        imgSrc: {src: test1, alt: "test1"},
        link: '#!',
        year: '2024',
        used: [{name: "CSS", src: css, bgClass: "html"},
         {name: "HTML", src: html, bgClass: "html"},
         {name: "Tailwind CSS", src: tailwind, bgClass: "html"},
         {name: "React", src: react, bgClass: "html"}],
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.',
        imgSrc: {src: test1, alt: "test1"},
        link: '#!',
        year: '2024',
        used: [{name: "CSS", src: css, bgClass: "html"},
         {name: "HTML", src: html, bgClass: "html"},
         {name: "Tailwind CSS", src: tailwind, bgClass: "html"},
         {name: "React", src: react, bgClass: "html"}],
    },
    {
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.',
        imgSrc: {src: test1, alt: "test1"},
        link: '#!',
        year: '2024',
        used: [{name: "CSS", src: css, bgClass: "html"},
         {name: "HTML", src: html, bgClass: "html"},
         {name: "Tailwind CSS", src: tailwind, bgClass: "html"},
         {name: "React", src: react, bgClass: "html"}],
    },
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

