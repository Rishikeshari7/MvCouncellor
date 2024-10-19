import React from 'react'
import { professionals } from '@/data/ourteam'
import Image from 'next/image'
const OurPsychologist = () => {
  return (
    <div className='w-full text-black/80'>
      <div className="flex flex-col gap-6 sm:gap-8 justify-center w-full mt-10 sm:mt-20 py-8 sm:py-14 items-center flex-1 bg-custom-gradient ">
    <p className=" text-xl sm:text-3xl md:text-5xl font-bold  " >Our Psychologist</p>
    <p className=" text-lg sm:text-xl font-bold mx-1 text-white text-center " >1300+ Best Psychologist from India for Online Consultation</p>
    <div className=" w-10/12 sm:w-11/12 flex flex-col justify-center items-center mx-auto gap-5">
      <div className=" flex flex-wrap  xl:flex-nowrap sm:flex w-full gap-4 items-stretṇch">
        {professionals.map((data) => (
          <div
            key={data.id}
            className="bg-white/70 mobile:gap-5 shadow-md sm:shadow-2xl mx-auto flex flex-col mobile:flex-row sm:py-3 px-3 justify-evenly w-full items-center rounded-2xl h-52 sm:h-72"
          >
          <div className='flex flex-col justify-center items-center'>
            <div
        className={`flex justify-center overflow-hidden items-center p-1 bg-custom-gradient3 border-4 md:border-8 border-amber-800/50 rounded-full w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 `}
            >
              <Image src={data.img} className={`object-cover aspect-square ${data.id==1 && "mt-1"} ${data.id==2 && "-rotate-[8deg] ml-2 mt-2 "} ${data.id==3 && "scale-150 mt-6 rotate-3"}`}>
            
              </Image>
              
            </div>
            <p className=' hidden sm:flex' ><strong className='custom-gradient-orange' >{data.name}</strong></p>
            <p className=' hidden sm:flex' ><span>Age: </span><span  className='custom-gradient-orange'>{data.age}</span></p>
            
            </div>
            <div className='grid grid-cols-2 gap-x-4 mobile:flex flex-col mobile:gap-1 sm:gap-1 text-[10px] mobile:text-[12px] sm:text-sm md:text-base font-medium'>
            {/* <div className='flex gap-4 flex-row mobile:gap-2 mobile:flex-col'> */}
            <p className='flex sm:hidden' ><span>Name: </span><strong className='custom-gradient-orange' >{data.name}</strong></p>
            <p className='flex sm:hidden' ><span>Age: </span><span  className='custom-gradient-orange'>{data.age}</span></p>
            
            {/* </div> */}
            <p><span>Experience: </span><span  className=''>{data.experience}<span className='custom-gradient-orange font-semibold'>+ Years</span></span></p>
            <p><span>Occupation: </span><strong className='custom-gradient-orange'>{data.occupation}</strong></p>
            
            <div className='flex col-span-2 gap-2'><span>Education: </span>  <div className='text-[10px] my-auto sm:text-sm' >
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