'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import img1 from "../../../public/Main1.png"
import img2 from "../../../public/Main2.png"
import img3 from "../../../public/Main3.png"
import img4 from "../../../public/Main4.png"
const ImageCarousel = () => {
  // Array of images
  const images=[img1,img2,img3,img4]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full xl:pr-10 flex justify-center h-[20rem] sm:h-[25rem] md:h-[30rem] xl:h-[31rem] items-center relative">
    
     {
        images.map((e,index)=>{
            return (
        <Image
        src={e}
        alt="carousel"
        
        className={`${index==currentIndex ? " opacity-100":" opacity-0"} w-full object-contain mt-[0rem] h-full  transition-all absolute duration-1000`}
      />
            )
        })
     }

     
    </div>
  );
};

export default ImageCarousel;
