"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClipLoader } from "react-spinners"; // loader component

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const Page = () => {
  const [allReview, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/get-review-all");
      const data = await res.json();
      setReviews(data.data);
    } catch (err) {
      console.error("Failed to fetch reviews");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleReview = async (id,isPublished) => {
    try {
      // setReviews([])
      setIsLoading(true);
      const res = await fetch("/api/toggle-review", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id,isPublished }),
      });
    } catch (err) {
      console.error("Failed to toggle review");
    } finally {
      fetchReview();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 sm:mt-14 my-20 gap-10">
      <p className="text-xl sm:text-3xl md:text-5xl font-bold">Our Happy Customers</p>

      {isLoading || !allReview ? (
        <div className="flex justify-center items-center h-40">
          <ClipLoader size={40} color="#facc15" /> {/* Tailwind yellow-400 */}
        </div>
      ) : (
        <div className="w-11/12 sm:w-[95%]">
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
            {allReview  &&
              allReview.map((data, key) => (
                <div
                  key={data._id}
                  className="scrollbar relative bg-yellow-100 shadow-md sm:shadow-yellow-200 flex py-3 p-2 overflow-hidden sm:p-4 lg:px-5 flex-col items-center rounded-2xl w-[95%]"
                >
                  <span className="absolute top-2 right-4">{key}</span>
                  <div className="flex w-full gap-2 pl-1 pr-1">
                    <div className="flex mb-2 justify-center items-center border-yellow-500 border-[1px] rounded-full overflow-hidden w-14 h-14">
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
                  <div className="scrollbar overflow-auto h-[10rem] sm:h-[13rem] ">
                    <p className="font-medium text-sm sm:text-lg pl-1 pr-1 text-black/70 mt-2 mx-[6px]">
                      {data.comment}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleReview(data._id,data.isPublished)}
                    className={`mt-4 px-4 py-1 rounded-md text-white ${
                      data.isPublished ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {data.isPublished ? "Unpublish" : "Publish"}
                  </button>
                </div>
              ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Page;
