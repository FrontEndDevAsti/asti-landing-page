"use client";
import React from "react";
import Accordion from "./Components/Accordion";
import { motion } from "framer-motion";

function Faq() {
  const handleClick = () => {
    window.location.href = "https://asti.academy/contactus.php";
  };
  return (
    <>
      <section className="flex flex-col items-center w-full pt-[60px] pb-[92px] md:pb-[80px] px-[24px] md:px-[32px] xl:px-[64px] gap-[60px] md:gap-[80px] relative">
        <div className="w-full flex flex-col items-center gap-[10px] md:w-[850px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 150,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="flex items-center py-2 px-3 bg-[#E42327] rounded-[11px]"
          >
            <h4 className="ibm-plex-mono-semibold text-white text-[12px] leading-[13.2px] text-center tracking-[1.2px]">
              FAQs
            </h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 150,
                mass: 1,
                delay: 0.3,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="text-[40px] leading-[44px] tracking-[-1.6px] md:text-[56px] md:leading-[56px] md:tracking-[-2px] flex flex-col items-center w-full poppins-medium relative"
          >
            <h3 className="text-[#a3a6ae] text-center md:text-left">
              Still not convinced?
            </h3>
            <h3 className="text-[#000000] mt- [-8px] md:mt-[-0px] text-center md:text-left">
              We've got the answers
            </h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
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
          className="bg-[#f5f5f5] pl-[20px] pr-[24px] rounded-[20px] w-ful l h-full"
        >
          <Accordion />
        </motion.div>

        <motion.h4
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 150,
              mass: 1,
              delay: 0.2,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="text-[18px] mt-5 md:mt-0 leading-[24.3px] tracking-[-0.54px] be-vietnam-pro-medium text-[#000000] bg-transparent rounded-full px-[24px] py-[24px] md:px-5 w-full text-center"
        >
          Still have more questions? Speak to our
          <button
            onClick={handleClick}
            className="underline ml-1 hover:text-[#475466]"
          >
            Program Counsellor
          </button>
          .
          <div className="text-center mt-2">
      <button
                onClick={handleClick}
                className="relative px-8 py-2 text-red-600 poppins-medium rounded-md bg-white isolation-auto z-10 border-2 border-red-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white"
              >
               Call Now
              </button>
      </div>
        </motion.h4>
        
      </section>
    </>
  );
}

export default Faq;
