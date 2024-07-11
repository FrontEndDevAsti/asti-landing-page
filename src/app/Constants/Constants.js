export const isLargeScreens = "(max-width:1600px)";
export const isMediumScreens = "(max-width:1023px)";
export const isSmallScreens = "(max-width:768px)";
export const isExtraSmallScreens = "(max-width:540px)";

export const PROGRAMS = {
    MECH: {
      commonUnits: [
        { code: "MEP006", title: "Modeling and Simulation of Mechanical Systems", credits: "15 Credits" },
        { code: "MEP007", title: "Basic Electrical and Electronics Engineering", credits: "15 Credits" },
        // Add more units here...
      ],
      coreUnit1: [
        { code: "MEP008", title: "Welding Principles and Application", credits: "15 Credits" },
        // Add more units here...
      ],
      coreUnit2: [
        { code: "MEP015", title: "Design and Applied Mechanics", credits: "15 Credits" },
        // Add more units here...
      ],
      specialUnits: [
        { code: "MEP017", title: "Power Plant Engineering", credits: "15 Credits" },
        { code: "MEP018", title: "Advanced Mechanical Engineering Systems", credits: "15 Credits" },
        // Add more units here...
      ],
    },
    CIVIL: {
      commonUnits: [
        { code: "CIV001", title: "Introduction to Civil Engineering", credits: "15 Credits" },
        { code: "CIV002", title: "Structural Analysis", credits: "15 Credits" },
        // Add more units here...
      ],
      coreUnit1: [
        { code: "CIV003", title: "Hydraulics", credits: "15 Credits" },
        // Add more units here...
      ],
      coreUnit2: [
        { code: "CIV004", title: "Geotechnical Engineering", credits: "15 Credits" },
        // Add more units here...
      ],
      specialUnits: [
        { code: "CIV005", title: "Transportation Engineering", credits: "15 Credits" },
        { code: "CIV006", title: "Environmental Engineering", credits: "15 Credits" },
        // Add more units here...
      ],
    },
    IT: {
      commonUnits: [
        { code: "IT001", title: "Introduction to Information Technology", credits: "15 Credits" },
        { code: "IT002", title: "Programming Fundamentals", credits: "15 Credits" },
        // Add more units here...
      ],
      coreUnit1: [
        { code: "IT003", title: "Database Systems", credits: "15 Credits" },
        // Add more units here...
      ],
      coreUnit2: [
        { code: "IT004", title: "Networks and Communications", credits: "15 Credits" },
        // Add more units here...
      ],
      specialUnits: [
        { code: "IT005", title: "Software Engineering", credits: "15 Credits" },
        { code: "IT006", title: "Cyber Security", credits: "15 Credits" },
        // Add more units here...
      ],
    },
    // Add other programs here...
  };