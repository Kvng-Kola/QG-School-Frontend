import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { BlogData } from "./BlogData";
import BlogItem from "./BlogItem";

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // number of items per page
  // Calculate the current items to display
  const currentItems = BlogData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );
  // function to go to the next set of blog items
  const nextItems = () => {
    if (currentIndex + itemsPerPage < BlogData.length) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    }
  };
  // function to go to the previous set of blog items
  const prevItems = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((prev) => prev - itemsPerPage);
    }
  };

  return (
    <>
      <div className="relative ">
        <div className="py-12 text-center">
          <h1 className="lg:text-[38px] sm:text-[25px] text-sm font-bold font-poppins">
            Latest News & Updates
          </h1>
        </div>
        <div className="px-9 pb-16">
          <div className="qg-container">
            <div className="">
              <div className="bloglist hidden">
                {currentItems.map((blog) => (
                  <BlogItem
                    key={blog.id}
                    id={blog.id}
                    image={blog.image}
                    title={blog.title}
                    paragraph={blog.paragraph}
                    date={blog.date}
                    btn={blog.btn}
                  />
                ))}
              </div>
              <div className="ul"></div>
            </div>
          </div>
        </div>
        <div
          onClick={nextItems}
          className="absolute top-[50%] left--10 -translate-x-0 translate-y-[-50%] z-50 px-3"
        >
          <Icon
              icon="guidance:right-arrow"
              style={{ color: "#deb408" }}
              className="lg:text-[50px] md:text-[45px] sm:text-[40px] text-[33px]  cursor-pointer"
            />
        </div>
        <div
          onClick={prevItems}
          className="absolute  top-[50%] right-5 -translate-x-0 translate-y-[-50%] z-50 px-3"
        >
          <Icon
              icon="guidance:left-arrow"
              style={{ color: "#deb408" }}
              className="lg:text-[50px] md:text-[45px] sm:text-[40px] text-[33px]  cursor-pointer"
            />
        </div>
      </div>
    </>
  );
}
