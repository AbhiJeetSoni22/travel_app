
import TravelOptions from "./TravelOptions";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const TravelForm = () => {
  const navigate = useNavigate();
  const { destination, setDestination, duration, setDuration, travelers, setTravelers } = useAppContext();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if(!destination || !duration || !travelers || travelers.length === 0 || destination.length === 0 || duration.length === 0) {
      alert("Please fill in all fields.");
      return;
    }
    navigate('/dashboard')
    localStorage.setItem('travelToken',1234)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto ">
      {/* Destination Input */}
      <div className="space-y-4">
        {/* Destination Input */}
        <div className="pb-2 mb-2">
          <label className="block text-[18px] font-medium text-gray-700 dark:text-[#F5F5F5] mb-1">
            Where would you like to go?
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 pr-4 placeholder:dark:text-[#F5F5F5] py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-[#333333] dark:text-[#F5F5F5]"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.66666 10.1667C9.04737 10.1667 10.1667 9.04738 10.1667 7.66667C10.1667 6.28596 9.04737 5.16667 7.66666 5.16667C6.28594 5.16667 5.16666 6.28596 5.16666 7.66667C5.16666 9.04738 6.28594 10.1667 7.66666 10.1667Z"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dark:stroke-[#F5F5F5]"
                />
                <path
                  d="M7.66667 1C5.89856 1 4.20286 1.70238 2.95262 2.95262C1.70238 4.20286 1 5.89856 1 7.66667C1 9.24333 1.335 10.275 2.25 11.4167L7.66667 17.6667L13.0833 11.4167C13.9983 10.275 14.3333 9.24333 14.3333 7.66667C14.3333 5.89856 13.631 4.20286 12.3807 2.95262C11.1305 1.70238 9.43478 1 7.66667 1Z"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dark:stroke-[#F5F5F5]"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Duration Input */}
        <div>
          <label className="block text-[18px] font-medium text-gray-700 dark:text-[#F5F5F5] mb-1">
            How long will you stay?
          </label>
          <div className="relative">
            <input
              type="select"
              placeholder="Select Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full pl-10 placeholder:dark:text-[#F5F5F5] pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-[#333333] dark:text-[#F5F5F5]"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 3.33333H4.16667C3.24619 3.33333 2.5 4.07952 2.5 5V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V5C17.5 4.07952 16.7538 3.33333 15.8333 3.33333Z"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dark:stroke-[#F5F5F5]"
                />
                <path
                  d="M2.5 8.33333H17.5M6.66667 1.66667V5V1.66667ZM13.3333 1.66667V5V1.66667Z"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dark:stroke-[#F5F5F5]"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Travelers Chips */}
      <div>
        <label className="block text-[18px] font-medium text-gray-700 dark:text-[#F5F5F5] mb-2">
          Who are you traveling with?
        </label>
        <TravelOptions selected={travelers} onChange={setTravelers} />
      </div>

      {/* Continue Button (unchanged) */}
      <button
        type="submit"
        className="w-full mt-20 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
      >
        Continue
      </button>
    </form>
  );
};

export default TravelForm;