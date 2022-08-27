export const skills: { name: string }[] = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
    
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
  {
    name: "Node",
  },
  {
    name: "Express",
  },
  {
    name: "MongoDB",
  },
  {
    name: "MySQL",
  },
  {
    name: "Next.js",
  },
  {
    name: "Tailwind",
  },
  {
    name: "MaterialUI",
  },
  {
    name: "Bootstrap",
  },
  {
    name: "SASS",
  },
];

export const experience: {
  title: string;
  company: string;
  date: string;
  description: string;
}[] = [  
  {
    title: "Tutor React",
    company: "Coderhouse",
    date: "May 2022 - Present",
    description:
      "Tutoring of the students of the ReactJS courses, where I clear their doubts and correct the weekly challenges and final project.",
  },
  {
    title: "Frontend Developer",
    company: "BiohackerMx",
    date: "Mar 2021 - Nov 2021",
    description:
      "Development, upload to the server and maintenance of @biohackermex website. Project carried out for having been in the TOP10 of students of the Coderhouse web development course.",
  },
  {
    title: "Backend Developer",
    company: "No Country - Cohorte 4",
    date: "",
    description: "",
  },
];

export const works: {
  image: string;
  name: string;
  description: string;
  url: string;
  repo: string;
  tools: Array<string>;
}[] = [
  {
    image: "/biohack.png",
    name: "Biohacker",
    description: "website created for biohackerMX",
    url: "https://biohackerMx.com",
    repo: "https://github.com/Ma77i/BiohackerMx",
    tools: ["HTML", "CSS", "BOOTSTRAP"],
  },
  {
    image: "/ecoderce.png",
    name: "Ecoderce",
    description: "Ecommerce created in fullstack course",
    tools: ["NODEJS", "EXPRESS", "MONGODB", "REACT"],
    url: "https://ecoderce.herokuapp.com",
    repo: "https://github.com/Ma77i/ecoderce"
  },
  {
    image: "/calc.png",
    name: "Calculator",
    description: "Calculator created with Electron.js",
    url: "",
    repo: "https://github.com/Ma77i/calculator-electronjs",
    tools: ["ELECTRONJS"],
  },
  // {
  //   image: "https://picsum.photos/300/200",
  //   name: "No More Plastic blog",
  //   description: "Web created por No More Plastic ong",
  // url: [""],
  //   tools: ["NEXTJS"],
  // },
  // {
  //   image: "https://picsum.photos/300/200",
  //   name: "Todoapp",
  //   description: "Todo app created with react node and ts",
  // url: [""],
  //   tools: ["NODEJS", "EXPRESS", "MONGODB", "REACT", "TYPESCRIPT"],
  // },
  {
    image: "/fhunter.png",
    name: "Fashion Hunter",
    description: "social network created in NoCountry",
    url: "https://fashion-hunter-27637.web.app/login",
    repo: "https://github.com/Ma77i/fashionhunter-api",
    tools: ["NODEJS", "EXPRESS", "MONGODB"],
  },
  // {
  //   image: "https://picsum.photos/300/200",
  //   name: "Chat app",
  //   description: "Chatapp created with react node ts",
  // url: "",
  //   tools: ["NODEJS", "EXPRESS", "MONGODB", "REACT", "TYPESCRIPT"],
  // },
];
