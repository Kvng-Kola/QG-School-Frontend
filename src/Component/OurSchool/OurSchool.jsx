import React from "react";
import "./OurSchool.css";
import { Link } from "react-router-dom";

export default function OurSchool() {
  return (
    <>
      <div className="">
        <div className="px-8 py-14">
          <div className="container-qg">
            <div className="Area">
              <div className="max-w-[730px] lg:mx-auto ">
                <div className="blockContent text-center">
                  <h3 className="lg:text-[38.4px] font-bold font-poppins mb-4">
                    Our Schools
                  </h3>
                  <p className="font-poppins text-[14px] leading-5">
                  Quantum Grove School is a hub of learning, innovation, and growth, where students are encouraged to explore their full potential. Our school is committed to academic excellence, character development, and holistic education. With a dynamic curriculum, dedicated educators, and a nurturing environment, we foster creativity, critical thinking, and lifelong learning. At Quantum Grove School, we prepare students to become confident, responsible, and future-ready individuals who can thrive in an ever-evolving world.
                  </p>
                </div>
              </div>
              <div className="h-9"></div>
              <div className="w-full grid lg:grid-cols-3 gap-5 ">
                <div className="columns">
                  <div className="text-center font-secondary">
                    <p className="text-[15px]">
                      <strong>Canada</strong>
                    </p>
                  </div>
                  <div className="h-7"></div>
                  <div className="our-school-img-card">
                    <div className="img-card-wrap card-shadow card-hover">
                      <div className="h-full overflow-hidden imgcardHolder imgcardHolder-bg">
                        <Link>
                          <img
                            src="https://brightstarschools.org/files/_cache/3c9cc454c785febe79693b02d195b641.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex w-full p-[15px]">
                        <div className="tiltephone w-28 text-[12px] font-bold font-secondary">
                          <p>
                            <Link>
                              Quantum grove <br /> Academy
                            </Link>
                          </p>
                          <p>
                            <Link className="underline">(+1) 340-6700</Link>
                          </p>
                        </div>
                        <div className="flex items-center text-[13.5px] text-nowrap">
                          <p>
                            <strong>TK - 4</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="our-school-img-card">
                    <div className="img-card-wrap card-shadow card-hover">
                      <div className="h-full overflow-hidden imgcardHolder imgcardHolder-bg">
                        <Link>
                          <img
                            src="https://brightstarschools.org/files/_cache/443e252919359488df7493d855c51802.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex w-full p-[15px]">
                        <div className="tiltephone w-28 text-[12px] font-bold font-secondary">
                          <p>
                            <Link>
                                Quantum Grove <br /> High school
                            </Link>
                          </p>
                          <p>
                            <Link className="underline">(+1) 340-6700</Link>
                          </p>
                        </div>
                        <div className="flex items-center text-[13.5px] text-nowrap">
                          <p>
                            <strong>5 - 8</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="our-school-img-card">
                    <div className="img-card-wrap card-shadow card-hover">
                      <div className="h-full overflow-hidden imgcardHolder imgcardHolder-bg">
                        <Link>
                          <img
                            src="https://brightstarschools.org/files/_cache/50ef8bc5bf6a67acd25fed5a34874f6f.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex w-full p-[15px]">
                        <div className="tiltephone w-28 text-[12px] font-bold font-secondary">
                          <p>
                            <Link>
                              Qunatum Grove <br /> University
                            </Link>
                          </p>
                          <p>
                            <Link className="underline">(+1) 340-6700</Link>
                          </p>
                        </div>
                        <div className="flex items-center text-[13.5px] text-nowrap">
                          <p>
                            <strong>TK - 4</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="text-center font-secondary">
                    <p className="text-[15px]">
                      <strong>Singapore</strong>
                    </p>
                  </div>
                  <div className="h-7"></div>
                  <div className="our-school-img-card">
                    <div className="img-card-wrap card-shadow card-hover">
                      <div className="h-full overflow-hidden imgcardHolder imgcardHolder-bg-blue">
                        <Link>
                          <img
                            src="https://brightstarschools.org/files/_cache/6a510cf49bfb1d2040ef4e7f3091b528.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex w-full p-[15px]">
                        <div className="tiltephone w-28 text-[12px] font-bold font-secondary">
                          <p>
                            <Link>
                              Quantym Groove <br /> Kids Academy
                            </Link>
                          </p>
                          <p>
                            <Link className="underline">(+65) 340-6700</Link>
                          </p>
                        </div>
                        <div className="flex items-center text-[13.5px] text-nowrap">
                          <p>
                            <strong>TK - 4</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="our-school-img-card">
                    <div className="img-card-wrap card-shadow card-hover">
                      <div className="h-full overflow-hidden imgcardHolder imgcardHolder-bg-blue">
                        <Link>
                          <img
                            src="https://brightstarschools.org/files/_cache/80278ba2b5ad81eb5a241b66e869b27d.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex w-full p-[15px]">
                        <div className="tiltephone w-28 text-[12px] font-bold font-secondary">
                          <p>
                            <Link>
                          Qunatum Grove <br /> International School
                            </Link>
                          </p>
                          <p>
                            <Link className="underline">(+65) 340-6700</Link>
                          </p>
                        </div>
                        <div className="flex items-center text-[13.5px] text-nowrap">
                          <p>
                            <strong>5 - 8</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="our-school-img-card">
                    <div className="img-card-wrap card-shadow card-hover">
                      <div className="h-full overflow-hidden imgcardHolder imgcardHolder-bg-blue">
                        <Link>
                          <img
                            src="https://brightstarschools.org/files/_cache/19b9ac8960c9885dddd707bcf350227c.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex w-full p-[15px]">
                        <div className="tiltephone w-28 text-[12px] font-bold font-secondary">
                          <p>
                            <Link>
                              Quantum Grove<br /> Institute of Technology
                            </Link>
                          </p>
                          <p>
                            <Link className="underline">(+65) 340-6700</Link>
                          </p>
                        </div>
                        <div className="flex items-center text-[13.5px] text-nowrap">
                          <p>
                            <strong>TK - 4</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="text-center font-secondary">
                    <p className="text-[15px]">
                      <strong>Australia</strong>
                    </p>
                  </div>
                  <div className="h-7"></div>
                  <div className="our-school-img-card">
                    <div className="img-card-wrap card-shadow card-hover">
                      <div className="h-full overflow-hidden imgcardHolder imgcardHolder-bg-3">
                        <Link>
                          <img
                            src="https://brightstarschools.org/files/_cache/77010d45624c24fbc247fb8ce92f1f0d.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex w-full p-[15px]">
                        <div className="tiltephone w-28 text-[12px] font-bold font-secondary">
                          <p>
                            <Link>
                              Quantum Grove <br /> Foundation school
                            </Link>
                          </p>
                          <p>
                            <Link className="underline">(+61) 340-6700</Link>
                          </p>
                        </div>
                        <div className="flex items-center text-[13.5px] text-nowrap">
                          <p>
                            <strong>TK - 4</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="our-school-img-card">
                    <div className="img-card-wrap card-shadow card-hover">
                      <div className="h-full overflow-hidden imgcardHolder imgcardHolder-bg-3">
                        <Link>
                          <img
                            src="https://brightstarschools.org/files/_cache/05ce564cdbe8fbb2b1c32908fb10e071.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex w-full p-[15px]">
                        <div className="tiltephone w-28 text-[12px] font-bold font-secondary">
                          <p>
                            <Link>
                              Quantum Grove  <br /> College
                            </Link>
                          </p>
                          <p>
                            <Link className="underline">(+61) 340-6700</Link>
                          </p>
                        </div>
                        <div className="flex items-center text-[13.5px] text-nowrap">
                          <p>
                            <strong>5 - 8</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="our-school-img-card">
                    <div className="img-card-wrap card-shadow card-hover">
                      <div className="h-full overflow-hidden imgcardHolder imgcardHolder-bg-3">
                        <Link>
                          <img
                            src="https://brightstarschools.org/files/_cache/967f56a48a3a60d436613c50b91c06cb.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="flex w-full p-[15px]">
                        <div className="tiltephone w-28 text-[12px] font-bold font-secondary">
                          <p className="">
                            <Link>
                              Quantum Grove <br /> Global University
                            </Link>
                          </p>
                          <p>
                            <Link className="underline">(+61) 340-6700</Link>
                          </p>
                        </div>
                        <div className="flex items-center text-[13.5px] text-nowrap">
                          <p>
                            <strong>TK - 4</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
