import omnifood from "../assets/omnifood.jpg";
import nasa from "../assets/nasa.png";
import hangman from "../assets/hangman.png";
import pizza from "../assets/pizza.jpg";
import hotel from "../assets/hotel.jpg";
import amore from "../assets/amore.jpg";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

export const ProjectsData = [
  {
    id: 0,
    image: [omnifood],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://arbitergm.github.io/Omnifood/",
    githubCode: "https://github.com/ArbiterGM/Omnifood",
    websiteTitle: "OmniFood",
    siteInfo: `AI powered food subscription website. Fully responsive for any devices.`,
    buildIn: `HTML, Javascript`,
  },
  {
    id: 1,
    image: [nasa],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://nasa-react-arbi.vercel.app",
    githubCode: "https://github.com/ArbiterGM/Nasa-React",
    websiteTitle: "NASA API",
    siteInfo: `A simple react app showcasing NASA's APOD (A picture of the day) project.`,
    buildIn: `React, API`,
  },

  {
    id: 2,
    image: [hangman],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://hangman-arbi.vercel.app",
    githubCode: "https://github.com/ArbiterGM/Hangman-TS",
    websiteTitle: "Hangman",
    siteInfo: `A popular game of hangman made with react and typescript.`,
    buildIn: `React, Typescript`,
  },
  {
    id: 3,
    image: [pizza],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://pizza-react-arbi.vercel.app",
    githubCode: "https://github.com/ArbiterGM/Pizzeria-React",
    websiteTitle: "Pizzeria",
    siteInfo: `A pizzeria page with cart functionality. Fully responsive for any devices.`,
    buildIn: `React, Context API, Tailwind CSS`,
  },
  {
    id: 4,
    image: [hotel],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://hotel-react-puce.vercel.app",
    githubCode: "https://github.com/ArbiterGM/Hotel-React",
    websiteTitle: "Hotel",
    siteInfo: `A hotel booking page made with react. Fully responsive for any devices.`,
    buildIn: `React, Router, Context API, Tailwind CSS`,
  },
  {
    id: 5,
    image: [amore],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://amorets.onrender.com",
    websiteTitle: "Amore",
    siteInfo: `A MERN stack website for a flower bouquet company. fully functional. fully responsive for any devices.`,
    buildIn: `MERN, Typescript, Tailwind CSS, Framer Motion, Redux, JWT`,
  },
];
