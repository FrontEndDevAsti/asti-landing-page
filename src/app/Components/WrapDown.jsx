import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const accordionData = [
  {
    id: 0,
    name: "Civil Engineering",
    details: [
      "Structural Engineer",
      "Geotechnical Engineer",
      "Environmental Engineer",
      "Construction Engineer",
    ],
  },
  {
    id: 1,
    name: "Mechanical Engineering",
    details: [
      "Aeronautical Engineer",
      "Manufacturing Systems Engineer",
      "Mechanical Design Engineer",
      "Robotics Engineer",
    ],
  },
  {
    id: 2,
    name: "Automobile Engineering",
    details: [
      "Automobile Designer",
      "Automotive Technician",
      "Automotive Software Engineers",
      "Production Engineer",
    ],
  },
  {
    id: 3,
    name: "Electrical & Electronics Engineering",
    details: [
      "Microelectronic Engineer",
      "Instrumentation Engineer",
      "Telecommunications Engineer",
      "Electrical Design Engineer",
    ],
  },
];

const Wrapdown = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>
      <div className="accordion__container flex flex-col gap-4 mt-6">
        {accordionData.map((item) => (
          <div
            key={item.id}
            className={`accordion__item ${
              openAccordion === item.id ? "open" : ""
            }`}
            ref={(el) => (accordionRefs.current[item.id] = el)}
          >
            <div
              className="accordion__header flex items-center justify-between cursor-pointer px-6 py-4  hover:bg-gray-200 transition-all duration-300"
              onClick={() => handleAccordionClick(item.id)}
            >
              <div className="flex items-center gap-3">
                <ExpandMoreIcon
                  className={`transform transition-transform duration-300 ${
                    openAccordion === item.id
                      ? "rotate-180 text-red-600"
                      : "rotate-0 text-red-600"
                  }`}
                  style={{ fontSize: 24 }}
                />
                <p className="text-lg font-medium">{item.name}</p>
              </div>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openAccordion === item.id ? "auto" : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="accordion__details"
            >
              <ul className="text-[#475466] text-[18px] leading-[24px] ">
                {item.details.map((detail, index) => (
                  <li key={index} className="mb-2">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wrapdown;
