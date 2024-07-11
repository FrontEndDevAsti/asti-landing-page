"use client"
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

const Step = ({ step, title, description, icon, color }: { step: string, title: string, description: string, icon: string, color: string }) => (
  <div className="flex items-start gap-4 mb-8 relative">
    {/* <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${color} text-white font-bold`}>
      {icon}
    </div> */}
    <div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);

const Pathway = () => {
  const handleClick = () => {
    window.location.href = "https://asti.academy/contactus.php";
  };
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 ">
        <Grid item pb={3} textAlign={"center"}>
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
          className="poppins-medium text-[33px] leading-[36.3px] tracking-[-1px] text-[#0f1728] md:text-[46px] md:leading-[50.6px] md:tracking-[-1.5px]"
        >
          Educational Pathway
        </motion.h2>
        </Grid>

      <div className="relative">
        <div className="absolute left-5 top-0 w-px h-full bg-purple-200"></div>
        <div className="relative pl-10">
          <Step
            step="1"
            title="🖥️ Attend a class with top IELTS trainer"
            description="Get the best of both worlds by attending our interactive and personalized session with only 5 students, from the comfort of your home and at your preferred time. A new class starts every 15 mins!"
            icon="📘"
            color="bg-orange-500"
          />
          <Step
            step="2"
            title="📝 Take the Band Predictor Test"
            description="Know where your preparation stands and identify your weak areas."
            icon="✏️"
            color="bg-blue-500"
          />
          <Step
            step="3"
            title="👨‍🏫 Expert Evaluation and Feedback"
            description="After the test, get 1 on 1 personalised feedback from your instructor. Learn strategies, tips and tricks, based on your performance."
            icon="👩‍🏫"
            color="bg-green-500"
          />
          <Step
            step="4"
            title="🎓 Ace IELTS with confidence"
            description="Apply your learnings and score a 7+ IELTS band in your 1st attempt."
            icon="📝"
            color="bg-orange-500"
          />
        </div>
      </div>
      <div className="text-center mt-8">
      <button
                onClick={handleClick}
                className="relative px-8 py-2 text-red-600 poppins-medium rounded-md bg-white isolation-auto z-10 border-2 border-red-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white"
              >
                Download Brochure
              </button>
      </div>
    </div>
  );
};

export default Pathway;
