"use client"; 
import { Grid } from '@mui/material';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from "framer-motion";
import Image from 'next/image';

const images = [
  "/images/Adnoc.png",
  "/images/Danube.png",
  "/images/Etisalat.png",
  "/images/Siemens.png",
  "/images/Tesla.png"
];

function Alumni() {
  return (
    <>
   <Grid py={"50px"}>
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
          className="poppins-medium  text-[33px] text-center leading-[36.3px] tracking-[-1px] text-[#000000] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px] sm:text-center"
        >
          Our Alumni Work at:
        </motion.h2>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          {images.map((src, index) => (
            <Grid height={"150px"} width={"150px"} key={index} className="image_wrapper" display={"flex"} alignItems={"center"} justifyContent={"center"} py={3}>
              <Image height={150} width={150} src={src} alt={`Logo ${index + 1}`} />
             </Grid>

          ))}
        </Marquee>
      </div>
   </Grid>

    </>
  );
}

export default Alumni;
