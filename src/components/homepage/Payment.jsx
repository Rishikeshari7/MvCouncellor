import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import QRCode from "../../../public/Councellors/QRCode.jpg";
import Image from 'next/image';
import { toast } from 'react-hot-toast'; 

const Payment = ({ isPrice, setPrice }) => {
  const [paymentRef, setPaymentRef] = useState(""); 

  const handleWhatsAppRedirect = () => {
    if (paymentRef.trim() === "") {
      
      toast.error("Please provide the payment reference number.");
      return;
    }

    const whatsappNumber = "+918295417017"; 
    const message = `Hello, I have made the payment of *${isPrice}*. Here is my payment reference number: *${paymentRef}*`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className='fixed inset-0 z-[1000] grid place-items-center bg-white bg-opacity-30 backdrop-blur-sm'>
      <div className='bg-custom-gradient3 rounded-xl m-5 p-4 md:p-7'>
        <div className='bg-white/80 rounded-xl border border-yellow-200 p-5 py-7 flex flex-col gap-4'>
          <div className='flex justify-center flex-col items-center gap-2'>
            <p className=' text-2xl md:text-4xl font-bold'>Confirm Your Payment</p>
            
            <p className=' text-sm md:text-base font-medium'>
              Please review the payment details below before proceeding.
            </p>
            {isPrice && (
              <p className='text-lg md:text-2xl'>
                Total Amount: <span className='font-bold text-2xl md:text-3xl custom-gradient-orange'>{isPrice}</span> 
              </p>
            )}
          </div>
          

          <div className='flex justify-center'>
            <Image 
              src={QRCode} 
              alt='QR Code' 
              className=' w-52 h-52 md:w-[17rem] md:h-[19rem] rounded-xl shadow-lg md:shadow-xl '
            />
          </div>


          <div className='flex flex-col gap-2'>
            <label htmlFor='payment-ref' className='font-medium text-sm md:text-base'>
              Payment Reference Number
            </label>
            <input 
              type='text' 
              id='payment-ref'
              value={paymentRef}
              onChange={(e) => setPaymentRef(e.target.value)}
              placeholder='Enter payment reference number'
              className=' p-1 px-2 md:px-3 md:py-2 border border-gray-300 text-sm md:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
            />
          </div>


          <button 
            onClick={handleWhatsAppRedirect} 
            className='bg-green-500 hover:bg-green-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg flex items-center justify-center'>
            <FaWhatsapp className='mr-2' /> Contact on WhatsApp
          </button>


          <button 
            onClick={() => setPrice(null)} 
            className='bg-red-500 hover:bg-red-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg flex items-center justify-center'>
            <FaTimes className='mr-2' /> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
