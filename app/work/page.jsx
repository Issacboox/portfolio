"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/ui/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "Vegetable Store",
    description: "Web ecommerce that sell vegetables online",
    stack: [{ name: "NextJs." }, { name: "MongoDB" }],
    image: [
      { img_path: "/assets/work/1.png" },
      { img_path: "/assets/work/2.png" },
      { img_path: "/assets/work/3.png" },
      { img_path: "/assets/work/4.png" },
      { img_path: "/assets/work/5.png" },
      { img_path: "/assets/work/6.png" },
      { img_path: "/assets/work/7.png" },
    ],
    github: "https://github.com/Issacboox/NextJS-Ecom",
  },
  {
    num: "02",
    category: "full stack",
    title: "Ticket System",
    description: "Web for report issue in organization",
    stack: [
      { name: "Html 5" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "PHP" },
    ],
    image: [{ img_path: "/assets/work/8.png" }],
    github: "https://github.com/Issacboox/intern_it_ticket",
  },
  {
    num: "03",
    category: "fontend",
    title: "Document API",
    description: "Web for API Document",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "Bootstrap" }],
    image: [{ img_path: "/assets/work/9.png" }],
    github: "",
  },
  {
    num: "04",
    category: "fontend",
    title: "React Redux Ecommerce Pizza Shop",
    description: "Practice React",
    stack: [{ name: "React" }, { name: "Redux" }, { name: "Tailwindcss" }],
    image: [{ img_path: "/assets/work/10.png" }],
    github: "https://github.com/Issacboox/React-Redux-Ecommerce-Pizza-Shop",
  },
  {
    num: "05",
    category: "fontend",
    title: "Foodies",
    description: "Practice React",
    stack: [{ name: "NextJs" }],
    image: [{ img_path: "/assets/work/11.png" }],
    github: "https://github.com/Issacboox/foodies",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const projectImageCounts = projects.map((project) => project.image.length);
  const cumulativeImageCounts = projectImageCounts.reduce(
    (acc, count, index) => {
      const previousCount = acc[index - 1] || 0;
      acc.push(previousCount + count);
      return acc;
    },
    []
  );

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    const projectIndex = cumulativeImageCounts.findIndex(
      (cumulativeCount) => currentIndex < cumulativeCount
    );
    setProject(projects[projectIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[10px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline mt-3">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-1 text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/*  button */}
              <div className="flex items-center">
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group:hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] md:w-[460px] md:h-[460px] md:flex md:justify-center md:items-center">
            <Swiper onSlideChange={handleSlideChange}>
              {projects.map((project) =>
                project.image.map((img, idx) => (
                  <SwiperSlide key={`${project.num}-${idx}`}>
                    <div className="s:h-[340px] xl:h-[460px] md:h-[370px]  relative group flex justify-center items-center">
                      {/*  overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <img
                          src={img.img_path}
                          alt={project.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              )}
              {/* slider buttons */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
