import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="">
        {/* main */}
        <div className="footer-main pt-6 pb-3 bg-grey5">
          <div className="qg-container">
            {/* footer-top */}
            <div className="footer-top mb-6">
              <div className="footer-top-wrap grid lg:grid-cols-[1fr_96px_1fr] gap-4 mb-4">
                {/* catch phrase */}
                <div className="phrase flex items-end lg:justify-start justify-center text-[12.8px] lg:text-[14.4px] font-bold font-poppins">
                  <div className="">
                    <p>Integridad. Ubuntu. Kohyang. Growth.</p>
                  </div>
                </div>
                {/* logo */}
                <div className="footer-logo lg:order-none -order-1 flex justify-center">
                  <Link>
                    <img
                      src="https://brightstarschools.org/images/brightstar-footer-logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                {/* social media links */}
                <div className="footer-social flex justify-center lg:justify-end items-end">
                  <div className="flex footer-media">
                    <Link>
                      <Icon
                        icon="ri:instagram-line"
                        style={{ color: "#a31334" }}
                      />
                    </Link>
                    <Link>
                      <Icon icon="gg:facebook" style={{ color: "#a31334" }} />
                    </Link>
                    <Link>
                      <Icon
                        icon="line-md:youtube"
                        style={{ color: "#a31334" }}
                      />
                    </Link>
                    <Link>
                      <Icon
                        icon="ri:linkedin-fill"
                        style={{ color: "#a31334" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* footer-bottom */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2 md:gap-y-10 font-[calibri]">
              <div className="column1">
                <h3 className="mb-4 text-[14.4px] lg:text-[17px] font-poppins font-bold">
                  About Qunatum groove
                </h3>
                <div className="[&_p]:text-[13.4px] font-[calibri] ">
                  <p>
                  “Quantum Groove School is a vibrant learning community dedicated to nurturing curiosity, creativity, and excellence.
                    <br />
                    <br />
                    Quantum Groove School was founded with the vision of creating a dynamic and inclusive educational environment that fosters creativity, critical thinking, and a love for learning.  Quantum Groove School has become known for its commitment to academic excellence, supportive faculty, and strong community values, preparing students to succeed both academically and in life.
                  </p>
                </div>
              </div>
              <div className="column2">
                <h3 className="mb-4 text-[14.4px] lg:text-[17px] font-poppins font-bold">
                  Contact Us
                </h3>
                <div className="[&_p]:text-[13.4px] font-[calibri] ">
                  <p className="mb-4">
                    <strong>Email Address</strong> <br />
                    <strong>kolawole015@gmail.com</strong> <br />
                    <strong>Adeosunadeyanju@gmail.com</strong>
            
                  </p>
                  <p className="mb-4">
                    <strong>Physical Address</strong> <br />
                    11 Adeshina street of <br />
                    shakin cresent
                  </p>
                  <p>
                    Phone:09014960362 <br /> 
                    phone 2:08068005663
                  </p>
                </div>
              </div>
              <div className="column3">
                <h3 className="mb-4 text-[14.4px] lg:text-[17px] font-poppins font-bold">
                  Quick links
                </h3>
                <div className="[&_a]:text-[13px] font-[calibri] ">
                  <p>
                    <Link className="font-bold">Board Meeting Agendas</Link>
                  </p>
                  <p>
                    <Link className="font-bold">Compliance Documents</Link>
                  </p>
                  <p>
                    <Link className="font-bold">Handbooks</Link>
                  </p>
                  <p>
                    <Link className="font-bold">Suicide Prevention Policy</Link>
                  </p>
                  <p>
                    <Link className="font-bold">
                      Title IX Policy (includes Bullying)
                    </Link>
                  </p>
                  <p>
                    <Link className="font-bold">Financial Information</Link>
                  </p>
                  <p>
                    <Link className="font-bold">Privacy Policy</Link>
                  </p>
                </div>
              </div>
              <div className="column4">
                <h3 className="mb-4 text-[14.4px] lg:text-[17px] font-poppins font-bold">
                  E-Newsletter
                </h3>
                <div className="text-[12px] font-[calibri] ">
                  <table className="grid m-0 gap-4 table-fixed w-full border-collapse">
                    <tbody className="grid lg:gap-4 gap-2">
                      <tr>
                        <td>
                          <div className="bg-white  w-full rounded-xl ">
                            <input
                              type="text"
                              placeholder="Name"
                              className="p-[10px] w-full h-full"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="bg-white  w-full rounded-xl ">
                            <input
                              type="text"
                              placeholder="Email"
                              className="p-[10px] w-full h-full"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <div className="text-right">
                            <button className="md:w-auto w-full !bg-primaryDark300 text-white font-semibold font-poppins transition ease-custom hover:!bg-white hover:text-primaryDark300 p-[8px_12px] rounded-[80px]">Sign Up</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
      </div>
    </>
  );
}
