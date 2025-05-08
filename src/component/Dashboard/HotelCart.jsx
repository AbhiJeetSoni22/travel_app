import React from "react";
import shinagawaImg from "../../assets/shinagawa.png";
import hotel2 from "../../assets/Hotel2.png";
import hotel3 from "../../assets/Hotel3.jpg";
import hotel4 from "../../assets/Hotel4.jpg";

const HotelCart = () => {
  const hotels = [
    {
      name: "Shinagawa Prince Hotel",
      img: shinagawaImg,
      checkIn: "26.01.2025, 11:15 pm",
      checkOut: "28.01.2025, 11:15 am",
      duration: "2 Nights",
      rating: "4.0",
    },
    {
      name: "Tokyo Grand Hotel",
      img: hotel2,
      checkIn: "28.01.2025, 2:00 pm",
      checkOut: "30.01.2025, 10:00 am",
      duration: "2 Nights",
      rating: "4.2",
    },
    {
      name: "Kyoto Imperial Hotel",
      img: hotel3,
      checkIn: "30.01.2025, 3:00 pm",
      checkOut: "01.02.2025, 11:00 am",
      duration: "3 Nights",
      rating: "4.5",
    },
    {
      name: "Osaka Riverside Hotel",
      img: hotel4,
      checkIn: "01.02.2025, 1:00 pm",
      checkOut: "02.02.2025, 12:00 pm",
      duration: "1 Night",
      rating: "4.1",
    },
  ];

  return (
    <div className="overflow-x-auto flex flex-row space-x-4 snap-x snap-mandatory pb-4
                   md:overflow-x-visible md:grid md:grid-cols-2 md:gap-4 md:space-x-0
                   lg:grid-cols-4">
      {hotels.map((hotel, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg shadow-md w-full max-w-[16rem] snap-center flex-shrink-0
                     md:max-w-none md:w-full md:snap-none"
        >
          {/* Image Section - Larger on big screens */}
          <img
            src={hotel.img}
            alt={`${hotel.name}`}
            className="w-full h-24 object-cover rounded-t-lg
                      md:h-32 lg:h-40"
          />

          {/* Content Section */}
          <div className="dark:bg-[#4D4D4D] dark:border-none text-[#333333] dark:text-[#f5f5f5] border border-[#BFBFBF] bg-[#FDFBF7] rounded-b-lg relative">
            {/* Rating Badge - Larger on big screens */}
            <div className="absolute top-[-23px] left-2 flex items-center gap-1 bg-[#3643FB] text-white text-[10px] font-medium px-2 py-0.5 rounded-[2px]
                          md:top-[-28px] md:text-xs md:px-3 md:py-1">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-3 md:h-3"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="white"
                />
              </svg>
              <span>{hotel.rating}</span>
              <span>Very Good</span>
            </div>

            {/* Card Content - Adjusted text sizes for big screens */}
            <div className="p-2 pt-4 text-[#333333] dark:text-[#f5f5f5]
                          md:p-3 md:pt-5">
              <h3 className="text-[14px] font-semibold
                           md:text-[16px] lg:text-[18px]">
                {hotel.name}
              </h3>
              <p className="text-[12px] mt-1
                          md:text-[13px] lg:text-[14px]">
                Check in: {hotel.checkIn}
              </p>
              <p className="text-[12px] mb-1
                          md:text-[13px] lg:text-[14px]">
                Check out: {hotel.checkOut}
              </p>
              <div className="flex justify-between items-center mt-2
                            md:mt-3">
                <p className="text-[12px] font-medium
                            md:text-[13px] lg:text-[14px]">
                  {hotel.duration}
                </p>
                <div className="flex text-[12px] items-center gap-1 text-[#90EB61]
                              md:text-[13px] lg:text-[14px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:w-5 md:h-5"
                  >
                    <path
                      d="M2.5 9.5C2.5 5.63444 5.63444 2.5 9.5 2.5C13.3656 2.5 16.5 5.63444 16.5 9.5C16.5 13.3656 13.3656 16.5 9.5 16.5C5.63444 16.5 2.5 13.3656 2.5 9.5Z"
                      stroke="#90EB61"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.38892 9.49995L8.72225 11.8333L12.6111 7.9444"
                      stroke="#90EB61"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCart;