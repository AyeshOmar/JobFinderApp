import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import { FaRegCalendarAlt, FaEye, FaUsers } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { PiGraduationCapBold } from "react-icons/pi";
import { IoMaleFemale } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import Map from '../MapLeaf/Map';
const JobDetail = () => {


const SocialMedia=[
    {name:"Facebbok",  className:'bg-[#4d69B2] text-white rounded-[10px] px-5 py-1 cursor-pointer'},
    {name:"Twitter",  className:'bg-[#38B2E1] text-white rounded-[10px] px-5 py-1 cursor-pointer'},
    {name:"Linkedin",  className:'bg-[#38B2E1] text-white rounded-[10px] px-5 py-1 cursor-pointer'},
    {name:"Whatsapp",  className:'bg-[#2CA53B] text-white rounded-[10px] px-5 py-1 cursor-pointer'},
   
]
const photos = [
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
    "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg",
    "https://images.pexels.com/photos/3184656/pexels-photo-3184656.jpeg",
    "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg",
  ];

  return (
    <div className='mt-22 grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 mx-auto max-w-[1170px] p-7 '>
            
        
        {/*left section*/}
        <div className=''>
            <div className='relative'>
                <img className='rounded-[18px]' src='./images/jobDetail1.jpg' alt='job-logo-image'/>
                <img className='  w-22 object-contain rounded-2xl absolute left-10 bottom-6  shadow' src='./images/company1.jpg' alt='job-logo-company'/>
                <div className='flex justify-end '><button className=' mt-5 bg-blue-500 text-white px-6 py-2 rounded-md'>Apply Now</button></div>
                
            </div>
            <div>
                <h2 className='font-bold text-[#17171D]'> Senior Web Designer , Developer <span className='text-[#2DB346]'>/ 1 days ago</span></h2>
                <div className='flex items-center mt-4'>
                    <FaMapMarkerAlt size={18} className='text-blue-500 mr-2'/>
                    <p className='text-[#3c3c3c]'>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                </div>
                <div className='flex items-center justify-between mt-4'>
                     <p className='text-[#17171D] font-medium'>$2000 - $2500 <span className='text-[#1c9632] font-medium'>/ Month</span></p>
                    <p className='text-[#3c3c3c] font-medium'>Application ends : <span className='text-[#ff0000] font-bold' >October 1, 2025</span></p>
                </div>

                
            </div>

            <div className='mt-10 '>
                <div>
                    <h1 className='font-bold text-[#17171D] text-[21px]'>Job Description :</h1>
                    <p className='text-[#3c3c3c] mt-5 '>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <p className='text-[#3c3c3c] mt-3 '> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                </div>

                <div className="mt-7">
                    <h1 className="font-bold text-[#17171D] text-[21px]">Requirements :</h1>
                    <ul className="text-[#3c3c3c] mt-5 space-y-4">
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                       <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                        Must be able to communicate with others to convey information effectively.
                        </li>
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                       <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                        Personally passionate and up to date with current trends and technologies, committed to quality and comfortable working with adult media.
                        </li>
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                        <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                        4 years relevant PHP dev experience.
                        </li>
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                        <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                        Bachelor or Master degree level educational background.
                        </li>
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                       <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                        Troubleshooting, testing and maintaining the core product software and databases.
                        </li>
                    </ul>
                </div>

                <div className="mt-7">
                    <h1 className="font-bold text-[#17171D] text-[21px]">Responsabilities :</h1>
                    <ul className="text-[#3c3c3c] mt-5 space-y-4">
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                       <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                       Establish and promote design guidelines, best practices and standards.
                        </li>
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                       <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                        Accurately estimate design tickets during planning sessions.
                        </li>
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                        <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                       Partnering with product and engineering to translate business and user goals into elegant and practical designs. that can deliver on key business and user metrics.
                        </li>
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                        <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                        Create wireframes, storyboards, user flows, process flows and site maps to communicate interaction and design.
                        </li>
                        <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                       <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                        Present and defend designs and key deliverables to peers and executive level stakeholders.
                        </li>
                          <li className="flex items-start text-[#3C3C3C] font-semibold text-[16px] font-serif">
                       <IoCheckmark className="text-blue-700 text-2xl mr-5 flex-shrink-0 min-w-[24px]" />
                        Execute all visual design stages from concept to final hand-off to engineering.
                        </li>
                    </ul>
                </div>

                <div className='mt-5'>
                    <h1 className='font-bold text-[#17171D] text-[21px] '>Share Profile </h1>
                     <div className='grid grid-cols-3 space-y-3 space-x-3 mt-5'>
                       {SocialMedia.map((x,indexedDB) => (
                        <button key={indexedDB} className={x.className}>
                         {x.name}
                        </button>
                         ))}    
                       
                       
                       
                     </div>
                </div>


                <div className='mt-5'>
                    <h1 className='font-bold text-[#17171D] text-[21px] '>Location </h1>
                     <div className='flex space-x-3 mt-5'>
                       <Map/>
                     </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 mt-8">
                    {/* Office Photos */}
                    <div className="flex-1">
                        <h2 className="font-semibold text-lg mb-4">Office Photos</h2>
                        <div className="grid grid-cols-3 gap-3">
                        {photos.map((src, i) => (
                            <img
                            key={i}
                            src={src}
                            alt={`office-${i}`}
                            className="w-full h-24 object-cover rounded-lg cursor-pointer hover:border-[#2e55fa] hover:shadow-[0_0px_15px_rgba(56,152,226,0.4)]  transition duration-300"
                            />
                        ))}
                        </div>
                    </div>

                    </div>





            </div>






        </div>









                {/*Right section*/}
                <div className="bg-white rounded-xl">
                    <h2 className="font-bold text-lg mb-5">Job Information</h2>

                    {/* Stats Boxes */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-gray-700">
                                <FaRegCalendarAlt className="text-blue-500" />
                                <span>Date Posted</span>
                            </div>
                            <span className="font-medium">April 22, 2023</span>
                        </div>

                        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-gray-700">
                                <FaEye className="text-blue-500" />
                                <span>Views</span>
                            </div>
                            <span className="font-medium">8160</span>
                        </div>

                        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-gray-700">
                                <FaUsers className="text-blue-500" />
                                <span>Applicants</span>
                            </div>
                            <span className="font-medium">6</span>
                        </div>
                    </div>

                    {/* Job Details */}
                    <div className="mt-15 space-y-5 text-[17px] text-gray-700">
                        <div>
                            <p className="font-semibold flex items-center gap-2">
                                <FaRegCalendarAlt className="text-blue-500" /> Date Posted
                            </p>
                            <p>April 22, 2023</p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-500" /> Location
                            </p>
                            <p>Munchen, Germany</p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2">
                                <MdWork className="text-blue-500" /> Job Title
                            </p>
                            <p>Web Developer</p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2">
                                <FaRegCalendarAlt className="text-blue-500" /> Experience
                            </p>
                            <p>3 Years</p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2">
                                <PiGraduationCapBold className="text-blue-500" /> Qualification
                            </p>
                            <p>Bachelor Degree</p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2">
                                <IoMaleFemale className="text-blue-500" /> Gender
                            </p>
                            <p>Both</p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2">
                                <FaDollarSign className="text-blue-500" /> Offered Salary
                            </p>
                            <p>$2000 – $2500 / Month</p>
                        </div>
                    </div>

                    {/* Job Skills */}
                    <div className="bg-white rounded-xl mt-7">
                        <h2 className="font-bold text-lg mb-5">Job Skills</h2>
                        <div className="flex flex-wrap gap-2">
                        {["Html","Python","WordPress","JavaScript","Figma","Angular","React js","Drupal","Joomla"].map((skill, i) => (
                            <span 
                            key={i} 
                            className="bg-[#F0F6FE] text-[#1967D2] px-5 py-2 rounded-[15px] text-sm font-medium hover:bg-[#1967D2] hover:text-[#F0F6FE] cursor-pointer"
                            >
                            {skill}
                            </span>
                        ))}
                        </div>
                    </div>

                    {/* Company Profile */}
                    <div className="relative mt-15 bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2e55fa] shadow-[0_0px_15px_rgba(56,152,226,0.4)]  transition duration-300 cursor-pointer">
                        {/* Company Logo */}
                        <div className="absolute -top-10 left-7 flex justify-center mb-4 border-gray-200 hover:border-[#2e55fa] shadow-[0_0px_15px_rgba(56,152,226,0.4)]  transition duration-300 rounded-[15px]">
                        <img src="./images/company1.jpg" alt="company-logo" className="w-20  object-cover rounded-[15px]"/>
                        </div>
                        <h2 className="text-center font-bold text-lg mt-10">Senior Web Designer , Developer</h2>
                       

                        {/* Info List */}
                        <div className="space-y-3 text-sm text-gray-700 mt-3">
                        <p><strong>Company:</strong>Software Development</p>
                        <p><strong>Phone:</strong> +291 560 56456</p>
                        <p><strong>Email:</strong> thewebmaxdemo@gmail.com</p>
                        <p><strong>Website:</strong> <a href="https://themeforest.net" className="text-blue-500 hover:underline">themeforest.net</a></p>
                        <p><strong>Address:</strong> 1363-1385 Sunset Blvd, Angeles, CA 90026, USA</p>
                        </div>

                        {/* Button */}
                        <div className="flex justify-center mt-5">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                            View Profile
                        </button>
                        </div>
                    </div>







                </div>





    </div>
  )
}

export default JobDetail
