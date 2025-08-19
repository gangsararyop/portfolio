export const sections: Record<"id" | "label", string>[] = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "professional-project",
    label: "Professional Project",
  },
  {
    id: "personal-project",
    label: "Personal Project",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export interface IExperience {
  id: number;
  startYear: string;
  endYear: string;
  role: string;
  company: string;
  description: string;
  stacks: string[];
}

export const experiences: IExperience[] = [
  {
    id: 0,
    startYear: "2022",
    endYear: "PRESENT",
    role: "Fullstack Web Developer",
    company: "Purwadhika",
    description:
      "I developed and maintained multiple applications at Purwadhika, including the Landing Page, Student Dashboard, Admin Dashboard, Purwadhika Career Network, Purwadhika College, and the Corporate Training Dashboard. These projects were built using a modern tech stack consisting of TypeScript, JavaScript, React.js, Next.js, Material UI, Express.js, Sequelize, and MySQL.",
    stacks: [
      "Node.js",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
      "CMS",
    ],
  },
  {
    id: 1,
    startYear: "APRIL",
    endYear: "JUNE 2023",
    role: "Fullstack Web Development Mentor",
    company: "Purwadhika",
    description:
      "I mentored 6 project teams across 2 batches, guiding students in building production-ready applications. My role included providing code reviews, debugging support, and sharing best practices in JavaScript and React.",
    stacks: [
      "Node.js",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Tailwind",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
  },
];

export interface IProfessionalProject {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  description: string;
  websiteURL: string | null;
  sourceCodeURL: string | null;
  stacks: string[];
}

export const professionalProjects: IProfessionalProject[] = [
  {
    id: 0,
    title: "Purwadhika Marketing Website",
    image: "",
    subtitle:
      "A marketing website for Purwadhika that showcases programs and information using a modern full-stack tech stack.",
    description:
      "Purwadhika Main Website serves as the central marketing platform for Purwadhika, providing comprehensive information about its various programs while offering an integrated feature for purchasing courses online. Built with TypeScript, Next.js, Material UI, Express.js, Sequelize, and MySQL, the website is supported by Strapi as the content management system to ensure flexibility and scalability in managing content. It also integrates Midtrans as the payment gateway, allowing users to seamlessly buy Purwadhika’s courses directly through the platform, combining modern design, robust backend architecture, and secure transactions in one unified system.",
    websiteURL: "https://purwadhika.com/",
    sourceCodeURL: null,
    stacks: [
      "Node.js",
      "Typescript",
      "Next.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
      "CMS",
    ],
  },
  {
    id: 1,
    title: "Purwadhika Student Dashboard",
    image: "",
    subtitle:
      "Purwadhika Student Dashboard is a centralized platform for students to access their programs, manage transactions, connect with alumni, and explore job opportunities.",
    description:
      "Purwadhika Student Dashboard is a comprehensive web platform designed to enhance the student learning experience by providing access to all essential features in one place. Students can view and manage their registered programs, track transaction history, watch live or recorded course streams, and download certificates upon completion. The platform also fosters community building through alumni connections and supports career growth via an integrated job portal. Additionally, students can manage their personal information with an easy-to-use profile editing feature, making the dashboard a complete hub for academic, professional, and networking needs.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: [
      "Node.js",
      "Typescript",
      "React.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    id: 2,
    title: "Purwadhika Admin Dashboard",
    image: "",
    subtitle:
      "Purwadhika Admin Dashboard is a management platform for handling programs, users, students, alumni, transactions, grades, and data reporting.",
    description:
      "Purwadhika Admin Dashboard is a robust and feature-rich web application built to support the operational and academic management needs of Purwadhika. Through this platform, administrators can efficiently manage programs, oversee student and alumni records, monitor user activity, and process transactions. It also provides tools for handling student grades, tracking academic performance, and generating detailed data reports to support decision-making. With centralized access to key information and streamlined workflows, the dashboard empowers administrators to maintain smooth operations, ensure data accuracy, and enhance the overall educational ecosystem of Purwadhika.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: [
      "Node.js",
      "Typescript",
      "React.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    id: 3,
    title: "Purwadhika College",
    image: "",
    subtitle:
      "Purwadhika College is an informational landing page showcasing Purwadhika’s collaborative programs with various international universities.",
    description:
      "Purwadhika College is a dedicated landing page designed to provide clear and engaging information about Purwadhika’s collaborative programs with renowned international universities. The website highlights partnership details, program offerings, and the unique opportunities available for students who wish to pursue global academic pathways. With a focus on presenting programs in a professional and accessible manner, Purwadhika College serves as a trusted resource for prospective students to explore educational collaborations, understand program benefits, and gain insights into international study options offered through Purwadhika.",
    websiteURL: "https://college.purwadhika.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
  {
    id: 4,
    title: "Purwadhika School of Design",
    image: "",
    subtitle:
      "Purwadhika School of Design is a landing page that introduces programs in creative fields such as UI/UX, 3D Animation, and other design-related studies.",
    description:
      "Purwadhika School of Design is a specialized landing page created to present and promote Purwadhika’s design-focused programs. The platform highlights a range of creative disciplines, including UI/UX Design, 3D Animation, and other design-related courses tailored for students aspiring to enter the creative industry. With a clean and visually appealing layout, the website provides detailed program information, career pathways, and learning outcomes to help prospective students make informed decisions. By emphasizing creativity, innovation, and industry relevance, Purwadhika School of Design serves as a gateway for future designers to explore and pursue their passions in the design field.",
    websiteURL: "https://schoolofdesign.purwadhika.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
  {
    id: 5,
    title: "Kirei Wash Landing Page",
    image: "",
    subtitle:
      "Kirei Wash Landing Page is a product-focused website that provides information about Kirei Wash and its offerings.",
    description:
      "Kirei Wash Landing Page is a clean and informative website designed to showcase Kirei Wash products and services. The page highlights product features, benefits, and usage details to help customers understand the value of Kirei Wash. With a user-friendly layout and visually engaging presentation, the website effectively communicates the brand’s identity while guiding visitors through product information and calls-to-action. Serving as both a marketing tool and an information hub, the Kirei Wash Landing Page aims to attract potential customers and strengthen brand presence online.",
    websiteURL: "https://kireiwash.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
  },
  {
    id: 6,
    title: "Kirei Wash Admin Dashboard",
    image: "",
    subtitle:
      "Kirei Wash Admin Dashboard is a management platform for overseeing services, transactions, users, employees, and business operations.",
    description:
      "Kirei Wash Admin Dashboard is a comprehensive web application built to streamline the management and operational processes of Kirei Wash. Through this platform, administrators can efficiently manage and update available services, monitor and process customer transactions, and maintain user and employee records. The dashboard also provides tools for tracking business activities, generating reports, and ensuring smooth day-to-day operations. By centralizing essential functions into one system, the Kirei Wash Admin Dashboard enhances efficiency, improves data accuracy, and supports better decision-making for business growth.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
  },
  {
    id: 7,
    title: "Kirei Wash Employee Dashboard",
    image: "",
    subtitle:
      "Kirei Wash Employee Dashboard is a platform for employees to manage tasks, track services, monitor attendance, and handle daily responsibilities.",
    description:
      "Kirei Wash Employee Dashboard is a dedicated web application designed to support employees in managing their daily activities and responsibilities effectively. The platform provides features for tracking attendance and absences, managing assigned tasks, and monitoring ongoing service progress. Employees can easily view their work schedules, update task statuses, and ensure service quality through the dashboard. By offering a centralized and organized system, the Kirei Wash Employee Dashboard helps improve productivity, streamline workflows, and maintain clear communication between staff and management.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
  },
  {
    id: 8,
    title: "English Talker United Landing Page",
    image: "",
    subtitle:
      "English Talker United Landing Page is a website showcasing English learning programs with a contact feature for users to connect with the admin.",
    description:
      "English Talker United Landing Page is an informative website designed to present the various English learning programs offered by English Talker United. The platform highlights available courses, their benefits, and program details to help prospective learners choose the right path for improving their English skills. Additionally, the website provides a “Contact Us” feature where users can easily submit inquiries or requests, enabling direct communication with the admin. With a clear structure and user-friendly interface, the landing page serves both as a marketing tool and a communication bridge between the institution and potential students.",
    websiteURL: "https://englishtalkerunited.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
  {
    id: 9,
    title: "English Talker United Admin Dashboard (Ongoing Project)",
    image: "",
    subtitle:
      "English Talker United Admin Dashboard is a management platform for handling users, courses, schedules, student progress, and inquiries.",
    description:
      "English Talker United Admin Dashboard is a powerful web application designed to streamline the administrative operations of English Talker United. Through this platform, administrators can manage users, track advertising performance, and handle student enquiries efficiently. The system also provides features for organizing and updating course modules, scheduling classes, and monitoring student attendance. Additionally, it supports academic oversight by tracking student grades and progress throughout the programs. By centralizing these functions, the dashboard improves operational efficiency, ensures accurate data management, and enhances the overall learning experience for students.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
];

export interface IPersonalProject {
  id: number;
  title: string;
  image: string;
  websiteURL: string | null;
  sourceCodeURL: string | null;
  description: string;
  stacks: string[];
}

export const personalProjects: IPersonalProject[] = [
  {
    id: 0,
    title: "Pokédex App",
    image: "",
    websiteURL: "https://pokedex-app-lake-kappa.vercel.app/",
    description:
      "A simple Pokedex web app that lists Pokémon and lets users view detailed info for each, optimized for mobile.",
    stacks: ["Node.js", "Typescript", "Next.js", "TailwindCSS", "Shadcn"],
    sourceCodeURL: "https://github.com/gangsararyop/pokedex-app",
  },
  {
    id: 1,
    title: "File Explorer App",
    image: "",
    websiteURL: null,
    description:
      "A simple web-based File Explorer that mimics the look and feel of a desktop file management system.",
    stacks: [
      "Bun",
      "Typescript",
      "Vue.js",
      "TailwindCSS",
      "Elysia",
      "DrizzleORM",
    ],
    sourceCodeURL: "https://github.com/gangsararyop/infokes-assessment",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "",
    websiteURL: "https://portfolio-745u.vercel.app/",
    description:
      "A personal portfolio website showcasing my background, skills, and projects.",
    stacks: ["Node.js", "Typescript", "Next.js", "TailwindCSS"],
    sourceCodeURL: "https://github.com/gangsararyop/portfolio",
  },
];
