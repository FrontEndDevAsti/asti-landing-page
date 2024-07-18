export const isLargeScreens = "(max-width:1600px)";
export const isMediumScreens = "(max-width:1023px)";
export const isSmallScreens = "(max-width:768px)";
export const isExtraSmallScreens = "(max-width:540px)";

export const PROGRAMS = {
  "Civil Engineering": {
    "Common Units": [
      { code: "CUP001", title: "Technical Drawings with Engineering Graphics", credits: "12 Credits" },
      { code: "CUP002", title: "Workshop and General Safety", credits: "12 Credits" },
      { code: "CUP003", title: "IT Application for Engineers", credits: "12 Credits" },
    ],
    "Core Unit 1": [
      { code: "CEP001", title: "Construction Material, Method and Techniques", credits: "12 Credits" },
      { code: "CEP002", title: "Practical application of civil constructions", credits: "12 Credits" },
      { code: "CEP003", title: "Applied Mathematics for civil engineering", credits: "12 Credits" },
      { code: "CEP004", title: "Applied Mathematics for civil engineering", credits: "12 Credits" },
      { code: "CEP005", title: "Geotechnical and Foundation Engineering", credits: "12 Credits" },
      { code: "CEP011", title: "Environmental impact of construction", credits: "12 Credits" },
      { code: "CEP010", title: "Civil 2D & 3D CAD Design", credits: "12 Credits" },

    ],
    "Core Unit 2": [
      { code: "CIV004", title: "Geotechnical Engineering", credits: "15 Credits" },
    ],
    "Special Units": [
      { code: "SU001", title: "Project", credits: "30 Credits" },
    ],
  },
  "Mechanical Engineering": {
    "Common Units": [
      { code: "CUP001", title: "Technical Drawings with Engineering Graphics", credits: "12 Credits" },
      { code: "CUP002", title: "Workshop and General Safety", credits: "12 Credits" },
      { code: "CUP003", title: "IT Application for Engineers", credits: "12 Credits" },
    ],
    "Core Unit 1": [
      { code: "MEP001", title: "Strength of Materials", credits: "12 Credits" },
      { code: "MEP002", title: "Computer Aided Design and Drafing", credits: "12 Credits" },
      { code: "MEP003", title: "Principle and Operation of Fluid Machinery", credits: "12 Credits" },
      { code: "MEP004", title: "Mechanical Workshop Practice", credits: "12 Credits" },
      { code: "MEP005", title: "Applied Mathematics", credits: "12 Credits" },
      { code: "GU001", title: "Professional Ethics and Human values", credits: "12 Credits" },
      { code: "MEP010", title: "Thermal Science for Mechanical Application", credits: "12 Credits" },

    ],
    "Core Unit 2": [
      { code: "MEP006", title: "Modeling and Simulation of Mechanical Systems", credits: "15 Credits" },
      { code: "MEP007", title: "Basic Electrical and Electronics Engineering	", credits: "15 Credits" },
      { code: "MEP008", title: "Welding Principles and Application", credits: "15 Credits" },
      { code: "MEP015", title: "Design and Applied Mechanics", credits: "15 Credits" },
      { code: "MEP017", title: "Power Plant Engineering", credits: "15 Credits" },
      { code: "MEP018", title: "Modeling and Simulation of Mechanical Systems", credits: "15 Credits" },
    ],
    "Special Units": [
      { code: "SU001", title: "Project", credits: "30 Credits" },
    ],
  },
  "IT Engineering": {
    "Common Units": [
      { code: "CUP001", title: "Technical Drawings with Engineering Graphics", credits: "12 Credits" },
      { code: "CUP002", title: "Workshop and General Safety", credits: "12 Credits" },
      { code: "CUP003", title: "IT Application for Engineers", credits: "12 Credits" },
    ],
    "Core Unit 1": [
      { code: "4IT01", title: "Information Technology and IT Ethics", credits: "20 Credits" },
      { code: "4IT02", title: "Mathematics and Statistics for IT", credits: "20 Credits" },
      { code: "4IT03", title: " 	PC Maintenance and Operating Systems", credits: "20 Credits" },
      { code: "4IT04", title: "Computer Graphics Editing and Database Concepts", credits: "20 Credits" },
      { code: "4IT06", title: " 	Physical IT Networking", credits: "20 Credits" },
      { code: "4IT07", title: " 	Web Design", credits: "20 Credits" },

    ],
    "Core Unit 2": [
      { code: "5IT001", title: "Technopreneurship", credits: "20 Credits" },
      { code: "5IT002", title: "Network Security", credits: "20 Credits" },
      { code: "5IT003", title: "C#.NET Programming", credits: "20 Credits" },
      { code: "5IT014", title: "System Administration", credits: "20 Credits" },
      { code: "5IT05", title: "Network Routing and Switching", credits: "20 Credits" },
      { code: "5IT09", title: "Business to Business (B2B) E-Commerce", credits: "20 Credits" },
    ],
    "Special Units": [
      { code: "SU001", title: "Project", credits: "30 Credits" },
    ],
  },

  "Automobile Engineering": {
    "Common Units": [
      { code: "CUP001", title: "Technical Drawings with Engineering Graphics", credits: "12 Credits" },
      { code: "CUP002", title: "Workshop and General Safety", credits: "12 Credits" },
      { code: "CUP003", title: "IT Application for Engineers", credits: "12 Credits" },
    ],
    "Core Unit 1": [
      { code: "AEP001", title: "Mechanical System in Automobile", credits: "12 Credits" },
      { code: "AEP002", title: "Applied Mathematics for Automobile Engineering", credits: "12 Credits" },
      { code: "AEP003", title: "Internal Combustion Engines", credits: "12 Credits" },
      { code: "AEP004", title: "Vehicle Body Engineering", credits: "12 Credits" },
      { code: "AEP005", title: "Automotive Transmission", credits: "12 Credits" },
      { code: "GU001", title: "Professional Ethics and Human values", credits: "12 Credits" },
      { code: "AEP012", title: "Hydraulic and Pneumatic Systems", credits: "12 Credits" },

    ],
    "Core Unit 2": [
      { code: "AEP006", title: " 	Material Science and Engineering", credits: "15 Credits" },
      { code: "AEP007", title: " 	Electrical and Electronics in Automobile", credits: "15 Credits" },
      { code: "AEP008", title: " 	Modeling and Simulation of Automotive Systems", credits: "15 Credits" },
      { code: "AEP016", title: "Fitting Operations in Automobile", credits: "15 Credits" },
      { code: "AEP017", title: " 	Advanced Vehicle Concepts", credits: "15 Credits" },
      { code: "AEP018", title: " 	Automotive HVAC", credits: "15 Credits" },
    ],
    "Special Units": [
      { code: "SU001", title: "Project", credits: "30 Credits" },
    ],
  },

  // "Quantity Surveying": {
  //   "Common Units": [
  //     { code: "CUP001", title: "Technical Drawings with Engineering Graphics", credits: "12 Credits" },
  //     { code: "CUP002", title: "Workshop and General Safety", credits: "12 Credits" },
  //     { code: "CUP003", title: "IT Application for Engineers", credits: "12 Credits" },
  //   ],
  //   "Core Unit 1": [
  //     { code: "QEP001", title: "Construction Economics", credits: "12 Credits" },
  //     { code: "QEP002", title: "Project Management", credits: "12 Credits" },
  //     { code: "CEP003", title: "Applied Mathematics for civil engineering", credits: "12 Credits" },
  //     { code: "QEP003", title: " 	Civil Estimation and Costing", credits: "12 Credits" },
  //     { code: "QEP004", title: "Contract Practice", credits: "12 Credits" },
  //     { code: "QEP005", title: "Sustainable Design and Construction", credits: "12 Credits" },
  //     { code: "QEP008", title: " 	Risk and Value Management", credits: "12 Credits" },
  //     { code: "QEP009", title: "Civil 2D & 3D CAD Design", credits: "12 Credits" },

  //   ],
  //   "Core Unit 2": [
  //     { code: "QEP005", title: "Interpersonal Project", credits: "15 Credits" },
  //     { code: "QEP006", title: " 	Environmental Science and Services", credits: "15 Credits" },
  //     { code: "QEP007", title: "Procurement and Administration", credits: "15 Credits" },
  //     { code: "QEP011", title: " 	Measurement and Documentation", credits: "15 Credits" },
  //     { code: "QEP014", title: " 	Financial Cost Management", credits: "15 Credits" },
  //     { code: "QEP015", title: " 	Construction Technology", credits: "15 Credits" },

  //   ],
  //   "Special Units": [
  //     { code: "SU001", title: "Project", credits: "30 Credits" },
  //   ],
  // },

  // "Architectural Engineering": {
  //   "Common Units": [
  //     { code: "CUP001", title: "Technical Drawings with Engineering Graphics", credits: "12 Credits" },
  //     { code: "CUP002", title: "Workshop and General Safety", credits: "12 Credits" },
  //     { code: "CUP003", title: "IT Application for Engineers", credits: "12 Credits" },
  //   ],
  //   "Core Unit 1": [
  //     { code: "ARC001", title: " Architectural Graphics", credits: "12 Credits" },
  //     { code: "ARC002", title: "Applied Mathematics for Architects", credits: "12 Credits" },
  //     { code: "ARC003", title: " Architectural Design in Rural Study", credits: "12 Credits" },
  //     { code: "ARC004", title: "Structural mechanics in Architecture", credits: "12 Credits" },
  //     { code: "ARC005", title: " 	Architectural Delineation", credits: "12 Credits" },
  //     { code: "QEP015", title: " 	Construction Technology", credits: "12 Credits" },
  //     { code: "ARC010", title: " 	Quantity Surveying and Estimating", credits: "12 Credits" },

  //   ],
  //   "Core Unit 2": [
  //     { code: "ARC006", title: " 	History of Architecture", credits: "15 Credits" },
  //     { code: "QEP003", title: " 	Civil Estimation and costing", credits: "15 Credits" },
  //     { code: "ARC007", title: " 	Architectural Acoustics", credits: "15 Credits" },
  //     { code: "ARC012", title: " 	Computer Aided Visualization", credits: "15 Credits" },
  //     { code: "QEP008", title: "Sustainable Design and Construction", credits: "15 Credits" },
  //     { code: "ARC013", title: " 	Vernacular Architecture", credits: "15 Credits" },
  //   ],
  //   "Special Units": [
  //     { code: "SU001", title: "Project", credits: "30 Credits" },
  //   ],
  // },

  "Electrical & Electronics Engineering": {
    "Common Units": [
      { code: "CUP001", title: "Technical Drawings with Engineering Graphics", credits: "12 Credits" },
      { code: "CUP002", title: "Workshop and General Safety", credits: "12 Credits" },
      { code: "CUP003", title: "IT Application for Engineers", credits: "12 Credits" },
    ],
    "Core Unit 1": [
      { code: "EEP001", title: "Electronic Devices & Circuits", credits: "12 Credits" },
      { code: "EEP002", title: "Microprocessor and Micro controller", credits: "12 Credits" },
      { code: "EEP003", title: "Design of Electrical Machines", credits: "12 Credits" },
      { code: "EEP004", title: "Control Systems", credits: "12 Credits" },
      { code: "EEP005", title: "Linear Integrated Circuits", credits: "12 Credits" },
      { code: "EEP010", title: " 	Power Electronics", credits: "12 Credits" },
      { code: "GU001", title: " 	Professional Ethics and Human values", credits: "12 Credits" },

    ],
    "Core Unit 2": [
      { code: "EEP006", title: " 	Applied Mathematics for Electrical Engineering", credits: "15 Credits" },
      { code: "EEP007", title: " 	Digital Logic Circuits", credits: "15 Credits" },
      { code: "EEP008", title: " 	Principles of Communication", credits: "15 Credits" },
      { code: "EEP014", title: " 	Measurements & Instrumentation", credits: "15 Credits" },
      { code: "EEP017", title: " 	Transmission and Distribution", credits: "15 Credits" },
      { code: "EEP019", title: " 	Protection and Switchgear", credits: "15 Credits" },

    ],
    "Special Units": [
      { code: "SU001", title: "Project", credits: "30 Credits" },
    ],
  },


  };