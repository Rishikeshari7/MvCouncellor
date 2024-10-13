import React from 'react';
import { customerReviews } from '@/data/review';

const PsychologistAndCustomers = () => {
  return (
    <div className='flex flex-col justify-center items-center flex-1 text-black/80 overflow-hidden'>
      <div className="flex flex-col gap-6 sm:gap-10 justify-center w-full py-6 sm:py-12 items-center flex-1 bg-white">
        <p className="text-xl sm:text-3xl md:text-5xl font-bold">Our Happy Customers</p>
        <div className="w-full sm:w-[95%] flex flex-col justify-center items-center mx-auto gap-5">
          <div className="marquee-container  w-full p-4 ">
            <div className="marquee-content flex w-full gap-4 items-stretch justify-between">
              {/* Duplicate the reviews for seamless scrolling */}
              {customerReviews.map((data) => (
                <div
                  key={data.id}
                  className="bg-yellow-100 shadow-md sm:shadow-md sm:shadow-yellow-200 mx-auto flex py-3 overflow-hidden sm:p-5 flex-col items-center rounded-2xl min-w-[18rem] max-h-[14rem] sm:min-w-64 sm:max-h-80 md:min-w-64 md:max-h-80"
                >
                  <div className='flex w-full gap-2 pl-1 pr-1'>
                    <div className="flex justify-center items-center border-yellow-500 border-[1px] rounded-full overflow-hidden w-14 h-14">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-nowrap text-md sm:text-lg">{data.name}</h1>
                      <p className="text-left text-sm">{data.occupation}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-lg pl-1 pr-1 text-black/70 mt-4 mx-[6px]">{data.comment}</p>
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

// CSS remains the same
