import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";

const faqs = [
  {
    question:
      "What are the entry requirements for Level 4 and Level 5 engineering courses?",
    answer:
      "To enroll in ASTI Academy Level 4 and Level 5 engineering courses, candidates typically need to have a high school diploma or an equivalent qualification. Additionally, a strong foundation in subjects like mathematics and physics is advantageous. Some courses may also consider applicants with relevant work experience or prior learning in the field of engineering.",
  },
  {
    question:
      "What are the benefits of studying Engineering qualifications in the UAE?",
    answer:
      "Studying engineering qualifications in the UAE offers numerous benefits. The UAE is a hub of technological innovation and infrastructure development, providing students with exposure to advanced projects and industry practices. Additionally, the multicultural environment and strategic location enhance networking opportunities. Graduates from UAE institutions are well-regarded globally, opening doors to international career opportunities.",
  },
  {
    question: "What is the duration of Level 4 & 5 engineering qualifications?",
    answer:
      "The duration of Level 4 and Level 5 engineering qualifications is typically 9 months each, allowing students to complete both levels within 12 months. These accelerated programs enable students to quickly gain the necessary skills and knowledge through RPL(Recognition of Prior Learning) to advance in their engineering careers or pursue further education.",
  },
  {
    question:
      "What are the course delivery modes & learning outcomes of Level 4 & 5 Engineering Program?",
    answer:
      "Our Level 4 and Level 5 engineering programs offer flexible course delivery modes, including full-time, weekend, and online classes. This flexibility caters to the diverse needs of the students, whether they are working professionals or full-time learners. The learning outcomes include a thorough understanding of engineering principles, technical skills, and the ability to apply practical knowledge to real-world scenarios.",
  },
  {
    question: "Can I transfer credits to a university degree program?",
    answer:
      "Yes, credits earned from our Level 4 and Level 5 engineering qualifications can often be transferred to a university degree program. This means that upon completion of our courses, students may be eligible to enter directly into the third year of a bachelor's degree in engineering, depending on the university's credit transfer policies.",
  },
  {
    question:
      "Would it be possible to apply by college/school drop-outs for the course?",
    answer:
      "Yes, college or school drop-outs can easily apply for the engineering programs. We recognize the value of practical experience and prior learning, and our admissions team is ready to evaluate each applicant's unique background and qualifications. People with any age can enroll in engineering and will find our programs useful and effective.",
  },
  {
    question: "Is financial aid or scholarships available for these courses?",
    answer:
      "Yes, we offer financial aid and scholarships up to 30% to eligible students to make our engineering courses more accessible. Our aim is to support talented and deserving students in their educational journey. We encourage prospective students to contact our admissions office to learn more about the available financial aid options and the application process.",
  },
];

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleMouseEnter = (id: string) => {
    if (isLargeScreen) {
      setIsOpen((prevState) => ({
        ...prevState,
        [id]: true,
      }));
    }
  };

  const handleMouseLeave = (id: string) => {
    if (isLargeScreen) {
      setIsOpen((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }
  };

  return (
    <div
      id="accordion-flush"
      className="w-full sm:w-[658px] md:w-[756px] !transition-all flex flex-col"
    >
      {faqs.map((faq, index) => (
        <div
          key={`accordion-item-${index}`}
          onMouseEnter={() => handleMouseEnter(`accordion-flush-body-${index}`)}
          onMouseLeave={() => handleMouseLeave(`accordion-flush-body-${index}`)}
        >
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#0f1728] border-gray-200 gap-3 z-40"
            onClick={() => toggleAccordion(`accordion-flush-body-${index}`)}
          >
            <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px]">
              {faq.question}
            </span>
            <div
              className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
                isOpen[`accordion-flush-body-${index}`]
                  ? "rotate-[45deg]"
                  : "rotate-0"
              } shrink-0`}
            >
              <AddIcon />
            </div>
          </button>
          <div
            id={`accordion-flush-body-${index}`}
            className={`transition-all duration-500 ${
              isOpen[`accordion-flush-body-${index}`]
                ? "h-auto"
                : "h-0 overflow-hidden"
            }`}
          >
            <div className="pb-5">
              <p
                className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
                  isOpen[`accordion-flush-body-${index}`]
                    ? "opacity-100 delay-150"
                    : ""
                } transition-all duration-300 opacity-0`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
