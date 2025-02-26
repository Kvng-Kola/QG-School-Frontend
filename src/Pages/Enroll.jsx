import React from "react";
import RealBanner from "../Component/RealBanner";
import { Link } from "react-router-dom";
import TabNavs from "../Component/TabNavs";
import Layout from "../Component/LayoutT/Layout";
import Layout2 from "../Component/LayoutT/Layout2";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Enroll() {
  const enrollData = [
    {
      title: "Enroll with Us!",
      img: "https://brightstarschools.org/files/_cache/1d1f188433b602476563862d1f120ce9.jpg",
      desc: "We welcome students of all abilities in grades TK - 12 to enroll in our free, charter public schools!",
    },
  ];
  const links = [
    {
      Alinks: "Elementary Schools",
      Blinks: "Middle Schools",
      Clinks: "High Schools",
      Dlinks: "Special Education",
      Elinks: "Alumni Support",
    },
  ];
  const enroll = [
    {
      img: "https://brightstarschools.org/files/_cache/d4bec598099bc290987ffaaedbdb424b.jpg",
      title:
        "At Bright Star Schools, we believe that every child is capable of great things. We create safe and joyful school environments so our students thrive.",
      desc: "In our elementary schools, we prioritize positive relationships, a supportive and relevant academic program, and social-emotional learning. We accept all students of all abilities, and we provide individualized support (including English language support) so all students succeed.",
      sdesc:
        "Our teachers, counselors, and staff see the whole child, and together with families, we embrace and celebrate different cultures, experiences, and interests so that our students feel supported in every aspect of their lives.",
    },
  ];
  const process = [
    {
      Alink: "Application",
      Blink: "Lottery",
    },
  ];
  const Visit = [
    {
      image:
        "https://brightstarschools.org/files/_cache/caebbc3d3aaf8b76b94ec581f728f040.jpeg",
      title: "Visit a School",
      desc: "We have information sessions scheduled for each of our schools throughout the year, and we also offer parents and students opportunities to visit our campuses at their convenience. ",
      sdesc:
        "During your school visit, a school representative will meet with you and give you more information about the school and our enrollment process.",
      tdesc:
        "If you are unable to visit a school, you are also welcome to attend an information session.",
      fdesc:
        "To find out about an upcoming information session or school tour, please contact our enrollment team at enrollment@brightstarschools.org or call 323-954-9957 extension 1030. ",
      btn: "Contact Us",
    },
  ];
  return (
    <>
    <Header />
      <div className="relative">
        {enrollData.map((data) => (
          <RealBanner
            key={data.title}
            title={data.title}
            img={data.img}
            desc={data.desc}
          />
        ))}
        <div className="lg:absolute lg:z-10 lg:top-40 lg:w-full lg:p-6 lg:pt-16 lg:px-9 ">
          <div className="qg-container">
            <div className="lg:p-[24px_52px] max-w-[280px] m-[0_auto_24px_auto] grid grid-cols-1 lg:shadow-lg bg-white lg:rounded-[65px]">
              <Link to='/register' className="grid lg:grid-cols-[96px_1fr] lg:m-0 items-center justify-center gap-3 transition-all duration-300 ease-custom">
                <div className="icon flex ">
                  <img
                    className="max-w-[80px] lg:max-w-max "
                    src="https://brightstarschools.org/images/icon-enroll-with-us.svg"
                    alt=""
                  />
                </div>
                <div className="title">
                  <div className="block-content font-poppins leading-4">
                    <h4 className="lg:text-[25.6px] m-0 font-bold text-[16px] lg:block inline px-[0.15rem] leading-[1.7]">
                      Enroll
                      <br />
                      Today
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-8">
        <div className="area-wrapper">
          <div className="qg-container">
            <div className="max-w-[920px] mx-auto">
              <div className="blockContent text-center flex flex-col items-center justify-center">
                <p className="mb-5">
                  <strong>
                    <span
                      style={{ color: "#a30234" }}
                      className="text-[20px] font-secondary italic"
                    >
                      Applications are open for the 24-25 school year! <br />
                      <Link>Apply to enroll</Link> in our free, public,
                      supportive, and joyful schools today.
                    </span>
                  </strong>
                </p>
                <img
                  className="mb-5"
                  src="https://brightstarschools.org/get/files/image/galleries/Paper_airplane.jpeg?107x47"
                  alt=""
                />
                <p className="text-[16px] mb-5">
                  At Bright Star Schools, we provide holistic, inclusive support
                  for all students to achieve academic excellence and grow their
                  unique talents so that they find joy and fulfillment in higher
                  education, career, and life.
                </p>
                <p className="text-[16px]">
                  We support our students for nearly 20 years, from their first
                  day in kindergarten to their graduation from higher education.{" "}
                </p>
              </div>
            </div>
            <div className="py-7">
              <h4 className="lg:text-[25px] text-[calc(25px/1.25)] font-poppins font-bold text-center">
                Bright Star Community
              </h4>
            </div>
            {/* tabnavs */}
            <div className="">
              {links.map((links) => (
                <TabNavs
                  Alinks={links.Alinks}
                  Blinks={links.Blinks}
                  Clinks={links.Clinks}
                  Dlinks={links.Dlinks}
                  Elinks={links.Elinks}
                  key={links.Alinks}
                />
              ))}
            </div>
            <div className="">
              {enroll.map((data) => (
                <Layout2
                  image={data.img}
                  title={data.title}
                  desc={data.desc}
                  sdesc={data.sdesc}
                  key={data.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="area px-8 py-14">
          <div className="qg-container">
            <div className="text-center">
              <h4 className="lg:text-[25.5px] text-[20.4px] mb-4 font-bold font-poppins">
                Enrollment Process
              </h4>
            </div>
            <div className="max-w-[920px] mx-auto">
              <p className="text-center">
                In 9 schools across Los Angeles, we provide students and
                families with a seamless, high-quality education from
                transitional kindergarten through 12th grade. We welcome
                students of all abilities and backgrounds to apply to our
                tuition-free, joyful, and supportive schools.
              </p>
            </div>
            <div className="pt-10">
              {process.map((data) => (
                <TabNavs
                  key={data.Alink}
                  Alinks={data.Alink}
                  Blinks={data.Blink}
                  process={true}
                />
              ))}
            </div>
            <div className="lg:m-[48px_0_0_0] lg:p-0 lg:border-none m-[16px_0_0_0] p-16 rounded-md border-[0.8px] border-[#CED4DA] border-solid">
              <div className="text-center">
                <p>
                  <strong>
                    We’re thrilled you’d like your student to join the Bright
                    Star family! <br />
                    It is free to apply and to attend our schools. Here are the
                    ways to apply:
                  </strong>
                </p>
                <div className="pt-6">
                  <div className="grid lg:grid-cols-3 gap-5 items-center justify-center">
                    <div className="our-impact-item relative text-center font-poppins">
                      <div className="our-impact-icon mb-4 ">
                        <img
                          src="https://brightstarschools.org/images/icon-online.svg"
                          alt=""
                          className="max-h-24 max-w-24 block m-auto"
                        />
                      </div>
                      <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                        <span>Online</span>
                      </h3>
                      <div className="">
                        <p className="text-[14px] mb-5 leading-[1.8]">
                          Simply submit an online application form.
                        </p>
                        <p>
                          <Link
                            className="underline font-medium"
                            style={{ color: "#af282c" }}
                          >
                            Click here
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="our-impact-item relative text-center font-poppins">
                      <div className="our-impact-icon mb-4 ">
                        <img
                          src="https://brightstarschools.org/images/icon-in-person.svg"
                          alt=""
                          className="max-h-24 max-w-24 block m-auto"
                        />
                      </div>
                      <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                        <span>In Person</span>
                      </h3>
                      <div className="">
                        <p className="leading-[1.8] text-[14px]">
                          Stop by one of our campuses' main offices to pick up
                          an application form. (Due to COVID-19, please contact
                          the school first for an appointment before visiting if
                          at all possible).
                        </p>
                      </div>
                    </div>
                    <div className="our-impact-item relative text-center font-poppins">
                      <div className="our-impact-icon mb-4 ">
                        <img
                          src="https://brightstarschools.org/images/icon-phone-email.svg"
                          alt=""
                          className="max-h-24 max-w-24 block m-auto"
                        />
                      </div>
                      <h3 className="lg:text-[25.5px] text-[calc(25.5px/1.25)] mb-4 font-bold ">
                        <span>88</span>%
                      </h3>
                      <div className="">
                        <p className="leading-[1.8] text-[14px]">
                          Contact our enrollment team at (323) 954-9957
                          extension 1030 or via email at
                          enrollment@brightstarschools.org to start an
                          application or for help with your application.
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
      <div className="bg-white">
        <div className="lg:py-16 lg:px-9 sm:py-7 sm:px-4 px-3 py-6">
          <div className="qg-container">
            {Visit.map((data) => (
              <Layout2
                image={data.image}
                title={data.title}
                desc={data.desc}
                sdesc={data.sdesc}
                fdesc={data.fdesc}
                tdesc={data.tdesc}
                btn={data.btn}
                key={data.title}
              />
            ))}
          </div>
        </div>
      </div>
      {/* FAQ SECTION */}
      <div className="lg:py-16 lg:px-9 sm:py-7 sm:px-4 px-3 py-6">
        <div className="qg-container">
          <div className="pb-8">
            <h4 className="lg:text-[25px] text-[calc(25px/1.25)] font-poppins font-bold text-center">
              Frequently Asked Questions
            </h4>
          </div>
          <div className="mb-2 bg-grey5 rounded-[20.8px] transition-all ease-custom">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton as="div">
                    <div className="p-[13px_43.2px_13px_24px] relative cursor-pointer group">
                      <Icon
                        icon="weui:arrow-filled"
                        className={`${
                          open ? "rotate-90 w-9 h-9" : "w-9 h-9"
                        } "w-9 h-9 text-[#3983d1] absolute top-[10%] right-[9.6px] " `}
                      />
                      <h6 className="lg:text-[14.4px] text-[12.8px] font-bold font-poppins leading-[1.6]">
                        What is a quantum groove School?
                      </h6>
                    </div>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel>
                        <motion.div
                          initial={{ y: "50px" }} // Initial position
                          animate={{ y: "0px" }}
                          exit={{
                            y: 0,
                            duration: 1,
                            scaleX: 0,
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="block-content p-[24px_32px_4px]"
                        >
                          <p className="mb-6 leading-[1.6] ">
                            Charter public schools are tuition-free public
                            schools and enrollment is open to all students.
                            Charter public schools are independently operated
                            schools that run with more flexibility than
                            traditional public schools in exchange for increased
                            accountability.
                          </p>
                          <p className="mb-6 leading-[1.6] ">
                            Like all public schools, charter schools are:
                          </p>
                          <ul className="mb-6 *:mb-2 *:pr-3 *:text-sm *:relative *:before:content-['\25CF'] *:before:mr-2">
                            <li>
                              Tuition-free and part of the free public school
                              system
                            </li>
                            <li>
                              For all students, and students of all abilities
                              and backgrounds are welcome
                            </li>
                            <li>
                              Funded primarily through federal, state and local
                              tax dollars
                            </li>
                            <li>
                              Held to state and federal academic standards
                            </li>
                          </ul>
                          <div className="h-6 spacer"></div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-2 bg-grey5 rounded-[20.8px] transition-all ease-custom">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton as="div">
                    <div className="p-[13px_43.2px_13px_24px] relative cursor-pointer group">
                      <Icon
                        icon="weui:arrow-filled"
                        className={`${
                          open ? "rotate-90 w-9 h-9" : "w-9 h-9"
                        } "w-9 h-9 text-[#3983d1] absolute top-[10%] right-[9.6px] " `}
                      />
                      <h6 className="lg:text-[14.4px] text-[12.8px] font-bold font-poppins leading-[1.6]">
                        Are Bright Star’s charter schools public schools? Do
                        they cost money to attend?
                      </h6>
                    </div>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel>
                        <motion.div
                          initial={{ y: "50px" }} // Initial position
                          animate={{ y: "0px" }}
                          exit={{
                            y: 0,
                            duration: 1,
                            scaleX: 0,
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="block-content p-[24px_32px_4px]"
                        >
                          <p className="mb-6 leading-[1.6] ">
                            All of Bright Star’s schools are public schools.
                            They are 100% tuition free and open to all students.
                          </p>
                          <div className="h-3 spacer"></div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-2 bg-grey5 rounded-[20.8px] transition-all ease-custom">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton as="div">
                    <div className="p-[13px_43.2px_13px_24px] relative cursor-pointer group">
                      <Icon
                        icon="weui:arrow-filled"
                        className={`${
                          open ? "rotate-90 w-9 h-9" : "w-9 h-9"
                        } "w-9 h-9 text-[#3983d1] absolute top-[10%] right-[9.6px] " `}
                      />
                      <h6 className="lg:text-[14.4px] text-[12.8px] font-bold font-poppins leading-[1.6]">
                        Are there admissions requirements to attend a Bright
                        Star School?
                      </h6>
                    </div>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel>
                        <motion.div
                          initial={{ y: "50px" }} // Initial position
                          animate={{ y: "0px" }}
                          exit={{
                            y: 0,
                            duration: 1,
                            scaleX: 0,
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="block-content p-[24px_32px_4px]"
                        >
                          <p className="mb-6 leading-[1.6] ">
                            No. There are no admissions requirements. All
                            students of all abilities in grades TK - 12 are
                            eligible to attend.
                          </p>
                          <div className="h-3 spacer"></div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-2 bg-grey5 rounded-[20.8px] transition-all ease-custom">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton as="div">
                    <div className="p-[13px_43.2px_13px_24px] relative cursor-pointer group">
                      <Icon
                        icon="weui:arrow-filled"
                        className={`${
                          open ? "rotate-90 w-9 h-9" : "w-9 h-9"
                        } "w-9 h-9 text-[#3983d1] absolute top-[10%] right-[9.6px] " `}
                      />
                      <h6 className="lg:text-[14.4px] text-[12.8px] font-bold font-poppins leading-[1.6]">
                        Which grades does Bright Star Schools serve?
                      </h6>
                    </div>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel>
                        <motion.div
                          initial={{ y: "50px" }} // Initial position
                          animate={{ y: "0px" }}
                          exit={{
                            y: 0,
                            duration: 1,
                            scaleX: 0,
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="block-content p-[24px_32px_4px]"
                        >
                          <p className="mb-6 leading-[1.6] ">
                            We serve students from transitional kindergarten
                            through 12th grade.
                          </p>
                          <div className="h-3 spacer"></div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-2 bg-grey5 rounded-[20.8px] transition-all ease-custom">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton as="div">
                    <div className="p-[13px_43.2px_13px_24px] relative cursor-pointer group">
                      <Icon
                        icon="weui:arrow-filled"
                        className={`${
                          open ? "rotate-90 w-9 h-9" : "w-9 h-9"
                        } "w-9 h-9 text-[#3983d1] absolute top-[10%] right-[9.6px] " `}
                      />
                      <h6 className="lg:text-[14.4px] text-[12.8px] font-bold font-poppins leading-[1.6]">
                        Do students with disabilities qualify to enroll at
                        Bright Star Schools?
                      </h6>
                    </div>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel>
                        <motion.div
                          initial={{ y: "50px" }} // Initial position
                          animate={{ y: "0px" }}
                          exit={{
                            y: 0,
                            duration: 1,
                            scaleX: 0,
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="block-content p-[24px_32px_4px]"
                        >
                          <p className="mb-6 leading-[1.6] ">
                            Yes. All students of all abilities are welcome to
                            attend our schools, and we accept students
                            regardless of learning ability. Approximately 13% of
                            our students receive Inclusive (Special) Education
                            services, and all of our students and families
                            receive support from our counselors.
                          </p>
                          <div className="h-3 spacer"></div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-2 bg-grey5 rounded-[20.8px] transition-all ease-custom">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton as="div">
                    <div className="p-[13px_43.2px_13px_24px] relative cursor-pointer group">
                      <Icon
                        icon="weui:arrow-filled"
                        className={`${
                          open ? "rotate-90 w-9 h-9" : "w-9 h-9"
                        } "w-9 h-9 text-[#3983d1] absolute top-[10%] right-[9.6px] " `}
                      />
                      <h6 className="lg:text-[14.4px] text-[12.8px] font-bold font-poppins leading-[1.6]">
                        How does Bright Star support its high school graduates?
                      </h6>
                    </div>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel>
                        <motion.div
                          initial={{ y: "50px" }} // Initial position
                          animate={{ y: "0px" }}
                          exit={{
                            y: 0,
                            duration: 1,
                            scaleX: 0,
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="block-content p-[24px_32px_4px]"
                        >
                          <p className="mb-6 leading-[1.6] ">
                            All of our high school graduates become part of our
                            Alumni Support and College Success program and
                            receive up to 6 years of personalized support along
                            their individual higher education pathway.
                          </p>
                          <div className="h-3 spacer"></div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-2 bg-grey5 rounded-[20.8px] transition-all ease-custom">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton as="div">
                    <div className="p-[13px_43.2px_13px_24px] relative cursor-pointer group">
                      <Icon
                        icon="weui:arrow-filled"
                        className={`${
                          open ? "rotate-90 w-9 h-9" : "w-9 h-9"
                        } "w-9 h-9 text-[#3983d1] absolute top-[10%] right-[9.6px] " `}
                      />
                      <h6 className="lg:text-[14.4px] text-[12.8px] font-bold font-poppins leading-[1.6]">
                        How do I enroll in a Bright Star School?
                      </h6>
                    </div>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel>
                        <motion.div
                          initial={{ y: "50px" }} // Initial position
                          animate={{ y: "0px" }}
                          exit={{
                            y: 0,
                            duration: 1,
                            scaleX: 0,
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="block-content p-[24px_32px_4px]"
                        >
                          <p className="mb-6 leading-[1.6] ">
                            To apply to enroll, you may either submit an online
                            application here, stop by one our campuses’ main
                            offices to pick up an application form, or contact
                            our enrollment team by phone at (323) 954-9957
                            extension 1030, or via email at
                            enrollment@brightstarschools.org to start an
                            application or for help with your application
                          </p>
                          <div className="h-3 spacer"></div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-2 bg-grey5 rounded-[20.8px] transition-all ease-custom">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton as="div">
                    <div className="p-[13px_43.2px_13px_24px] relative cursor-pointer group">
                      <Icon
                        icon="weui:arrow-filled"
                        className={`${
                          open ? "rotate-90 w-9 h-9" : "w-9 h-9"
                        } "w-9 h-9 text-[#3983d1] absolute top-[10%] right-[9.6px] " `}
                      />
                      <h6 className="lg:text-[14.4px] text-[12.8px] font-bold font-poppins leading-[1.6]">
                        Does Bright Star Schools offer online school?
                      </h6>
                    </div>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel>
                        <motion.div
                          initial={{ y: "50px" }} // Initial position
                          animate={{ y: "0px" }}
                          exit={{
                            y: 0,
                            duration: 1,
                            scaleX: 0,
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="block-content p-[24px_32px_4px]"
                        >
                          <p className="mb-6 leading-[1.6] ">
                            Bright Star Schools offers in-person instruction on
                            our campuses. We do not offer online charter school
                            options. However, we do have a limited Independent
                            Study Program and families can receive more
                            information by connecting with a school
                            administrator.
                          </p>
                          <div className="h-3 spacer"></div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
