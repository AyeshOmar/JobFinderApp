import React from 'react';

const Categories = () => {
  const data = [
    { title: "UI/UX Design", description: "100+ Posted New Jobs" },
    { title: "Illustration", description: "200+ Posted New Jobs" },
    { title: "Cool Art", description: "150+ Posted New Jobs" },
    { title: "Web Design", description: "100+ Posted New Jobs" },
    { title: "Product Design", description: "110+ Posted New Jobs" },
    { title: "Developer", description: "250+ Posted New Jobs" },
    { title: "Animation", description: "150+ Posted New Jobs" },
    { title: "100+ More Category", description: "" },
  ];

  return (
    <div className="flex flex-col items-center max-w-6/7 mx-auto px-4 py-10 space-y-10">
      {/* Title Section */}
      <div className="text-center space-y-3">
        <p className="text-blue-700 font-semibold">Jobs Category</p>
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900">
          Choose Your Desire Category
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          There are many variations of passages available, but the majority have
          suffered alteration by injected humour, or look even slightly believable.
        </p>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
        {data.map((item, i) => (
          <div
            key={i}
            className={`group hover:scale-105 text-center shadow-md rounded-lg p-7 py-10 hover:shadow-xl transition duration-400 cursor-pointer
              ${item.title === "100+ More Category" 
                ? "bg-[#2e55fa] text-white" 
                : "bg-[#2E55FA1A] hover:bg-[#2e55fa]"}`
            }
          >
            <h2 className={`text-[25px] font-bold group-hover:text-white ${item.title=="100+ More Category" ? "text-white":"text-gray-800"}  `}>{item.title}</h2>
            {item.description && (
              <p className="text-sm text-gray-500 mt-1 group-hover:text-white">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
