import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";



const Banner = () => {
  return (
    <div className=" bg-blue-50 bg-[url('./images/background.png')] bg-cover bg-no-repeat bg-center flex items-center justify-center px-6 md:px-8 py-5 mt-25 overflow-hidden">
      
      {/* Grid layout for left and right sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full max-w-7xl items-center">
        
        {/* Left Content */}
        <div className="space-y-6 max-w-2xl z-20">
          <p className="text-blue-700 font-medium text-sm md:text-3xl mt-5">
            We Have 208,000+ Live Jobs
          </p>
          <h1 className="font-extrabold  text-4xl md:text-7xl text-pretty leading-tight text-gray-900">
            Your <span className="text-blue-800">Dream</span> Job Is <br /> Waiting For You
          </h1>
          <p className="text-blue-700 font-medium text-[14px] md:text-2xl">
            Type your keyword, then click search to find your perfect job.
          </p>

          {/* Search Box */}
          <div className="bg-white/95 p-4 grid grid-cols-1 md:grid-cols-3 gap-4 rounded shadow-lg w-full max-w-3xl">
            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-md bg-white">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Job Title, Keywords"
                className="w-full text-gray-700 outline-none"
              />
            </div>
            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-md bg-white">
              <FiMapPin className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="City or Postcode"
                className="w-full text-gray-700 outline-none"
              />
            </div>
            <button className="bg-[#2e55fa] hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md w-full">
              Find Job
            </button>
          </div>

          <p className="hidden md:block text-2xl text-gray-400 md:text-2xl">
            <span className="font-medium text-gray-800">Popular Searches :</span>{" "}
            Designer, Senior, Architecture, iOS, etc.
          </p>
        </div>

        {/* Right Image + Animated Circles */}
        <div className="relative flex justify-center items-center w-full h-full aspect-square">
          {/* Outer circle (responsive size & slow spin) */}
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border-[3px] border-dashed border-blue-300 rounded-full animate-spin slow">
           
          </div>
          
          {/* Inner circle (smaller & reverse) */}
          <div className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] border-2 border-dashed border-blue-400 rounded-full animate-spin reverse-slow"></div>

          {/* Person Image */}
          <img
            src="./images/person.png"
            alt="Professional"
            className="relative z-10 w-[70%] max-w-[280px] md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
