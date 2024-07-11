"use client"
import { motion } from "framer-motion";


const ProgramFor = () => {

  return (
    <div
      id="product"
      className="flex flex-col items-center w-full  pb-[190px] md:pb-[150px] px-[24px] md:px-[32px] xl:px-[152px] gap-[80px] relative"
    >


      <div className="w-full flex flex-col items-center pt-[60px] gap-10 md:px-[4px]">
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
          This program is for you if you are a...
        </motion.h2>

        <div className="w-full flex flex-col md:flex-col gap-5 items-center">
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 xl:max-w-min ">
            <motion.div
            style={{ alignItems: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.2,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src="/svg/fingerprint-two.svg" alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                12th Grade Students
                </h3>
              
              </div>
            </motion.div>
            <motion.div
            style={{ alignItems: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.3,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src="/svg/fingerprint-two.svg" alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                Looking upgrade or change your career
                </h3>
               
              </div>
            </motion.div>
            <motion.div
            style={{ alignItems: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 140,
                  mass: 1,
                  delay: 0.2,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src="/svg/fingerprint-two.svg"alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                Working Professionals
                </h3>
               
              </div>
            </motion.div>
          </div>

          <div className="w-full md:flex flex-col md:flex-row gap-6 md:gap-10 xl:max-w-min sm:text-center">
            <motion.div
            style={{ alignItems: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.2,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src="/svg/fingerprint-two.svg" alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                School or University dropout
                </h3>
               
              </div>
            </motion.div>
            <motion.div
            style={{ alignItems: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.3,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src="/svg/fingerprint-two.svg" alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                Looking for distance or online education
                </h3>
              
              </div>
            </motion.div>
            <motion.div
            style={{ alignItems: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                  delay: 0.2,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="flex flex-col xl:flex-row gap-4 items-center md:items-start w-full md:w-[376px] md:py-6 md:pl-8 rounded-[24px]"
            >
              <img src="/svg/fingerprint-two.svg" alt="" className="w-[96px]" />
              <div className="w-full flex flex-col items-center md:items-start gap-1 md:gap-2">
                <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                Looking for a Vocational British Qualification
                </h3>
    
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProgramFor;
