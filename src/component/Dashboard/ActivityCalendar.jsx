import React, { useState } from "react";

const ActivityCalendar = () => {
  const days = [
    { month: "JAN", day: "MON", date: 27, highlighted: true },
    { day: "TUE", date: 28 },
    { day: "WED", date: 29 },
    { day: "THU", date: 30 },
    { day: "FRI", date: 31 },
    { month: "FEB", day: "SAT", date: 1 },
  ];

  const [selectedDate, setSelectedDate] = useState(27);

  return (
    <>
      {/* Calendar Container */}
      <div className="dark:bg-[#333333] dark:border-none border border-[#A6A6A6] bg-[#FDFBF7] p-4 mb-6 rounded-lg">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="dark:bg-[#D3F462] bg-[#313DDF] rounded-[8px] dark:text-black text-[#f5f5f5] text-xs sm:text-sm font-medium px-3 py-1">
            Day Plan
          </span>
          <span className="dark:text-white rounded-[8px] bg-[#FDFBF7] dark:bg-[#0B0809] px-2 py-1 border border-[#313DDF] dark:border-[#D3F462] text-xs sm:text-sm font-medium">
            14 Activities
          </span>
        </div>

        {/* Calendar Strip */}
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-2 w-max min-w-full">
            {days.map((day, index) => (
              <div
                key={index}
                onClick={() => setSelectedDate(day.date)}
                className={`flex h-14 sm:h-20 rounded-lg shadow-md overflow-hidden flex-shrink-0 cursor-pointer transition-all ${
                  selectedDate === day.date 
                    ? "border-2 border-[#313DDF] dark:border-[#D1F462]" 
                    : "border border-transparent"
                }`}
              >
                {/* Month Section */}
                {day.month && (
                  <div
                    className={`${
                      day.highlighted 
                        ? "dark:bg-[#D3F462] bg-[#313DDF]" 
                        : "bg-gray-600 dark:bg-[#292929]"
                    } w-8 sm:w-10 flex items-center justify-center`}
                  >
                    <span className="text-[#f5f5f5] dark:text-gray-900 text-[10px] sm:text-xs font-medium transform rotate-[-90deg] whitespace-nowrap">
                      {day.month}
                    </span>
                  </div>
                )}

                {/* Day/Date Section */}
                <div
                  className={`dark:bg-[#292929] bg-[#E5E5E5] ${
                    day.month ? "w-16 sm:w-20" : "w-14 sm:w-16"
                  } flex flex-col items-center justify-center`}
                >
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      selectedDate === day.date 
                        ? "dark:text-[#F5F5F5] text-[#292929]" 
                        : "text-[#808080]"
                    }`}
                  >
                    {day.day}
                  </span>
                  <span
                    className={`text-sm sm:text-base font-semibold ${
                      selectedDate === day.date 
                        ? "dark:text-[#F5F5F5] text-[#292929]" 
                        : "text-[#808080]"
                    }`}
                  >
                    {day.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Date Header */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="dark:bg-[#D3F462] bg-[#313DDF] rounded-[8px] text-white dark:text-[#0B0809] text-xs sm:text-sm font-medium px-3 py-0.5">
          Day 1 27.01.2025
        </span>
        <div className="flex items-center gap-1">
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 14 14" 
            className="flex-shrink-0"
          >
            <path 
              className="dark:fill-[#D3F462] fill-[#313DDF]" 
              d="M7.2187 1.75C6.81308 1.75161 6.42454 1.91346 6.13772 2.20027C5.85091 2.48709 5.68906 2.87563 5.68745 3.28125C5.68745 4.12212 6.37782 4.8125 7.2187 4.8125C8.05957 4.8125 8.74995 4.12212 8.74995 3.28125C8.74995 2.44037 8.05957 1.75 7.2187 1.75ZM7.2187 2.625C7.5862 2.625 7.87495 2.91375 7.87495 3.28125C7.87495 3.64875 7.5862 3.9375 7.2187 3.9375C6.8512 3.9375 6.56245 3.64875 6.56245 3.28125C6.56245 2.91375 6.8512 2.625 7.2187 2.625ZM4.85357 4.59375C4.73952 4.58619 4.62498 4.59074 4.51189 4.60731C4.27426 4.64772 4.05202 4.75173 3.86876 4.90831C3.48639 5.23294 3.26414 5.74919 3.10314 6.50781C3.05239 6.75238 3.0677 7.00525 3.18539 7.20519C3.30351 7.40513 3.48814 7.52631 3.65045 7.60156C3.97682 7.75206 4.2962 7.78094 4.47076 7.82031L4.67595 6.97244C4.41257 6.91294 4.1422 6.86481 4.0197 6.80881C3.95801 6.7795 3.9497 6.76244 3.95101 6.76769C3.94448 6.74066 3.94448 6.71246 3.95101 6.68544C4.09101 6.02262 4.29445 5.70281 4.4432 5.57812C4.59195 5.45344 4.71489 5.43288 4.99007 5.49588L5.1817 4.63487C5.07374 4.61156 4.96394 4.5978 4.85357 4.59375ZM5.6192 4.73069L4.97651 7.65625C4.90476 7.98438 5.03995 8.34006 5.30464 8.54481L6.84945 9.74794L7.23226 12.25H8.12126L7.71089 9.61144C7.67756 9.38929 7.56008 9.18847 7.38276 9.05056L5.83795 7.84744L6.28901 5.81044L6.74007 5.93338L7.51926 6.68587C7.77257 6.93 8.15364 6.98775 8.47651 6.8495L9.18745 6.54938V12.25H10.0624V4.8125H9.18745V5.60569L8.13482 6.05631L7.3552 5.30469C7.24836 5.20029 7.11657 5.12498 6.97239 5.08594L5.6192 4.73069ZM5.04476 9.02344L4.67551 10.1307L3.5822 12.25H4.56657L5.45557 10.5411C5.47745 10.4983 5.4967 10.4488 5.51026 10.4042L5.7837 9.59787L5.04476 9.02344Z" 
            />
          </svg>
          <span className="rounded-[8px] dark:bg-[#0B0809] bg-[#FDFBF7] py-0.5 text-[#313DDF] dark:text-[#D3F462] text-xs sm:text-sm font-medium">
            3 Activities
          </span>
        </div>
      </div>
    </>
  );
};

export default ActivityCalendar;