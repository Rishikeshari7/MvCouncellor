import React from "react";
import Image from "next/image";
import Heroimage from "../../../public/Heroimage.jpg";
// import { counselorOptions } from "@/data/counselorOptions";
import { FaClipboardCheck, FaCalendarAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Link from "next/link";

const ImageBgSection = () => {
  const counselorOptions = [
    {
      id: 1,
      name: "Chat with Counsellor",
      icon: <BsWhatsapp />,
      bgColor: "bg-pink-400",
    },
    {
      id: 2,
      name: "Talk to Psychologist",
      icon: <MdOutlinePhoneInTalk />,
      bgColor: "bg-teal-400",
    },
    {
      id: 3,
      name: "Get a Consultation",
      icon: <FaClipboardCheck />,
      bgColor: "bg-blue-400",
    },
    {
      id: 4,
      name: "Book an Appointment",
      icon: <FaCalendarAlt />,
      bgColor: "bg-orange-400",
    },
  ];
  const whatsappNumber = "9260960495";
  const message = "Hello! I'd like to know more about your services.";
  return (
    <div className=" bg-customLightgreen py-10 flex justify-center items-center flex-1 overflow-clip ">
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto gap-5 overflow-hidden ">
        <div className="relative">
          <div className="overflow-clip rounded-2xl ">
            <Image
              className="aspect-video rounded-2xl blur-sm h-96 object-cover "
              src={Heroimage}
              alt="Hero Background"
            />
          </div>
          <div className="absolute text-white pr-5 top-10 left-10 max-w-[35rem] flex flex-col gap-4 ">
            <p className="text-xl">
              Your mental health matters, and we're here to help you heal and
              thrive. Our compassionate support is designed to guide you through
              your struggles, whether it’s overcoming stress, managing anxiety.
            </p>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
            >
              <button className="bg-white hover:bg-customLightgreen transform duration-300 hover:text-white text-customGreen font-semibold px-5 py-2 rounded-full w-fit ">
                Chat Now
              </button>
            </Link>
          </div>
        </div>

        <div className=" grid grid-cols-2 sm:flex w-full flex-wrap gap-4 justify-between">
          {counselorOptions.map((data) => (
            <div
              key={data.id}
              className="bg-white mx-auto flex py-3 sm:p-5 flex-col justify-between items-center rounded-2xl w-36 h-32  sm:w-48 sm:h-52  md:w-60 md:h-48"
            >
              <div
                className={`flex justify-center items-center ${data.bgColor} rounded-full w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 `}
              >
                <span className=" text-3xl sm:text-6xl text-white">
                  {data.icon}
                </span>
              </div>
              <p className="font-semibold text-center text-sm sm:text-lg text-customGreen mx-1 sm:mt-4">
                {data.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBgSection;
