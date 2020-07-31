const data = {
  name 'Alexis Matheus',
  mainEmoji:{
    character: '👋',
    ariaLabel: 'wave',
  },
  phoneNumber: '7862024691',
  email:'amatheus93@gmail.com',
  githubHandle: 'amatheus000',
  linkedInHandle: 'alexis-matheus',
  
  workExperiences: [{ 🍔 emoji: "",
  jobTitle: "Operations Manager, R&D",
  institution: "Burger King Corporate",
  dates: "2019 - Present", // end with "present" for your current job
  details: [
    "Worked with franchisees and above restaurant leaders on execution of market test products",
    "Assess restaurant complexity and develop strategies for restaurant simplification",
    "Colaborate cross-functionally with different departments in order to accomplish project"
  ]},
  {  emoji: "🔌",
  jobTitle: "Project Manager",
  institution: "Nikola Power",
  dates: "2018 - 2019", // end with "present" for your current job
  details: [
    "Conducted a market study on Electric Vehicles and charging stations infrastructure on the top 5 US states in the energy sector",
    "Researched on policies, regulations and competitors regarding Electric Vehicles and charging stations",
    "Analzed the collected data to identify and prioritize promising market opportunitie"},
  
    {  emoji: "⚡",
    jobTitle: "Mechanical Engineer ",
    institution: "Deproex C.A.",
    dates: "2017 - 2017", // end with "present" for your current job
    details: [
      "Designed the exhaust and fuel system for the generator. Analyzed the fluids mechanics and piping system with Epanet to guarantee engineering and safety standards",
      "Designed the HVAC system of the Data Storage facilities. Conducted heat analysis, designed the piping system in CAD and selected the required equipment"},

      {  emoji: "⚙️",
      jobTitle: "Mechanical Engineer Intern ",
      institution: "Tractebel Engie",
      dates: "2016 - 2016", // end with "present" for your current job
      details: [
        "Created an automatized dimensioning tool capable of recreating dam gates subject to hydrostatic and seismic loads",
        "Validated the tool using ANSYS’ finite element analysis tested on previously developed gates"},

],  
  educationalExperiences: [{
    emoji: "🇺🇸",
    university: "Duke University",
    school: "Graduate Pratt School of Engineering",
    dates: "2018 - 2018",
    details: [
      "Master in Engiinering Management",
      "Member of the MEMP Energy Club"
    ]
  },

  {
    emoji: "🇻🇪",
    university: "Universidad Simón Bolívar",
    school: "Engineering School",
    dates: "2011 - 2017",
    details: [
      "Mechanical Engineering Degree",
      "General Secretary for the Mechanical Engineering Student Council",
      "Group Leader in the design, construction and operation of an air compressor"
    ]
  },

  {
    emoji: "🇫🇷",
    university: "🇫🇷",
    school: "Engineering School",
    dates: "2015 - 2016",
    details: [
      "Exchange Student in Mechanical Engineering",
      "Courses: Industrial reliability, Supply Chain, Major Technological risk study"
    ]
  }
],
};

document.title =data.name;

const name = document .querySelector(#'name');

name.textContect =data.name

const emojiContainer = document.querySelector('h1 span[role="img"]');

emojiContainer.textContent = data.mainEmoji.character;

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer = document.querySelector()

