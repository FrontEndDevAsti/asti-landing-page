"use client";
import React from "react";
import { Grid, Box, Stack, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { isSmallScreens } from "./Constants/Constants";
import Image from "next/image";

const astiData = [
  {
    title: "100% practical training",
    description:
      "Focuses on theoretical knowledge with practical training involved.",
    icon: <CheckCircle sx={{ color: "green" }} />,
  },
  {
    title: "No exams, assignment based evaluation",
    description: "Student performance is assessed through assignments.",
    icon: <CheckCircle sx={{ color: "green" }} />,
  },
  {
    title: "Complete in 9 months (RPL)",
    description:
      "The program takes 9 months to complete, with Recognition of Prior Learning (RPL).",
    icon: <CheckCircle sx={{ color: "green" }} />,
  },
  {
    title: "Dual certification KHDA, Qualifi",
    description:
      "One will be certified with both KHDA (UAE Accreditation) and Qualifi (UK Recognition).",
    icon: <CheckCircle sx={{ color: "green" }} />,
  },
  {
    title: "Flexible classes weekend, online",
    description:
      "The flexible schedule includes weekend and online classes, accommodating the needs of working professionals and students.",
    icon: <CheckCircle sx={{ color: "green" }} />,
  },
  {
    title: "Advanced Labs",
    description:
      "Access to advanced labs equipped with advanced technology to support students technical skills.",
    icon: <CheckCircle sx={{ color: "green" }} />,
  },
  {
    title: "Affordable fee",
    description:
      "Getting quality education accessible to every student without financial barriers.",
    icon: <CheckCircle sx={{ color: "green" }} />,
  },
];

const otherData = [
  {
    title: "Classroom lectures",
    description: "Delivering old curriculum textbook based lectures.",
    icon: <Cancel sx={{ color: "red" }} />,
  },
  {
    title: "Physical examination",
    description: "Need to prove proficiency by written exam.",
    icon: <Cancel sx={{ color: "red" }} />,
  },
  {
    title: "Continuous Study",
    description: "Take 4 years to complete without technical experience.",
    icon: <Cancel sx={{ color: "red" }} />,
  },
  {
    title: "University Certification",
    description: "Need equivalency for university certificates.",
    icon: <Cancel sx={{ color: "red" }} />,
  },
  {
    title: "No Flexible Schedule",
    description: "Need to attend continuous long class lectures.",
    icon: <Cancel sx={{ color: "red" }} />,
  },
  {
    title: "No practical Knowledge",
    description: "Only aware about textbook theories.",
    icon: <Cancel sx={{ color: "red" }} />,
  },
  {
    title: "Expensive",
    description: "Limited scholarship and payment options.",
    icon: <Cancel sx={{ color: "red" }} />,
  },
];

function Comparison() {
  const isSmallScreen = useMediaQuery(isSmallScreens);
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
        }} 
      >
        <Box textAlign={"center"} pb={8}>
          {" "}
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
            className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-[#000000] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px]"
          >
            What makes ASTI the right choice for you
          </motion.h2>
        </Box>

        <Grid
          container
          direction={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={3}
            mx={2}
            
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              borderRadius={"20px"}
              boxShadow={2}
              bgcolor={"white"}
              // pl={"0px !important"}
              px={2}
            >
              <Box
                mx={3}
                borderRadius={"20px"}
                bgcolor={"#bdbdbd"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                p={2}
              >
                 
                <Image src="/images/logo-2.png" height={70} width={80} />
               
              </Box>
              <Stack spacing={1} px={5} py={2}>
                {astiData.map((item, index) => (
                  <Stack key={index}>
                    <Stack spacing={1} direction="row" alignItems="center">
                      {item.icon}
                      <h1 className="poppins-medium text-black text-[16px]">
                        {item.title}
                      </h1>
                    </Stack>
                    <Box pl={4}>
                      <p
                        className={`text-[#475466] text-[16px] leading-[24px] flex items-center `}
                      >
                        {item.description}
                      </p>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              sm={1}
              display="flex"
alignItems={"center"}
justifyContent={"center"}
              p={isSmallScreen ? 2 : 0}
              pl={"0px !important"}

            >
              <Image src="/images/vs-red.png" alt="alt" width={60} height={60} />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              borderRadius={"20px"}
              boxShadow={2}
              bgcolor={"white"}
              pl={"0px !important"}
            >
              <Box
                mx={3}
                borderRadius={"20px"}
                bgcolor={"grey"}
                alignItems={"center"}
                textAlign={"center"}
                p={2}
              >
                 <h3 className="font-medium text-[24px] leading-[28.8px] tracking-[-1px] text-[#ffffff]">
                OTHERS
                </h3>
              </Box>
              <Stack spacing={1} px={5} py={2}>
                {otherData.map((item, index) => (
                  <Stack key={index}>
                    <Stack spacing={1} direction="row" alignItems="center">
                      {item.icon}
                      <h1 className="poppins-medium text-black text-[16px]">
                        {item.title}
                      </h1>
                    </Stack>
                    <Box pl={4}>
                      <p
                        className={` text-[#475466] text-[16px] leading-[24px] flex items-center `}
                      >
                        {item.description}
                      </p>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </>
  );
}

export default Comparison;
