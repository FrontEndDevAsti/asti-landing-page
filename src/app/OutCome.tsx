"use client";
import React from "react";
import { Grid, Box } from "@mui/material";
import { motion } from "framer-motion";

const data = [
  {
    category: "Civil Engineering",
    jobs: [
      "Structural Engineer",
      "Geotechnical Engineer",
      "Environmental Engineer",
      "Construction Engineer",
    ],
    bgColor: "bg-red-400",
    hoverColor: "hover:bg-red-600",
  },
  {
    category: "Mechanical Engineering",
    jobs: [
      "Automotive Engineer",
      "Aerospace Engineer",
      "HVAC Engineer",
      "Robotics Engineer",
    ],
    bgColor: "bg-red-400",
    hoverColor: "hover:bg-red-600",
  },
  {
    category: "Automobile Engineering",
    jobs: [
      "Power Engineer",
      "Control Engineer",
      "Electronics Engineer",
      "Telecommunications Engineer",
    ],
    bgColor: "bg-red-400",
    hoverColor: "hover:bg-red-600",
  },
  {
    category: "Quantity Surveying",
    jobs: [
      "Software Developer",
      "Network Engineer",
      "Data Analyst",
      "Cybersecurity Specialist",
    ],
    bgColor: "bg-red-400",
    hoverColor: "hover:bg-red-600",
  },
  {
    category: "Architectural Engineering",
    jobs: [
      "Process Engineer",
      "Materials Engineer",
      "Biochemical Engineer",
      "Petroleum Engineer",
    ],
    bgColor: "bg-red-400",
    hoverColor: "hover:bg-red-600",
  },
  {
    category: "Electrical & Electronics Engineering",
    jobs: [
      "Medical Device Engineer",
      "Clinical Engineer",
      "Biomaterials Engineer",
      "Biomechanics Engineer",
    ],
    bgColor: "bg-red-400",
    hoverColor: "hover:bg-red-600",
  },
];

export default function Cards() {
  return (
    <>
      <Grid>
        <Box textAlign={"center"} py={8}>
          {" "}
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
            className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-[#0f1728] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px]"
          >
            Learning Outcomes
          </motion.h2>
        </Box>
        <Grid
          container
          p={2}
          spacing={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {data.map((item, index) => (
            <Grid item xs={12} md={3} lg={2} key={index}>
              <div
                className={`m-1 ${item.bgColor} rounded-xl ${item.hoverColor} hover:scale-110 duration-700 p-5 h-[230px]`}
              >
                <h4 className="poppins-medium text-[18px] py-2 text-white font-bold text-center">
                  {item.category}
                </h4>
                {/* <div>
                  <div className="w-6 h-6 border-4 border-white border-double rounded-full animate-spin border-t-transparent"></div>
                </div> */}
                {item.jobs.map((job, i) => (
                  <p
                    key={i}
                    className="poppins-medium text-sm leading-7 text-slate-200 space-y-4"
                  >
                    {job}
                  </p>
                ))}
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
