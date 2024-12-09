import React from "react";

export default function RealBanner({ img, title, desc }) {
  return (
    <>
      <div className="relative">
        <div className="pageBannerWrap">
          {/* BannerImage */}
          <img
            src={img}
            alt=""
            className="lg:h-[356px] w-full h-[304px] object-cover"
          />
          {/* pageBannerContent */}
          <div className="pageBannerContent absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="h-full px-8 relative">
              <img
                src="https://brightstarschools.org/images/icon-stars-white-1.svg"
                alt=""
                className="absolute top-0 -left-16 opacity-0 lg:opacity-[1] mt-4"
              />
              <img
                src="https://brightstarschools.org/images/icon-stars-white-2.svg"
                alt=""
                className="absolute bottom-0 -right-16 opacity-0 lg:opacity-100"
              />
              <div className="qg-container relative h-full flex items-center">
                <div className="max-w-[504px] w-full m-[0_auto] lg:m-0 lg:text-left text-center">
                  <h1 className="lg:text-[44.8px] text-[35.84px] text-white leading-[1.2] mb-4 font-poppins font-bold">
                    {title}
                  </h1>
                  <p className="leading-[1.6] text-white">{desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
