import tsitsila from "../assets/tsitsila.png";
import nasa from "../assets/nasa.png";
import primeboxing from "../assets/primeboxing.png";
import hotel from "../assets/hotel.jpg";
import poolinaria from "../assets/poolinaria.png";
import notes from "../assets/notes.png";
import gaugzavneli from "../assets/gaugzavneli.png";
import amore from "../assets/amore.png";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

export const ProjectsData = [
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
    id: 3,
    image: [poolinaria],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://poolinaria.vercel.app",
    githubCode: "https://github.com/ArbiterGM/Poolinaria",
    websiteTitle: "Poolinaria",
    siteInfo: `A landing page website based on local entertainment business. Fully responsive for any devices.`,
    buildIn: `React, Tailwind CSS, Framer Motion`,
  },
  {
    id: 4,
    image: [primeboxing],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://primeboxing.vercel.app",
    websiteTitle: "Prime Boxing Club",
    siteInfo: `A website based on a local boxing gym business. Fully responsive for all devices.`,
    buildIn: `React, Router, Tailwind CSS, Framer Motion`,
  },
  {
    id: 3,
    image: [tsitsila],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://tsitsila.vercel.app",
    githubCode: "",
    websiteTitle: "Tsitsila",
    siteInfo: `Local chicken restaurant. Fully responsive for all devices.`,
    buildIn: `React, Router, Typescript, TailwindCSS, Framer Motion, Swiper`,
  },
  {
    id: 3,
    image: [notes],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://notes-arbi.vercel.app/login",
    githubCode: "",
    websiteTitle: "Notes",
    siteInfo: `Notes web application made with MERN Stack.`,
    buildIn: `MERN Stack, Typescript, Tailwind CSS, JWT, Bcrypt`,
  },
  {
    id: 5,
    image: [gaugzavneli],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://gaugzavneli.ge",
    websiteTitle: "Gaugzavneli",
    siteInfo: `A MERN stack website based on the famous "The Unsent Project". fully responsive for any devices.`,
    buildIn: `MERN Stack, Router, Typescript, Tailwind CSS, Axios`,
  },
  {
    id: 6,
    image: [amore],
    liveSite: <FiExternalLink />,
    github: <FiGithub />,
    liveLink: "https://amorets.onrender.com",
    websiteTitle: "Amore",
    siteInfo: `A MERN stack website for a flower bouquet company. fully functional. fully responsive for any devices.`,
    buildIn: `MERN Stack, Typescript, Tailwind CSS, Framer Motion, Redux Toolkit, JWT`,
  },
];
