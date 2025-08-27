import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const CardJob = ({ Data ,sign}) => {
  

    console.log(sign);

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-1  ${sign=="AllJobGridComponent"?"md:grid-cols-2":"lg:grid-cols-3"}  gap-8 max-w-full mx-auto mt-5`}>
        {Data.map((item, index) => (
          <div
            key={index}
            className="group relative p-6 mt-10 rounded-[10px] border border-gray-200 hover:border-[#2e55fa] shadow-[0_0px_15px_rgba(56,152,226,0.4)]  transition duration-300 bg-white cursor-pointer"
          >
            {/* --- Top section (Logo + Date + Badge) --- */}
            <div className="flex justify-between items-start">
              {/* Logo */}
              <div className="grid items-center">
               <div className="absolute -top-10 rounded-lg p-5 bg-white shadow-[0_0px_15px_rgba(56,152,226,0.4)] border border-gray-100 group-hover:border-[#2e55fa]  transition duration-300">
                <img
                  src={item.logo}
                  alt="company logo"
                  className="h-12 w-12 object-contain"
                />
               </div>
                <h1 className="text-[21px] font-bold text-gray-800 ml-25 -mt-3">{item.company}</h1>
              </div>

              <div className="flex flex-col items-end overflow-clip">
                {/* Date */}
                <p className="text-xs text-gray-500 mb-2">{item.date}</p>

                {/* Badge */}
                <span
                  className={`px-3 py-1 rounded-md text-xs font-semibold ${
                    item.type === "Fulltime"
                      ? "bg-purple-100 text-purple-600"
                      : item.type === "Freelancer"
                      ? "bg-blue-100 text-blue-600"
                      : item.type === "Temporary"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {item.type}
                </span>
              </div>
            </div>

            {/* --- Middle section (Title + Location + Website) --- */}
            <div className="mt-5">
              <h2 className="font-bold text-lg">{item.position}</h2>
              <p className="text-sm text-gray-600 mt-1">{item.location}</p>
              <a
                href={item.website}
                className="text-blue-500 text-sm hover:underline"
              >
                {item.website}
              </a>
            </div>

            {/* --- Bottom section (Salary + Browse Job) --- */}
            <div className="flex justify-between items-center mt-6">
              <p className="text-gray-700 font-semibold">
                <span className="text-blue-600 font-bold text-lg">
                  ${item.salary}
                </span>{" "}
                / {item.unit}
              </p>
              <Link
                to="/Job-Details"
                className="text-blue-500 font-semibold hover:underline"
              >
                Browse Job
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardJob;
