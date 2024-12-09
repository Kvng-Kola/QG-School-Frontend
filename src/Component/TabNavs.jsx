import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ({ Alinks, Blinks, Clinks, Dlinks, Elinks, process }) {
  const [activeTab, setActiveTab] = useState(Alinks);
  const handleTabClick = (link) => {
    setActiveTab(link);
  };
  return (
    <>
      <div className="tabnavs lg:block hidden relative p-0 m-0 ">
        <div
          className={`tabnavsWrap grid ${
            process ? "!grid-cols-2" : ""
          } grid-cols-5  bg-white shadow-lg rounded-[65px] px-6`}
        >
          <Link
            className={`${
              activeTab === Alinks ? "active" : ""
            } tabNavsLink relative p-[29.6px_12px] text-center flex justify-center items-center`}
            onClick={() => handleTabClick(Alinks)}
            onMouseEnter={() => handleTabClick(Alinks)}
          >
            <p>
              <strong
                className={`underline ${
                  process
                    ? "lg:text-[25.5px] text-[20.4px] font-bold font-poppins"
                    : ""
                }`}
              >
                {Alinks}
              </strong>
            </p>
          </Link>
          <Link
            className={`${
              activeTab === Blinks ? "active" : ""
            } tabNavsLink relative p-[29.6px_12px] text-center flex justify-center items-center`}
            onClick={() => handleTabClick(Blinks)}
            onMouseEnter={() => handleTabClick(Blinks)}
          >
            <p>
              <strong
                className={`underline ${
                  process
                    ? "lg:text-[25.5px] text-[20.4px] font-bold font-poppins"
                    : ""
                }`}
              >
                {Blinks}
              </strong>
            </p>
          </Link>
          {Clinks && (
            <Link
              className={`${
                activeTab === Clinks ? "active" : ""
              } tabNavsLink relative p-[29.6px_12px] text-center flex justify-center items-center`}
              onClick={() => handleTabClick(Clinks)}
              onMouseEnter={() => handleTabClick(Clinks)}
            >
              <p>
                <strong className="underline text-[16px]">{Clinks}</strong>
              </p>
            </Link>
          )}
          {Dlinks && (
            <Link
              className={`${
                activeTab === Dlinks ? "active" : ""
              } tabNavsLink relative p-[29.6px_12px] text-center flex justify-center items-center`}
              onClick={() => handleTabClick(Dlinks)}
              onMouseEnter={() => handleTabClick(Dlinks)}
            >
              <p>
                <strong className="underline text-[16px]">{Dlinks}</strong>
              </p>
            </Link>
          )}
          {Elinks && (
            <Link
              className={`${
                activeTab === Elinks ? "active" : ""
              } tabNavsLink before:!hidden relative p-[29.6px_12px] text-center flex justify-center items-center`}
              onClick={() => handleTabClick(Elinks)}
              onMouseEnter={() => handleTabClick(Elinks)}
            >
              <p>
                <strong className="underline text-[16px]">{Elinks}</strong>
              </p>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
