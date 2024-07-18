"use client";

import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Container, Grid } from "@mui/material";
import WrapDown from "./Components/WrapDown";
import Image from "next/image";

function OutCome() {
  return (
    <div className="pt-14">
      <Container className="mx-auto">
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
          className="poppins-medium  text-[33px] text-center leading-[36.3px] tracking-[-1px] text-[#000000] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px] sm:text-center m-1"
        >
          Learning Outcomes
        </motion.h2>
        <Grid
          container
          spacing={5}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={12} md={6}>
            <Image
              src="/images/book.jpg"
              alt="About Thumb 1"
              height={500}
              width={500}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 className="font-medium text-[28px] leading-[28.8px] tracking-[-1px] text-black">
              Unlock Opportunities with ASTI
            </h3>
            <WrapDown />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default OutCome;
