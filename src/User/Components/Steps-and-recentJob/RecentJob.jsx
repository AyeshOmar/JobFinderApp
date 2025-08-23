import React from 'react';

const RecentJob = () => {
  return (
    <div className="py-20 px-6 lg:px-28 relative overflow-hidden mt-15">
      <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">

        {/* LEFT TEXT CONTENT */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left space-y-6">
          <p className="text-[#2e55fa] font-semibold text-lg">Recent Job</p>
          <h1 className="text-4xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Over all 10,000+ Talented <br /> People Registered in <br /> Our Website
          </h1>
          <p className="text-gray-500 text-base">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button className="mt-4 bg-[#2e55fa] hover:bg-blue-800 text-white cursor-pointer px-6 py-3 rounded-lg font-semibold transition duration-300">
            Join Now
          </button>
        </div>

        {/* RIGHT IMAGE + SHAPE */}
        <div className="hidden w-full lg:w-1/2 lg:relative lg:flex justify-center">
          {/* Blue Shape Behind Image */}
          <div className="skew-x-6 absolute buttom-0 right-0 w-[90%] h-[80%] bg-[#2e55fa] rounded-l-[30px] rounded-bl-[300px] rounded-b-[50px] rounded-r-[300px] rotate-[-14deg] z-0 hidden lg:block"></div>

          {/* Person Image */}
          <img
             src='./images/man1RecentJob.png'
            alt="Talented person"
            className="relative z-10 w-[280px] md:w-[360px] lg:w-[520px]"
          />
        </div>

      </div>
    </div>
  );
};

export default RecentJob;
