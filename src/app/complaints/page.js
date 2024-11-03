'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ComplaintPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    complaint: '',
    complaintType: '', // Added complaintType
    additionalInfo: '', // Additional field based on complaint type
  });

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const complaintTypes = ['Service Issue', 'Billing Problem', 'Technical Support', 'General Inquiry'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'complaintType') {
      setShowAdditionalFields(e.target.value === 'Technical Support'); // Show additional fields for technical support
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData",formData)
    let toastId
    try {
      toastId = toast.loading("Forwarding Complaint...");
      const response = await fetch('/api/send-complaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Complaint submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          complaint: '',
          complaintType: '',
          additionalInfo: '',
        });
        setShowAdditionalFields(false); // Reset additional fields
      } else {
        toast.error('Failed to submit complaint. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      toast.error('Error occurred. Please try again.');
    }
    finally{
      toast.dismiss(toastId)
    }
  };

  return (
    <div className='bg-custom-gradient4 flex flex-col w-full justify-center items-center py-20'>
      <div className='w-11/12 sm:w-9/12 flex gap-8 flex-col'>
        {/* Complaint Form Section */}
        <form onSubmit={handleSubmit} className='w-full gap-5 p-4 sm:p-6 flex flex-col text-black/80 font-medium sm:text-lg bg-custom-gradient4 rounded-2xl shadow-2xl border'>
          <div className='flex gap-2 flex-col flex-1'>
            <h1 className='mx-auto text-black/90 text-center font-bold text-4xl sm:text-5xl'>Submit a Complaint</h1>
            <p className='text-gray-500 text-center text-xl md:text-2xl mx-auto'>We value your feedback and will address your complaint as soon as possible.</p>
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
            {/* Complaint Type Dropdown */}
            <div className='flex flex-col'>
              <label htmlFor='complaintType' className='font-medium text-lg'>Complaint Type</label>
              <select
                id='complaintType'
                name='complaintType'
                value={formData.complaintType}
                onChange={handleChange}
                className='p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90'
                required
              >
                <option value=''>Select complaint type</option>
                {complaintTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Additional Info for Technical Support */}
          {showAdditionalFields && (
            <div className='mt-6'>
              <label htmlFor='additionalInfo' className='font-medium text-lg'>Additional Information (Technical Support)</label>
              <textarea
                id='additionalInfo'
                name='additionalInfo'
                value={formData.additionalInfo}
                onChange={handleChange}
                className='w-full p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90'
                placeholder='Provide any extra details regarding the technical issue'
                rows='4'
              />
            </div>
          )}
          {/* Complaint Description Field (Spans Full Width) */}
          <div className='mt-6'>
            <label htmlFor='complaint' className='font-medium text-lg'>Complaint Description</label>
            <textarea
              id='complaint'
              name='complaint'
              value={formData.complaint}
              onChange={handleChange}
              className='w-full p-2 border-2 bg-white/30 text-black/90 border-black/60 rounded-md focus:outline-none focus:border-black/90'
              placeholder='Describe your issue'
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
              Submit Complaint
            </button>
          </div>
        </form>

        {/* Complaint Information Section */}
        <div className='p-6 bg-custom-gradient3 text-sm sm:text-base font-medium rounded-2xl border shadow-2xl mt-12 sm:my-12'>
          <h2 className=' text-3xl font-semibold mb-4'>Complaint Information</h2>
          <p className=' sm:text-lg font-medium'>
            If you are facing any issues or have complaints, please let us know. We're here to help!
          </p>
          <ul className='mt-4 space-y-2'>
            <li>
              <span className='font-semibold'>Email:</span>{' '}
              <a href='mailto:Info@mvcounsellor.com' className=' hover:underline'>
                Info@mvcounsellor.com
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
      </div>
    </div>
  );
};

export default ComplaintPage;
