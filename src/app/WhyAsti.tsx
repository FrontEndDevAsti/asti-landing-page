"use client"
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BackgroundContainer = styled(Box)({
  background: 'linear-gradient(90deg, rgba(236,246,255,1) 0%, rgba(255,239,238,1) 100%)',
  padding: '20px',
  overflow: 'hidden',
  margin:"100px",
  borderRadius:"20px"
});

const TextContainer = styled(Box)({
  padding: '20px',
});

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const ListItem = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
  '& .MuiSvgIcon-root': {
    marginRight: '8px',
    color: 'green',
  },
});

const WhyAsti = () => {
  return (
    <BackgroundContainer>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <TextContainer>
            <Typography variant="h4" component="h2" gutterBottom>
              Why should you consider <span style={{ color: '#1a73e8' }}>ASTI?</span>
            </Typography>
            <ListItem variant="body1">
              <CheckCircleIcon />
              2,50,000+ Students Trained
            </ListItem>
            <ListItem variant="body1">
              <CheckCircleIcon />
              90% Students Score a 7+ Band
            </ListItem>
            <ListItem variant="body1">
              <CheckCircleIcon />
              4.7/5 Average Student Rating
            </ListItem>
          </TextContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledImage src="/images/Girl-Img.png" alt="Student Image" />
        </Grid>
      </Grid>
    </BackgroundContainer>
  );
};

export default WhyAsti;
