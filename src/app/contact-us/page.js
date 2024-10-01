'use client'
import React, { useState } from 'react';

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

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mail sent successfully!');
        // Reset the form if needed
        setFormData({
          name: '',
          email: '',
          phone: '',
          description: '',
          state: '',
        });
      } else {
        alert('Failed to send mail. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending mail:', error);
      alert('Error occurred. Please try again.');
    }
  };

  return (
    <div className='bg-customLightgreen2 flex flex-col w-full justify-center items-center py-10'>
      {/* Apply responsive width: w-9/12 above sm, w-11/12 below sm */}
      <div className='w-11/12 sm:w-9/12 flex flex-col'>

        {/* Contact Us Section */}
        <div className='p-6 bg-emerald-50 rounded-md border-[3px] border-customGreen2 shadow-customLightgreen4 shadow-xl mb-12'>
          <h2 className='text-customGreen text-2xl font-semibold mb-4'>Contact Us</h2>
          <p className='text-customGreen text-lg'>
            Feel free to reach out to us if you have any questions or concerns.
          </p>
          <ul className='mt-4 space-y-2'>
            <li>
              <span className='font-semibold'>Email:</span>{' '}
              <a href='mailto:support@example.com' className='text-customGreen2 hover:underline'>
                support@example.com
              </a>
            </li>
            <li>
              <span className='font-semibold'>Phone:</span>{' '}
              <a href='tel:+911234567890' className='text-customGreen2 hover:underline'>
                +91 123 456 7890
              </a>
            </li>
            <li>
              <span className='font-semibold'>Address:</span>{' '}
              123 Green Lane, EcoCity, India
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className='w-full p-6 bg-customLightgreen2 rounded-md border-[3px] border-customGreen2 shadow-customLightgreen4 shadow-xl'>
          {/* Grid Layout: 2 columns above md, 1 column below */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Name Field */}
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-customGreen text-lg'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='p-2 border-2 bg-white/30 border-customLightgreen rounded-md focus:outline-none focus:border-customLightgreen3'
                placeholder='Enter your name'
                required
              />
            </div>
            {/* Email Field */}
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-customGreen text-lg'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='p-2 border-2 bg-white/30 border-customLightgreen rounded-md focus:outline-none focus:border-customLightgreen3'
                placeholder='Enter your email'
                required
              />
            </div>
            {/* Phone Number Field */}
            <div className='flex flex-col'>
              <label htmlFor='phone' className='text-customGreen text-lg'>Phone Number</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='p-2 border-2 bg-white/30 border-customLightgreen rounded-md focus:outline-none focus:border-customLightgreen3'
                placeholder='Enter your phone number'
                required
              />
            </div>
            {/* State Dropdown */}
            <div className='flex flex-col'>
              <label htmlFor='state' className='text-customGreen text-lg'>State</label>
              <select
                id='state'
                name='state'
                value={formData.state}
                onChange={handleChange}
                className='p-2 border-2 bg-white/30 border-customLightgreen rounded-md focus:outline-none focus:border-customLightgreen3'
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
            <label htmlFor='description' className='text-customGreen text-lg'>Description</label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='w-full p-2 border-2 bg-white/30 border-customLightgreen rounded-md focus:outline-none focus:border-customLightgreen3'
              placeholder='Enter a description'
              rows='4'
              required
            />
          </div>
          {/* Submit Button */}
          <div className='flex justify-center mt-6'>
            <button
              type='submit'
              className='p-2 px-6 bg-customGreen text-customWhite rounded-md hover:bg-customGreen2'
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
