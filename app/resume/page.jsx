"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaLaravel,
  FaDocker,
  FaLinux,
  FaAmazon,
  FaPython,
  FaSourcetree,
  FaGithub,
} from "react-icons/fa";
import {
  SiNestdotjs,
  SiPhp,
  SiPhpmyadmin,
  SiPostgresql,
  DiMysql,
  SiVercel,
  SiNetlify,
  SiTailwindcss,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoFlutter } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { Tabs, TabsContent, TabsList, TapsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const about = {
  title: "About me",
  description:
    "I am a recent graduate with a Bachelors degree in Information Technology, actively seeking a challenging position in software development. I bring strong expertise in back-end technologies, but I am also proficient in front-end development. I am flexible and capable of working on both ends of a project. With strong problem-solving skills and good logical thinking, along with a deep passion for continuous learning I am eager to make significant contributions to a dynamic development team",
  info: [
    { fieldName: "Name", fieldValue: "Nurarat Sangreuang" },
    { fieldName: "Phone", fieldValue: "(+66) 065 082 2811" },
    { fieldName: "Experience", fieldValue: "6 months" },
    { fieldName: "Github", fieldValue: "Issacboox" },
    { fieldName: "Nationality", fieldValue: "Thailand" },
    { fieldName: "Email", fieldValue: "nurarat0024@gmail.com" },
    { fieldName: "Full Time Work", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "Thai English" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "",
  item: [
    {
      company: "INET",
      position: "Software Engineer",
      duration: "April - June 2024",
    },
    {
      company: "Toyota Mateial Handling Warehouse Solution Thailand",
      position: "Intern Programmer",
      duration: "April - June 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "",
  item: [
    {
      institution: "Burapha University",
      degree: "Bachelor Degree of Science in Information Technology",
      duration: "2020 - 2024 (graduated)",
    },
    {
      institution: "Mahannapara School",
      degree: "High School (Science - Math)",
      duration: "2017 - 2020 (graduated)",
    },
  ],
};

const skill = {
  title: "My Skill",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <FaLinux />,
      name: "linux",
    },
    {
      icon: <FaAmazon />,
      name: "aws s3",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaSourcetree />,
      name: "sourcetree",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <SiNestdotjs />,
      name: "nestjs",
    },
    {
      icon: <SiPhp />,
      name: "php",
    },
    {
      icon: <SiPhpmyadmin />,
      name: "phpmyadmin",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <DiMysql />,
      name: "mysql",
    },
    {
      icon: <SiVercel />,
      name: "vercel",
    },
    {
      icon: <SiNetlify />,
      name: "netlify",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaGolang />,
      name: "golang (fiber)",
    },
    {
      icon: <BiLogoTypescript />,
      name: "typescript",
    },
    {
      icon: <BiLogoFlutter />,
      name: "flutter",
    },
    {
      icon: <RiNextjsFill />,
      name: "nextjs",
    },
    {
      icon: <DiMongodb />,
      name: "mongodb",
    },
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
