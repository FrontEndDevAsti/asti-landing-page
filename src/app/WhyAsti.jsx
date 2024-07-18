"use client";
import React from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { isMediumScreens } from "./Constants/Constants";

const BackgroundContainer = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  margin: "96px",
  borderRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    margin: "10px",
  },
}));

const TextContainer = styled(Box)({
  padding: "20px",
});

const CircleContainer = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const VideoCircle = styled(Box)(() => ({
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",
  zIndex: 1,
}));

const ImageCircle = styled(Box)(() => ({
  width: "450px",
  height: "450px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 0,
}));

const WhyAsti = () => {
  const isMediumScreen = useMediaQuery(isMediumScreens);

  return (
    <>
      <Grid p={2}>
        <BackgroundContainer>
          <div
            style={{
              background: "#ED213A",
              background: "-webkit-linear-gradient(to right, #93291E, #ED213A)",
              background: "linear-gradient(to right, #93291E, #ED213A)",
            }}
          >
            <Grid
              container
              spacing={2}
              display={"flex"}
              justifyContent={"center"}
              alignItems="center"
              py={8}
            >
              <Grid item xs={12} md={5}>
                <TextContainer>
                  <motion.h4
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.44, 0, 0, 1],
                    }}
                    className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-[#ffffff] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px] pb-4"
                    style={{ marginBottom: "10px" }} // Adjust margin-bottom as needed
                  >
                    Why should you consider{" "}
                    <span style={{ color: "#ffffff" }}>ASTI?</span>
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: [0.44, 0, 0, 1],
                    }}
                    className={`mb-2 text-[#ffffff] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: 18,
                        marginRight: 1,
                        color: "white",
                        flexShrink: 0,
                      }}
                    />
                    Graduated over 75,000+ students
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0.44, 0, 0, 1],
                    }}
                    className={`mb-2 text-[#ffffff] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: 18,
                        marginRight: 1,
                        color: "white",
                        flexShrink: 0,
                      }}
                    />
                    More than 32 different nationalities
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0.44, 0, 0, 1],
                    }}
                    className={`mb-2 text-[#ffffff] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: 18,
                        marginRight: 1,
                        color: "white",
                        flexShrink: 0,
                      }}
                    />
                    International recognition for Engineering Qualifications
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0.44, 0, 0, 1],
                    }}
                    className={`mb-2 text-[#ffffff] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: 18,
                        marginRight: 1,
                        color: "white",
                        flexShrink: 0,
                      }}
                    />
                    Professional & Technical Curriculum
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0.44, 0, 0, 1],
                    }}
                    className={`mb-2 text-[#ffffff] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: 18,
                        marginRight: 1,
                        color: "white",
                        flexShrink: 0,
                      }}
                    />
                    Highly qualified and Ph.D. holders teaching support
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0.44, 0, 0, 1],
                    }}
                    className={`mb-2 text-[#ffffff] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
                  >
                    <CheckCircleIcon
                      sx={{
                        fontSize: 18,
                        marginRight: 1,
                        color: "white",
                        flexShrink: 0,
                      }}
                    />
                    International recognition for Engineering Qualifications
                  </motion.p>
                </TextContainer>
              </Grid>
              {!isMediumScreen && (
                <Grid item xs={12} lg={6}>
                  <CircleContainer>
                    <ImageCircle
                      component="img"
                      src="/images/hero-round-white.png"
                      alt="Background Circle"
                    />
                    <VideoCircle>
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
              )}
            </Grid>
          </div>
        </BackgroundContainer>
      </Grid>
    </>
  );
};

export default WhyAsti;
