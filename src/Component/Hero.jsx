import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

export default function Hero() {
  const imageSlider = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/group-african-kids-learning-together_23-2148892523.jpg?t=st=1732901883~exp=1732905483~hmac=a596bc3949dc11dc13007f9b6325748e6bd5bda004d6e580d564060bff2dbbf2&w=900",
      altText: "",
      title: "Learn with Us!",
      description:
        "At Quantum Groove School, we believe that education should be an exciting journey of discovery and growth. Whether you’re a beginner or looking to expand your knowledge, we provide a dynamic, hands-on learning experience designed to inspire and empower. "
,
      buttonText: "Learn more",
    },
    {
      imageUrl:
        "https://img.freepik.com/premium-photo/optimistic-young-university-graduates-graduation_255667-9624.jpg?w=900",
      altText: "",
      title: "Triple Degree Graduate!",
      description:
        "At Quantum Groove School, we offer a transformative educational experience designed to take you further. Our unique Triple Degree program provides an unparalleled opportunity to earn three prestigious qualifications, all while gaining hands-on experience in a creative, forward-thinking environment.!",

      buttonText: "Learn more",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/college-students-different-ethnicities-cramming_23-2149891363.jpg?t=st=1732903360~exp=1732906960~hmac=f54e03777623c1859fa88be3cbf04fb104c1daf6f16210c7b9df7881f5ef3154&w=900",
      altText: "",
      title: "Teach with Us!",
      description:
        "Help us redefine education and be a part of the Quantum Groove community. Teach with us and inspire the future of learning.!",

      buttonText: "Learn more",
    },
    {
      imageUrl:
        "https://img.freepik.com/premium-photo/education-graduation-people-concept-group-happy-international-graduate-students-mortar-boards-bachelor-gowns-with-diplomas_255667-14236.jpg?w=900",
      altText: "",
      title: "20 Years Bright!",
      description:
        "Our rich history of academic achievement, combined with a forward-thinking approach, has made us a trusted institution for those seeking a transformative learning experience. As we look to the future, we remain committed to continuing our legacy of excellence and inspiring generations to come.",


      buttonText: "Learn more",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/three-young-afro-american-female-students-dressed-black-graduation-gown-women-posing-photo_1157-50436.jpg?t=st=1732904247~exp=1732907847~hmac=d881eacc6b95282623b0e031ead78134f1973946bc96065087077b34eb747107&w=900",
      altText: "",
      title: "Twenty Years!",
      description:
        "Join us in celebrating 20 years of success and discovery at Quantum Groove School—where the journey of learning is endless.",

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
