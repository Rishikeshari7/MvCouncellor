// import React from 'react';
// import { customerReviews } from '@/data/review';

// const PsychologistAndCustomers = () => {
//   return (
//     <div className='flex flex-col justify-center items-center flex-1 text-black/80 overflow-hidden'>
//       <div className="flex flex-col gap-6 sm:gap-10 justify-center w-full py-6 sm:py-12 items-center flex-1 bg-white">
//         <p className="text-xl sm:text-3xl md:text-5xl font-bold">Our Happy Customers</p>
//         <div className="w-full sm:w-[95%] flex flex-col justify-center items-center mx-auto gap-5">
//           <div className="marquee-container  w-full p-4 ">
//             <div className="marquee-content flex w-[120rem] md:w-full gap-4 items-stretch justify-between">
//               {/* Duplicate the reviews for seamless scrolling */}
//               {customerReviews.map((data) => (
//                 <div
//                   key={data.id}
//                   className={` ${data.id<4 && "hidden sm:flex"}  scrollbar bg-yellow-100 shadow-md sm:shadow-md sm:shadow-yellow-200 mx-auto flex pt-3 p-2 overflow-hidden sm:p-5 sm:px-2 flex-col items-center rounded-2xl min-w-[18rem] max-h-[14rem] sm:min-w-64 sm:max-h-80 md:min-w-64 md:max-h-[22rem] `}
//                 >
//                   <div className='flex w-full gap-2 pl-1 pr-1'>
//                     <div className="flex mb-2 justify-center items-center border-yellow-500 border-[1px] rounded-full overflow-hidden w-14 h-14">
//                       <img
//                         src={data.image}
//                         alt={data.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h1 className="font-bold text-nowrap text-md sm:text-lg">{data.name}</h1>
//                       <p className="text-left text-sm">{data.occupation}</p>
//                     </div>
//                   </div>
//                   <div className='scrollbar overflow-auto' >
//                     <p className="  font-medium text-sm sm:text-lg pl-1 pr-1 text-black/70 mt-2 mx-[6px]">{data.comment}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PsychologistAndCustomers;

// // CSS remains the same

// -------------------------------------------------------------------------------------------------------------

// 'use client'
// import React from 'react';
// import Carousel from 'react-multi-carousel';
// // import 'react-multi-carousel/lib/styles.css';
// import { customerReviews } from '@/data/review';

// const PsychologistAndCustomers = () => {
//   console.log("customerReviews",customerReviews)
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 1024 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 768, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   return (
//     <div className="flex flex-col justify-center items-center flex-1 text-black/80">
//       <div className="flex flex-col gap-6 sm:gap-10 justify-center w-full py-6 sm:py-12 items-center flex-1 bg-white">
//         <p className="text-xl sm:text-3xl md:text-5xl font-bold">Our Happy Customers</p>
//         <div className="w-full sm:w-[95%] flex flex-col justify-center items-center mx-auto gap-5">
//           <Carousel
//             responsive={responsive}
//             infinite
//             autoPlay
//             autoPlaySpeed={3000}
//             pauseOnHover
//             draggable
//             showDots
//             keyBoardControl
//           >
//             {customerReviews.map((data) => (
//               <div
//                 key={data.id}
//                 className="scrollbar bg-yellow-100 shadow-md sm:shadow-yellow-200 flex pt-3 p-2 overflow-hidden sm:p-5 flex-col items-center rounded-2xl min-w-[18rem] max-h-[14rem] sm:min-w-64 sm:max-h-80 md:min-w-64 md:max-h-[22rem]"
//               >
//                 <div className="flex w-full gap-2 pl-1 pr-1">
//                   <div className="flex mb-2 justify-center items-center border-yellow-500 border-[1px] rounded-full overflow-hidden w-14 h-14">
//                     <img
//                       src={data.image}
//                       alt={data.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h1 className="font-bold text-nowrap text-md sm:text-lg">{data.name}</h1>
//                     <p className="text-left text-sm">{data.occupation}</p>
//                   </div>
//                 </div>
//                 <div className="scrollbar overflow-auto">
//                   <p className="font-medium text-sm sm:text-lg pl-1 pr-1 text-black/70 mt-2 mx-[6px]">
//                     {data.comment}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PsychologistAndCustomers;

// --------------------------------------------------------------------------------------------------------
"use client";
import React,{useEffect,useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { customerReviews } from "@/data/review";


const PsychologistAndCustomers = () => {
  const [allReview,setReviews]=useState([]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 5,
    },
    LargeDesktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };


  useEffect(()=>{
    fetchReview()
  },[])
  const fetchReview = async()=>{
    try{
      const res = await fetch("/api/get-review");
      const data = await res.json()
      console.log("data-",data);
      setReviews(data.data)
    }
    catch(err){
      // toast.error("Erro")
      console.error("Failed to Fetch Review")
    }
  }
  return (

    <div className="flex flex-col justify-center items-center mt-8 sm:mt-14 gap-10" >
    <p className="text-xl sm:text-3xl md:text-5xl font-bold">Our Happy Customers</p>
    <div className=" w-11/12 sm:w-[95%] " >
    <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2000}
        infinite
        pauseOnHover
        draggable
        keyBoardControl={true}
        arrows={false} 
        transitionDuration={500}
        itemClass="flex justify-center items-center gap-5"
      >
        {allReview.map((data) => (
          <div
            key={data.id}                                                                         
            className="scrollbar bg-yellow-100 shadow-md sm:shadow-yellow-200 flex py-3 p-2 overflow-hidden sm:p-4 lg:px-5 flex-col items-center rounded-2xl w-[95%]"
          >
            <div className="flex w-full gap-2 pl-1 pr-1">
              <div className="flex mb-2 justify-center items-center border-yellow-500 border-[1px] rounded-full overflow-hidden w-14 h-14">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-bold text-nowrap text-md sm:text-lg">
                  {data.name}
                </h1>
                <p className="text-left text-sm">{data.occupation}</p>
              </div>
            </div>
            <div className="scrollbar overflow-auto h-[10rem] sm:h-[13rem] ">
              <p className="font-medium text-sm sm:text-lg pl-1 pr-1 text-black/70 mt-2 mx-[6px]">
                {data.comment}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
      
    </div>
  );
};
export default PsychologistAndCustomers;
