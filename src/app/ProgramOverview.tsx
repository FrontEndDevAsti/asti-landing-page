"use client"

import { Grid, Stack, Box } from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import VerifiedIcon from "@mui/icons-material/Verified";


const Benefits = () => {
  return (
    <div className="bg-white">
      <div className="flex h-48 items-center justify-center text-center">
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
          className="poppins-medium  text-[33px] leading-[36.3px] tracking-[-1px] text-[#0f1728] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px] sm:text-center"
        >
          Our Undergraduate Engineering Programs
        </motion.h2>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center"></div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-gray-200">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  
  return (
    <div
      key={card.id}
      className="group relative h-[600px]  w-[1050px]  overflow-hidden  rounded-[20px] bg-white card-container"
    >
      <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} p={3} spacing={4}>
        <Grid item xs={12} sm={6}>
          <img
            src={card.url}
            alt={card.title}
            className="rounded-lg object-cover h-full w-full"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack spacing={3}>
          <h3 className="font-medium text-[28px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                  {card.title}
                </h3>
            {card.details.map((detail, index) => (
              
              <Stack key={index} direction="row" spacing={3} alignItems="center">
                <Box>{getIcon(index)}</Box>
                <Box>
                <h3 className="font-medium text-[20px] leading-[28.8px] tracking-[-1px] text-[#0f1728]">
                  {detail.title}
                </h3>
                  <p className="font-normal leading-[24.3px] text-[18px] tracking-[-0.36px] text-black/50 text-center text-left sm:text-left">
                 {detail.content}
                </p>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

const getIcon = (index: number) => {
  switch (index) {
    case 0:
      return <SchoolIcon sx={{ color: '#E42327' }}/>;
    case 1:
      return <AccessTimeIcon sx={{ color: '#E42327' }} />;
    case 2:
      return <CreditCardIcon sx={{ color: '#E42327' }}/>;
    case 3:
      return <VerifiedIcon sx={{ color: '#E42327' }}/>;
    default:
      return null;
  }
};

export default Benefits;

type CardType = {
  url: string;
  title: string;
  id: number;
  details: {
    title: string;
    content: string;
  }[];
};

const cards: CardType[] = [
  {
    url: "https://asti.academy/assets/images/latest/mechanical.jpg",
    title: "Mechanical Engineering",
    id: 1,
    details: [
      { title: "Mode of Study", content: "Online / On Campus / Weekend / Flexible Learning" },
      { title: "Program Duration", content: "2 Years 6 Months (RPL)" },
      { title: "Credit Level", content: "240 Cedits" },
      { title: "Qualification", content: "UK Level 5" },
    ],
  },
  {
    url: "https://asti.academy/assets/images/latest/automobile.jpg",
    title: "Automobile Engineering",
    id: 2,
    details: [
      { title: "Mode of Study", content: "Online / On Campus / Weekend / Flexible Learning" },
      { title: "Program Duration", content: "2 Years 6 Months (RPL)" },
      { title: "Credit Level", content: "240 Cedits" },
      { title: "Qualification", content: "UK Level 5" },
    ],
  },
  {
    url: "https://asti.academy/assets/images/latest/electrical.jpg",
    title: "Electrical Technology",
    id: 3,
    details: [
      { title: "Mode of Study", content: "Online / On Campus / Weekend / Flexible Learning" },
      { title: "Program Duration", content: "2 Years 6 Months (RPL)" },
      { title: "Credit Level", content: "240 Cedits" },
      { title: "Qualification", content: "UK Level 5" },
    ],
  },
  {
    url: "https://asti.academy/assets/images/latest/EEE.jpg",
    title: "Electronic Engineering",
    id: 4,
    details: [
      { title: "Mode of Study", content: "Online / On Campus / Weekend / Flexible Learning" },
      { title: "Program Duration", content: "2 Years 6 Months (RPL)" },
      { title: "Credit Level", content: "240 Cedits" },
      { title: "Qualification", content: "UK Level 5" },
    ],
  },
  {
    url: "https://asti.academy/assets/images/latest/civil.jpg",
    title: "Civil Engineering",
    id: 5,
    details: [
      { title: "Mode of Study", content: "Online / On Campus / Weekend / Flexible Learning" },
      { title: "Program Duration", content: "2 Years 6 Months (RPL)" },
      { title: "Credit Level", content: "240 Cedits" },
      { title: "Qualification", content: "UK Level 5" },
    ],
  }, {
    url: "https://asti.academy/assets/images/latest/IT.jpg",
    title: "IT Engineering",
    id: 6,
    details: [
      { title: "Mode of Study", content: "Online / On Campus / Weekend / Flexible Learning" },
      { title: "Program Duration", content: "2 Years 6 Months (RPL)" },
      { title: "Credit Level", content: "240 Cedits" },
      { title: "Qualification", content: "UK Level 5" },
    ],
  },
];
