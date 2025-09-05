import React from "react";
import blog1p from "../assets/blog1p.png";
import blog2p from "../assets/blog2p.png";
import slide3 from "../assets/slide3.jpg";
import faceicon from "../assets/faceicon.jpg";

const blogs = [
  {
    id: 1,
    image: blog1p,
    title: "The most Popular Business Of the Year",
    author: "Ranold Jeff.",
    date: "May 4th, 2022",
  },
  {
    id: 2,
    image: blog2p,
    title: "The most Popular Business Of the Year",
    author: "Ranold Jeff.",
    date: "May 4th, 2022",
  },
  {
    id: 3,
    image: slide3,
    title: "The most Popular Business Of the Year",
    author: "Ranold Jeff.",
    date: "May 4th, 2022",
  },
];

const Blog = () => {
  return (
    <div className="relative w-full px-4 bg-black py-10">
      {/* Blog Title */}
      <h2 className="text-center text-orange-400 font-urbanist font-bold mb-10 text-3xl sm:text-4xl">
        Blog
      </h2>

      {/* Blog Cards Container */}
      <div className="overflow-x-auto md:overflow-visible scrollbar-hide w-full">
        <div className="flex gap-6 md:gap-10 snap-x snap-mandatory md:snap-none justify-start md:justify-center">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="
                snap-center md:snap-none 
                flex-shrink-0 
                w-[350px] bg-white rounded-lg overflow-hidden flex flex-col
                transform transition duration-300
                border border-orange-400
                shadow-[0_5px_25px_rgba(255,69,0,0.5)] 
                hover:shadow-[0_10px_40px_rgba(255,69,0,0.9)] 
                hover:scale-105
              "
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-32 sm:h-40 md:h-48 object-cover"
              />

              {/* Blog Details */}
              <div className="flex-1 flex flex-col justify-between px-2 sm:px-4 py-3 text-black">
                <h3 className="font-urbanist font-bold text-sm sm:text-base md:text-lg leading-snug">
                  {blog.title}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    <img
                      src={faceicon}
                      alt={blog.author}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                    />
                    <span className="text-black font-urbanist font-medium text-xs sm:text-sm">
                      {blog.author}
                    </span>
                  </div>

                  {/* Date */}
                  <span className="text-gray-500 font-urbanist text-xs sm:text-sm font-medium">
                    {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
