import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

export default function () {
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
                  About Bright Star
                </h3>
                <div className="text-[12px] font-[calibri] ">
                  <p>
                    Bright Star Schools is a free, public, open enrollment
                    charter school organization that operates nine schools
                    across Los Angeles.
                    <br />
                    <br />
                    Founded in 2003, we provide 3,600+ students in grades TK -
                    12 with holistic, inclusive support to achieve academic
                    excellence and grow their unique talents so that they find
                    joy and fulfillment in higher education, career, and life.
                  </p>
                </div>
              </div>
              <div className="column2">
                <h3 className="mb-4 text-[14.4px] lg:text-[17px] font-poppins font-bold">
                  Contact Us
                </h3>
                <div className="text-[12px] font-[calibri] ">
                  <p className="mb-4">
                    <strong>Mailing Address</strong> <br />
                    5101 Santa Monica Blvd Ste 8, <strong>PMB 93</strong> <br />
                    Los Angeles, CA 90029
                  </p>
                  <p className="mb-4">
                    <strong>Physical Address</strong> <br />
                    600 S. La Fayette Park Place <br />
                    Los Angeles, CA 90057
                  </p>
                  <p>
                    Phone: (323) 954-9957 <br />
                    Fax: (323) 978-2423
                  </p>
                </div>
              </div>
              <div className="column3">
                <h3 className="mb-4 text-[14.4px] lg:text-[17px] font-poppins font-bold">
                  Quick links
                </h3>
                <div className="text-[12px] font-[calibri] ">
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
