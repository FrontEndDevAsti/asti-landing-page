"use client";
import { Grid } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/200 x 200-01.png",
  "/images/200 x 200-02.png",
  "/images/200 x 200-03.png",
  "/images/200 x 200-04.png",
  "/images/200 x 200-05.png",
  "/images/200 x 200-06.png",
  "/images/200 x 200-07.png",
  "/images/200 x 200-08.png",
];

function Accreditation() {
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
            className="poppins-medium text-[33px] text-center leading-[36.3px] tracking-[-1px] text-black md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px] pb-4"
          >
            Our Recognition & Accreditation
          </motion.h2>

        <div className="bg-white">
          <Marquee direction="left" speed={100} delay={5}>
            {images.map((src, index) => (
              <Grid

                key={index}
                className="image_wrapper"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image width={150} height={150} src={src} alt={`Logo ${index + 1}`} />
              </Grid>
            ))}
          </Marquee>
        </div>
      </Grid>
    </>
  );
}

export default Accreditation;
