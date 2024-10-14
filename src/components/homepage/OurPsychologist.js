import React from 'react'
import { professionals } from '@/data/ourteam'
import Image from 'next/image'
const OurPsychologist = () => {
  return (
    <div className='w-full text-black/80'>
      <div className="flex flex-col gap-6 sm:gap-8 justify-center w-full mt-10 sm:mt-20 py-8 sm:py-14 items-center flex-1 bg-custom-gradient ">
    <p className=" text-xl sm:text-3xl md:text-5xl font-bold  " >Our Psychologist</p>
    <p className=" text-lg sm:text-xl font-bold mx-1 text-white text-center " >1300+ Best Psychologist from India for Online Consultation</p>
    <div className=" w-10/12 sm:w-10/12 flex flex-col justify-center items-center mx-auto gap-5">
      <div className=" flex flex-wrap  xl:flex-nowrap sm:flex w-full gap-4 items-stretṇch">
        {professionals.map((data) => (
          <div
            key={data.id}
            className="bg-white/70 mobile:gap-5 shadow-md sm:shadow-2xl mx-auto flex flex-col mobile:flex-row sm:py-3 px-3 justify-evenly w-full items-center rounded-2xl h-52 sm:h-72"
          >
            <div
        className={`flex justify-center overflow-hidden items-center p-1 bg-custom-gradient3 border-4 md:border-8 border-amber-800/50 rounded-full w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 `}
            >
              <Image src={data.img} className={`${data.id==2 && "-rotate-6 "}`}>
            
              </Image>
            </div>
            <div className='grid grid-cols-2 gap-x-4 mobile:flex flex-col mobile:gap-1 sm:gap-2 text-[10px] mobile:text-[12px] sm:text-sm md:text-base font-medium'>
            {/* <div className='flex gap-4 flex-row mobile:gap-2 mobile:flex-col'> */}
            <p><strong>Name: </strong><span className='custom-gradient-orange font-semibold' >{data.name}</span></p>
            <p><strong>Age: </strong><span  className='custom-gradient-orange font-semibold'>{data.age}</span></p>
            
            {/* </div> */}
            <p><strong>Experience: </strong><span  className=' font-semibold'>{data.experience}<span className='custom-gradient-orange font-semibold'>+ Years</span></span></p>
            <p><strong>Occupation: </strong><span className='custom-gradient-orange font-semibold'>{data.occupation}</span></p>
            
            <div className='flex col-span-2 gap-2'><strong>Education: </strong>  <div >
            <p >{data.education1} </p> {data.education2 && (<p>{data.education2}</p>)}
            </div>
           </div>
            {/* <p><strong></strong><span></span></p> */}
            </div>
            {/* <p className="font-bold text-center text-sm sm:text-xl  mx-1 sm:mt-4">
              {data.occupation}
              {data.name}
              {data.name}
              {data.name}
            </p>
            </p> */}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default OurPsychologist