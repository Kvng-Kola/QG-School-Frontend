import React from "react";
import "./Impact.css";

export default function Impact({grid3, image,image1,image2,image3,title, title1 , title2 , title3, desc , desc1 , desc2 , desc3, bigTitle}) {
  return (
    <>
      <div className="impact-bg">
        <img src="https://brightstarschools.org/images/content-area-plane-bg-img.svg" alt="" className="impact-F-icon" />
        <div className="contentArea-wrap py-10 px-7 relative z-[2]">
          <div className="container-qg">
            <div className="content-container">
              <div className="h3-div">
                <h3 className="lg:text-[38px] text-[calc(38px/1.25)] font-poppins font-bold text-center">
                  {bigTitle}
                </h3>
              </div>
              <div className="pt-6">
                <div className={`grid ${grid3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-5 items-center justify-center`}>
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src={image}
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                     {title}
                    </h3>
                    <div className="">
                      <p className="text-[14px] leading-5">{desc}</p>
                    </div>
                  </div>              
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src={image1}
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                     {title1}
                    </h3>
                    <div className="">
                      <p className="text-[14px] leading-6">{desc1}</p>
                    </div>
                  </div>              
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src={image2}
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                     {title2}
                    </h3>
                    <div className="">
                      <p className="text-[14px] leading-6">{desc2}</p>
                    </div>
                  </div>              
                  <div className="our-impact-item relative text-center font-poppins">
                    <div className="our-impact-icon mb-4 ">
                      <img
                        src={image3}
                        alt=""
                        className="max-h-24 max-w-24 block m-auto"
                      />
                    </div>
                    <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                     {title3}
                    </h3>
                    <div className="">
                      <p className="text-[14px] leading-6">{desc3}</p>
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
