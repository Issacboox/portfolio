"use client"
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const social = [
    {
      icon: <FaGithub />,
      path: "https://github.com/Issacboox",
    },
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/nurarat-sangreuang-b62839298/",
    },
    {
      icon: <FaFacebook />,
      path: "https://www.facebook.com/sirinut.sangruaeng/",
    },
  ];
  
  const Social = ({ containerStyle, iconStyle }) => {
    return (
      <div className={containerStyle}>
        {social.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyle}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    );
  };

export default Social;
