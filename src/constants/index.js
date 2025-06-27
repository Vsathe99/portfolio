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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import aidev from '../assets/company/aidev.png';
import uber from '../assets/company/uber.png';
import zomato from '../assets/company/zomato.png'

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
    title: "AI Automation",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
  title: "AI Developer Collaboration Platform",
  company_name: "Personal Project",
  icon: aidev, // replace with an appropriate icon or image
  iconBg: "#1F2937",
  date: "Jan 2024 - Mar 2024",
  points: [
    "Built a real-time AI Developer Collaboration platform using the MERN stack, Socket.IO, and LangChain.",
    "Integrated OpenAI's API for intelligent coding suggestions and debugging assistance.",
    "Implemented session-based real-time communication using WebSockets for seamless AI-developer chat.",
    "Designed an intuitive UI with role-based access for developers and AI agents."
  ]
},
{
  title: "Uber Clone App",
  company_name: "Personal Project",
  icon: uber, // use a car or GPS icon if no Uber-specific icon
  iconBg: "#0F172A",
  date: "Nov 2023 - Dec 2023",
  points: [
    "Developed a full-stack Uber clone app with real-time location tracking using Google Maps API.",
    "Implemented user authentication, ride booking flow, and live ride status updates.",
    "Used Socket.IO for live location sharing between drivers and passengers.",
    "Built with React Native, Node.js, and MongoDB for scalable mobile and backend development."
  ]
},
{
  title: "E-commerce Website",
  company_name: "Personal Project",
  icon: shopify, // use shopping cart or storefront icon
  iconBg: "#1E293B",
  date: "Aug 2023 - Oct 2023",
  points: [
    "Created a modern e-commerce web application with product listings, cart, and checkout features.",
    "Implemented user authentication, order history, and admin dashboard for inventory management.",
    "Integrated Razorpay for secure payment gateway and order confirmation emails.",
    "Built using React.js, Redux, Express.js, and MongoDB with a clean, responsive UI."
  ]
},
{
  title: "Zomato Clone App",
  company_name: "Personal Project",
  icon: zomato, // use food or restaurant icon if not available
  iconBg: "#312E81",
  date: "May 2023 - July 2023",
  points: [
    "Built a food delivery app inspired by Zomato using React Native and Node.js.",
    "Implemented real-time order updates for restaurants using Socket.IO.",
    "Developed restaurant admin panel for menu management, order tracking, and daily sales analytics.",
    "Ensured responsive mobile-first design and smooth user experience for both users and admins."
  ]
}

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
