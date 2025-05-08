import React, { useEffect } from "react";
import tokyoImg from "../../assets/tokyo.png"; // Import your image here
import planeImg from "../../assets/plane.png"; // Import your image here
import { useAppContext } from "../../context/AppContext";

const UpcomingTrip = () => {
  const {destination, duration, travelers} = useAppContext();
   useEffect(() => {
    // Log the values to the console whenever they change
    console.log("Destination:", destination);
    console.log("Duration:", duration);
    console.log("Travelers:", travelers);
  }, [destination, duration, travelers]);
  return (
    <div className="sm:px-6 lg:px-8 flex md:gap-20 lg:flex-row flex-col  ">
      {/* Destination Card */}
      <div
        className="flex flex-col gap-20 sm:gap-45 bg-cover bg-center mb-6 rounded-lg shadow-md w-full max-w-3xl mx-auto"
        style={{ backgroundImage: `url(${tokyoImg})` }}
      >
        {/* Destination Header */}
        <div className="px-4 sm:px-6 pt-3 flex justify-between items-start">
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {destination}
            </h3>
            <p className="text-white text-sm sm:text-base mt-1">
              27.01.2025-02.02.2025
            </p>
          </div>
          <div className="mt-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-12 sm:h-12"
            >
              <path
                d="M14.2427 25.5563L25.5564 14.2426M25.5564 14.2426V22.7279M25.5564 14.2426H17.0711"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid px-2 sm:px-6 py-1 backdrop-blur-xs  grid-cols-3 gap-4 sm:gap-8 rounded-b-lg">
          <div className="text-center flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-9 sm:h-9"
            >
              <rect width="28" height="28" rx="14" fill="#292929" />
              <path
                d="M14 6C18.4184 6 22 9.5816 22 14C22 18.4184 18.4184 22 14 22C9.5816 22 6 18.4184 6 14C6 9.5816 9.5816 6 14 6ZM14 7.6C12.3026 7.6 10.6747 8.27428 9.47452 9.47452C8.27428 10.6747 7.6 12.3026 7.6 14C7.6 15.6974 8.27428 17.3253 9.47452 18.5255C10.6747 19.7257 12.3026 20.4 14 20.4C15.6974 20.4 17.3253 19.7257 18.5255 18.5255C19.7257 17.3253 20.4 15.6974 20.4 14C20.4 12.3026 19.7257 10.6747 18.5255 9.47452C17.3253 8.27428 15.6974 7.6 14 7.6ZM14 9.2C14.1959 9.20003 14.3851 9.27196 14.5315 9.40217C14.6779 9.53238 14.7715 9.7118 14.7944 9.9064L14.8 10V13.6688L16.9656 15.8344C17.1091 15.9784 17.1924 16.1715 17.1986 16.3747C17.2048 16.5779 17.1334 16.7758 16.999 16.9282C16.8646 17.0807 16.6772 17.1762 16.4748 17.1955C16.2725 17.2148 16.0704 17.1563 15.9096 17.032L15.8344 16.9656L13.4344 14.5656C13.3101 14.4412 13.2302 14.2792 13.2072 14.1048L13.2 14V10C13.2 9.78783 13.2843 9.58434 13.4343 9.43431C13.5843 9.28429 13.7878 9.2 14 9.2Z"
                fill="#D1F462"
              />
            </svg>
            <div className="flex flex-col">
              <p className="text-[12px] sm:text-base font-bold text-white">
                {duration} Days
              </p>
              <p className="text-[12px] sm:text-sm text-[#dfdede]">Duration</p>
            </div>
          </div>
          <div className="text-center flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-9 sm:h-9"
            >
              <rect width="28" height="28" rx="14" fill="#292929" />
              <path
                d="M5.90039 19.2793C6.05273 18.1367 6.63672 17.1211 7.5 16.4102C8.28711 15.75 9.30273 15.3438 10.3945 15.3438H11.5625H12.7051C13.8223 15.3438 14.8125 15.75 15.5996 16.4102C16.4629 17.1211 17.0469 18.1367 17.1992 19.2793C17.2246 19.4824 17.2246 19.6855 17.2246 19.8887C17.2246 20.2949 16.8945 20.625 16.4883 20.625H15.9805H7.11914H6.61133C6.20508 20.625 5.875 20.2949 5.875 19.8887C5.875 19.6855 5.875 19.4824 5.90039 19.2793ZM8.3125 10.875C8.3125 9.73242 8.92188 8.66602 9.9375 8.08203C10.9277 7.49805 12.1719 7.49805 13.1875 8.08203C14.1777 8.66602 14.8125 9.73242 14.8125 10.875C14.8125 12.043 14.1777 13.1094 13.1875 13.6934C12.1719 14.2773 10.9277 14.2773 9.9375 13.6934C8.92188 13.1094 8.3125 12.043 8.3125 10.875ZM13.5938 10.875C13.5938 10.1641 13.1875 9.50391 12.5781 9.12305C11.9434 8.76758 11.1562 8.76758 10.5469 9.12305C9.91211 9.50391 9.53125 10.1641 9.53125 10.875C9.53125 11.6113 9.91211 12.2715 10.5469 12.6523C11.1562 13.0078 11.9434 13.0078 12.5781 12.6523C13.1875 12.2715 13.5938 11.6113 13.5938 10.875ZM10.3945 16.5625C9.17578 16.5625 8.10938 17.2227 7.55078 18.1875C7.32227 18.5684 7.16992 18.9746 7.11914 19.4062H8.36328H14.7617H15.9805C15.9805 19.3555 15.9805 19.2793 15.9551 19.2031C15.8789 18.8477 15.752 18.5176 15.5488 18.1875C14.9902 17.2227 13.9238 16.5625 12.7051 16.5625H10.3945ZM21.3379 20.625H17.8594C17.9863 20.4219 18.0625 20.168 18.0625 19.8887C18.0625 18.2383 17.3008 16.7656 16.1328 15.7754C16.2344 15.7754 16.3359 15.75 16.4629 15.75H18.0117C20.2715 15.75 22.125 17.6035 22.125 19.8633C22.125 20.2949 21.7695 20.625 21.3379 20.625ZM16.8438 14.125C16.0566 14.125 15.3457 13.8203 14.8125 13.3125C15.3203 12.627 15.625 11.7891 15.625 10.875C15.625 10.2148 15.4473 9.55469 15.1426 8.99609C15.625 8.66602 16.209 8.4375 16.8438 8.4375C18.3926 8.4375 19.6875 9.73242 19.6875 11.2812C19.6875 12.8555 18.3926 14.125 16.8438 14.125Z"
                fill="#D1F462"
              />
            </svg>
            <div className="flex flex-col">
              <p className="text-[12px] sm:text-base font-bold text-white">
                4 (2M, 2F)
              </p>
              <p className="text-[12px] sm:text-sm text-[#dfdede]">
                Group Size
              </p>
            </div>
          </div>
          <div className="text-center flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-9 sm:h-9"
            >
              <rect width="28" height="28" rx="14" fill="#292929" />
              <path
                d="M17.75 8V12.5L16.25 11L14.75 12.5V8H11.75V20H19.25V8H17.75ZM7.25 10.25V8.75H8.75V8C8.75 7.60218 8.90804 7.22064 9.18934 6.93934C9.47064 6.65804 9.85218 6.5 10.25 6.5H19.25C20.0375 6.5 20.75 7.2125 20.75 8V20C20.75 20.7875 20.0375 21.5 19.25 21.5H10.25C9.4625 21.5 8.75 20.7875 8.75 20V19.25H7.25V17.75H8.75V14.75H7.25V13.25H8.75V10.25H7.25ZM8.75 8.75V10.25H10.25V8.75H8.75ZM8.75 19.25H10.25V17.75H8.75V19.25ZM8.75 14.75H10.25V13.25H8.75V14.75Z"
                fill="#D1F462"
              />
            </svg>
            <div className="flex flex-col">
              <p className="text-[12px] sm:text-base font-bold text-white">14</p>
              <p className="text-[12px] sm:text-sm text-[#dfdede]">
                Activities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Details */}

      <div
        className="bg-[#313DDF] lg:w-2xl relative rounded-lg px-2 py-2 overflow-hidden
               md:px-4 md:py-3 lg:px-6 lg:py-4"
      >
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3
              className="font-medium text-[16px] text-[#F5F5F5]
                    md:text-[18px] lg:text-[20px]"
            >
              Flight Details
            </h3>
            <a
              className="text-[#F5F5F5] text-[10px] underline font-medium
                  md:text-[12px] lg:text-[14px]"
            >
              See all
            </a>
          </div>
          <p
            className="text-[#cfcfcf] text-[14px] font-[400] mb-4
                md:text-[15px] lg:text-[16px]"
          >
            26.01.2025, 10:50 am
          </p>

          <div
            className="flex items-center space-x-2 mt-6 sm:mt-9 mb-[-8px]
                   md:space-x-4 md:mt-8 lg:space-x-6 lg:mt-10"
          >
            <div className="text-center">
              <p
                className="font-bold text-[16px] text-[#ffffff]
                    md:text-[18px] lg:text-[20px]"
              >
                DEL
              </p>
              <p
                className="text-[12px] text-[#d9d9d9] font-[400]
                    md:text-[14px] lg:text-[15px]"
              >
                Delhi, India
              </p>
            </div>

            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-6 md:h-5 lg:w-7 lg:h-6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.372 6.47003C18.5148 6.61066 18.5951 6.80128 18.5951 7.00003C18.5951 7.19878 18.5148 7.38941 18.372 7.53003L12.2682 13.53C12.1984 13.6037 12.1141 13.6628 12.0205 13.7038C11.927 13.7448 11.8259 13.7668 11.7235 13.7686C11.621 13.7704 11.5193 13.7519 11.4243 13.7142C11.3293 13.6764 11.243 13.6203 11.1705 13.5491C11.0981 13.4779 11.041 13.393 11.0026 13.2996C10.9642 13.2062 10.9454 13.1062 10.9472 13.0055C10.949 12.9048 10.9714 12.8055 11.0131 12.7135C11.0548 12.6215 11.1149 12.5387 11.1899 12.47L15.9915 7.75003H1.55614C1.35379 7.75003 1.15972 7.67101 1.01664 7.53036C0.873554 7.38971 0.793171 7.19894 0.793171 7.00003C0.793171 6.80112 0.873554 6.61035 1.01664 6.4697C1.15972 6.32905 1.35379 6.25003 1.55614 6.25003H15.9915L11.1899 1.53003C11.1149 1.46137 11.0548 1.37857 11.0131 1.28657C10.9714 1.19457 10.949 1.09526 10.9472 0.994554C10.9454 0.893851 10.9642 0.793822 11.0026 0.700434C11.041 0.607045 11.0981 0.522212 11.1705 0.450993C11.243 0.379774 11.3293 0.32363 11.4243 0.285909C11.5193 0.248188 11.621 0.229663 11.7235 0.23144C11.8259 0.233217 11.927 0.255258 12.0205 0.29625C12.1141 0.337242 12.1984 0.396344 12.2682 0.470031L18.372 6.47003Z"
                fill="white"
              />
            </svg>

            <div className="text-center">
              <p
                className="font-bold text-[16px] text-[#ffffff]
                    md:text-[18px] lg:text-[20px]"
              >
                NTR
              </p>
              <p
                className="text-[12px] text-[#d9d9d9] font-[400]
                    md:text-[14px] lg:text-[15px]"
              >
                Narita, Tokyo
              </p>
            </div>
          </div>
        </div>
        <img
          src={planeImg}
          alt="Airplane illustration"
          className="absolute lg:w-3xl sm:top-[-80px] rotate-x-20 rotate-y-160 left-30 top-[-40px]
              md:top-[-110px] md:left-60
              lg:top-[100px] lg:left-20"
        />
      </div>
    </div>
  );
};

export default UpcomingTrip;
