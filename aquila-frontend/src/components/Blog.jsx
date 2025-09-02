import React from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.jpg";
import faceicon from "../assets/faceicon.jpg";

const blogs = [
  {
    id: 1,
    image: slide1,
    title: "The most Popular Business Of the Year",
    author: "Ranold Jeff.",
    date: "May 4th, 2022",
  },
  {
    id: 2,
    image: slide2,
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
      <h2
        className="text-center text-orange-400 font-urbanist font-bold mb-10 text-3xl sm:text-4xl"
        style={{
          lineHeight: "1.2",
        }}
      >
        Blog
      </h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="w-full max-w-[380px] bg-white rounded-lg shadow-lg shadow-orange-500 overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-orange-600"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-52 md:h-56 object-cover"
            />

            {/* Blog Details */}
            <div className="flex-1 flex flex-col justify-between px-4 py-3 text-black">
              <h3 className="font-urbanist font-bold text-lg sm:text-xl leading-snug">
                {blog.title}
              </h3>

              <div className="mt-4 flex items-center justify-between">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <img
                    src={faceicon}
                    alt={blog.author}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <span className="text-black font-urbanist font-medium text-sm sm:text-base">
                    {blog.author}
                  </span>
                </div>

                {/* Date */}
                <span className="text-gray-500 font-urbanist text-sm sm:text-base font-medium">
                  {blog.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
