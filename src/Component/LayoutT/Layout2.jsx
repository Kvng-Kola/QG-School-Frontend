import React from "react";
import { Link } from "react-router-dom";

export default function Layout2({
  image,
  title,
  desc,
  sdesc,
  tdesc,
  fdesc,
  btn,
  btn_path,
  reverse
}) {
  return (
    <>
      <div
        className={`${
          fdesc
            ? ""
            : "lg:m-[48px_0_0_0] lg:p-0 lg:border-none m-[16px_0_0_0] p-4 rounded-md border-[0.8px] border-[#CED4DA] border-solid"
        }`}
      >
        <div className="blockContent">
          <div className={`grid items-center ${reverse ? 'lg:grid-cols-[6fr_4fr]' : 'lg:grid-cols-[4fr_6fr]'} lg:gap-x-16 gap-y-10`}>
            <div className={`column1 lg:order-none order-1 ${reverse ? '!order-2' : ''}`}>
              <div className="">
                <img
                  src={image}
                  className="w-full rounded-[32px] object-cover min-w-[320px] lg:aspect-[100/92] aspect-[100/61]"
                  alt=""
                />
              </div>
            </div>
            <div className={`column2 ${reverse ? 'order-1' : ''}`}>
              <div className="mb-6 title">
                <h4 className="lg:text-left lg:text-[22px] m-0 text-center text-[18px] leading-[1.5] font-bold font-poppins">
                  {title}
                </h4>
              </div>
              <div className={`${fdesc ? 'mb-7' : 'description'}`}>
                <p className="leading-[1.6] mb-4">{desc}</p>
                <p className="leading-[1.6]">{sdesc}</p>
                {fdesc && (
                  <div className="">
                    <p className="leading-[1.6] mb-4 mt-4">{tdesc}</p>
                    <p className="leading-[1.6] ">{fdesc}</p>
                  </div>
                )}
              </div>
              {btn && (
                <div className="enroll-button flex items-center mt-2">
                  <Link to="/enroll">{btn}</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
