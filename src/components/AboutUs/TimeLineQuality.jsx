import React from "react";
import Logo1 from "../../../public/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../public/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../public/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../public/TimeLineLogo/Logo4.svg";
import Image from "next/image";
const TimeLineQuality = () => {
  const TimeLine = [
    {
      img: Logo1,
      title: "Compassion",
      description: "Understanding your struggles and supporting your growth",
    },
    {
      img: Logo2,
      title: "Confidentiality",
      description: "Your privacy is our top priority",
    },
    {
      img: Logo3,
      title: "Flexibility",
      description: "Tailored solutions that fit your life and needs",
    },
    {
      img: Logo1,
      title: "Guidance",
      description: "Helping you find solutions through professional counseling",
    },
  ];
  return (
    <div className="flex flex-col">
      {TimeLine.map((data, index) => (
        <div key={index} className="flex gap-5 sm:gap-10">
          <div className="flex flex-col justify-center items-center">
            <Image
              className="mx-2 p-2 size-8 sm:h-10 sm:w-10 object-contain scale-125 bg-custom-gradient3 rounded-full"
              src={data.img}
              alt="img-icon"
            ></Image>
            {index < 3 && (
              <div className="my-2">
                <div className="h-[0.5rem] w-[1px] border-l-[2px] border-dashed  border-black/50"></div>
                <div className=" h-[1.8rem] sm:h-[2.5rem]   w-[1px] border-l-[2px] border-dashed  border-black/50 my-1"></div>
                <div className="h-[0.5rem] w-[1px] border-l-[2px] border-dashed  border-black/50"></div>
              </div>
            )}
          </div>
          <div>
            <p className="text-richblack-800 sm:text-lg font-semibold">
              {data.title}
            </p>
            <p className="text-richblack-500 text-[0.77rem] sm:text-sm ">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLineQuality;
