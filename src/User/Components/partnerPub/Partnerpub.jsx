import React from "react";

const Partnerpub = () => {
  const logos = [
    "./images/part1.png",
    "./images/part2.png",
    "./images/part3.svg",
    "./images/part4.svg",
    "./images/part5.svg",
    "./images/part6.svg",
  ];

  return (
    <div className=" overflow-hidden py-8">
      <div className="whitespace-nowrap flex items-center space-x-12 animate-scroll">
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Logo ${i}`}
            className="h-12 opacity-30 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>

      {/* Animation inline */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Partnerpub;
