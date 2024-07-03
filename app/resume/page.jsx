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
  SiNestjs,
  SiPhp,
  SiPhpmyadmin,
  SiPostgresql,
  SiVercel,
  SiNetlify,
  SiTailwindcss,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoFlutter } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  description:
    "I have gained valuable experience in software engineering and programming through my roles at INET and Toyota Material Handling Warehouse Solution Thailand.",
  items: [
    {
      company: "INET",
      position: "Software Engineer",
      duration: "April - June 2024",
      responsibilities: [
        "Implementing RESTful APIs and backend services using Go and Fiber framework.",
        "Integrating third-party services and APIs for enhanced functionality.",
        "Ensuring code quality through testing and code reviews.",
      ],
    },
    {
      company: "Toyota Mateial Handling Warehouse Solution",
      position: "Intern Programmer",
      duration: "April - June 2023",
      responsibilities: [
        "Contributed to the development of a ticketing system for issue reporting and resolution.",
        "Worked with PHP, JavaScript, HTML, and CSS to implement features and improve user experience.",
        "Documented front-end APIs and assisted in system troubleshooting and maintenance.",
      ],
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "my academic journey",
  items: [
    {
      institution: "Burapha University",
      degree: "Bachelor Degree in Information Technology",
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
  description:
    "I have experience with various front-end and back-end technologies.",
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
      icon: <SiNestjs />,
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
    // {
    //   icon: <DiMysql />,
    //   name: "mysql",
    // },
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* expereince */}
            <TabsContent className="w-full" value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent ">{item.duration}</span>
                        <h3 className="text-xl max-w-[260xl] min-h-[30px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-4">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent className="w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent ">{item.duration}</span>
                        <h3 className="text-xl max-w-[260xl] min-h-[30px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-4">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent className="w-full" value="skills">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skill.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skill.description}
                </p>
                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:gap-[30px] gap-4">
                  {skill.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                </ScrollArea>
              
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent className="w-full" value="about">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0 xl:grid-cols-2 xl:gap-x-[30px">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
