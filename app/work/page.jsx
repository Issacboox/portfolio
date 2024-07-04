"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "Vegetable Store",
    description: "Web ecommerce that sell vegetables online",
    stack: [{ name: "NextJs." }, { name: "MongoDB" }],
    image: [
      {
        img_path: "/assets/work/1.png",
      },
      {
        img_path: "/assets/work/2.png",
      },
      {
        img_path: "/assets/work/3.png",
      },
      {
        img_path: "/assets/work/4.png",
      },
      {
        img_path: "/assets/work/5.png",
      },
      {
        img_path: "/assets/work/6.png",
      },
      {
        img_path: "/assets/work/7.png",
      },
    ],
    live: "",
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
    image: [
      {
        img_path: "/assets/work/8.png",
      },
    ],
    live: "",
    github: "https://github.com/Issacboox/intern_it_ticket",
  },
  {
    num: "03",
    category: "fontend",
    title: "Document API",
    description: "Web for API Document",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "Bootstrap" }],
    image: [
      {
        img_path: "/assets/work/9.png",
      },
    ],
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fontend",
    title: "React Redux Ecommerce Pizza Shop",
    description: "Practice React",
    stack: [{ name: "React" }, { name: "Redux" }, { name: "Tailwindcss" }],
    image: [
      {
        img_path: "/assets/work/10.png",
      },
    ],
    live: "",
    github: "https://github.com/Issacboox/React-Redux-Ecommerce-Pizza-Shop",
  },
  {
    num: "05",
    category: "fontend",
    title: "Foodies",
    description: "Practice React",
    stack: [{ name: "NextJs" }],
    image: [
      {
        img_path: "/assets/work/11.png",
      },
    ],
    live: "",
    github: "https://github.com/Issacboox/foodies",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between">text</div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
