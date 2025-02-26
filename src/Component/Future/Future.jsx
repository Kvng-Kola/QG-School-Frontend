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
                At Quantum Groove School, we believe that your future is as limitless as your potential. With a foundation rooted in innovation, creativity, and a passion for learning, you are equipped to thrive in an ever-changing world. Here, we nurture not just academic excellence, but the skills and mindset needed to succeed in any path you choose. The future is bright, and with the knowledge and experiences you’ll gain at Quantum Groove, there’s no limit to what you can achieve.!
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
                      backgroundImage: `url('https://img.freepik.com/free-photo/young-student-sitting-university-library-break-from-studying_496169-1232.jpg?t=st=1733408245~exp=1733411845~hmac=04b0b112eb47911a58eee67f03ea0abed04f77416018329850480230d6d61e35&w=900')`,
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
                            Quantum Groove School is dedicated to fostering strong academic excellence.
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
                      backgroundImage: `url('https://i.pinimg.com/736x/06/db/b4/06dbb4c3991d98e63dd911fd83404df5.jpg')`,
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
                            At Quantum Groove School, our talented teachers are the cornerstone of our students’ success. 
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
                      backgroundImage: `url('https://img.freepik.com/premium-photo/african-american-teacher-explaining-new-topic-schoolboy-while-he-sitting-desk_622301-6799.jpg?w=900')`,
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
                            At Quantum Groove School, our dedicated counselors are committed to supporting each student’s personal and academic growth. 
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
                      backgroundImage: `url('https://img.freepik.com/premium-photo/portrait-smiling-african-american-schoolboy-wheelchair-working-desk-class_13339-350646.jpg?w=900')`,
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
                            “Quantum Groove School is committed to inclusive education, offering tailored support and resources to empower every learner to thrive and succeed.”
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
                      backgroundImage: `url('https://img.freepik.com/free-photo/college-students-different-ethnicities-cramming_23-2149891296.jpg?t=st=1733410128~exp=1733413728~hmac=c6942686953566f45a470eaf6d54cabc85f3c9f358725d7f56b09b9a62f6549c&w=900')`,
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
                            “Quantum Groove School offers rich life experiences that inspire growth, build character, and prepare students for a dynamic future.”
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
                      backgroundImage: `url('https://img.freepik.com/free-photo/study-group-african-people_23-2149156389.jpg?t=st=1733410542~exp=1733414142~hmac=ddea812c0fd4faffd537866d0b333196225f2e95c6f072c6c52a85a263b59da1&w=900')`,
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
                            “Quantum Groove School provides comprehensive support to ensure every student has access to higher education opportunities and the tools to succeed.”
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
