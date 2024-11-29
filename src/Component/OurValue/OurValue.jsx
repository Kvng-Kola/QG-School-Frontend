import React from "react";

export default function OurValue() {
  return (
    <>
      <div className="impact-bg">
        <img
          src="https://brightstarschools.org/images/content-area-plane-bg-img.svg"
          alt=""
          className="impact-F-icon"
        />
        <div className="contentArea-wrap py-10 px-7 relative z-[2]">
          <div className="container-qg">
            <div className="content-container">
              <div className="h3-div">
                <h3 className="lg:text-[38px] text-[calc(38px/1.25)] font-poppins font-bold text-center">
                  Our Values
                </h3>
              </div>
              <div className="pt-6">
                <div className="grid lg:grid-cols-4 gap-5 items-center justify-center">
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src="https://brightstarschools.org/images/icon-our-values-1.svg"
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                      <span>Integridad</span>
                    </h3>
                    <div className="text-[15px]">
                      <p className="">
                        means we need to be the best versions of ourselves
                      </p>
                    </div>
                  </div>
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src="https://brightstarschools.org/images/icon-our-values-2.svg"
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                      <span>Ubuntu</span>
                    </h3>
                    <div className="text-[15px]">
                      <p className="leading-[1.6]">
                        means our humanity is shared and we value kindness
                      </p>
                    </div>
                  </div>
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src="https://brightstarschools.org/images/icon-our-values-3.svg"
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                      <span>Kohyang</span>
                    </h3>
                    <div className="text-[14.6px]">
                      <p className="leading-[1.6]">
                        means hometown and encourages us to build meaningful
                        connections
                      </p>
                    </div>
                  </div>
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src="https://brightstarschools.org/images/icon-our-values-4.svg"
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                      <span>Growth</span> 
                    </h3>
                    <div className="text-[15px]">
                      <p className="leading-[1.6]">
                      means having a mindset that allows us to achieve excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://brightstarschools.org/images/content-area-plane-bg-img-2.svg"
          alt=""
          className="impact-r-icon"
        />
      </div>
    </>
  );
}
