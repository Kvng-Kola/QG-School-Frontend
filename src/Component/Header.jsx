import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  MenuButton,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const validItems = [
    "schools",
    "about",
    "enroll",
    "program",
    "alumni",
    "career",
    "news",
  ];

  return (
    <>
      <header>
        {/* header Utility */}
        <div className="relative z-[1200] w-full ">
          <div className="border-b border-solid border-grey2">
            <div className="hidden xl:flex justify-between items-center px-4 py-2 relative z-50 bg-white">
              <div className="flex items-center text-[13px] utility">
                {/* Utility-right */}
                <BellIcon className="w-4" />
                <span className="px-1">24-25 School Year Information</span>
                <Link className="underline">Learn More</Link>
              </div>
              <div className="flex items-center justify-center utility text-[14px]">
                {/* Utility-Left */}
                <div className="text-primaryDark300 font-bold px-4">
                  <Link>Donate</Link>
                </div>
                <div className="">
                  <ul className="flex">
                    <li className="relative px-4">
                      <Link>Compliance</Link>
                    </li>
                    <li className="relative px-4">
                      <Link>Staff Resources</Link>
                    </li>
                  </ul>
                </div>
                <div className="px-4 relative mr-3 g-translate">
                  <Link className="text-red">Select Language</Link>
                </div>
                <div className="">
                  <MagnifyingGlassIcon className="w-4" />
                </div>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <Disclosure as="nav">
            <div
              className={`flex items-center justify-between relative min-h-[86px] px-3 py-1 lg:px-4 lg:py-0 ${classNames(
                validItems.includes(hoveredItem) ? "bg-white" : "bg-Shadow"
              )}`}
            >
              {/* School Logo */}
              <div className="">
                <Link>
                  <img
                    className="lg:max-w-[160px] lg:max-h-[80px] max-w-[135px] max-h-[56px]"
                    src="https://brightstarschools.org/images/bss-logo.svg"
                    alt=""
                  />
                </Link>
              </div>
              {/* Navigation  */}
              <div className="hidden xl:flex items-center justify-center">
                {/* Navigation Links */}
                <div className="navlinks">
                  <ul className="flex items-center h-[72px]">
                    <li
                      className="has-children"
                      onMouseEnter={() => handleMouseEnter("schools")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        className={classNames(
                          validItems.includes(hoveredItem)
                            ? "!text-primary"
                            : ""
                        )}
                      >
                        <span>Schools</span>
                      </Link>
                    </li>
                    <li
                      className="has-children"
                      onMouseEnter={() => handleMouseEnter("about")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        className={classNames(
                          validItems.includes(hoveredItem)
                            ? "!text-primary"
                            : ""
                        )}
                      >
                        <span>About</span>
                      </Link>
                    </li>
                    <li
                      className="has-children"
                      onMouseEnter={() => handleMouseEnter("enroll")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        className={classNames(
                          validItems.includes(hoveredItem)
                            ? "!text-primary"
                            : ""
                        )}
                      >
                        <span>Enroll</span>
                      </Link>
                    </li>
                    <li
                      className="has-children"
                      onMouseEnter={() => handleMouseEnter("program")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        className={classNames(
                          validItems.includes(hoveredItem)
                            ? "!text-primary"
                            : ""
                        )}
                      >
                        <span>Program</span>
                      </Link>
                    </li>
                    <li
                      className="has-children"
                      onMouseEnter={() => handleMouseEnter("alumni")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        className={classNames(
                          validItems.includes(hoveredItem)
                            ? "!text-primary"
                            : ""
                        )}
                      >
                        <span>Alumni</span>
                      </Link>
                    </li>
                    <li
                      className="has-children"
                      onMouseEnter={() => handleMouseEnter("career")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        className={classNames(
                          validItems.includes(hoveredItem)
                            ? "!text-primary"
                            : ""
                        )}
                      >
                        <span>Careers</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classNames(
                          validItems.includes(hoveredItem)
                            ? "!text-primary"
                            : ""
                        )}
                      >
                        <span>News</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Enroll Button */}
                <div className="enroll-button flex items-center pl-4 mt-2">
                  <Link to="/enroll">Enroll Now</Link>
                </div>
              </div>
              {/* Mobile Menu navigation */}
              <div className="xl:hidden block ">
                <DisclosureButton className="group relative z-[1200] overflow-hidden">
                  <span className="sr-only">Open main menu</span>
                  <div className="flex items-center justify-center gap-1">
                    <Bars3Icon
                      aria-hidden="true"
                      className="block size-5 group-data-[open]:hidden text-white "
                    />
                    <span
                      aria-hidden="true"
                      className="group-data-[open]:hidden text-[12px] font-bold uppercase font-primary text-white"
                    >
                      Menu
                    </span>
                  </div>
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
            {/* Mobile Dropdown */}
            <div className="xl:hidden">
              <DisclosurePanel
                as="div"
                className="transition-transform ease-custom "
              >
                <div className="backdrop transition-transform ease-custom"></div>
                <div className="mobile-menu">
                  <div className="mobile-menu-inner">
                    <div className="mobile-menu-body">
                      <div className="mobile-menu-nav">
                        <div className="mobile-nav mb-8">
                          <div className="relative m-0 p-0 font-poppins">
                            <ul className="nav-first">
                              <Disclosure>
                                {({ open }) => (
                                  <>
                                    <DisclosureButton as="li" className="">
                                      <li>
                                        <div className="link">
                                          <span>Schools</span>
                                          <ChevronRightIcon
                                            className={`w-4 transition-transform duration-300 ${
                                              open ? "rotate-90" : ""
                                            }`}
                                          />
                                        </div>
                                      </li>
                                    </DisclosureButton>
                                    <DisclosurePanel
                                      className={open ? "transition" : ""}
                                    >
                                      <ul className="nested-list ul-nested">
                                        {/* West Adams/Baldwin Village */}
                                        <li>
                                          <Disclosure>
                                            {({ open }) => (
                                              <>
                                                <DisclosureButton
                                                  as="li"
                                                  className=""
                                                >
                                                  <div className="listed-list">
                                                    <span>
                                                      West Adams/Baldwin Village
                                                    </span>
                                                    <ChevronRightIcon
                                                      className={`w-3 transition-transform duration-200 ${
                                                        open ? "rotate-90" : ""
                                                      }`}
                                                    />
                                                  </div>
                                                </DisclosureButton>
                                                <DisclosurePanel>
                                                  <ul className="ul-nested">
                                                    <li>
                                                      Stella Elementary Charter
                                                      Academy
                                                    </li>
                                                    <li>
                                                      Stella Middle Charter
                                                      Academy
                                                    </li>
                                                    <li>
                                                      Stella High Charter
                                                      Academy
                                                    </li>
                                                  </ul>
                                                </DisclosurePanel>
                                              </>
                                            )}
                                          </Disclosure>
                                        </li>

                                        {/* Korean Town */}
                                        <li>
                                          <Disclosure>
                                            {({ open }) => (
                                              <>
                                                <DisclosureButton
                                                  as="li"
                                                  className=""
                                                >
                                                  <div className="listed-list">
                                                    <span>Korean Town</span>
                                                    <ChevronRightIcon
                                                      className={`w-3 transition-transform duration-200 ${
                                                        open ? "rotate-90" : ""
                                                      }`}
                                                    />
                                                  </div>
                                                </DisclosureButton>
                                                <DisclosurePanel>
                                                  <ul className="ul-nested">
                                                    <li>
                                                      Rise Kohyang Elementary
                                                      School
                                                    </li>
                                                    <li>
                                                      Rise Kohyang Middle School
                                                    </li>
                                                    <li>
                                                      Rise Kohyang High School
                                                    </li>
                                                  </ul>
                                                </DisclosurePanel>
                                              </>
                                            )}
                                          </Disclosure>
                                        </li>

                                        {/* San Fernando Valley */}
                                        <li>
                                          <Disclosure>
                                            {({ open }) => (
                                              <>
                                                <DisclosureButton
                                                  as="li"
                                                  className=""
                                                >
                                                  <div className="listed-list">
                                                    <span>
                                                      San Fernando Valley
                                                    </span>
                                                    <ChevronRightIcon
                                                      className={`w-3 transition-transform duration-200 ${
                                                        open ? "rotate-90" : ""
                                                      }`}
                                                    />
                                                  </div>
                                                </DisclosureButton>
                                                <DisclosurePanel>
                                                  <ul className="ul-nested">
                                                    <li>
                                                      Valor Academy Elementary
                                                      School
                                                    </li>
                                                    <li>
                                                      Valor Academy Middle
                                                      School
                                                    </li>
                                                    <li>
                                                      Valor Academy High School
                                                    </li>
                                                  </ul>
                                                </DisclosurePanel>
                                              </>
                                            )}
                                          </Disclosure>
                                        </li>
                                      </ul>
                                    </DisclosurePanel>
                                  </>
                                )}
                              </Disclosure>
                              <li>
                                <Disclosure>
                                  <DisclosureButton as="li" className="group">
                                    <li>
                                      <div className="link">
                                        <span>About</span>
                                        <ChevronRightIcon
                                          className="w-4 transition-transform
                                          duration-200 group-data-[open]:rotate-90"
                                        />
                                      </div>
                                    </li>
                                  </DisclosureButton>
                                  <DisclosurePanel>
                                    <ul className="ul-nested">
                                      <li>About</li>
                                      <li>Our Vision, Mission & Values</li>
                                      <li>Our Commitment to Anti-Racism</li>
                                      <li>TK-12th Grade Pathway</li>
                                      <li>Our Impact</li>
                                      <li>Our Leadership</li>
                                      <li>Discover Our Staff</li>
                                      <li>Board of Directors</li>
                                      <li>Valor Academy High School</li>
                                      <li>24-25 School Year Information</li>
                                      <li>Community Schools</li>
                                    </ul>
                                  </DisclosurePanel>
                                </Disclosure>
                              </li>
                              <li>
                                <Disclosure>
                                  <DisclosureButton as="li" className="group">
                                    <li>
                                      <div className="link">
                                        <span>Enroll</span>
                                        <ChevronRightIcon
                                          className="w-4 transition-transform
                                          duration-200 group-data-[open]:rotate-90"
                                        />
                                      </div>
                                    </li>
                                  </DisclosureButton>
                                  <DisclosurePanel>
                                    <ul className="ul-nested">
                                      <li>Enroll With Us</li>
                                      <li>Application & Lottery Dates</li>
                                      <li>Events Calendar</li>
                                      <li>California Charter School Law</li>
                                    </ul>
                                  </DisclosurePanel>
                                </Disclosure>
                              </li>
                              <li>
                                <Disclosure>
                                  <DisclosureButton as="li" className="group">
                                    <li>
                                      <div className="link">
                                        <span>Program</span>
                                        <ChevronRightIcon
                                          className="w-4 transition-transform
                                          duration-200 group-data-[open]:rotate-90"
                                        />
                                      </div>
                                    </li>
                                  </DisclosureButton>
                                  <DisclosurePanel>
                                    <ul className="ul-nested">
                                      <li>Program</li>
                                      <li>TK-12 Pathway</li>
                                      <li>Beyond the Classroom</li>
                                      <li>Our Approach</li>
                                      <li>Inclusive (Special) Education</li>
                                      <li>Enrichment Opportunities</li>
                                      <li>Community Partnerships</li>
                                    </ul>
                                  </DisclosurePanel>
                                </Disclosure>
                              </li>
                              <li>
                                <Disclosure>
                                  <DisclosureButton as="li" className="group">
                                    <li>
                                      <div className="link">
                                        <span>Alumni</span>
                                        <ChevronRightIcon
                                          className="w-4 transition-transform
                                          duration-200 group-data-[open]:rotate-90"
                                        />
                                      </div>
                                    </li>
                                  </DisclosureButton>
                                  <DisclosurePanel>
                                    <ul className="ul-nested">
                                      <li>How Alumni Support Works</li>
                                      <li>ASCS Newsletters</li>
                                      <li>Meet Our Alumni</li>
                                      <li>Our Approach</li>
                                      <li>How Alumni Support Works</li>
                                      <li>ASCS Newsletters</li>
                                      <li>Meet Our ASCS Team</li>
                                      <li>Transcripts</li>
                                    </ul>
                                  </DisclosurePanel>
                                </Disclosure>
                              </li>
                              <li>
                                <Disclosure>
                                  <DisclosureButton as="li" className="group">
                                    <li>
                                      <div className="link">
                                        <span>Careers</span>
                                        <ChevronRightIcon
                                          className="w-4 transition-transform
                                          duration-200 group-data-[open]:rotate-90"
                                        />
                                      </div>
                                    </li>
                                  </DisclosureButton>
                                  <DisclosurePanel className="transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <ul className="ul-nested">
                                      <li>Why Teach At Bright Star?</li>
                                      <li>Teacher Testimonials</li>
                                      <li>Our Benefits</li>
                                      <li>Our Approach</li>
                                      <li>Moving to Los Angeles</li>
                                      <li>Credentialing Support</li>
                                      <li>Credential Pathways</li>
                                      <li>Teacher Induction Program</li>
                                      <li>Alder Teacher Residency</li>
                                      <li>FAQ</li>
                                      <li>Connect with our Talent Team</li>
                                    </ul>
                                  </DisclosurePanel>
                                </Disclosure>
                              </li>
                              <li>
                                <div className="link">
                                  <span>News</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="utility-btn">
                        <div className="btn btn-en">
                          <Link>Enroll Now</Link>
                        </div>
                        <div className="btn btn-do">
                          <Link>Donate</Link>
                        </div>
                      </div>
                      <div className="mobile-utility mt-5">
                        <ul>
                          <li>
                            <Link>Compliance</Link>
                          </li>
                          <li>
                            <Link>Staff Resources</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mobile-menu-footer">
                      <div className="text-center s-links">
                        <Link>
                          <Icon
                            icon="fa-brands:facebook-f"
                            className="menu-icon"
                          />
                        </Link>
                        <Link>
                          <Icon icon="uil:youtube" className="menu-icon" />
                        </Link>
                        <Link>
                          <Icon icon="ri:twitter-fill" className="menu-icon" />
                        </Link>
                        <Link>
                          <Icon
                            icon="akar-icons:linkedin-fill"
                            className="menu-icon"
                          />
                        </Link>
                        <Link>
                          <Icon
                            icon="ri:instagram-line"
                            className="menu-icon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </DisclosurePanel>
            </div>
          </Disclosure>
        </div>
        {/* headerMegamenu */}
        <div
          className="headerMegaMenu"
          onMouseEnter={() => handleMouseEnter("schools")}
          onMouseLeave={handleMouseLeave}
        >
          {/* hearderMegamenu for school */}
          {hoveredItem === "schools" && (
            <div
              className="w-full school-grid bg-white"
              onMouseEnter={() => handleMouseEnter("schools")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex flex-col items-center px-[15px] py-10"
                style={{ background: "#0370BA" }}
              >
                <div className="mb-10">
                  <div className="text-white text-center">
                    <h4 className="lg:text-[25px] mb-3 font-bold font-secondary leading-7">
                      Join Quantum Groove Community Today
                    </h4>
                    <p className="text-sm">
                      In our small, joyful schools we support our students to
                      thrive from kindergarten through higher education.
                    </p>
                  </div>
                </div>
                <div className="enroll-button">
                  <Link
                    to="/enroll"
                    className="!bg-white !text-red hover:!bg-red hover:!text-white rounded-full"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
              <div className="px-5 py-10 grid grid-cols-[1fr]">
                <div className="grid grid-cols-3 gap-x-12">
                  <div className="column">
                    <div className="flex gap-[0.90px] font-bold font-secondary mb-3">
                      <Icon icon="hugeicons:circle" className="w-3 mt-1" />
                      <p className="text-[2px] font-primary">
                        West Adams/Baldwin Village
                      </p>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="icon-img">
                          <img
                            src="https://brightstarschools.org/images/icons/schoolicons/Stella_Elem.png"
                            className="w-12"
                            alt=""
                          />
                        </div>
                        <Link>
                          <div className="school name hover:underline font-bold text-[12px]">
                            <p className="leading-5">Quantum Grove</p>
                            <p className="leading-5"> Academy</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="icon-img">
                          <img
                            src="https://brightstarschools.org/images/icons/schoolicons/Stella_Middle.png"
                            className="w-12"
                            alt=""
                          />
                        </div>
                        <Link>
                          <div className="school name hover:underline font-bold text-[12px]">
                            <p className="leading-5">Quantum Grove</p>
                            <p className="leading-5">High school</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="icon-img">
                          <img
                            src="https://brightstarschools.org/files/galleries/SHCA_Eagle_2-0005.png"
                            className="w-12"
                            alt=""
                          />
                        </div>
                        <Link>
                          <div className="school name hover:underline font-bold text-[12px]">
                            <p className="leading-5">Quantum Grove</p>
                            <p className="leading-5">University</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="flex gap-[0.90px] font-bold font-secondary mb-3">
                      <Icon icon="hugeicons:circle" className="w-3 mt-1" />
                      <p className="text-[2px] font-primary">
                        West Adams/Baldwin Village
                      </p>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="icon-img">
                          <img
                            src="https://brightstarschools.org/images/icons/schoolicons/Stella_Elem.png"
                            className="w-12"
                            alt=""
                          />
                        </div>
                        <Link>
                          <div className="school name hover:underline font-bold text-[12px]">
                            <p className="leading-5">Quantum Grove</p>
                            <p className="leading-5">Kids Academy</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="icon-img">
                          <img
                            src="https://brightstarschools.org/images/icons/schoolicons/Stella_Middle.png"
                            className="w-12"
                            alt=""
                          />
                        </div>
                        <Link>
                          <div className="school name hover:underline font-bold text-[12px]">
                            <p className="leading-5">Quantum Grove</p>
                            <p className="leading-5">International School</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="icon-img">
                          <img
                            src="https://brightstarschools.org/files/galleries/SHCA_Eagle_2-0005.png"
                            className="w-12"
                            alt=""
                          />
                        </div>
                        <Link>
                          <div className="school name hover:underline font-bold text-[12px]">
                            <p className="leading-5">Quantum Grove</p>
                            <p className="leading-5">Institute of Technology</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="flex gap-[0.90px] font-bold font-secondary mb-3">
                      <Icon icon="hugeicons:circle" className="w-3 mt-1" />
                      <p className="text-[2px] font-primary">
                        West Adams/Baldwin Village
                      </p>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="icon-img">
                          <img
                            src="https://brightstarschools.org/images/icons/schoolicons/Stella_Elem.png"
                            className="w-12"
                            alt=""
                          />
                        </div>
                        <Link>
                          <div className="school name hover:underline font-bold text-[12px]">
                            <p className="leading-5 ">Quantum Grove</p>
                            <p className="leading-5 ">Foundation school</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="icon-img">
                          <img
                            src="https://brightstarschools.org/images/icons/schoolicons/Stella_Middle.png"
                            className="w-12"
                            alt=""
                          />
                        </div>
                        <Link>
                          <div className="school name hover:underline font-bold text-[12px]">
                            <p className="leading-5">Quantum Grove</p>
                            <p className="leading-5">College</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="icon-img">
                          <img
                            src="https://brightstarschools.org/files/galleries/SHCA_Eagle_2-0005.png"
                            className="w-12"
                            alt=""
                          />
                        </div>
                        <Link>
                          <div className="school name hover:underline font-bold text-[12px]">
                            <p className="leading-5">Quantum Grove</p>
                            <p className="leading-5">Global university</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* hearderMegamenu for about */}
          {hoveredItem === "about" && (
            <div
              className="submenu bg-white"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="qg-container !max-w-[1320px]">
                <div className="grid_1 grid grid-cols-1 py-9 mb--10">
                  <div className="mainGrid">
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 ">
                            <Link
                              to="/about"
                              className="text-[16px] leading-5 font-poppins font-bold"
                            >
                              About Us
                            </Link>
                          </h6>
                          <p className="leading-6 ">
                            Learn more about Quantum Groove Schools
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl1"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 ">
                            <Link className="text-[16px] leading-5 font-poppins font-bold">
                              About Us
                            </Link>
                          </h6>
                          <p className="leading-5">what Guides our work</p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuNavigation column ">
                      <ul className="block pl-5">
                        <li>
                          <Link>
                            Our Commitment to the well being of our Students
                          </Link>
                        </li>
                        <li>
                          <Link>TK-12th Grade Pathway</Link>
                        </li>
                        <li>
                          <Link>Our Impact</Link>
                        </li>
                        <li>
                          <Link>Our Leadership</Link>
                        </li>
                        <li>
                          <Link>Discover Our Staff</Link>
                        </li>
                      </ul>
                      <ul className="block pl-7 text-nowrap">
                        <li>
                          <Link>Board of Directors</Link>
                        </li>
                        <li>
                          <Link>Board Meetings</Link>
                        </li>
                        <li>
                          <Link>24-25 School Year Information</Link>
                        </li>
                        <li>
                          <Link>Community Schools</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* hearderMegamenu for enroll */}
          {hoveredItem === "enroll" && (
            <div
              className="submenu bg-white"
              onMouseEnter={() => handleMouseEnter("enroll")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="qg-container !max-w-[1320px]">
                <div className="grid_1 grid grid-cols-1 py-9 px-0">
                  <div className="mainGrid">
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 ">
                            <Link className="text-[16px] leading-5 font-poppins font-bold">
                              About Us
                            </Link>
                          </h6>
                          <p className="leading-6 ">
                            Learn more about Quantum Groove Schools
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl1"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 ">
                            <Link className="text-[16px] leading-5 font-poppins font-bold">
                              Mission, Vision, Values
                            </Link>
                          </h6>
                          <p className="leading-5">what Guides our work</p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuNavigation column ">
                      <ul className="block pl-5">
                        <li>
                          <Link>Events Calendar</Link>
                        </li>
                        <li>
                          <Link>California Charter School Law</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* hearderMegamenu for program */}
          {hoveredItem === "program" && (
            <div
              className="submenu"
              onMouseEnter={() => handleMouseEnter("enroll")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="qg-container !max-w-[1320px]">
                <div className="grid_1 grid grid-cols-1 py-9 px-0">
                  <div className="mainGrid">
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 ">
                            <Link className="text-[16px] leading-5 font-poppins font-bold">
                              About Us
                            </Link>
                          </h6>
                          <p className="leading-6 ">
                            Learn more about Quantum Groove Schools
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl1"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 text-[16px] leading-6">
                            <Link className="">About Us</Link>
                          </h6>
                          <p className="leading-5">what Guides our work</p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuNavigation column ">
                      <ul className="block pl-5 text-nowrap">
                        <li>
                          <Link>Beyond the Classroom</Link>
                        </li>
                        <li>
                          <Link>Our Approach</Link>
                        </li>
                        <li>
                          <Link>Inclusive (Special) Education</Link>
                        </li>
                        <li>
                          <Link>Enrichment Opportunities</Link>
                        </li>
                        <li>
                          <Link>Community Partnerships</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* hearderMegamenu for Alumni */}
          {hoveredItem === "alumni" && (
            <div
              className="submenu"
              onMouseEnter={() => handleMouseEnter("alumni")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="qg-container !max-w-[1320px]">
                <div className="grid_1 grid grid-cols-1 py-9 px-0">
                  <div className="mainGrid">
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 ">
                            <Link className="text-[16px] leading-5 font-poppins font-bold">
                              About Us
                            </Link>
                          </h6>
                          <p className="leading-6 ">
                            Learn more about Quantum Groove Schools
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl1"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 ">
                            <Link className="text-[16px] leading-5 font-poppins font-bold">
                              About Us
                            </Link>
                          </h6>
                          <p className="leading-5">what Guides our work</p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuNavigation column ">
                      <ul className="block pl-5 text-nowrap">
                        <li>
                          <Link>Meet Our Alumni</Link>
                        </li>
                        <li>
                          <Link>How Alumni Support Works</Link>
                        </li>
                        <li>
                          <Link>ASCS Newsletters</Link>
                        </li>
                        <li>
                          <Link>Meet Our ASCS Team</Link>
                        </li>
                        <li>
                          <Link>Transcripts</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* hearderMegamenu for career */}
          {hoveredItem === "career" && (
            <div
              className="submenu"
              onMouseEnter={() => handleMouseEnter("career")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="qg-container !max-w-[1320px]">
                <div className="grid_1 grid grid-cols-1 py-9 px-0">
                  <div className="mainGrid">
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 ">
                            <Link className="text-[16px] leading-5 font-poppins font-bold">
                              About Us
                            </Link>
                          </h6>
                          <p className="leading-6 ">
                            Learn more about Quantum Groove Schools
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuBox p-2 rounded-lg ">
                      <div className="subMenuImage mb-6">
                        <div className="bg_imageUrl1"></div>
                      </div>
                      <div className="subMenuDescription">
                        <div className="subMenucontent">
                          <h6 className="mb-3 ">
                            <Link className="text-[16px] leading-5 font-poppins font-bold">
                              About Us
                            </Link>
                          </h6>
                          <p className="leading-5">what Guides our work</p>
                        </div>
                      </div>
                    </div>
                    <div className="subMenuNavigation column ">
                      <ul className="block pl-5">
                        <li>
                          <Link>Teacher Testimonials</Link>
                        </li>
                        <li>
                          <Link>Our Benefits</Link>
                        </li>
                        <li>
                          <Link>Moving to Los Angeles</Link>
                        </li>
                        <li>
                          <Link>Credentialing Support</Link>
                        </li>
                        <li>
                          <Link>Credential Pathways</Link>
                        </li>
                      </ul>
                      <ul className="block pl-7 text-nowrap">
                        <li>
                          <Link>Teacher Induction Program</Link>
                        </li>
                        <li>
                          <Link>Alder Teacher Residency</Link>
                        </li>
                        <li>
                          <Link>FAQ</Link>
                        </li>
                        <li>
                          <Link>Connect with our Talent Team</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
