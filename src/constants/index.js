import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    docker,
    fullstack,
    team,
    carrent,
    jobit,
    tripguide,
    python, 
    kali,
    bash,
    tensorflow,
    google,
    nlp,
    matlab,
    webD
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Student at SUP'COM",
      icon: web,
    },
    {
      title: "Cybersecurity",
      icon: mobile,
    },
    {
      title: "Machine learning",
      icon: backend,
    },
    {
      title: "Programming",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Kali",
      icon: kali,
    },
    {
      name: "Bash",
      icon: bash,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: tensorflow,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Internship",
      company_name: "Fullstack - fullstack.tn",
      icon: fullstack,
      iconBg: "#383E56",
      date: "Summer 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "‘Team’ Club membe",
      company_name: "Team",
      icon: team,
      iconBg: "#E6DEDD",
      date: "2022 - 2023",
      points: [
        "Played a role in the success of the 2022 SUP’COM Forum event as a dedicated member of the organizing team, contributing to various aspects of event planning and execution.",
        "Contributed to the sponsorship efforts by crafting compelling proposals customized to meet the specific needs and interests of potential sponsors.",
        "Worked closely with team members to develop and implement innovative strategies for securing sponsorships.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  const certifications = [
    {
      name: "MATLAB for Machine Learning",
      description:
        "Certification apart of MathWorks online courses that teaches how to use MATLAB for classification and regression problems, how to choose our model and evaluate it as well optimizing it.",
      tags: [
        {
          name: "MATLAB",
          color: "orange-text-gradient",
        },
        {
          name: "ML",
          color: "green-text-gradient",
        },
        {
          name: "Classification",
          color: "pink-text-gradient",
        },
      ],
      image: matlab,
      source_code_link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=bb4ca0f6-e825-4011-a28a-074f5ad915d6&",
    },
    {
      name: "Google Foundations of Cybersecurity ",
      description:
        "Cybersecurity course to recognize core skills and knowledge needed to become a cybersecurity analyst, as well explain security ethics and identify common tools used by cybersecurity analysts",
      tags: [
        {
          name: "Cybersecurity",
          color: "blue-text-gradient",
        },
        {
          name: "CSIP",
          color: "green-text-gradient",
        },
        {
          name: "NIST Framework",
          color: "pink-text-gradient",
        },
      ],
      image: google,
      source_code_link: "https://www.coursera.org/account/accomplishments/records/FCR2FDWN8ANY",
    },
    {
      name: "Responsive Web Design",
      description:
        "A comprehensive certification that allowed me to discover web design concepts with multiple tools and frameworks like ReactJS, jQuery as well basic AJAX querying.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "jQuery",
          color: "green-text-gradient",
        },
        {
          name: "AJAX",
          color: "pink-text-gradient",
        },
      ],
      image: webD,
      source_code_link: "https://www.freecodecamp.org/certification/EzerNaceur/responsive-web-design",
    },
  ];
  
  export { services, technologies, experiences, certifications, projects };