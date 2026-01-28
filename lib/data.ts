import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/intelligent.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/iot.jpg";
import trackerAppimg from "@/public/trackerApp.jpg";
import redditImg from "@/public/reddit.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern Software Engineer",
    location: "X-ONT Software (Pvt) Ltd.",
    description: "Gained hands-on experience in software development using ASP.NET, Angular, MS SQL Server, and Crystal Reports.Trained on the company’s base application “Ventura”, contributing to feature development and system enhancements.",
    icon: React.createElement(LuGraduationCap),
    date: "2025 Feb- 2025 Sep",
  },

  {
    title: "Freelancer Developer",
    location: "Full Time",
    description: "I'm currently working as a full-stack freelance developer. My core stack includes React, Angular, .NET, TypeScript, Tailwind,Mui, MSSQL.. I am actively seeking full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Location Tracker Mobile Application",
    description: "Developed an Employee Location Tracking mobile application featuring role-based authentication and real-time login/logout tracking.",
    tags: [".Net 8","Flutter", "Dart", "MsSQL", "Entity Framework", "GoogleMap API"],
    imageUrl: trackerAppimg,
    link: '',
  },
  {
    title: "Reddit-Like-Comment Demo page",
    description: "A demo application that replicates Reddit's comment section functionality, built using Redux for global state management.",
    tags: ["React","TypeScript", "Redux", "SCSS", "Vercel"],
    imageUrl: redditImg,
    link: "https://reddit-comments-sigma.vercel.app/",
  },
  {
    title: "Intelligent Candidate Ranking System",
    description: "A Level-4 research project. This system uses a Natural Language Processing (NLP) approach to rank candidates based on machine learning and data science techniques.",
    tags: ["Python","Flask", "ML", "NLP", "Data Science","Co-lab"],
    imageUrl: corpcommentImg,
    link: '',
  },
  {
    title: "LearnX",
    description: "A Learning Management System (LMS) designed to manage key aspects of online education, from user-friendly course creation and interactive content delivery to seamless learner assessment and progress tracking.",
    tags: ["React(TS)", "Tailwind", ".NET", "MongoDB", "Redux"],
    imageUrl: rmtdevImg,
    link: '',
  },
  {
    title: "IoT Project",
    description: "A mini IoT project that sends sensor readings from an Arduino Nano to an ESP32 via wireless communication, which then updates a real-time Firebase database.",
    tags: ["Arduino", "ESP32", "FireBase", "NRf Module", "Wireless communication"],
    imageUrl: wordanalyticsImg,
    link: '',
  },
] as const;

export const skillsData = [
  "React",
  "Angular",
  "Material UI",
  ".NET",
  "Entity Framework",
  "Flutter",
  " React Native",
  "Dart",
  "C#",
  "C",
  "Java",
  "TypeScript",
  "Azure",
  "Vercel",
  "IIS",
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Node.js",
  "Crystal Reports",
  "Git",
  "Docker",
  "MsSql",
  "MySQL",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "jupyter Notebook",
  "SpringBoot",
  "Python",
] as const;
