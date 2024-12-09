import React from "react";
import { Link } from "react-router-dom";

export default function Layout({
  title,
  desc,
  author,
  btn,
  icon1,
  icon2,
  image,
  reversed,
  sdesc,
}) {
  return (
    <>
      <div className="relative ">
        <img
          src={icon1}
          alt=""
          className="absolute lg:left-[47px] left-[16px] top-0 opacity-40"
        />
        <div className="relative z-[2] md:px-14 px-2 py-[72px] ">
          <div className="qg-container">
            <div
              className={`grid lg:gap-8 gap-6 text-center lg:text-start lg:grid-cols-[4fr_6fr] ${reversed ? 'lg:grid-cols-[6fr_4fr]' : ''}`}
            >
              <div className={`column ${reversed ? 'order-2' : ''}`}>
                <div className="">
                  <img
                    src={image}
                    className="w-full rounded-[32px] object-cover min-w-[320px] lg:aspect-[100/92] aspect-[100/61]"
                    alt=""
                  />
                </div>
              </div>
              {/* Text Column */}
              <div className={`column ${reversed ? "order-1" : ""}`}>
                <div className={`tile ${reversed ? '' : 'lg:max-w-[450px]'} lg:m-[0_0_40px_auto] mb-[32px]`} >
                  <h4 className="lg:text-left lg:text-[22px] m-0 text-center text-[18px] leading-[1.5] font-bold font-poppins">
                    {title}
                  </h4>
                </div>
                <div className="desc lg:m-[0_0_40px_0] m-[0_0_32px_0] ">
                  <p className={`${reversed ? 'lg:m-[0_0_40px_0]' : 'lg:m-[0_0_40px_auto]'} lg:max-w-[450px] mb-3 lg:text-[22px] text-[16px] text lg:text-left  font-poppins leading-[1.5]`}>
                    {desc}
                  </p>
                  <p className="lg:m-[0_0_40px_auto] lg:max-w-[450px] mb-3 lg:text-[22px] text-[16px] text lg:text-left font-poppins leading-[1.5]">
                    {sdesc}
                  </p>
                  <p className={`${reversed ? 'lg:m-[0_0_0_0]' : 'lg:m-[0_0_0_auto]'} lg:max-w-[450px] lg:text-left text-[22px]  italic leading-[1.6] mb-5`}>
                    <span>
                      <span className="inline-block ml-3">-</span>
                      {author}
                    </span>
                  </p>
                </div>
                <div className={`${reversed ? 'lg:m-[0_0_0_0]' : 'lg:m-[0_0_0_auto]'} btn  lg:max-w-[450px] enroll-button slider-btn`}>
                  <Link
                    className={`btn font-semibold ${
                      reversed ? "!bg-primaryDark300 hover:!text-white" : ""
                    }`}
                  >
                    {btn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={icon2}
          alt=""
          className="absolute bottom-0 lg:right-[64px] right-4 opacity-40"
        />
      </div>
    </>
  );
}
