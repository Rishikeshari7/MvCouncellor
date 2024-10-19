import React from 'react'
import abt1 from "../../../public/About/aboutus1.jpg"
import abt2 from "../../../public/About/aboutus2.webp"
import abt3 from "../../../public/About/aboutus3.webp"
import Image from 'next/image'
import BlueText from '../ui/BlueText'

const TopSection = () => {
  return (
      <div className='border-2 border-yellow-200'>
      <div className=" bg-custom-gradient2 flex justify-center items-center border-2 border-yellow-200">
        <div className="w-10/12 flex justify-center items-center flex-col gap-5 mt-8 md:mt-20 sm:mt-14 ">
        <h1 className=' text-3xl sm:text-4xl lg:text-5xl font-semibold underline'  >About Us</h1>
          {/* <p className=" text-center font-semibold text-xl sm:text-3xl md:text-4xl">
          Helping You Navigate Through Life’s Challenges for a <br />
            <BlueText text={"Healthier Mind"} classN={"custom-gradient"} />{" "}
          </p> */}
          <p className="lg:w-[70%] text-center text-sm  sm:text-base md:my-4">
          <strong>At MV Counselor and Psychologist</strong> , we provide compassionate support to help you navigate through life’s stressors. Whether you're dealing with mental stress, anxiety, or marital issues, we are here to help you achieve emotional balance and well-being.
          
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            <Image className=' h-[8rem] object-cover  sm:h-[10rem] sm:object-fill md:h-[15rem] md:object-cover lg:h-[19.5rem] lg:w-[34rem] aspect-square lg:object-fill' src={abt1} alt='img1' ></Image>
            <Image className='hidden sm:block h-[8rem] object-fill  sm:h-[10rem] sm:object-fill md:h-[15rem] md:object-cover lg:h-[19.5rem] lg:w-[35rem] aspect-square lg:object-fill' src={abt2} alt='img2' ></Image>
            <Image className=' h-[8rem] object-cover  sm:h-[10rem] sm:object-fill md:h-[15rem] md:object-cover lg:h-[19.5rem] lg:w-[34rem] aspect-square lg:object-fill' src={abt3} alt='img3' ></Image>
          </div>
        </div>
      </div>
      <div className=" bg-custom-gradient4 flex justify-center items-center py-8 sm:py-12 md:py-14  border-b-[1px] border-richblack-600">
        <p className=" w-10/12 text-center text-richblack-5 font-medium text-lg sm:text-2xl md:text-3xl ">
          <span className="text-richblack-400 mb-5 mr-1 italic ">"</span> We are committed to helping
           individuals and couples overcome life’s challenges.
           Our expert counselors
          <BlueText text={"combine professional experience,"} classN={"custom-gradient"}/>{" "}
          <span className="orange">empathy</span> , and proven methods to create a safe space for healing{" "}
          <BlueText text={"and personal growth."} classN={"custom-gradient-orange"} />
          <span className="text-richblack-400 mb-5 italic">"</span>
        </p>
      </div>
      </div>
  )
}

export default TopSection
