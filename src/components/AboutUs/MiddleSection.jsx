import React from 'react'
import TimeLineQuality from './TimeLineQuality'
import BlueText from '../ui/BlueText'
import Image from 'next/image'
import TimeLineImage from '../../../public/TimeLineLogo/TimeLineImage.png'
const MiddleSection = () => {
  return (
    <div className="flex bg-gray-100 justify-center items-center">
    <div className="w-10/12">
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-12 md:mt-20 mb-16 ">
        <p className="text-2xl sm:text-2xl md:text-4xl font-semibold gap-2 sm:pt-2">
        Achieve Emotional Balance and Wellness with{" "}
          <BlueText text={" Professional Guidance. "} classN={"custom-gradient-yellow"} />{" "}
        </p>
      </div>
      {/* QUALITY TimeLine */}
      <div className="flex flex-col gap-14 mb-10  lg:flex-row lg:justify-around">
        <div className="">
          <TimeLineQuality />
        </div>
        <div className=" relative shadow-[5px_8px_50px_2px] bg-gray-100 shadow-amber-200">
          <Image
            className="lg:w-[38rem] object-contain  shadow-[15px_15px] shadow-red-200"
            src={TimeLineImage} alt='img-abt'
          ></Image>
          <div className="absolute -bottom-12 left-14 text-gray-900 gap-5 flex justify-between p-3 md:p-5 w-[80%] bg-custom-gradient2">
            <div className="flex flex-col sm:flex-row justify-center items-start  sm:gap-3 md:w-[40%]">
              <p className=" text-2xl sm:text-4xl md:text-5xl font-bold">10</p>
              <p className="text-sm sm:text-base ">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className=" my-2 w-[2px] border-l-[2px] border-caribbeangreen-500"></div>
            <div className="flex flex-col sm:flex-row justify-center items-  sm:gap-3 md:w-[45%]">
              <p className=" text-2xl sm:text-4xl md:text-5xl font-bold">500+</p>
              <p className="text-sm sm:text-base ">
              CLIENTS SUPPORTED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MiddleSection
