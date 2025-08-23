import React from "react";
import Slider from "react-slick";
import { LuQuote } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselClient.css";

const CarouselClient = () => {
  const testimonials = [
    {
      name: "Makima Smith",
      title: "One Year With Us",
      text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
      image: "./images/makima.jpg",
    },
    {
      name: "Max Makina",
      title: "One Year With Us",
      text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
      image: "./images/max.png",
    },
    {
      name: "Andnew Smith",
      title: "One Year With Us",
      text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
      image: "./images/andnew.png",
    },{
      name: "Max Makina",
      title: "One Year With Us",
      text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
      image: "./images/max.png",
    },{
      name: "Makima Smith",
      title: "One Year With Us",
      text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
      image: "./images/makima.jpg",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center mt-11 w-full max-w-[1700px] mx-auto">
      
      <div className="text-center mb-8">
        <p className="text-blue-600 font-medium md:text-2xl">Clients Testimonials</p>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">
          What A Job Holder Says About Us
        </h1>
        <p className="text-gray-500 mt-2 max-w-3xl mx-auto md:text-[19px]">
          There are many variations of passages available, but the majority
          have suffered some form, by injected humour, or look even slightly
          believable.
        </p>
      </div>

      
      <Slider {...settings} className="w-full px-4 mx-auto overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3 mt-3">
            <div className="relative text-center bg-[#2E55FA0D] mt-16 rounded-[10px] p-6 pt-14 shadow-sm">
              <LuQuote className="text-blue-500 text-5xl rotate-180 mx-auto absolute top-8 left-9" />

              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[110px] h-[110px] flex items-center justify-center circle-rotate ">
                <div className="absolute w-full h-full rounded-full border-[3px] border-blue-500 circle-rotate"></div>
                <span className="absolute -top-2 w-3 h-3 bg-blue-500 rounded-full z-20 dot-pulse"></span>
                <span className="absolute -bottom-2 w-3 h-3 bg-blue-500 rounded-full z-20 dot-pulse"></span>
              </div>

              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="absolute -top-15 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] object-cover rounded-full border-9 border-white shadow-md z-10"
              />

              <h1 className="text-[18px] font-bold mt-5">{testimonial.name}</h1>
              <p className="text-blue-600 font-medium">{testimonial.title}</p>
              <p className="text-gray-500 text-sm mt-4">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselClient;
