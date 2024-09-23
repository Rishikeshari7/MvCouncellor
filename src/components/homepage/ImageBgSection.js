import React from "react";
import Image from "next/image";
import Heroimage from "../../../public/Heroimage.jpg";
import { counselorOptions } from "@/data/counselorOptions";
import { services } from "@/data/services";
 
const ImageBgSection = () => {
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
            <button className="bg-white text-customGreen font-semibold px-5 py-2 rounded-full w-fit ">
              Chat Now
            </button>
          </div>
        </div>

        <div className="flex w-full flex-wrap gap-8 justify-between">
          {counselorOptions.map((data) => (
            <div
              key={data.id}
              className="bg-white mx-auto flex p-5 flex-col justify-between items-center rounded-2xl w-48 h-52  md:w-60 md:h-48"
            >
              <div
                className={`flex justify-center items-center ${data.bgColor} rounded-full w-24 h-24 md:w-28 md:h-28 `}
              >
                <span className="text-6xl text-white">{data.icon}</span>
              </div>
              <p className="font-semibold text-center text-lg text-customGreen mt-4">
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
