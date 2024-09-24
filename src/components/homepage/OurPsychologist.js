import React from 'react'
import { professionals } from '@/data/ourteam'
const OurPsychologist = () => {
  return (
    <div className='w-full'>
      <div className="flex flex-col gap-6 sm:gap-10 justify-center w-full mt-10 sm:mt-20 py-8 sm:py-14 items-center flex-1 bg-customGreen ">
    <p className=" text-xl sm:text-4xl font-bold text-white " >Our Psychologist</p>
    <p className=" text-lg sm:text-2xl font-semibold text-white text-center " >1300+ Best Psychologist from India for Online Consultation</p>
    <div className=" w-11/12 sm:w-10/12 flex flex-col justify-center items-center mx-auto gap-5">
      <div className=" grid grid-cols-2 sm:flex w-full flex-wrap gap-4 items-stretch justify-between">
        {professionals.map((data) => (
          <div
            key={data.id}
            className="bg-white gap-1 shadow-md sm:shadow-2xl mx-auto flex py-3 sm:p-3 flex-col justify-center  items-center rounded-2xl w-[9.5rem] h-52  sm:w-64 sm:h-80  md:w-64 md:h-72"
          >
            <div
              className={`flex justify-center items-center p-5 sm:p-10 bg-customGreen rounded-full w-14 h-14 sm:w-24 sm:h-24 md:w-36 md:h-36 `}
            >
              <span className=" text-3xl sm:text-6xl   text-white">
                {data.icon}
              </span>
            </div>
            <p className="font-bold text-center text-sm sm:text-xl text-customGreen mx-1 sm:mt-4">
              {data.occupation}
            </p>
            <p className="font-normal text-center text-sm sm:text-xl text-customGreen mx-1  mt-2">
              {data.name}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default OurPsychologist