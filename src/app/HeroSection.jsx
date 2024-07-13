"use client";

import React, { useEffect, useState } from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { isSmallScreens } from "./Constants/Constants";

const backgroundImageUrl = "/images/bg-img.png";

const BackgroundContainer = styled(Box)({
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "96vh",
  padding: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CircleContainer = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const VideoCircle = styled(Box)(({ isSmallScreen }) => ({
  width: isSmallScreen ? "235px" : "400px",
  height: isSmallScreen ? "235px" : "400px",
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",
  zIndex: 1,
}));

const ImageCircle = styled(Box)(({ isSmallScreen }) => ({
  width: isSmallScreen ? "255px" : "450px",
  height: isSmallScreen ? "255px" : "450px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 0,
}));

const GridWithBackgroundImage = () => {
  const isSmallScreen = useMediaQuery(isSmallScreens);
  const handleClick = () => {
    window.location.href = "https://asti.academy/contactus.php";
  };
  const [engineerType, setEngineerType] = useState("Electronic Engineers");
  const engineerTypes = [
    "Electronic Engineers",
    "IT Engineers",
    "Civil Engineers",
    "Mechanical Engineers",
    "Automobile Engineers",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % engineerTypes.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setEngineerType(engineerTypes[index]);
  }, [index]);
  return (
    <BackgroundContainer>
      <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
        <Grid item xs={12} lg={5}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="text-[45px] leading-[47.25px] md:text-[72px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
          >
            Crafting future
            <br /> {engineerType}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="be-vietnam-pro-medium text-[#475466] text-[18px] leading-[24.3px] tracking-[-0.54px] md:text-[20px] md:leading-[27px] md:tracking-[-0.6px] text-center md:text-left w-full md:w-[480px]"
          >
            ASTI combines science, creativity, and critical thinking to drive
            innovation and fuel your path toward engineering excellence.
          </motion.p>
          <Box py={3} textAlign={isSmallScreen ? "center" : ""}>
            <motion.div>
              <button
                onClick={handleClick}
                className="relative px-8 py-2 poppins-medium text-red-600 rounded-md bg-white isolation-auto z-10 border-2 border-red-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white "
              >
                Apply Now
              </button>
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={12} lg={5}>
          <CircleContainer>
            <ImageCircle
              component="img"
              src="/images/hero-04-round.png"
              alt="Background Circle"
              isSmallScreen={isSmallScreen}
            />
            <VideoCircle isSmallScreen={isSmallScreen}>
              <video
                src="/videos/promo.mp4"
                loop
                autoPlay
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></video>
            </VideoCircle>
          </CircleContainer>
        </Grid>
      </Grid>
    </BackgroundContainer>
  );
};

export default GridWithBackgroundImage;
