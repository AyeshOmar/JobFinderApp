import React from 'react';
import { MdSearch } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiUserPlus, FiCheckCircle } from "react-icons/fi";
import RecentJob from './RecentJob';

const Steps = () => {
  return (
    <div className=" flex items-center flex-col mt-20  px-4 w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="text-[#2e55fa] text-[16px] font-bold">How It Work</p>
        <h1 className="font-extrabold text-5xl text-[#232323]">Follow Easy 4 Steps</h1>
        <p className="text-gray-500 text-[16px]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Steps Cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-max md:mx-10  lg:mx-20 mt-14">
        {/* Step 1 */}
        <div className="group flex flex-col items-center bg-white shadow-xl p-8 rounded-xl space-y-6 transition duration-600 ease-in-out hover:cursor-pointer hover:bg-blue-700 hover:shadow-2xl hover:scale-105">
          <div className="p-4 bg-blue-700 rounded-2xl transition duration-300 ease-in-out group-hover:bg-white">
            <MdSearch className="text-white text-5xl group-hover:text-blue-700" />
          </div>
          <h2 className="font-bold text-xl text-gray-800 group-hover:text-white">Search Jobs</h2>
          <p className="text-gray-500 text-center text-sm group-hover:text-white">
            The standard chunk of used below of those interested.
          </p>
        </div>

        {/* Step 2 */}
        <div className="group flex flex-col items-center bg-white shadow-xl p-8 rounded-xl space-y-4 transition duration-600 ease-in-out hover:cursor-pointer hover:bg-blue-700 hover:shadow-2xl hover:scale-105">
          <div className="p-4 bg-blue-700 rounded-2xl transition duration-300 ease-in-out group-hover:bg-white">
            <HiOutlineDocumentText className="text-white text-5xl group-hover:text-blue-700" />
          </div>
          <h2 className="font-bold text-xl text-gray-800 group-hover:text-white">Cv/Resume</h2>
          <p className="text-gray-500 text-center text-sm group-hover:text-white">
            The standard chunk of used below of those interested.
          </p>
        </div>

        {/* Step 3 */}
        <div className="group flex flex-col items-center bg-white shadow-xl p-8 rounded-xl space-y-4 transition duration-600 ease-in-out hover:cursor-pointer hover:bg-blue-700 hover:shadow-2xl hover:scale-105">
          <div className="p-4 bg-blue-700 rounded-2xl transition duration-300 ease-in-out group-hover:bg-white">
            <FiUserPlus className="text-white text-5xl group-hover:text-blue-700" />
          </div>
          <h2 className="font-bold text-xl text-gray-800 group-hover:text-white">Create Account</h2>
          <p className="text-gray-500 text-center text-sm group-hover:text-white">
            The standard chunk of used below of those interested.
          </p>
        </div>

        {/* Step 4 */}
        <div className="group flex flex-col items-center bg-white shadow-xl p-8 rounded-xl space-y-4 transition duration-600 ease-in-out hover:cursor-pointer hover:bg-blue-700 hover:shadow-2xl hover:scale-105">
          <div className="p-4 bg-blue-700 rounded-2xl transition duration-300 ease-in-out group-hover:bg-white">
            <FiCheckCircle className="text-white text-5xl group-hover:text-blue-700" />
          </div>
          <h2 className="font-bold text-xl text-gray-800 group-hover:text-white">Apply Them</h2>
          <p className="text-gray-500 text-center text-sm group-hover:text-white">
            The standard chunk of used below of those interested.
          </p>
        </div>
      </div>

      <RecentJob/>
    </div>
  );
};

export default Steps;
