import React from "react";
import "./Impact.css";

export default function Impact() {
  return (
    <>
      <div className="impact-bg">
        <img src="https://brightstarschools.org/images/content-area-plane-bg-img.svg" alt="" className="impact-F-icon" />
        <div className="contentArea-wrap py-10 px-7 relative z-[2]">
          <div className="container-qg">
            <div className="content-container">
              <div className="h3-div">
                <h3 className="lg:text-[38px] text-[calc(38px/1.25)] font-poppins font-bold text-center">
                  Our Impact
                </h3>
              </div>
              <div className="pt-6">
                <div className="grid lg:grid-cols-4 gap-5 items-center justify-center">
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src="https://brightstarschools.org/files/galleries/icon-our-impact-schools.svg"
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                      <span>92</span>%
                    </h3>
                    <div className="">
                      <p className="text-[14px]">High School Graduation Rate (2023)</p>
                    </div>
                  </div>
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src="https://brightstarschools.org/images/icon-our-impact-2.svg"
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                      <span>100</span>%
                    </h3>
                    <div className="">
                      <p className="leading-[1.6] text-[14px]">
                        Bright Star Graduates Eligible for Cal State or UC
                        Admissions
                      </p>
                    </div>
                  </div>
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src="https://brightstarschools.org/images/icon-our-impact-3.svg"
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                      <span>88</span>%
                    </h3>
                    <div className="">
                      <p className="leading-[1.6] text-[14px]">
                        Matriculation to 2- and 4-Year Colleges and Universities
                        (2023)
                      </p>
                    </div>
                  </div>
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src="https://brightstarschools.org/images/icon-our-impact-4.svg"
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[20.4px] mb-4 font-bold ">
                      <span>1.7</span> Million
                    </h3>
                    <div className="">
                      <p className="leading-[1.6] text-[14px]">
                        Counseling Minutes Yearly to Support Students and
                        Families
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://brightstarschools.org/images/content-area-plane-bg-img-2.svg" alt="" className="impact-r-icon" />
      </div>
    </>
  );
}
