"use client";

import React, { useState } from "react";
import { PROGRAMS } from "./Constants/Constants";
import { motion } from "framer-motion";

const ProgramModule = () => {
  const [selectedProgram, setSelectedProgram] = useState("Civil Engineering");
  const [selectedUnitType, setSelectedUnitType] = useState("Common Units");

  const handleUnitTypeChange = (unitType) => {
    setSelectedUnitType(unitType);
  };

  const handleClick = () => {
    window.location.href = "https://asti.academy/contactus.php";
  };

  const programData = PROGRAMS[selectedProgram];

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.3,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="poppins-medium text-[33px] text-center leading-[36.3px] tracking-[-1px] text-black md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px] pb-6"
      >
        Program Modules
      </motion.h2>
      <div
        className="flex flex-col md:flex-row text-white overflow-hidden rounded-xl mx-2 lg:mx-24"
        style={{
          background: "#ED213A",
          background: "-webkit-linear-gradient(to right, #93291E, #ED213A)",
          background: "linear-gradient(to right, #93291E, #ED213A)",
        }}
      >
        {/* Program Selection */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4 py-8 space-y-4 overflow-auto">
          <div className="flex flex-col gap-4 overflow-auto">
            {Object.keys(PROGRAMS).map((program) => (
              <button
                key={program}
                className="poppins-medium smky-btn3 relative hover:text-[#000000] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#ffffff] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white"
                onClick={() => setSelectedProgram(program)}
              >
                {program}
              </button>
            ))}
            <div className="text-center mt-8">
              <button
                onClick={handleClick}
                className="relative px-8 py-2 text-red-600 poppins-medium rounded-md bg-white isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-200 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Unit Type Selection and Details */}
        <div className="w-full md:w-1/2 h-full px-4 py-8 flex flex-col ">
          <h1 className="poppins-medium text-4xl font-bold mb-8 text-white">
            {selectedProgram} Program
          </h1>
          <p className="poppins-medium mb-4 text-white">
            Here you can find the details of the {selectedProgram} program
            including common units, core units, and special units.
          </p>
          {/* Unit Type Buttons */}

          <div
            className="inline-flex rounded-md mb-8 justify-center shadow-sm"
            role="group"
          >
            {[
              "Common Units",
              "Core Unit 1",
              "Core Unit 2",
              "Special Units",
            ].map((unitType, index) => {
              const roundedClass =
                index === 0
                  ? "rounded-l-lg"
                  : index === 3
                  ? "rounded-r-lg"
                  : "";
              const selectedClass =
                unitType === selectedUnitType
                  ? "bg-gray-900 text-white"
                  : "text-gray-900 border border-gray-900";

              return (
                <button
                  key={unitType}
                  onClick={() => handleUnitTypeChange(unitType)}
                  type="button"
                  className={`px-4 py-2 text-sm  font-medium ${roundedClass} text-white bg-transparent border border-white focus:text-black focus:z-10 hover:bg-red-300 focus:bg-white focus:black dark:border-white dark:text-black dark:hover:text-black dark:focus:bg-gray-700`}
                >
                  {unitType.split(/(?=[A-Z])/).join(" ")}
                </button>
              );
            })}
          </div>

          {/* Unit Details Table */}
          <div className="overflow-y-auto inline-flex justify-center">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-xl">
                <thead>
                  <tr className="border-b bg-blue-gray-100 text-gray-700">
                    <th className="be-vietnam-pro-semibold font-bold py-3 px-4 text-left">
                      Unit Code
                    </th>
                    <th className="be-vietnam-pro-semibold py-3 px-4 text-left">
                      Unit Title
                    </th>
                    <th className="be-vietnam-pro-semibold py-3 px-4 text-left">
                      Credits
                    </th>
                  </tr>
                </thead>
                <tbody className="text-blue-gray-900">
                  {programData[selectedUnitType].map((unit, index) => (
                    <tr key={index} className=" border-blue-gray-200">
                      <td className="poppins-small py-3 px-4 text-black">
                        {unit.code}
                      </td>
                      <td className="poppins-small py-3 px-4 text-black">
                        {unit.title}
                      </td>
                      <td className="poppins-small py-3 px-4 text-black">
                        {unit.credits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramModule;
