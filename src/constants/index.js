import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  kit,
  kd,
  freelance,
  carrent,
  jobit,
  tripguide,
  weather_app,
  pollify_app,
  portfolio,
  threejs,
  jquery,
  bootstrap,
  odoo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "jquery",
    icon: jquery,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Odoo",
    icon: odoo,
  },
];

const experiences = [
  {
    title: "JavaScript Developer | Internship",
    company_name: "Kirirom Institute of Technology",
    icon: kit,
    iconBg: "#E6DEDD",
    date: "December 2020 - March 2021",
  },
  {
    title: "Odoo Developer | Internship",
    company_name: "Kirirom Institute of Technology",
    icon: kit,
    iconBg: "#E6DEDD",
    date: "May 2020 - June 2023",
  },
  {
    title: "Frontend Developer | Bootcamp",
    company_name: "Kirirom Institute of Technology",
    icon: kit,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
  },
  {
    title: "Junior Developer | Part Time",
    company_name: "KhmerDev",
    icon: kd,
    iconBg: "#E6DEDD",
    date: "August 2021 - March 2022",
  },
  {
    title: "Frontend Developer | Freelancing",
    company_name: "Self Employed",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "Weather App enables user to search for the weather for the specific city in a few clicks. It is written in plain HTML, CSS and JavaScript, also connected to OpenWeather API Docs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather_app,
    source_code_link:
      "https://github.com/lysreypov/js-project/tree/weather-app",
  },
  {
    name: "Pollify",
    description:
      "Web application that enables users to create a community and invite members to join and they can start create poll for voting and see the real time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pollify_app,
    source_code_link: "https://github.com/lysreypov/pollify-app",
  },
  {
    name: "Ly Sreypov | Portfolio",
    description:
      "An interactive portfilo for showcasing my project as well as my potential, it is written in ReactJS with additional awesome JS libray like ThreeJS, Framer Motion and many more.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/lysreypov/my_portfolio",
  },
];

export { services, technologies, experiences, projects };
