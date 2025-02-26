import React from "react";
import RealBanner from "../Component/RealBanner";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
export default function Contact() {
  return (
    <>
    <Header/>
      <RealBanner
        img={
          "https://brightstarschools.org/files/_cache/b005025ef31810a94d622681e49eeea7.png"
        }
        title={"Contact Us"}
      />
      <div className="area-wrapper">
        <div className="qg-container">
          <div className="mb-7">
            <h4 className="lg:text-[25.6px] font-bold text-[16px] px-[0.15rem] font-poppins">
              To connect with Bright Star staff members who can help address any
              related questions you may have, please contact us below.
            </h4>
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="column1">
              <div className="mb-7"></div>
              <div className="">
                <h5 className="lg:text-[19px] font-bold text-[16px] mb-5 font-poppins">
                  Way to Reach Us
                </h5>
                <p className="[&_a]:font-bold [&_a]:text-[#0470B9] [&_a]:text-[15px] mb-5 ">
                  <strong> For Enrollment:</strong>
                  {"  "}
                  <Link>enrollment@brightstarschools.org</Link> <br />
                  <strong> For Human Resources: </strong>
                  {"  "}
                  <Link>hrdepartment@brightstarschools.org</Link> <br />
                  <strong> For IT Support: </strong>
                  {"  "}
                  <Link>itsupport@brightstarschools.org</Link> <br />
                  <strong> For General Inquiries: </strong>
                  {"  "}
                  <Link>info@brightstarschools.org</Link>
                </p>
                <p className="mb-5">
                  Physical Address: 600 S La Fayette Park Pl, Los Angeles, CA
                  90057 Mailing Address: 5101 Santa Monica Blvd Ste 8, PMB 93,
                  Los Angeles, CA 90029
                </p>
                <p className="[&_a]:font-bold [&_a]:text-[#0470B9] [&_a]:text-[15px] mb-5">
                  <strong>Phone:</strong> <Link>09014960362</Link>
                </p>
                <p className="[&_a]:font-bold [&_a]:text-[#0470B9] [&_a]:text-[15px]">
                  <strong>Staff Directory:</strong> <Link>Here</Link>
                </p>
              </div>
            </div>
            <div className="column2"></div>
          </div>
          <div className="">
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
