import React from "react";
import Image from "next/image";
import Logo2 from "../../public/Logo2.png";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaTwitter, FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import {aboutData} from "@/data/aboutData"

const Footer = () => {
  const contactDetails = [
    {
      id: 1,
      title: "9024225444",
      desc: "info@digitalera.com",
      icons: <FiMessageSquare />,
    },
    {
      id: 2,
      title: "27 Division St, New York, NY",
      desc: "10002, United Statesnfo@digitalera.com",
      icons: <MdOutlineLocationOn />,
    },
  ];
  const socialIcons = [
    {
        id: 1,
        name: "Twitter",
        icon: <FaTwitter />,
        url: "https://twitter.com",
    },
    {
        id: 2,
        name: "Instagram",
        icon: <FaInstagram />,
        url: "https://instagram.com",
    },
    {
        id: 3,
        name: "WhatsApp",
        icon: <FaWhatsapp />,
        url: "https://whatsapp.com",
    },
    {
        id: 4,
        name: "Facebook",
        icon: <FaFacebook />,
        url: "https://facebook.com",
    },
    {
        id: 5,
        name: "LinkedIn",
        icon: <FaLinkedin />,
        url: "https://linkedin.com",
    }
];
  return (
    <div className="bg-[#efefea] text-customYellowtext2 flex justify-center items-center ">
      <div className="flex w-10/12 flex-col gap-3 sm:gap-5 my-5 sm:my-10 ">
        {/* 1 */}
        <div className="flex flex-col md:flex-row  justify-between items-start md:items-center gap-3">
          <Image src={Logo2} className=" w-32 sm:w-44" alt="logo" />
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-5 items-start sm:items-center">
            {contactDetails.map((data) => (
              <div
                key={data.id}
                className="flex items-start justify-center gap-2"
              >
                <div className=" text-2xl sm:text-4xl text-yellow-600">
                  {data.icons}
                </div>
                <div className="flex text-[0.8rem] sm:text-sm flex-col items-start justify-center">
                  <p>{data.title}</p>
                  <p>{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 border-t border-black/30 rounded-full"></div>
        {/* 2 */}
        <div className="flex justify-between gap-8 items-start my-2 pr-10 sm:pr-20">
          <div className="flex  flex-col items-start justify-between gap-3">
            <p className="max-w-72 text-[0.75rem] sm:text-sm ">
              Ewebot have much planned for the future, working with great
              clients and continued software development.
            </p>
            <div className="flex  gap-3 items-center justify-between">
                {
                    socialIcons.map(data=>(
                        <div key={data.id} title={data.name} >{data.icon}</div>
                    ))
                }
            </div>
          </div>
          {aboutData.map(data => (
        <div key={data.id} className={`flex ${data.id === 1 && "hidden md:block"} ${data.id === 2 && "hidden custom:block"} text-sm flex-col`}>
          {/* Default layout for screens above sm */}
          <div className="hidden sm:block">
            {data.items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          {/* Layout for screens below sm */}
          <div className="block sm:hidden">
            {/* Split the items into two halves */}
            <div className="grid text-[0.75rem] sm:text-sm grid-cols-2 gap-4">
              <div>
                {data.items.slice(0, Math.ceil(data.items.length / 3)).map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div>
                {data.items.slice(Math.ceil(data.items.length / 3)).map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
        </div>
        <div className="flex flex-1 border-t border-black/30 rounded-full"></div>
        <p className="text-sm" >© 2023 — All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
