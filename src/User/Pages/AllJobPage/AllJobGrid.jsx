import React, { useState, useEffect } from "react";
import { FaSuitcase, FaAddressCard, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import CardJob from '../../Components/JobOffer/CardJob';
import MapLeaflet from "./MapLeaflet";
import Pagination from '@mui/material/Pagination';


const AllJobGrid = () => {

const [sign ,setSign] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const jobsPerPage = 6;

  
useEffect(() => {
  setSign("AllJobGridComponent");
}, []);

 


const jobData = [
  {
    company: "Google",
    location: "Centre Urbain Nord, Tunis, Tunisia",
    position: "Sr. Product Designer",
    date: "2 days ago",
    type: "Freelancer",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 700,
    unit: "Hour",
    logo: "./images/google.png",
    lat: 36.8431,
    lng: 10.2086, // Tunis (Centre Urbain Nord)
  },
  {
    company: "Microsoft",
    location: "Les Berges du Lac 1, Tunis, Tunisia",
    position: "Web Designer",
    date: "1 days ago",
    type: "Full Time",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 350,
    unit: "Hour",
    logo: "./images/microsoft.png",
    lat: 36.8356,
    lng: 10.2381, // Tunis (Lac 1)
  },
  {
    company: "Amazon",
    location: "Avenue Habib Bourguiba, Tunis, Tunisia",
    position: "IT Management",
    date: "2 days ago",
    type: "Temporary",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 400,
    unit: "Hour",
    logo: "./images/amazon.png",
    lat: 36.8008,
    lng: 10.1846, // Centre-ville Tunis
  },
  {
    company: "Github",
    location: "Monastir city center, Tunisia",
    position: "Sr. Product Designer",
    date: "2 days ago",
    type: "Full Time",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 820,
    unit: "Hour",
    logo: "./images/github.png",
    lat: 35.7770,
    lng: 10.8262, // Monastir centre
  },
  {
    company: "Dropbox",
    location: "Skanes, Monastir, Tunisia",
    position: "Web Designer",
    date: "1 days ago",
    type: "Full Time",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 560,
    unit: "Hour",
    logo: "./images/dropbox.png",
    lat: 35.7705,
    lng: 10.8002, // Skanes Monastir
  },
  {
    company: "Adobe",
    location: "Ksar Hellal, Monastir, Tunisia",
    position: "IT Management",
    date: "2 days ago",
    type: "Full Time",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 560,
    unit: "Hour",
    logo: "./images/adobe.png",
    lat: 35.6471,
    lng: 10.8906, // Ksar Hellal
  },
  {
    company: "Company",
    location: "Sousse Road, Monastir, Tunisia",
    position: "Senior Web Designer , Developer",
    date: "2 days ago",
    type: "Full Time",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 560,
    unit: "Hour",
    logo: "./images/company1.jpg",
    lat: 35.7643,
    lng: 10.8113, // Monastir near Sousse road
  },
  {
    company: "Business",
    location: "Monastir Airport area, Tunisia",
    position: "Senior Rolling Stock Technician",
    date: "2 days ago",
    type: "Full Time",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 560,
    unit: "Hour",
    logo: "./images/company2.jpg",
    lat: 35.7582,
    lng: 10.7540, // near Monastir airport
  },
  {
    company: "Arrow",
    location: "Tunis, Ariana, Tunisia",
    position: "Art Production Specialist",
    date: "2 days ago",
    type: "Full Time",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 560,
    unit: "Hour",
    logo: "./images/company3.jpg",
    lat: 36.8663,
    lng: 10.1647, // Ariana (près Tunis)
  },
  {
    company: "GameWork",
    location: "Sahline, Monastir, Tunisia",
    position: "IT Department Manager",
    date: "2 days ago",
    type: "Full Time",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    salary: 560,
    unit: "Hour",
    logo: "./images/company4.jpg",
    lat: 35.7292,
    lng: 10.7133, // Sahline (Monastir)
  }
];

// Découpage des jobs pour la page actuelle
  const indexOfLastJob = currentPage * jobsPerPage; //1*2 =2
  const indexOfFirstJob = indexOfLastJob - jobsPerPage; //2 - 2 = 0
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);//2

  const totalPages = Math.ceil(jobData.length / jobsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };






  return (
    <div>
     
      <div className="mt-17 grid grid-cols-1 md:grid-cols-10">
        

       {/* Left Side - Job Filters */}
         <div className="md:col-span-7 lg:col-span-5 p-8">

          {/* Title */}
          <div className="flex items-center border-b border-gray-200 pb-3">
            <FaSuitcase className="text-blue-600" />
            <h1 className="text-xl font-semibold ml-2">Find Jobs</h1>
          </div>



          {/* Form Grid */}
          <div className="grid lg:grid-cols-9 gap-5 mt-5">
            {/* Job Title */}
            <div className="lg:col-span-3">
              <p className="text-[#3c3c3c] mb-2">Job Title</p>
              <div className="flex items-center bg-[#f0f6fe] p-3 rounded-[10px]">
                <FaAddressCard className="text-blue-600 text-lg" />
                <input
                  className="ml-2 bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
                  type="text"
                  placeholder="Types of Jobs"
                />
              </div>
            </div>



            {/* Job Category */}
            <div className="lg:col-span-3 ">
              <p className="text-[#3c3c3c] mb-2">Job Category</p>
              <div className="flex items-center bg-[#f0f6fe] p-3 rounded-[10px]">
                <FaSuitcase className="text-blue-600 text-lg" />
                <select className="ml-2 bg-transparent outline-none w-full text-gray-700  cursor-pointer">
                  <option>Accounting and Finance</option>
                  <option>IT & Software</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>





            {/* Job Type */}
            <div className="lg:col-span-3">
              <p className="text-[#3c3c3c] mb-2">Job Type</p>
              <div className="flex items-center bg-[#f0f6fe] p-3 rounded-[10px]">
                <FaSuitcase className="text-blue-600 text-lg" />
                <select className="ml-2 bg-transparent outline-none w-full text-gray-700 cursor-pointer">
                  <option>Select Category</option>
                  <option>Fulltime</option>
                  <option>Freelancer</option>
                  <option>Temporary</option>
                </select>
              </div>
            </div>






            {/* Location */}
            <div className="lg:col-span-9">
              <p className="text-[#3c3c3c] mb-2">Location</p>
              <div className="flex items-center bg-[#f0f6fe] p-3 rounded-[10px]">
                <FaMapMarkerAlt className="text-blue-600 text-lg" />
                <input
                  className="ml-2 bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
                  type="text"
                  placeholder="Type Address"
                />
              </div>
            </div>





            {/* Salary */}
            <div className="lg:col-span-9">
              <p className="text-[#3c3c3c] mb-2">Salary</p>
              <div className="flex items-center bg-[#f0f6fe] p-3 rounded-[10px]">
                <FaDollarSign className="text-blue-600 text-lg" />
                <select className="ml-2 bg-transparent outline-none w-full text-gray-700 cursor-pointer">
                  <option>Salary</option>
                  <option>$1000 - $2000</option>
                  <option>$2000 - $3000</option>
                  <option>$3000 - $4000</option>
                </select>
              </div>
            </div>






            {/* Button */}
            <div className="lg:col-span-9">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                Search Job
              </button>
            </div>



          </div>





          <div>
              <CardJob Data={currentJobs} sign={sign} />
            
          </div> 
          <div className="flex justify-center mt-6">
              <Pagination
                count={totalPages}
                 page={currentPage}
                 onChange={handlePageChange}
                 color="primary"
               />
           </div>



        </div>








        
          <div className="md:col-span-3 lg:col-span-5 bg-gray-100">
            <div className="sticky top-0 h-screen">
              <MapLeaflet jobs={jobData} />
            </div>
         </div>



      </div>



    </div>
  )
}

export default AllJobGrid
