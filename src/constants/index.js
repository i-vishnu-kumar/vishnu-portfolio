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
  threejs,
  rakuten_logo,
  ingnios_logo,
  prithvi_logo,
  ai,
  flask,
  dl,
  kubernetes,
  ollama,
  python,
  cpp,
  unity,
  scikitlearn,
  tensorflow,
  huggingface,
  genz_chatbot,
  brain_image_fuser,
  kanban_board,
  latsest_fixes_tracker,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
  {
    title: "StandUp Comedy",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "flask",
    icon: flask,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "ai",
  //   icon: ai,
  // },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "ollama",
    icon: ollama,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  // {
  //   name: "scikitlearn",
  //   icon: scikitlearn
  // },
  {
    name: "tensorflow",
    icon: tensorflow
  },
  {
    name: "huggingface",
    icon: huggingface
  },
  // {
  //   name: "unity",
  //   icon: unity,
  // }
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Rakuten Mobile",
    icon: rakuten_logo,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining internal web applications and AI-powered tools using Flask, Python, and other related technologies.",
      "Working closely with cross-functional teams to design and deliver scalable solutions for anomaly detection, risk assessment, and workflow management.",
      "Implementing automated health checks and CI/CD pipelines to ensure system reliability, high uptime, and streamlined deployment processes.",
      "Actively contributing to Agile ceremonies, sprint planning, and team discussions with a team of 9 developers.",
    ],
  },
  {
    title: "Game Development Intern",
    company_name: "InGnious AI",
    icon: ingnios_logo,
    iconBg: "#E6DEDD",
    date: "July 2023 - December 2023",
    points: [
      "Developed and maintained a 3D Virtual Fitting Room application using Unity and C#, integrating AI features to enhance user experience.",
      "Worked alongside Unity, AI, and Blender teams, picking up new tools and workflows quickly to contribute meaningfully from day one.",
      "Implemented personalized 3D avatar creation and AI fitness analysis features, focusing on optimization and smooth 30fps animations.",
      "Took ownership of assigned modules, consistently delivering clean and well-documented code within sprint deadlines.",
    ],
  },
  {
    title: "Computer Vision Intern",
    company_name: "Prithvi AI",
    icon: prithvi_logo,
    iconBg: "#383E56",
    date: "October 2021 - April 2022",
    points: [
      "Built a deep learning-based computer vision solution from scratch for real-world industrial applications, working independently on most modules.",
      "Designed and implemented 11 data augmentation strategies to improve model robustness and overall performance.",
      "Evaluated and fine-tuned 4 distinct models, selecting the best action classifier for optimal repetition detection.",
      "Proactively shared findings and progress updates with the team, ensuring alignment and transparency throughout the internship.",
    ],
  },  
];

const projects = [
  {
    name: "Kanban Board",
    description:
      "Developed a Kanban Board for team members to efficiently track daily updates, delays and sprint progress across a team of 9 developers. Utilized Agile methodologies to streamline workflows, prioritize tasks and improve Sprint delivery by 33% per week.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: kanban_board,
    source_code_link: "https://github.com/i-vishnu-kumar/kanban_board",
  },
  {
    name: "AI Powered Tracker",
    description:
      "An AI-powered production failure tracker leveraging RAG (ChromaDB) with data pipelines from GitHub and Confluence, providing real-time risk assessment and insights via a secure WebApp running on Ollama servers.",
    tags: [
      { name: "flask", color: "blue-text-gradient" },
      { name: "ollama", color: "green-text-gradient" },
      { name: "rag", color: "pink-text-gradient" },
    ],
    image: latsest_fixes_tracker,
    source_code_link: "https://github.com/i-vishnu-kumar/AI_Powered_Failure_Tracker/tree/main",
  },
  {
    name: "Brain Image Registration & Fusion",
    description:
      "A medical imaging pipeline that fuses MRI and CT scans using DWT and VGG19 for enhanced tumor visibility. Leveraged VoxelMorph for deformable image registration and the Watershed algorithm for robust and precise segmentation.",
    tags: [
      { name: "tensorflow", color: "blue-text-gradient" },
      { name: "computer-vision", color: "green-text-gradient" },
    ],
    image: brain_image_fuser,
    source_code_link: "https://github.com/i-vishnu-kumar/brain_images_fuser/tree/main",
  },
  // {
  //   name: "GenZ Chatbot Package",
  //   description:
  //     "A beginner-friendly Python package that simplifies building AI chatbots from scratch. Offers a clean step-by-step guide covering the entire chatbot development process, from initial setup and model integration to seamless deployment.",
  //   tags: [
  //     { name: "python", color: "blue-text-gradient" },
  //     { name: "generative-ai", color: "green-text-gradient" },
  //     { name: "automation", color: "pink-text-gradient" },
  //   ],
  //   image: genz_chatbot,
  //   source_code_link: "https://github.com/i-vishnu-kumar/genz_chatbot_package",
  // },
];

export { services, technologies, experiences, projects };
