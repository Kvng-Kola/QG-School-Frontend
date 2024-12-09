import React from "react";
import "./BlogItem.css";
import { Link } from "react-router-dom";

export default function BlogItem({ image, title, paragraph, date, btn }) {
  return (
    <>
      <div className="w-[336px] mx-3 h-full">
        <div className="flex flex-col h-[475px] sm:max-w-[initial] sm:my-3 max-h-full rounded-2xl shadow-lg transition-all duration-300 ease-custom ">
          <div
            className={`bg-center bg-no-repeat bg-cover w-full h-full`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="blogItemContent">
            <h5 className="text-[14.4px] mb-4 font-bold font-poppins leading-[1.5]">
              {title}
            </h5>
            <div className="blogItemDescription">
              <p className="lg:text-[14.4px] text-[12.8px] mb-2 leading-[1.6] font-poppins">
                {paragraph}
              </p>
            </div>
            <div className="bottomContainer">
              <div className="text-[9.6px]">
                <p>{date}</p>
              </div>
              <div className="btnYellow">
                <Link>{btn}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
