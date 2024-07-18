"use client";
import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

const Step = ({ step, title, description, icon, color }) => (
  <div className="flex items-start gap-2 mb-4 relative">
    <div>
      <motion.h6
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.44, 0, 0, 1] }}
        className="poppins-medium text-[23px] leading-[26.3px] tracking-[-1px] text-[#171010] md:text-[26px] md:leading-[20.6px] md:tracking-[-1.5px] pb-4"
        style={{ marginBottom: "10px" }} // Adjust margin-bottom as needed
      >
        {title}
      </motion.h6>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.44, 0, 0, 1] }}
        className={`mb-2 text-[#525252] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
      >
        {description}
      </motion.p>
    </div>
  </div>
);

const Pathway = () => {
  const handleClick = () => {
    window.location.href = "https://asti.academy/contactus.php";
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-4xl w-full md:p-12 rounded-2xl">
        <Grid item pb={3} textAlign={"center"}>
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
            className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-black md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px]"
          >
            Educational Pathway
          </motion.h2>
        </Grid>

        <div className="relative">
          <div className="absolute left-5 top-0 h-[450px]">
            <img style={{ height: "450px" }} src="/images/path-line.png" alt="Path Line" />
          </div>
          <div className="relative pl-10">
            <Step
              step="1"
              title="📝 Level 3"
              description="Diploma (Foundation)"
              icon="📘"
              color="bg-orange-500"
            />
            <Step
              step="2"
              title="📚 Level 4 & 5"
              description="Higher International Diploma (240 credits)"
              icon="✏️"
              color="bg-blue-500"
            />
            <Step
              step="3"
              title="👨‍🏫 Level 6"
              description="Bachelors Degree(360 credits)"
              icon="👩‍🏫"
              color="bg-green-500"
            />
            <Step
              step="4"
              title="🖥️ Level 7"
              description="Master's Degree"
              icon="📝"
              color="bg-orange-500"
            />
            <Step
              step="5"
              title="🎓 Level 8"
              description="PhD / Doctorate Degree"
              icon="📝"
              color="bg-orange-500"
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handleClick}
            className="relative px-8 py-2 text-red-600 poppins-medium rounded-md bg-white isolation-auto z-10 border-2 border-red-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white"
          >
            Request Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pathway;
