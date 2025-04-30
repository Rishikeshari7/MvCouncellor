"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ReviewForm = () => {
  const { register, handleSubmit,watch, reset, formState: { errors } } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const comment = watch("comment", "");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    const { name, comment, occupation, isPublished, image } = data;



    let toastId;
    try {
      toastId = toast.loading("Submitting your review...");

      const formData = new FormData();
      formData.append("name", name);
      formData.append("comment", comment);
      formData.append("occupation", occupation);
      formData.append("image", document.getElementById("fileUpload").files[0] || "");

      const response = await fetch("/api/user-review", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Review submitted successfully!");
        reset();
        setSelectedImage(null);
      } else {
        toast.error("Failed to submit the review. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="bg-custom-gradient4 flex flex-col w-full justify-center items-center py-10">
      <div className="w-11/12 sm:w-9/12 flex flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full gap-2 p-4 sm:p-6 flex flex-col text-black/80 font-medium sm:text-lg bg-custom-gradient4 rounded-2xl shadow-2xl border"
        >
          <div className="flex gap-2 flex-col flex-1">
            <h1 className="mx-auto text-black/90 text-center font-bold text-4xl md:text-5xl">
              Submit a Review
            </h1>
            <p className="text-gray-500 text-center text-xl md:text-2xl mx-auto">
              Your feedback helps us improve!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90"
                placeholder="Enter your name"
              />
              {errors.name && (
              <span className="text-red-400 text-[0.8rem] mt-1">
                Please Enter Name
              </span>
            )}
            </div>

            {/* Occupation Field */}
            <div className="flex flex-col">
              <label htmlFor="occupation" className="text-lg font-medium">
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                {...register("occupation", { required: true })}
                className="p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90"
                placeholder="Enter your occupation"
                
              />
              {errors.occupation && (
              <span className="text-red-400 text-[0.8rem] mt-1">
              Please Enter Occupation
              </span>
            )}
            </div>
          </div>

          {/* Comment Field */}
          <div className="mt-6">
            <label htmlFor="comment" className="font-medium text-lg">
              Comment
            </label>
            <textarea
              id="comment"
              {...register("comment", {
                required: true,
                maxLength: {
                  value: 500,
                  message: "Comment cannot exceed 500 characters.",
                },
              })}
              className="w-full p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90"
              placeholder="Share your thoughts..."
              rows="4"
              required
            />
            {errors.comment && (
              <span className="text-red-500 text-[0.8rem] mt-1">
                {errors.comment.message}
              </span>
            )}
            <p className="text-gray-500 text-sm">{comment?.length || 0}/500 characters</p>
          </div>

          {/* File Upload Section */}
          <div className="mt-4">
            <label
              htmlFor="fileUpload"
              className="relative mt-4 block w-full cursor-pointer rounded-md border-2 border-dashed border-black/80 p-4 text-center transition hover:border-blue-500 hover:bg-yellow-50 dark:border-gray-600 dark:hover:border-blue-400 dark:hover:bg-blue-900"
            >
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {selectedImage ? (
                <div className="mt-4 flex flex-col items-center justify-center">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full max-w-xs rounded-lg shadow-lg"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="h-8 w-8 text-gray-400 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    Click to upload image (JPG, PNG)
                  </span>
                </div>
              )}
            </label>
          </div>

          {/* Is Published Checkbox */}
          {/* <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="isPublished"
              {...register('isPublished')}
              className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            />
            <label htmlFor="isPublished" className="ml-2 text-lg font-medium">Publish this review</label>
          </div> */}

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="p-2 px-6 w-80 bg-custom-gradient text-white font-semibold text-lg rounded-md transition-all duration-1000 ease-in-out transform hover:bg-custom-gradient2"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
