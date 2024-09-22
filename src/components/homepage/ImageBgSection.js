import React from "react";
import Image from "next/image";
import Heroimage from "../../../public/Heroimage.jpg";
import { counselorOptions } from "@/data/counselorOptions";

const ImageBgSection = () => {
  return (
    <div className=" bg-customLightgreen py-10 flex justify-center items-center flex-1">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto gap-5">
        <div className="relative">
          <div className="overflow-hidden  rounded-3xl ">
            <Image
              className="aspect-video rounded-3xl blur-sm h-96 object-cover "
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
            <button className="bg-white text-customGreen font-semibold px-5 py-2 rounded-full w-fit ">
              Chat Now
            </button>
          </div>
        </div>
      
      <div className="flex bg-red-500 flex-1 justify-between  w-full">
        {counselorOptions.map((data) => (
          <div key={data.id} className="bg-white flex flex-col gap-3 justify-center items-center rounded-3xl">
            <p>{data.icon}</p>
          </div>
        ))}
      </div></div>
    </div>
  );
};

export default ImageBgSection;
