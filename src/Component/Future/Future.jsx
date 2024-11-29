import React, { useState } from "react";
import "./Future.css";
import { Link } from "react-router-dom";

export default function Future() {
  const [isHovered1, setIshovered1] = useState(false);
  const [isHovered2, setIshovered2] = useState(false);
  const [isHovered3, setIshovered3] = useState(false);
  const [isHovered4, setIshovered4] = useState(false);
  const [isHovered5, setIshovered5] = useState(false);
  const [isHovered6, setIshovered6] = useState(false);
  return (
    <>
      <div className="lg:px-7 lg:py-10 py-12 pl-[19px]">
        <div className="qg-container">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="max-w-[730px]">
              <div className="">
                <h2 className="decorator text-[35.8px] font-bold font-poppins leading-[1.5] mb-6">
                  <span>Your Future is Bright!</span>
                </h2>
                <h5 className="lg:text-[19px] font-bold font-secondary leading-[1.5]">
                  In Bright Star’s free, public, and joyful schools, we provide
                  students with strong academics, holistic and inclusive
                  support, and rich life opportunities beyond the classroom so
                  they thrive in kindergarten through 12th grade … and far
                  beyond!
                </h5>
              </div>
            </div>
          </div>
          <div className="pt-12 ">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full gap-6 ">
              <div className="column">
                <div
                  className="image-card"
                  onMouseEnter={() => setIshovered1(true)}
                  onMouseLeave={() => setIshovered1(false)}
                >
                  <div
                    className="card-bg"
                    style={{
                      backgroundImage: `url('https://brightstarschools.org/files/_cache/6633a0b165ddca7d3de711ed83333b42.jpeg')`,
                    }}
                  ></div>
                  {isHovered1 ? (
                    <>
                      {/* hovered div  */}
                      <Link className="p-10 relative z-[3] ">
                        <div className="img-cardContent text-center relative">
                          <div className="img-cardHeader max-w-[245px] m-[0_auto] ">
                            <img
                              src="https://brightstarschools.org/files/galleries/Strong_academics-0001.svg"
                              alt=""
                              className="hover-card-icon"
                            />
                            <h5 className="lg:text-[19px] leading-[1.7] font-bold font-poppins text-white text-center mb-5">
                              Strong Academics
                            </h5>
                          </div>
                          <div className="px-3 mb-5">
                            <p className="text-[15px] leading-[1.5] font-bold font-poppins text-white text-center">
                              From their first day at a Bright Star school, our
                              students are prepared for success.
                            </p>
                          </div>
                          <div className="text-[16px] text-white font-semibold underline">
                            Learn More
                          </div>
                        </div>
                      </Link>
                      <div className="bg-overlay bg-overlay1"></div>
                    </>
                  ) : (
                    <>
                      <Link className="imageCard-wrap">
                        <div className="imgCard-content">
                          <img
                            src="https://brightstarschools.org/files/galleries/Strong_academics-0001.svg"
                            alt=""
                            className="card-icon"
                          />
                          <h5 className="lg:text-[19px] leading-[1.5] font-bold font-poppins text-white text-center">
                            Strong Academics
                          </h5>
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="column">
                <div
                  className="image-card"
                  onMouseEnter={() => setIshovered2(true)}
                  onMouseLeave={() => setIshovered2(false)}
                >
                  <div
                    className="card-bg"
                    style={{
                      backgroundImage: `url('https://brightstarschools.org/files/_cache/cf965c719de1f5ee579f6d8bcb1d387f.jpeg')`,
                    }}
                  ></div>
                  {isHovered2 ? (
                    <>
                      {/* hovered div  */}
                      <Link className="p-10 relative z-[3] ">
                        <div className="img-cardContent text-center relative">
                          <div className="img-cardHeader max-w-[245px] m-[0_auto] ">
                            <img
                              src="https://brightstarschools.org/files/galleries/Talented_teachers-0001.svg"
                              alt=""
                              className="hover-card-icon"
                            />
                            <h5 className="lg:text-[19px] font-bold font-poppins text-white text-center mb-5">
                              Talented Teachers
                            </h5>
                          </div>
                          <div className="px-3 mb-5">
                            <p className="text-[15px] leading-[1.5] font-bold font-poppins text-white text-center">
                              Our talented, dedicated teachers prioritize strong
                              relationships with our students.
                            </p>
                          </div>
                          <div className="text-[16px] text-white font-semibold underline">
                            Learn More
                          </div>
                        </div>
                      </Link>
                      <div className="bg-overlay bg-overlay2"></div>
                    </>
                  ) : (
                    <>
                      <Link className="imageCard-wrap">
                        <div className="imgCard-content">
                          <img
                            src="https://brightstarschools.org/files/galleries/Talented_teachers-0001.svg"
                            alt=""
                            className="card-icon"
                          />
                          <h5 className="lg:text-[19px] leading-[1.5] font-bold font-poppins text-white text-center">
                            Talented Teachers
                          </h5>
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="column">
                <div
                  className="image-card"
                  onMouseEnter={() => setIshovered3(true)}
                  onMouseLeave={() => setIshovered3(false)}
                >
                  <div
                    className="card-bg"
                    style={{
                      backgroundImage: `url('https://brightstarschools.org/files/_cache/43c2d42534009c728919ecf1cd3098dc.jpg')`,
                    }}
                  ></div>
                  {isHovered3 ? (
                    <>
                      {/* hovered div  */}
                      <Link className="p-10 relative z-[3] ">
                        <div className="img-cardContent text-center relative">
                          <div className="img-cardHeader max-w-[245px] m-[0_auto] ">
                            <img
                              src="https://brightstarschools.org/get/files/image/galleries/Holistic_support-0001.svg"
                              alt=""
                              className="hover-card-icon"
                            />
                            <h5 className="lg:text-[19px] leading-[1.7] font-bold font-poppins text-white text-center mb-5">
                              Dedicated Counselors
                            </h5>
                          </div>
                          <div className="px-3 mb-5">
                            <p className="text-[15px] leading-[1.6] font-bold font-poppins text-white text-center">
                              Every Bright Star student has a counselor who
                              knows them and their dreams.
                            </p>
                          </div>
                          <div className="text-[16px] text-white font-semibold underline">
                            Learn More
                          </div>
                        </div>
                      </Link>
                      <div className="bg-overlay bg-overlay3"></div>
                    </>
                  ) : (
                    <>
                      <Link className="imageCard-wrap">
                        <div className="imgCard-content">
                          <img
                            src="https://brightstarschools.org/get/files/image/galleries/Holistic_support-0001.svg"
                            alt=""
                            className="card-icon"
                          />
                          <h5 className="lg:text-[19px] leading-[1.5] font-bold font-poppins text-white text-center">
                            Dedicated Counselors
                          </h5>
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="column">
                <div
                  className="image-card"
                  onMouseEnter={() => setIshovered4(true)}
                  onMouseLeave={() => setIshovered4(false)}
                >
                  <div
                    className="card-bg"
                    style={{
                      backgroundImage: `url('	https://brightstarschools.org/files/_cache/8e840dcc15de626efb7a993b5ae1ded3.jpg')`,
                    }}
                  ></div>
                  {isHovered4 ? (
                    <>
                      {/* hovered div  */}
                      <Link className="p-10 relative z-[3] ">
                        <div className="img-cardContent text-center relative">
                          <div className="img-cardHeader max-w-[245px] m-[0_auto] ">
                            <img
                              src="https://brightstarschools.org/get/files/image/galleries/Inclusive_education-0001.svg"
                              alt=""
                              className="hover-card-icon"
                            />
                            <h5 className="lg:text-[19px] font-bold font-poppins text-white text-center mb-5">
                              Inclusive (Special) Education
                            </h5>
                          </div>
                          <div className="px-3 mb-5">
                            <p className="text-[14px] leading-[1.7] font-bold font-poppins text-white text-center">
                              All students of all abilities are welcome, and our
                              inclusive education program ensures they thrive.
                            </p>
                          </div>
                          <div className="text-[16px] text-white font-semibold underline">
                            Learn More
                          </div>
                        </div>
                      </Link>
                      <div className="bg-overlay bg-overlay2"></div>
                    </>
                  ) : (
                    <>
                      <Link className="imageCard-wrap">
                        <div className="imgCard-content">
                          <img
                            src="https://brightstarschools.org/get/files/image/galleries/Inclusive_education-0001.svg"
                            alt=""
                            className="card-icon"
                          />
                          <h5 className="lg:text-[19px] leading-[1.5] font-bold font-poppins text-white text-center">
                            Inclusive (Special) Education
                          </h5>
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="column">
                <div
                  className="image-card"
                  onMouseEnter={() => setIshovered5(true)}
                  onMouseLeave={() => setIshovered5(false)}
                >
                  <div
                    className="card-bg"
                    style={{
                      backgroundImage: `url('	https://brightstarschools.org/files/_cache/f915cdc4d3d922c880cc5716cadc7ea0.jpeg')`,
                    }}
                  ></div>
                  {isHovered5 ? (
                    <>
                      {/* hovered div  */}
                      <Link className="p-10 relative z-[3] ">
                        <div className="img-cardContent text-center relative">
                          <div className="img-cardHeader max-w-[245px] m-[0_auto] ">
                            <img
                              src="https://brightstarschools.org/get/files/image/galleries/Rich_life_experiences-0001.svg"
                              alt=""
                              className="hover-card-icon"
                            />
                            <h5 className="lg:text-[19px] leading-[1.7] font-bold font-poppins text-white text-center mb-5">
                              Rich Life Experiences
                            </h5>
                          </div>
                          <div className="px-3 mb-5">
                            <p className="text-[15px] leading-[1.6] font-bold font-poppins text-white text-center">
                              Through our “Life Experience Lessons” students
                              travel nationwide and see limitless possibilities
                              for their lives.
                            </p>
                          </div>
                          <div className="text-[16px] text-white font-semibold underline">
                            Learn More
                          </div>
                        </div>
                      </Link>
                      <div className="bg-overlay bg-overlay3"></div>
                    </>
                  ) : (
                    <>
                      <Link className="imageCard-wrap">
                        <div className="imgCard-content">
                          <img
                            src="https://brightstarschools.org/get/files/image/galleries/Rich_life_experiences-0001.svg"
                            alt=""
                            className="card-icon"
                          />
                          <h5 className="lg:text-[19px] leading-[1.5] font-bold font-poppins text-white text-center">
                            Rich Life Experiences
                          </h5>
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="column">
                <div
                  className="image-card"
                  onMouseEnter={() => setIshovered6(true)}
                  onMouseLeave={() => setIshovered6(false)}
                >
                  <div
                    className="card-bg"
                    style={{
                      backgroundImage: `url('https://brightstarschools.org/files/_cache/ae04e315e35c3de6c2f7a35f67ac9985.jpeg')`,
                    }}
                  ></div>
                  {isHovered6 ? (
                    <>
                      {/* hovered div  */}
                      <Link className="p-10 relative z-[3] ">
                        <div className="img-cardContent text-center relative">
                          <div className="img-cardHeader max-w-[245px] m-[0_auto] ">
                            <img
                              src="https://brightstarschools.org/get/files/image/galleries/Higher_education-0001.svg"
                              alt=""
                              className="hover-card-icon"
                            />
                            <h5 className="lg:text-[19px] leading-[1.7] font-bold font-poppins text-white text-center mb-5">
                              Higher Education Access & Support
                            </h5>
                          </div>
                          <div className="px-3 mb-5">
                            <p className="text-[14px] leading-[1.6] font-bold font-poppins text-white text-center">
                              We provide up to 6 years of support for our alumni
                              to succeed in higher education.
                            </p>
                          </div>
                          <div className="text-[16px] text-white font-semibold underline">
                            Learn More
                          </div>
                        </div>
                      </Link>
                      <div className="bg-overlay bg-overlay1"></div>
                    </>
                  ) : (
                    <>
                      <Link className="imageCard-wrap">
                        <div className="imgCard-content">
                          <img
                            src="	https://brightstarschools.org/get/files/image/galleries/Higher_education-0001.svg"
                            alt=""
                            className="card-icon"
                          />
                          <h5 className="lg:text-[19px] leading-[1.5] font-bold font-poppins text-white text-center">
                            Higher Education Access & Support
                          </h5>
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
