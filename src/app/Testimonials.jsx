"use client";
import { Box, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const videoData = [
  {
    url: "https://www.youtube.com/watch?v=RhFSU9PsTk8",
    light: "/images/thumbnail-01.png",
  },
  {
    url: "https://www.youtube.com/watch?v=lb2D0-WdY1M",
    light: "/images/thumbnail-02.png",
  },
  {
    url: "https://www.youtube.com/watch?v=TjOPNbW6Sd8",
    light: "/images/thumbnail-03.png",
  },
  {
    url: "https://www.youtube.com/watch?v=HP0oif_OXMQ",
    light: "/images/thumbnail-04.png",
  },
  {
    url: "https://www.youtube.com/watch?v=TjOPNbW6Sd8",
    light: "/images/thumbnail-05.png",
  },
];

function Testimonials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box py={2} px={4}>
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
          className="poppins-medium  text-[33px] text-center leading-[36.3px] tracking-[-1px] text-[#a3a6ae] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px] sm:text-center"
        >
          Dont take our word for it.
        </motion.h2>
        <Box py={2}>        <motion.h4   initial={{ opacity: 0, y: 30 }}
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
          className="poppins-medium  text-[22px] leading-[22.3px] tracking-[-1px] text-black md:text-[22px] md:leading-[20.6px] md:tracking-[-1.5px] sm:text-center"
       >
        HEAR DIRECTLY FROM OUR GRADUATES AT ASTI ACADEMY
        </motion.h4></Box>

      <Grid container direction="row" alignItems={"center"} justifyContent="center" spacing={4}>
        {videoData.map((video, index) => (
          <Grid key={index} item xs={12} sm={12} md={4} lg={2.3} py={2} height={"490px"}>
            {isClient && (
              <ReactPlayer
                url={video.url}
                width="100%"
                height="100%"
                light={video.light}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonials;
