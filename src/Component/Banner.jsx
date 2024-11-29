import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div className="relative lg:top-0 top-24 pb-24 lg:pb-0">
        <div className="px-9">
          <div className="qg-container">
            <div className="navigationwrap grid lg:grid-cols-3 md:grid-cols-3 gap-5 justify-center items-center lg:px-16 lg:py-6 lg:shadow-lg bg-white lg:rounded-[68px] mb-6">
              <Link className="grid lg:grid-cols-[96px_1fr] lg:m-0 items-center justify-center gap-3 transition-all duration-300 ease-custom">
                <div className="icon flex ">
                  <img
                    className="max-w-[80px] lg:max-w-max "
                    src="https://brightstarschools.org/images/icon-enroll-with-us.svg"
                    alt=""
                  />
                </div>
                <div className="title">
                  <div className="block-content font-poppins leading-4">
                    <h4 className="lg:text-[25.6px] m-0 font-bold text-[16px] lg:block inline px-[0.15rem]">Enroll</h4>
                    <h5 className="lg:text-[19px] m-0 font-bold leading-[3] text-[16px] lg:block inline px-[0.15rem]">
                      With Us
                    </h5>
                  </div>
                </div>
              </Link>
              <Link className="grid lg:grid-cols-[96px_1fr] lg:m-0 items-center justify-center gap-3 transition-all duration-300 ease-custom">
                <div className="icon">
                  <img
                    className="max-w-[80px] lg:max-w-max"
                    src="https://brightstarschools.org/images/icon-enroll-with-us.svg"
                    alt=""
                  />
                </div>
                <div className="title">
                  <div className="block-content font-poppins leading-4">
                    <h4 className="lg:text-[25.6px] m-0 font-bold text-[16px] lg:block inline px-[0.15rem]">Teach</h4>
                    <h5 className="lg:text-[19px] m-0 font-bold leading-[3] text-[16px] lg:block inline px-[0.15rem]">
                      With Us
                    </h5>
                  </div>
                </div>
              </Link>
              <Link className="grid lg:grid-cols-[96px_1fr] lg:m-0 items-center justify-center gap-3 transition-all duration-300 ease-custom">
                <div className="icon">
                  <img
                    className="max-w-[80px] lg:max-w-max"
                    src="https://brightstarschools.org/images/icon-enroll-with-us.svg"
                    alt=""
                  />
                </div>
                <div className="title">
                  <div className="block-content font-poppins leading-4">
                    <h4 className="lg:text-[25.6px] text-[16px] lg:block inline px-[0.15rem] m-0 font-bold">Alumni</h4>
                    <h5 className="lg:text-[19px] text-[16px] lg:block inline px-[0.15rem]  m-0 font-bold leading-[3]">
                      & Beyond
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
