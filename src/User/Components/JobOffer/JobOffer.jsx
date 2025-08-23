import React from 'react';
import CardJob from './CardJob';

const JobOffer = () => {
  const jobData = [
    {
      company: "Google",
      location: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      position: "Sr. Product Designer",
      date: "2 days ago",
      type: "Full Time",
      description: "It is a long established fact that a reader of a page when looking at its layout.",
      salary: 700,
      unit: "Hour",
      logo: "./images/google.png"
    },
    {
      company: "Microsoft",
      location: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      position: "Web Designer",
      date: "1 days ago",
      type: "Full Time",
      description: "It is a long established fact that a reader of a page when looking at its layout.",
      salary: 350,
      unit: "Hour",
      logo: "./images/microsoft.png"
    },
    {
      company: "Amazon",
      location: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      position: "IT Management",
      date: "2 days ago",
      type: "Full Time",
      description: "It is a long established fact that a reader of a page when looking at its layout.",
      salary: 400,
      unit: "Hour",
      logo: "./images/amazon.png"
    },
    {
      company: "Github",
      location: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      position: "Sr. Product Designer",
      date: "2 days ago",
      type: "Full Time",
      description: "It is a long established fact that a reader of a page when looking at its layout.",
      salary: 820,
      unit: "Hour",
      logo: "./images/github.png"
    },
    {
      company: "Dropbox",
      location: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      position: "Web Designer",
      date: "1 days ago",
      type: "Full Time",
      description: "It is a long established fact that a reader of a page when looking at its layout.",
      salary: 560,
      unit: "Hour",
      logo: "./images/dropbox.png"
    },
    {
      company: "Adobe",
      location: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      position: "IT Management",
      date: "2 days ago",
      type: "Full Time",
      description: "It is a long established fact that a reader of a page when looking at its layout.",
      salary: 560,
      unit: "Hour",
      logo: "./images/adobe.png"
    }
  ];

  return (
    <div className="flex flex-col max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0">
      
        <div className="sm:max-w-lg">
          <p className="text-blue-600 font-semibold text-lg sm:text-xl md:text-2xl">Latest Jobs</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-1">
            New Job Offer
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base">
            Browse jobs tailored to your skills, passion, and desired location.
          </p>
        </div>

        
        <div className="flex sm:justify-end">
          <button className="bg-[#2e55fa] text-white font-bold rounded-[8px] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg hover:bg-[#2045d9] transition-colors duration-300">
            Post a Job
          </button>
        </div>

      </div>

     
      <div className="mt-8 sm:mt-12">
        <CardJob Data={jobData} />

         <div className='flex justify-center mt-13'>
          <button className='bg-[#2e55fa] text-white font-bold px-10 py-3 rounded-[8px] cursor-pointer'>Load More</button>
        </div>



      </div>

     

    </div>
  );
};

export default JobOffer;
