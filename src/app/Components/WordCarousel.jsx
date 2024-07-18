import React from "react";

// Define the keyframes in a CSS string
const keyframes = `
  @keyframes flip5 {
    0% { margin-top: -450px; }
    5% { margin-top: -360px; }
    20% { margin-top: -360px; }
    25% { margin-top: -270px; }
    40% { margin-top: -270px; }
    45% { margin-top: -180px; }
    60% { margin-top: -180px; }
    65% { margin-top: -90px; }
    80% { margin-top: -90px; }
    85% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -450px; }
  }
`;

// Append the keyframes to a <style> tag in the document head
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

const WordCarousel = () => {
  const divStyle = {
    overflow: "hidden",
    position: "relative",
    float: "right",
    height: "95px",
    paddingTop: "10px",
    marginTop: "-10px",
  };

  const liStyle = {
    fontWeight: "700",
    padding: "0 10px",
    height: "45px",
    marginBottom: "45px",
    display: "block",
  };

  const ulStyle = {
    animation: "flip5 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite",
  };

  return (
    <div style={divStyle}>
      <ul style={ulStyle}>
        <li className="text-[40px] text-black leading-[42.25px] md:text-[40px] md:leading-[55.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[710px] z-20">
          Automobile Engineers
        </li>
        <li
          className="text-[45px] text-black leading-[47.25px] md:text-[60px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
          style={liStyle}
        >
          Civil Engineers
        </li>
        <li
          className="text-[45px] text-black leading-[47.25px] md:text-[60px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
          style={liStyle}
        >
          Automobile Engineers
        </li>
        <li
          className="text-[45px] text-black leading-[47.25px] md:text-[60px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
          style={liStyle}
        >
          Electronic Engineers
        </li>
        <li
          className="text-[45px] text-black leading-[47.25px] md:text-[60px] md:leading-[75.6px] tracking-[-2px] md:tracking-[-3px] poppins-medium text-center md:text-left md:w-[610px] z-20"
          style={liStyle}
        >
          IT Engineers
        </li>
      </ul>
    </div>
    // </h4>
  );
};

export default WordCarousel;
