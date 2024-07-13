"use client";
import { Grid } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const images = [
  "https://asti.academy/assets/images/Accreditation%20Logos_116x%2025/higher%20education-04.jpg",
  "https://asti.academy/assets/images/Accreditation%20Logos_116x%2025/khda-01.jpg",
  "https://asti.academy/assets/images/Accreditation%20Logos_116x%2025/ministry-03.jpg",
  "https://asti.academy/assets/images/Accreditation%20Logos_116x%2025/higher%20education-04.jpg",
  "https://asti.academy/assets/images/Accreditation%20Logos_116x%2025/khda-01.jpg",
  "https://asti.academy/assets/images/Accreditation%20Logos_116x%2025/ministry-03.jpg",
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
            className="poppins-medium text-[33px] text-center leading-[36.3px] tracking-[-1px] text-[#0f1728] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px]"
          >
            Our Recognition & Accreditation
          </motion.h2>

        <div>
          <Marquee direction="left" speed={100} delay={5}>
            {images.map((src, index) => (
              <Grid
                height={"350px"}
                width={"350px"}
                key={index}
                className="image_wrapper"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img src={src} alt={`Logo ${index + 1}`} />
              </Grid>
            ))}
          </Marquee>
        </div>
      </Grid>
    </>
  );
}

export default Accreditation;
