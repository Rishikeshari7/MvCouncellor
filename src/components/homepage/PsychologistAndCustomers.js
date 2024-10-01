import React from 'react'
import { services } from '@/data/services'
import { customerReviews } from '@/data/review'
const PsychologistAndCustomers = () => {
  return (
    <div className='flex flex-col justify-center items-center flex-1 overflow-hidden'>
      <div className="flex flex-col gap-6 sm:gap-10 justify-center w-full py-8 sm:py-14 items-center flex-1 bg-white">
        <p className="text-xl sm:text-4xl font-bold text-customGreen">Our Happy Customer</p>
        <div className="w-11/12 sm:w-10/12 flex flex-col justify-center items-center mx-auto gap-5">
          {/* Add inner shadow and padding */}
          <div className="marquee-container w-full p-6 ">
            <div className="marquee-content grid grid-cols-2  sm:flex w-full  gap-4 items-stretch justify-between">
            {customerReviews.map((data) => (
  <div
    key={data.id}
    className="bg-white shadow-md sm:shadow-md sm:shadow-customLightgreen mx-auto flex py-3 overflow-hidden sm:p-5 flex-col items-center rounded-2xl min-w-[20.5rem]  max-h-52 sm:min-w-64 sm:max-h-80 md:min-w-64 md:max-h-80"
  >
    <div className='flex  w-full gap-2 pl-1 pr-1 '>
      <div className="flex justify-center items-center border-customGreen2 border-[1px] rounded-full overflow-hidden w-14 h-14">
        {/* Icon or other content here */}{data.icon}
      </div>
      <div>
        <h1 className="font-bold text-nowrap lext-md sm:text-lg text-customGreen ">
          {data.name}
        </h1>
        <p className="text-left text-sm text-customGreen ">
          {data.occupation}
        </p>
      </div>
    </div>
     <div>
     <p className="font-medium  text-sm sm:text-lg pl-1 pr-1 text-customGreen2 mt-4 mx-[6px]">
    {data.comment}
    </p>
       </div>
  
  </div>
))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologistAndCustomers;