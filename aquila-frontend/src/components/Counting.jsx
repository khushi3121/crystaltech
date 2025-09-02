import React, { useEffect, useState } from "react";

const Counting = () => {
  const stats = [
    { number: 14, suffix: "+", label: "Years Experience" },
    { number: 700, suffix: "+", label: "Completed Projects" },
    { number: 500, suffix: "+", label: "Happy Clients" },
    { number: 20, suffix: "+", label: "Team Strength" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, idx) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const stepTime = 20;
      const step = Math.ceil(end / (duration / stepTime));

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = start;
          return newCounts;
        });
      }, stepTime);
    });
  }, []);

  return (
    <div className="w-full bg-[#172933] flex justify-center items-center py-16">
      {/* 2 rows × 3 cols grid */}
      <div className="grid grid-cols-3 grid-rows-2 w-[1200px] h-[538px] text-center relative">
        {/* 14+ */}
        <div className="flex flex-col justify-center items-center row-start-1 col-start-1 space-y-2">
          <span className="relative font-urbanist font-bold text-[64px] text-orange-500 leading-none w-[138px] h-[109px]">
            {/* Back layer (shadow) */}
            <span className="absolute left-[6px] top-[6px] text-gray-600">
              {counts[0]}+
            </span>
            {/* Front layer */}
            <span className="relative">{counts[0]}+</span>
          </span>
          <span className="text-white font-urbanist font-semibold text-[24px] leading-none w-[50vw] h-[29px]">
            Years Experience
          </span>
        </div>

        {/* 700+ */}
        <div className="flex flex-col justify-center items-center row-start-1 col-start-2 space-y-2">
          <span className="relative font-urbanist font-bold text-[64px] text-orange-500 leading-none w-[205px] h-[109px]">
            <span className="absolute left-[20px] top-[6px] text-gray-600">
              {counts[1]}+
            </span>
            <span className="relative">{counts[1]}+</span>
          </span>
          <span className="text-white font-urbanist font-semibold text-[24px] leading-none w-[50vw] h-[29px]">
            Completed Projects
          </span>
        </div>

        {/* 500+ */}
        <div className="flex flex-col justify-center items-center row-start-2 col-start-2 space-y-2">
          <span className="relative font-urbanist font-bold text-[64px] text-orange-500 leading-none w-[205px] h-[109px]">
            <span className="absolute left-[20px] top-[5px] text-gray-600">
              {counts[2]}+
            </span>
            <span className="relative">{counts[2]}+</span>
          </span>
          <span className="text-white font-urbanist font-semibold text-[24px] leading-none w-[186px] h-[29px]">
            Happy Clients
          </span>
        </div>

        {/* 20+ */}
        <div className="flex flex-col justify-center items-center row-start-2 col-start-3 space-y-2">
          <span className="relative font-urbanist font-bold text-[64px] text-orange-500 leading-none w-[157px] h-[109px]">
            <span className="absolute  top-[6px] text-gray-600">
              {counts[3]}+
            </span>
            <span className="relative">{counts[3]}+</span>
          </span>
          <span className="text-white font-urbanist font-semibold text-[24px] leading-none w-[186px] h-[29px]">
            Team Strength
          </span>
        </div>

        {/* White dividers */}
        <div className="absolute left-1/3 top-0 h-full w-[2px] bg-white"></div>
        <div className="absolute left-2/3 top-0 h-full w-[2px] bg-white"></div>
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white"></div>
      </div>
    </div>
  );
};

export default Counting;
