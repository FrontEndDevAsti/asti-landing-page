// "use client"
// import React from 'react';
// import { Grid, Box, Typography,useMediaQuery } from '@mui/material';
// import { styled } from '@mui/system';
// import { motion } from 'framer-motion';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import {
//   isSmallScreens,
// } from "./Constants/Constants";

// const BackgroundContainer = styled(Box)(({isSmallScreen }) => ({
//   background: 'linear-gradient(90deg, rgba(236,246,255,1) 0%, rgba(255,239,238,1) 100%)',
//   padding: '20px',
//   overflow: 'hidden',
//   margin:isSmallScreen ? "100px" : "20px",
//   borderRadius: '20px',
// }));

// const TextContainer = styled(Box)({
//   padding: '20px'
// });

// const StyledImage = styled('img')({
//   maxWidth: '100%',
//   height: 'auto',
// });

// const WhyAsti = () => {
//   const isSmallScreen = useMediaQuery(isSmallScreens);
//   return (
//     <>
//         <BackgroundContainer isSmallScreen={isSmallScreen}>
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <TextContainer>
//             <motion.h4
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3, ease: [0.44, 0, 0, 1] }}
//               className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-[#0f1728] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px] pb-4"
//             >
//               Why should you consider <span style={{ color: '#E42327' }}>ASTI?</span>
//             </motion.h4>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4, ease: [0.44, 0, 0, 1] }}
//               className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
//             >
//               <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
//               Graduated over 75,000+ students
//             </motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5, ease: [0.44, 0, 0, 1] }}
//               className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
//             >
//               <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
//               More than 32 different nationalities
//             </motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6, ease: [0.44, 0, 0, 1] }}
//               className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
//             >
//               <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
//               International recognition for Engineering Qualifications
//             </motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6, ease: [0.44, 0, 0, 1] }}
//               className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
//             >
//               <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
//               Professional & Technical Curriculum
//             </motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6, ease: [0.44, 0, 0, 1] }}
//               className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
//             >
//               <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
//               Highly qualified and Ph.D. holders teaching support
//             </motion.p>
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6, ease: [0.44, 0, 0, 1] }}
//               className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
//             >
//               <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
//               International recognition for Engineering Qualifications
//             </motion.p>
//           </TextContainer>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <StyledImage src="/images/Girl-Img.png" alt="Student Image" />
//         </Grid>
//       </Grid>
//     </BackgroundContainer>
//     </>

//   );
// };

// export default WhyAsti;
"use client";
import React from 'react';
import { Grid, Box,useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { isSmallScreens } from "./Constants/Constants";
import tickAnimation from '../../public/animations/tickanimation.json';


const BackgroundContainer = styled(Box)<{ isSmallScreen: boolean }>(({ theme, isSmallScreen }) => ({
  background: 'linear-gradient(90deg, rgba(236,246,255,1) 0%, rgba(255,239,238,1) 100%)',
  padding: '20px',
  overflow: 'hidden',
  margin:"100px",
  borderRadius: '20px',
  [theme.breakpoints.down('sm')]: {
    margin: '10px', // Adjust for small screens
  },
}));

const TextContainer = styled(Box)({
  padding: '20px',
});

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const WhyAsti = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <BackgroundContainer isSmallScreen={isSmallScreen}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextContainer>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.44, 0, 0, 1] }}
                className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-[#0f1728] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px] pb-4"
                style={{ marginBottom: '10px' }} // Adjust margin-bottom as needed
              >
                Why should you consider <span style={{ color: '#E42327' }}>ASTI?</span>
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.44, 0, 0, 1] }}
                className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
              >
                <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
                Graduated over 75,000+ students
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.44, 0, 0, 1] }}
                className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
              >
                <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
                More than 32 different nationalities
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.44, 0, 0, 1] }}
                className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
              >
                <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
                International recognition for Engineering Qualifications
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.44, 0, 0, 1] }}
                className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
              >
                <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
                Professional & Technical Curriculum
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.44, 0, 0, 1] }}
                className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
              >
                <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
                Highly qualified and Ph.D. holders teaching support
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.44, 0, 0, 1] }}
                className={`mb-2 text-[#475466] text-[16px] leading-[24px] flex items-center transition-all duration-300 opacity-0`}
              >
                <CheckCircleIcon sx={{ fontSize: 18, marginRight: 1, color: 'green', flexShrink: 0 }} />
                International recognition for Engineering Qualifications
              </motion.p>
            </TextContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledImage src="/images/Girl-Img.png" alt="Student Image" />
          </Grid>
        </Grid>
      </BackgroundContainer>
    </>
  );
};

export default WhyAsti;

