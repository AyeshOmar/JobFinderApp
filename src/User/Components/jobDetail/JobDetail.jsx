import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
const JobDetail = () => {


const SocialMedia=[
    {name:"Facebbok",  className:'bg-[#4d69B2] text-white rounded-[10px] px-5 py-1'},
    {name:"Twitter",  className:'bg-[#38B2E1] text-white rounded-[10px] px-5 py-1'},
    {name:"Linkedin",  className:'bg-[#38B2E1] text-white rounded-[10px] px-5 py-1'},
    {name:"Whatsapp",  className:'bg-[#2CA53B] text-white rounded-[10px] px-5 py-1'},
   
]


  return (
    <div className='mt-22 grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 mx-auto max-w-[1170px] p-8 '>
            
        
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
                     <div className='flex space-x-3 mt-5'>
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
                     
                       
                       
                       
                     </div>
                </div>



            </div>






        </div>









         {/*Right section*/}
        <div className=''>
            frevfve
        </div>





    </div>
  )
}

export default JobDetail
