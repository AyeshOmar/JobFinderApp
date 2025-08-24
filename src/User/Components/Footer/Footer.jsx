import React from 'react'

const Footer = () => {
  const UsefulLinks = ["Find a Job","Companies","About Us","Testimonial","Post a Job"];
  const Categories = ["UI Designer","UX Designer","Grapic Designer","Web Developers","More"];
  const SocialMediaLinks = ["Linked In","Facebook","Instagram","Dribbble","Behance"];

  return (
    <div className='relative mt-20 w-full'>
      <div className='relative h-20 mb-20'>
        {/* Call to Action */}
            <div className='bg-[#2E55FA] md:flex md:items-center md:justify-between max-w-[1700px] mx-auto p-11 rounded-2xl'>
            <h1 className='text-white text-2xl md:text-4xl font-medium md:leading-[48px] max-w-[500px]'>
                Let's Get Connected And Start Finding Your Dream Job
            </h1>
            <button className='bg-white text-[20px] font-bold text-[#2E55FA] mt-5 px-5 py-1 md:px-15 md:py-3 rounded-[7px] cursor-pointer'>
                Click Here
            </button>
            </div>
      </div>
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-4 gap-6 w-full bg-[#2E55FA0D] p-15 pt-20">
          
          {/* First Div (Logo + Text) */}
          <div className="md:col-span-7 lg:col-span-1 ">
            <img src="./images/logo.jpg" alt="Logo Site" className="w-auto h-20 mb-5" />
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            </p>
          </div>

          {/* Second Div (Useful Links) */}
          <div className="md:col-span-3 lg:col-span-1">
            <h5 className="font-bold text-2xl text-[#142238]">Useful Links</h5>
            <ul>
              {UsefulLinks.map((item, index) => (
                <li key={index} className="text-[#444444] text-[20px]">{item}</li>
              ))}
            </ul>
          </div>

          {/* Third Div (Categories) */}
          <div className="md:col-span-5 lg:col-span-1">
            <h5 className="font-bold text-2xl text-[#142238]">Categories</h5>
            <ul>
              {Categories.map((item, index) => (
                <li key={index} className="text-[#444444] text-[20px]">{item}</li>
              ))}
            </ul>
          </div>

          {/* Fourth Div (Social Media Links) */}
          <div className="md:col-span-5 lg:col-span-1">
            <h5 className="font-bold text-2xl text-[#142238]">Social Media</h5>
            <ul>
              {SocialMediaLinks.map((item, index) => (
                <li key={index} className="text-[#444444] text-[20px]">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center p-5 bg-[#2E55FA0D] border-t-2 border-gray-200 text-[18px]'>
          <h4 className='text-[#666666]'>
            Copyright © 2025 <span className='text-[#2E55FA]'>OmarAyesh</span>. All rights reserved.
          </h4>
        </div>
      
    </div>
  )
}

export default Footer
