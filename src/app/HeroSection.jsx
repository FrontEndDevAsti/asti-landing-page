"use client";

// import React, { useEffect, useState } from "react";
// import { Grid, Box, useMediaQuery } from "@mui/material";
// import { motion } from "framer-motion";
// import { isMediumScreens, isSmallScreens } from "./Constants/Constants";

// const GridWithBackgroundImage = () => {
//   const isSmallScreen = useMediaQuery(isSmallScreens);
//   const isMediumScreen = useMediaQuery(isMediumScreens);
//   const handleClick = () => {
//     window.location.href = "https://asti.academy/contactus.php";
//   };
//   const [engineerType, setEngineerType] = useState("Electronic Engineers");
//   const engineerTypes = [
//     "Electronic Engineers",
//     "IT Engineers",
//     "Civil Engineers",
//     "Mechanical Engineers",
//     "Automobile Engineers",
//   ];
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % engineerTypes.length);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     setEngineerType(engineerTypes[index]);
//   }, [index]);
//   return (
//     <Grid
//       container
//       display={"flex"}
//       justifyContent={"space-between"}
//       height={isMediumScreen ? "auto" : "96vh"}
//     >
//       <Grid item xs={12} lg={6} p={isSmallScreen ? "2" : 22}>
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             transition: {
//               duration: 0.8,
//               ease: [0.44, 0, 0, 1],
//             },
//           }}
//           viewport={{
//             amount: "some",
//             once: true,
//           }}
//           // className="text-[45px] text-black leading-[47.25px] md:text-[60px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
//           className="text-[45px] text-black leading-[47.25px] md:text-[72px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
//         >
//           Crafting future
//           <br />
//         </motion.h1>
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             transition: {
//               duration: 0.8,
//               ease: [0.44, 0, 0, 1],
//             },
//           }}
//           viewport={{
//             amount: "some",
//             once: true,
//           }}
//           // className="text-[35px] text-red-600 leading-[47.25px] lg:text-[60px] md:text-[60px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
//           className="text-[45px] text-red-600 leading-[47.25px] md:text-[72px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"

// >
//           {engineerType}
//           <br />
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             transition: {
//               duration: 0.8,
//               delay: 0.2,
//               ease: [0.44, 0, 0, 1],
//             },
//           }}
//           viewport={{
//             amount: "some",
//             once: true,
//           }}
//           className="be-vietnam-pro-medium text-black  text-[18px] py-12 leading-[28.3px] tracking-[-0.74px] md:text-[20px] md:leading-[27px] md:tracking-[-0.6px] text-center md:text-left w-full md:w-[480px]"
//         >
//           ASTI combines science, creativity, and critical thinking to drive
//           innovation and fuel your path toward engineering excellence.
//         </motion.p>

//         <Box py={3} textAlign={isSmallScreen ? "center" : ""}>
//           <motion.div>
//             <button className="button" onClick={handleClick}>
//               <svg xmlns="http://www.w3.org/2000/svg">
//                 <rect className="border" pathLength="100"></rect>
//                 <rect className="loading" pathLength="100"></rect>

//                 <svg
//                   className="done-svg"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 ></svg>
//               </svg>
//               <div className="txt-upload text-red-600 font-semibold poppins-medium">
//                 Apply Now
//               </div>
//             </button>
//           </motion.div>
//         </Box>
//       </Grid>
//       {!isMediumScreen && (
//         <Grid
//           item
//           xs={12}
//           lg={6}
//           sx={{
//             position: "relative",
//             overflow: "hidden",
//             height: "96vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <video
//             autoPlay
//             loop
//             muted
//             style={{
//               position: "absolute",
//               top: 0,
//               right: 0,
//               width: "70%",
//               height: "70%",
//               objectFit: "cover",
//               zIndex: -1,
//             }}
//           >
//             <source src="/videos/hero-vid.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </Grid>
//       )}
//     </Grid>
//   );
// };

// export default GridWithBackgroundImage;
import React, { useEffect, useState } from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { isMediumScreens, isSmallScreens } from "./Constants/Constants";

const GridWithBackgroundImage = () => {
  const isSmallScreen = useMediaQuery(isSmallScreens);
  const isMediumScreen = useMediaQuery(isMediumScreens);

  const handleClick = () => {
    window.location.href = "https://asti.academy/contactus.php";
  };

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
    }, 3000);

    return () => clearInterval(intervalId);
  });

  const engineerType = engineerTypes[index];

  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-between"}
      height={isMediumScreen ? "auto" : "96vh"}
    >
      <Grid item xs={12} lg={6} p={isSmallScreen ? "2" : 22}>
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
          className="text-[45px] text-black leading-[47.25px] md:text-[72px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
        >
          Crafting future
          <br />
        </motion.h1>
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
          className="text-[45px] text-red-600 leading-[47.25px] md:text-[72px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
        >
          {engineerType}
          <br />
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
          className="be-vietnam-pro-medium text-black text-[18px] py-12 leading-[28.3px] tracking-[-0.74px] md:text-[20px] md:leading-[27px] md:tracking-[-0.6px] text-center md:text-left w-full md:w-[480px]"
        >
          ASTI combines science, creativity, and critical thinking to drive
          innovation and fuel your path toward engineering excellence.
        </motion.p>

        <Box py={3} textAlign={isSmallScreen ? "center" : ""}>
          <motion.div>
            <button className="button" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg">
                <rect className="border" pathLength="100"></rect>
                <rect className="loading" pathLength="100"></rect>

                <svg
                  className="done-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                ></svg>
              </svg>
              <div className="txt-upload text-red-600 font-semibold poppins-medium">
                Apply Now
              </div>
            </button>
          </motion.div>
        </Box>
      </Grid>
      {!isMediumScreen && (
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "96vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "70%",
              height: "70%",
              objectFit: "cover",
              zIndex: -1,
            }}
          >
            <source src="/videos/hero-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
      )}
    </Grid>
  );
};

export default GridWithBackgroundImage;
