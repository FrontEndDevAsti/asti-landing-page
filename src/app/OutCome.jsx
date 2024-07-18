"use client";

import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Container, Grid } from "@mui/material";
import WrapDown from "./Components/WrapDown";

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
            <img
              className="w-full h-auto"
              src="https://media.gettyimages.com/id/472361319/vector/success-education.jpg?s=612x612&w=0&k=20&c=hTMuQB5NJlMHT2E19-W4b7V5wsyAUb917JurLNUq6ek="
              alt="About Thumb 1"
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
