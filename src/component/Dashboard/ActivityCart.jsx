import React from "react";
import place1Img from '../../assets/place1.png';
import place2Img from '../../assets/place2.png';
import place3Img from '../../assets/place3.png';

const ActivityCart = () => {
  const activities = [
    {
      id: 1,
      image: place1Img,
      placeName: "Senso-ji Temple & Nakamise Shopping Street",
      timing: "8:15 am Morning",
      duration: "3 hours",
      pickUp: "From Hotel"
    },
    {
      id: 2,
      image: place2Img,
      placeName: "Tokyo Skytree Observation Deck",
      timing: "1:00 pm Afteroon",
      duration: "2 hours",
      pickUp: "From Temple"
    },
    {
      id: 3,
      image: place3Img,
      placeName: "Kimono Wearing",
      timing: "6:30 pm Evening",
      duration: "1.5 hours",
      pickUp: "From Skytree"
    }
  ];

  return (
    <div className="space-y-4 mb-13 sm:mb-0 sm:space-y-6 md:space-y-8">
      {activities.map((activity) => (
        <div 
          key={activity.id}
          className="dark:bg-[#4D4D4D] justify-between bg-[#FDFBF7] border border-[#BFBFBF] h-40 sm:h-50 md:h-65 dark:text-[#f5f5f5] text-[#333333] rounded-[8px] w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-row"
        >
          {/* Left Section (Image) */}
          <div className="h-full items-center w-5/12 object-cover rounded-[8px]">
            <img 
              src={activity.image} 
              alt={activity.placeName} 
              className="h-full w-full object-cover rounded-l-[8px]" 
            />
          </div>

          {/* Right Section (Activity Details) */}
          <div className="w-[58%] py-4 px-2 sm:py-5 sm:px-3 md:py-6 md:px-4 flex flex-col">
            <h1 className="text-[15px] sm:text-[16px] md:text-[18px] mb-4">
              {activity.placeName}
            </h1>
          <div>
            
          <div className="md:mt-10 md:py-3">
              <span className="text-[12px] sm:text-[14px] md:text-[16px] font-bold">Timing: <span className="text-[12px] sm:text-[14px] md:text-[16px] font-[400]">{activity.timing}</span></span>
            </div>
            <div>
              <span className="text-[12px] sm:text-[14px] md:text-[16px] font-bold">Duration: <span className="text-[12px] sm:text-[14px] md:text-[16px] font-[400]">{activity.duration}</span></span>
            </div>
            <div className="">
              <span className="text-[12px] sm:text-[14px] md:text-[16px] font-bold">Pick up: <span className="text-[12px] sm:text-[14px] md:text-[16px] font-[400]">{activity.pickUp}</span></span>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityCart;