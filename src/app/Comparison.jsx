"use client";
import { CheckCircle } from "@mui/icons-material";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import CancelIcon from '@mui/icons-material/Cancel';
import Image from "next/image";

function Comparison() {
  return (
    <>
    <motion.div
initial={{ opacity: 0, y: 10 }}
whileInView={{
  opacity: 1,
  y: 0,
  transition: {
    type: "spring",
    damping: 30,
    stiffness: 180,
    mass: 1,
    delay: 0.2,
  },
}}
viewport={{
  amount: "some",
  once: true,
}}>
        <Grid container direction={"flex"} alignItems={"center"} justifyContent={"center"}
      sx={{
        backgroundImage: 'url("https://cdn.prod.website-files.com/6142f6521fff9ddbbc92142a/643d0b649868c13eb671bcdd_Curve.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh",
      }}
    >
      
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        spacing={3}
      >
          <Grid
          item
          xs={12}
          sm={6}
          md={3}
          borderRadius={"20px"}
          boxShadow={2}
          bgcolor={"white"}
pl={"0px !important"}
        >
          <Box mx={3} borderRadius={"20px"} bgcolor={"#E42327"} alignItems={"center"} p={2}>
            ASTI
          </Box>
          <Stack spacing={2} px={5} py={2}>
            <Stack>
            <Stack spacing={1} direction="row" alignItems="center">
            <CheckCircle sx={{ color: "green" }}/>
              <h1>flexible</h1>
            </Stack>
            <Box pl={4}><p>100% online and everything</p></Box>
            </Stack>
            <Stack>
            <Stack spacing={1} direction="row" alignItems="center">
            <CheckCircle sx={{ color: "green" }}/>
              <h1>flexible</h1>
            </Stack>
            <Box pl={4}><p>100% online and everything</p></Box>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={0.5} display="flex" justifyContent="center" alignItems="center">
          <img
            src="https://cdn.prod.website-files.com/6142f6521fff9ddbbc92142a/643e0b1c989cf6323971f0c3_S.png"
            alt="Center Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>

          <Grid
          item
          xs={12}
          sm={6}
          md={3}
          borderRadius={"20px"}
          boxShadow={2}
          bgcolor={"white"}
pl={"0px !important"}
        >
          <Box mx={3} borderRadius={"20px"} bgcolor={"grey"} alignItems={"center"} p={2}>
            OTHERS
          </Box>
          <Stack spacing={2} px={5} py={2}>
            <Stack>
            <Stack spacing={1} direction="row" alignItems="center">
            <CancelIcon sx={{ color: "red" }}/>
              <h1>flexible</h1>
            </Stack>
            <Box pl={4}><p>100% online and everything</p></Box>
            </Stack>
            <Stack>
            <Stack spacing={1} direction="row" alignItems="center">
            <CancelIcon sx={{ color: "red" }}/>
              <h1>flexible</h1>
            </Stack>
            <Box pl={4}><p>100% online and everything</p></Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

    </Grid>
</motion.div>

    </>

  );
}

export default Comparison;


