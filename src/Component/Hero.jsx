import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

export default function Hero() {
  const imageSlider = [
    {
      imageUrl:
        "https://brightstarschools.org/files/_cache/330776035f2e38b248e85972ad34d677.jpeg",
      altText: "",
      title: "Learn with Us!",
      description:
        "Applications are now open for the 24-25 school year! Apply to enroll in our free, joyful, and supportive public schools today.",
      sDesc: "Students of all abilities in grades TK - 12 are welcome.",
      buttonText: "Learn more",
    },
    {
      imageUrl:
        "https://brightstarschools.org/files/_cache/ffe0b92da6eb56a4873f731bd5666026.png",
      altText: "",
      title: "Triple Degree Graduate!",
      description:
        "Read more about how Bright Star’s Elias C. graduated with his high school diploma from Stella High Charter Academy and two associates degrees in the same week!",
      buttonText: "Learn more",
    },
    {
      imageUrl:
        "https://brightstarschools.org/files/_cache/b5723ee3a41872f2b9d50248ebfe116a.png",
      altText: "",
      title: "Teach with Us!",
      description:
        "Shine BRIGHT here! We're hiring outstanding educators for the 24-25 school year. Apply today!",
      buttonText: "Learn more",
    },
    {
      imageUrl:
        "https://brightstarschools.org/files/_cache/4ea542a7be6e6cda09e3fdc2b452ac6e.png",
      altText: "",
      title: "20 Years Bright!",
      description:
        "Read more about our first 20 years of work in our 20th anniversary impact report.",
      buttonText: "Learn more",
    },
    {
      imageUrl:
        "https://brightstarschools.org/files/_cache/491b23df578d9cc371bb8ca9fd30cb5a.jpeg",
      altText: "",
      title: "Twenty Years!",
      description:
        "Bright Star supports 3,600+ students from kindergarten through higher education. We stand with our students for nearly 20 years.",
      buttonText: "Learn more",
    },
  ];
  const [currentIndex, setcurrentIndex] = useState(0);
  const prevSlide = () => {
    setcurrentIndex(
      (currentIndex - 1 + imageSlider.length) % imageSlider.length
    );
  };
  const nextSlide = () => {
    setcurrentIndex((currentIndex + 1) % imageSlider.length);
  };

  return (
    <>
      <div className="relative left-0 top-0 mx-auto m-[-86px]">
        <div className="lg:max-w-[1263px] max-w-[100%] w-full  relative left-0 top-0 flex items-center h-[416px]  lg:h-[698.4px] pt-[32px]">
          <div
            key={currentIndex}
            className="bg-center bg-no-repeat bg-cover overlay img-transit"
            style={{
              backgroundImage: `url(${imageSlider[currentIndex].imageUrl})`,
            }}
          ></div>
          <div className="overlay"></div>
          <div className="w-full lg:px-[68px] px-2">
            <div className="qg-container">
              <div className="lg:m-0 mx-auto my-0 relative max-w-[432px] lg:text-left text-center text-white z-50 font-secondary content-carousel">
                <h1
                  key={currentIndex}
                  className="lg:text-[57.6px] md:text-[45.6px] text-[44px]  text-white font-bold font-poppins leading-[1.4] mb-5 "
                >
                  {imageSlider[currentIndex].title}
                </h1>
                <div className="slider-desc mb-7 sm:text-sm text-xs">
                  <p key={currentIndex} className="mb-3">
                    {imageSlider[currentIndex].description}
                  </p>
                  <p >{imageSlider[currentIndex].sDesc}</p>
                </div>
                <div className="enroll-button slider-btn">
                  <Link
                    key={currentIndex}
                    to="/apply"
                    className="btn font-semibold "
                  >
                    {imageSlider[currentIndex].buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={prevSlide}
            className="absolute sm:top-[50%] top-[45%]  sm:left-5 left-2  -translate-x-0 translate-y-[-50%] z-50"
          >
            <Icon
              icon="guidance:right-arrow"
              style={{ color: "#deb408" }}
              className="lg:text-[50px] md:text-[45px] sm:text-[40px] text-[33px]  cursor-pointer"
            />
          </div>
          <div
            onClick={nextSlide}
            className="absolute sm:top-[50%] top-[45%] sm:right-5 right-2  -translate-x-0 translate-y-[-50%] z-50"
          >
            <Icon
              icon="guidance:left-arrow"
              style={{ color: "#deb408" }}
              className="lg:text-[50px] md:text-[45px] sm:text-[40px] text-[33px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <Banner/>
      
    </>
  );
}
