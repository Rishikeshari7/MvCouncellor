import React from "react";
import Certificate1 from "../../../public/About/Certificate1.png"
import Image from "next/image";
const CertificateSection = () => {
  return (
    <div className="w-full text-black/80">
      <div className=" w-10/12 sm:w-11/12 flex flex-col justify-center items-center mx-auto my-20 gap-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-bold">Professional Counselling Certification</h1>
    
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20">
          {/* Left Text */}
          <div className="w-full lg:w-[45%] text-justify text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed space-y-4 md:space-y-6">
          <p>
            Mukesh Rani has successfully completed the Counselling Master Course Advance, awarded by Counsel India. This certification marks a significant milestone in advancing skills and expertise in the field of counselling.
          </p>
          <p>
            It recognizes Mukesh’s commitment to enhancing professional counselling approaches and contributing meaningfully to the mental health and support community. With this achievement, Mukesh is now better equipped to serve and uplift those seeking guidance, standing out with a recognized badge of excellence.
          </p>
        </div>

          {/* Right Image */}
          <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[35%]">
            <Image
              src={Certificate1}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
