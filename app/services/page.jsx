"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description: "Using NextJs, Reactjs",
    href: "/services",
  },
  {
    num: "02",
    title: "Backend Developer",
    description: "Using Go (fiber) hexagonal architexture, NodeJs ",
    href: "/services",
  },
  {
    num: "03",
    title: "System Analyze",
    description: "I can design document and understand clients need",
    href: "/services",
  },
  {
    num: "04",
    title: "My Interest",
    description: "devops, mobile app development, docker, linux, git",
    href: "/services",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((serv, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center group gap-6"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {serv.num}
                  </div>
                  <Link
                    href={serv.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* top */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {serv.title}
                </h2>
                {/* description */}
                <p className="text-white/60">
                  {serv.description}
                </p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
