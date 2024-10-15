'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    state: '',
  });

  const statesOfIndia = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 
    'West Bengal'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData",formData)
    let toastId;
    try {
      toastId=toast.loading("Sending Response")
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Mail sent successfully!');
        // Reset the form if needed
        setFormData({
          name: '',
          email: '',
          phone: '',
          description: '',
          state: '',
        });
      } else {
        toast.error('Failed to send mail. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending mail:', error);
      toast.error('Error occurred. Please try again.');
    }
    finally{
      toast.dismiss(toastId)
    }
  };

  return (
    <div className='bg-custom-gradient4 flex flex-col w-full justify-center items-center py-10'>
      {/* Apply responsive width: w-9/12 above sm, w-11/12 below sm */}
      <div className='w-11/12  sm:w-9/12 flex flex-col'>

        {/* Contact Us Section */}
        <div className='p-6 bg-custom-gradient3 text-sm sm:text-base font-medium rounded-2xl border shadow-2xl mb-12'>
          <h2 className=' text-3xl font-semibold mb-4'>Contact Us</h2>
          <p className=' sm:text-lg'>
            Feel free to reach out to us if you have any questions or concerns.
          </p>
          <ul className='mt-4 space-y-2'>
            <li>
              <span className='font-semibold'>Email:</span>{' '}
              <a href='mailto:info@mvmentalcare.com' className=' hover:underline'>
              info@mvmentalcare.com
              </a>
            </li>
            <li>
              <span className='font-semibold'>Phone:</span>{' '}
              <a href='tel:+918295417017' className=' hover:underline'>
              +91 82954 17017
              </a>
            </li>
            <li>
              <span className='font-semibold'>Address:</span>{' '}
              Zirakpur , Mohali District , 140603, Punjab, India
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className='w-full gap-2 p-4 sm:p-6 flex flex-col text-black/80 font-medium sm:text-lg bg-custom-gradient4 rounded-2xl shadow-2xl border'>
          {/* Grid Layout: 2 columns above md, 1 column below */}
          <div className='flex gap-2 flex-col flex-1'>
            <h1 className='mx-auto text-black/90 font-bold text-4xl md:text-5xl'>Contact Us</h1>
            <p className='text-gray-500 text-center text-xl md:text-2xl mx-auto'>Thank you for contacting we are always here to help you !</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Name Field */}
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-lg font-medium'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90'
                placeholder='Enter your name'
                required
              />
            </div>
            {/* Email Field */}
            <div className='flex flex-col'>
              <label htmlFor='email' className='font-medium text-lg'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90'
                placeholder='Enter your email'
                required
              />
            </div>
            {/* Phone Number Field */}
            <div className='flex flex-col'>
              <label htmlFor='phone' className='font-medium text-lg'>Phone Number</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90'
                placeholder='Enter your phone number'
                required
              />
            </div>
            {/* State Dropdown */}
            <div className='flex flex-col'>
              <label htmlFor='state' className='font-medium text-lg'>State</label>
              <select
                id='state'
                name='state'
                value={formData.state}
                onChange={handleChange}
                className='p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90'
                required
              >
                <option value=''>Select your state</option>
                {statesOfIndia.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Description Field (Spans Full Width) */}
          <div className='mt-6'>
            <label htmlFor='description' className='font-medium text-lg'>Description</label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='w-full p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90'
              placeholder='Enter a description'
              rows='4'
              required
            />
          </div>
          {/* Submit Button */}
          <div className='flex justify-center mt-6'>
            <button
              type='submit'
              className='p-2 px-6 w-80 bg-custom-gradient text-white font-semibold text-lg rounded-md transition-all duration-1000 ease-in-out transform hover:bg-custom-gradient2'
>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
