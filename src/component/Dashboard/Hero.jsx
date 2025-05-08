import React from 'react';

const Hero = ({ userName }) => {
  return (
    <div className="mb-8 flex justify-between  dark:bg-[#0B0809]">
     <div>
     <h1 className="text-[24px] md:text-3xl mb-[-5px]  font-bold text-gray-800 dark:text-[#F5F5F5]">
        Hello {userName || 'User'}!
      </h1>
      <p className="text-[16px] font-[400] text-gray-600 dark:text-[#F5F5F5]">
        Ready for the trip?
      </p>
     </div>

     <div className='w-[38px] h-[38px] flex items-center justify-center  bg-[#FF7339] rounded-full'>
         <h1 className='text-[20px] font-medium text-[#ffff] mr-0.5'>C</h1>
     </div>
    </div>
  );
};

export default Hero;