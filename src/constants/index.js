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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    prepinsta,
    oasis,
    cisco,
    ECELL,
    pulse,
    docochain,
    millow
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Computing",
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Oasis Infobyte",
      icon: oasis,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Developed number of landing pages using frontend technologies like HTML,CSS And Javascript",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Executed three projects and documented them on LinkedIn through detailed blog posts"
      ],
    },
    {
      title: "Cloud Developer",
      company_name: "Cisco-Aicte",
      icon: cisco,
      iconBg: "#E6DEDD",
      date: "Year 2023",
      points: [
        "Participated in the Cisco Virtual Internship, gaining valuable hands-on experience and expanding my perspective in the dynamic field of cloud.",
      ],
    },
    {
      title: "Growth Manager",
      company_name: "PrepInsta",
      icon: prepinsta,
      iconBg: "#383E56",
      date: "2023-2024",
      points: [
        "As a Growth Manager at PrepInsta, involved in fundamental marketing activities, contributing to the promotion and visibility of the platform",
        "Committed to learning and applying foundational marketing techniques to help PrepInsta reach a broader audience and provide valuable educational resources to its users.",
      ],
    },
    {
      title: "Core Lead",
      company_name: "Entrepreneurship Cell, GGITS",
      icon: ECELL,
      iconBg: "#E6DEDD",
      date: "2023 - Present",
      points: [
        "Spearheaded initiatives within the events and executives team at Team Udyam E-Cell GGITS, aimed at fostering entrepreneurship among students.",
        "Led the planning and execution of various events promoting entrepreneurial spirit and innovation at GGITS Jabalpur.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "It was great to work with Abhiraj on multiple projects and lead the team with him in various Hackathons.",
      name: "Rishabh Khatri",
      designation: "CS Undergrad",
      company: "GGITS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s",
    },
    {
      testimonial:
        "It was a great experience in representing our institution at NEC Finals,IIT Bombay.",
      name: "Nischal Kumar Manjhi",
      designation: "Core Lead",
      company: "ECELL GGITS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s",
    },
    {
      testimonial:
        "Abhiraj, a dedicated CSE student at GGITS, Jabalpur, has consistently demonstrated strong academic performance through hard work.",
      name: "Siddharth Bhalerao",
      designation: "Head Professor",
      company: "GGITS,Jabalpur",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s",
    },
  ];
  
  const projects = [
    {
      name: "Pulse",
      description:
      "Leading the development of an innovative generative AI project aimed at transforming daily online interactions for visually impaired individuals by using cutting-edge generative AI techniques and technologies",

      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
      ],
      image: pulse,
      source_code_link: "https://github.com/Abhirajtiwari1/Pulse",
    },
    {
      name: "Doc-O-Chain",
      description:
      "Designed a Web 3.0 project for a Hospital Management System with innovative features like a data marketplace to optimize resources for hospitals and boost productivity for pharmaceutical companies",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "Postman",
          color: "pink-text-gradient",
        },
      ],
      image: docochain,
      source_code_link: "https://github.com/ekansh2403/HackByte-Project",
    },
    {
      name: "Millow",
      description:
        "A comprehensive real estate app developed over React.js(Frontend Framework),Hardhat(Development Framework),Javascript(React & Testing) and Solidity",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Solidity",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: millow,
      source_code_link: "https://github.com/Abhirajtiwari1/millow",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };