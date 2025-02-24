import React from "react";
import RealBanner from "../Component/RealBanner";
import Impact from "../Component/Impact/Impact";
import Layout2 from "../Component/LayoutT/Layout2";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function About() {
  return (
    <>
    <Header/>
      <RealBanner
        img={
          "https://brightstarschools.org/files/_cache/e07fc22858988e287293838ccfaf509b.jpeg"
        }
        title={"About Qunatum Groove Schools"}
      />
      {/* About Section */}
      <div className="area-wrapper lg:!py-16">
        <div className="qg-container">
          <div className="max-w-[770px] mx-auto">
            <div className="blockContent text-center font-poppins">
              <h4 className="lg:text-[25.6px] m-0 font-bold text-[16px] px-[0.15rem] mb-5">
                Who We Are
              </h4>
              <h5 className="lg:text-[19px] m-0 font-bold  text-[16px] lg:block inline px-[0.15rem]">
                In nine tuition-free charter public schools across Los Angeles,
                3,600+ Bright Star students experience rigorous academics,
                social-emotional support, and rich life opportunities beyond the
                classroom.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Impact
        image={
          "https://brightstarschools.org/files/galleries/icon-our-impact-schools-0001.svg"
        }
        title={"9"}
        desc={"Schools across Los Angeles"}
        image1={"https://brightstarschools.org/images/icon-our-impact-2.svg"}
        title1={"3,600+"}
        desc1={
          "Students learning in our schools, from transitional kindergarten through 12th grade"
        }
        image2={"https://brightstarschools.org/images/icon-our-impact-3.svg"}
        title2={"1,500+"}
        desc2={"Alumni currently being supported through higher education"}
        grid3={true}
      />
      <div className="area-wrapper ">
        <div className="qg-container">
          <Layout2
            image={
              "https://brightstarschools.org/files/_cache/b574f3fb4e3767885c9c57784ad9701a.jpeg"
            }
            title={"Inclusive, Holistic Support For All Students"}
            desc={
              "With inclusive support and a low student-to-counselor ratio for all Bright Star students in every grade, we work together with families to ensure all of our students succeed in our schools."
            }
            sdesc={
              "Students of all abilities and all backgrounds are welcome here. All students experience rigorous academics, holistic support, and rich life opportunities beyond the classroom."
            }
          />
        </div>
      </div>
      <div className="area-wrapper">
        <div className="qg-container">
          <Layout2
            image={
              "https://brightstarschools.org/files/_cache/551e6e6ab6dafb17445cdd87efd07064.jpg"
            }
            title={"20 Years of Support"}
            desc={
              "So that our alumni succeed in and graduate from higher education, we stand by their side. We provide up to six years of individualized higher education support to ensure they thrive and graduate."
            }
            sdesc={
              "All told, we stand with our students for nearly 20 years, from their first day of kindergarten to their graduation from higher education."
            }
            reverse={true}
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}
