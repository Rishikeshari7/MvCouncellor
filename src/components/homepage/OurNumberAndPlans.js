"use client";
import React, { useState } from "react";
import { ourNumbers } from "@/data/SubscriptionData";
import Image from "next/image";
import Plan1 from "../../../public/Plan1.png";
import Plan2 from "../../../public/Plan2.png";
import Plan3 from "../../../public/Plan3.png";
import { FaCircleCheck } from "react-icons/fa6";

const OurNumberAndPlans = () => {
  // State to manage selected plan
  const [selectedPlanId, setSelectedPlanId] = useState(2); // Initially selecting Pro plan (id: 2)

  // Plans array
  const plans = [
    {
      id: 1,
      title: "Basic",
      description: "For individuals",
      details:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      price: "$699",
      session: "/1 Counselling session",
      included: [
        "All analytics features",
        "Up to 250,000 tracked visits",
        "Normal support",
        "Up to 3 team members",
      ],
      bgClass: "bg-white",
      titleColor: "text-customYellowtext2",
      textColor: "text-customYellowtext1",
      secondBG: "bg-yellow-200",
      text1: "text-customAlgaegreen",
      text2: "text-customAlagegreen2",
      image: Plan1,
      btnBg: "bg-customGreen",
      btnText: "text-white",
    },
    {
      id: 2,
      title: "Pro",
      description: "For startups",
      details:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      price: "$199",
      session: "/monthly",
      included: [
        "All analytics features",
        "Up to 1,000,000 tracked visits",
        "Premium support",
        "Up to 10 team members",
      ],
      bgClass: "bg-custom-gradient",
      titleColor: "text-[#fff]",
      textColor: "text-gray-200",
      text1: "text-white",
      text2: "text-gray-400",
      secondBG: "bg-white",
      popular: true,
      image: Plan2,
      btnBg: "bg-white",
      btnText: "text-custom-gradient",
    },
    {
      id: 3,
      title: "Enterprise",
      description: "For big companies",
      details:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      price: "$399",
      session: "/monthly",
      included: [
        "All analytics features",
        "Up to 5,000,000 tracked visits",
        "Dedicated support",
        "Up to 50 team members",
      ],
      bgClass: "bg-white",
      titleColor: "text-customYellowtext2",
      textColor: "text-customYellowtext1",
      secondBG: "bg-custom-gradient2  ",
      text1: "text-customAlgaegreen",
      text2: "text-customAlagegreen2",
      image: Plan3,
      btnBg: "bg-custom-gradient",
      btnText: "text-white",
    },
  ];

  // Function to handle plan selection
  const handlePlanSelection = (planId) => {
    setSelectedPlanId(planId);
  };

  return (
    <div className="flex flex-col text-black/80 justify-center items-center ">
      {/* Our Number */}
      <div className="flex w-full justify-center items-center bg-yellow-50 border border-yellow-300">
        <div className="flex flex-col md:flex-row w-10/12 my-5 sm:my-10 md:my-16 justify-between gap-3 sm:gap-5 items-center">
          {ourNumbers.map((data) => (
            <div
              key={data.id}
              className="flex flex-col sm:gap-1 custom:gap-2 justify-center items-center w-full md:w-auto"
            >
              <h1 className="text-3xl custom:text-6xl md:text-[2.7rem] xl:text-7xl font-semibold">
                {data.title}
              </h1>
              <p className="text-lg md:text-xl xl:text-3xl md:font-medium xl:font-semibold">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Plans */}
      <div className="flex w-full justify-center items-center bg-white">
        <div className="flex flex-wrap flex-col md:flex-row w-10/12 my-8 md:my-20 justify-between gap-3 sm:gap-10 items-stretch">
          {plans.map((data) => {
            // Determine styles based on selected plan
            const isSelected = selectedPlanId === data.id;
            const styles = isSelected
              ? plans[1] // Apply Pro plan styles
              : plans[2]; // Apply Enterprise plan styles

            return (
              <div
                key={data.id}
                className={`flex flex-col text-sm sm:text-medium mx-auto xl:flex-1 shadow-2xl p-5 px-8 rounded-2xl ${styles.text1} ${styles.bgClass} gap-2`}
                onClick={() => handlePlanSelection(data.id)}
              >
                {/* Section 1 */}
                <div className="flex gap-2">
                  <div
                    className={`${
                      data.id === 1 ? "bg-custom-gradient3" : styles.secondBG
                    } flex justify-center items-center p-2 sm:p-4 rounded-2xl`}
                  >
                    <Image
                      src={data.image}
                      width={50}
                      height={50}
                      alt="icons"
                      className="object-contain aspect-square"
                    />
                  </div>
                  <div className="flex   flex-1 justify-between items-center">
                    <div className="flex flex-col">
                      <p className={`${styles.text2} font-medium`}>
                        {data.description}
                      </p>
                      <p className={`font-bold text-xl sm:text-2xl`}>
                        {data.title}
                      </p>
                    </div>
                    {data.popular && (
                      <button
                        className={`  bg-[#FFD700] text-[#3C3C3C]
                      w-fit py-1 px-3 rounded-lg text-sm font-semibold shadow-md`}
                      >
                        Popular
                      </button>
                    )}
                  </div>
                </div>

                {/* Section 2 */}
                <p className="w-full opacity-80 max-w-80">{data.details}</p>
                <div>
                  <span className="text-4xl sm:text-5xl font-bold">
                    {data.price}
                  </span>{" "}
                  <span className="sm:text-lg text-base opacity-90">
                    {data.session}
                  </span>{" "}
                </div>

                {/* Section 3 */}
                <div>
                  <h1 className="text-base sm:text-lg font-bold">
                    What’s included
                  </h1>
                  <ol className="flex flex-col gap-1 mt-2">
                    {data.included.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-2 items-center justify-start"
                      >
                        <FaCircleCheck className={styles.titleColor} /> {item}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Section 4 */}
                <button
  className={`flex justify-center items-center py-3 rounded-full mt-3 sm:mt-5 font-bold ${styles.btnBg}`}
>
  <span className={isSelected ? "bg-clip-text text-transparent bg-custom-gradient" : "text-white"}>
    Get started
  </span>
</button>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurNumberAndPlans;
