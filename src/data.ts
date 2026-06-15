/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillGroup, ExperienceItem, Certification, GithubStats } from './types';

export const portfolioOwner = {
  fullName: "Amina Rezk",
  title: "Junior Laravel Backend Developer",
  email: "aminarezq74@gmail.com",
  phone: "01063065161",
  location: "Mansoura, Dakahlia, Egypt (Open to Remote / Internship)",
  github: "https://github.com/aminarezk",
  linkedin: "https://www.linkedin.com/in/amina-rezk-a95b47263/",
  avatar: "",
  resumeUrl: "#", // Handled as contact action / CV view in the app
  summary: "Enthusiastic Junior Backend Developer specializing in PHP and Laravel. Responsive, detail-oriented, and focused on writing clean, readable, and functional code for REST APIs and databases. Eager to solve real problems and contribute as an intern or junior developer.",
  bio: "Hello! I am a Junior Backend Developer focused on PHP and Laravel. My interest started when I wanted to understand how websites handle data, APIs, and databases behind the scenes. This led me to backend development, where I enjoy building REST APIs and working with Laravel and MySQL.I focus on writing clean and simple code using OOP basics and building well-structured backend systems. I am continuously learning through projects and GitHub practice, and I am looking for an internship or junior role where I can grow and contribute to a development team.",
  education: [
    {
      degree: "B.Sc. in Computer Science & Statistics",
      school: "Mansoura University",
      period: "2020 - 2024",
      details: "Studied core computer science and statistics subjects including Data Structures, Database Systems, Object-Oriented Programming, and software development fundamentals. Gained experience with programming languages such as C++, Python, and JavaScript, along with foundational database concepts."
    }
  ],
  careerGoals: [
    "Secure an entry-level backend role or internship to gain hands-on production experience.",
    "Improve my skills with advanced PHP patterns and query optimization techniques.",
    "Learn to write comprehensive automated database tests using PHPUnit."
  ],
};

export const skillsData: SkillGroup[] = [
  {
    category: "Backend Core",
    iconName: "Terminal",
    skills: [
      { name: "PHP", level: 80, description: "Writing logical scripts, using functions, arrays, namespaces, and standard PHP 8 features." },
      { name: "Laravel", level: 75, description: "Working with routes, controllers, blade views, database models, and active middleware." },
      { name: "REST APIs", level: 78, description: "Designing neat URL endpoints, understanding HTTP verbs (GET, POST, PUT, DELETE), and solid JSON responses." }
    ]
  },
  {
    category: "Databases & OOP",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: 74, description: "Designing simple tables, setting up primary and foreign key constraints, and writing clean queries." },
      { name: "OOP Basics", level: 76, description: "Structuring modular code using classes, objects, inheritance, methods, and properties." }
    ]
  },
  {
    category: "Tools & Collaboration",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 82, description: "Managing code directories using commits, branches, pull requests, and standard staging flows." },
      { name: "Postman", level: 80, description: "Testing API response layouts, verifying status codes, and managing request headers and structures." }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "dashboard-api",
    name: "Dashboard-Api",
    description: "A web-based management system built using Laravel 7 with an admin dashboard and RESTful APIs for CRUD operations and multi-language support.",
    role: "Junior Backend Developer (Personal Project)",
    technicalChallenge: "Handling role-based access control and ensuring secure CRUD operations through both dashboard and APIs.",
    solution: "Implemented authentication and authorization system with Laravel, along with structured CRUD operations and API endpoints tested using Postman.",
    image: "public/images/project_rest_cms_1780866562109.png.png",
    technologies: ["Laravel 7", "PHP", "MySQL", "Bootstrap", "REST API", "Laravel Localization", "Sanctum Auth", "Postman"],
    keyFeatures: [
      "Secure user authentication system with password hashing",
      "Full CRUD operations for managing posts, categories, and comments",
      "Input validation to ensure clean and complete data",
      "API testing and documentation using Postman collections"
    ],
    githubUrl: "https://github.com/aminarezk/laravel-dashboard-api",
    demoUrl: "#"
  },
  {
    id: "job-portal-system",
    name: "Job Portal System",
    description: "A web-based Job Portal application that allows users to search for jobs, apply for positions, and manage their profiles through a secure authentication system.",
    role: "Junior Backend Developer (Learning Project)",
    technicalChallenge: "Building a secure job application system with role-based access control and handling CV uploads safely.",
    solution: "Implemented authentication and authorization system using Laravel, along with job listing, application tracking, and file upload handling for CVs.",
    image: "public/images/project_ecommerce_api_1780866579136.png.png",
    technologies: ["Laravel 7", "PHP", "MySQL", "Bootstrap", "Postman", "Laravel Localization"],
    keyFeatures: ["Secure user registration and login system", "Role-based access control for users and administrators", "Job search and filtering by keywords", "Job application system with CV upload", "User dashboard for tracking applications", "Multi-language support (Arabic & English)"],
    githubUrl: "https://github.com/aminarezk/jop-portal",
    demoUrl: "#"
  },
  {
    id: "college-management-system",
    name: "College Management System",
    description: "A web-based College Management System developed using Laravel 7 for managing students, subjects, attendance, and academic records.",
    role: "Junior Backend Developer (Learning Project)",
    technicalChallenge: "Managing different user roles (Admin and Student) with secure access to academic data like grades, attendance, and subject registration.",
    solution: "Implemented role-based authentication system using Laravel along with structured CRUD operations for managing students, subjects, attendance, and grades.",
    image: "public/images/project_queue_dispatch_1780866593146.png.png",
    technologies: ["Laravel 7", "PHP", "MySQL", "Bootstrap", "REST API", "Postman", "Laravel Localization"],
    keyFeatures: ["Secure login system with role-based access (Admin / Student)", "Student subject enrollment and registration system", "View grades and academic results", "Attendance tracking system", "Admin dashboard for full CRUD operations", "RESTful API endpoints for system data", "Multi-language support (Arabic & English)"],
    githubUrl: "https://github.com/aminarezk/College-Management-System",
    demoUrl: "#"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Backend Development Learning Journey",
    company: "Self Learning",
    type: "Personal Project",
    period: "2024 - Present",
    description: [
      "Learning backend development using PHP and Laravel.",
      "Building personal projects such as Blog API, Job Portal System, and College Management System.",
      "Practicing REST APIs, authentication, and database design with MySQL.",
      "Improving understanding of MVC architecture and OOP principles through hands-on projects."
    ],
    skillsGained: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST APIs",
      "OOP Basics",
      "Git & GitHub"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Backend Development Diploma Completion",
    issuer: "T-Square",
    date: "2025",
    credentialId: "T-SQUARE-BACKEND-DIPLOMA",
    verifyUrl: "#"
  },

];

export const githubStatsData: GithubStats = {
  profileUrl: "https://github.com/aminarezq",
  username: "aminarezq",
  contributionsCount: 30,
  pullRequestsCount: 0,
  repositoriesCount: 5,
  issuesClosed: 0,
  topLanguages: [
    { name: "PHP", percent: 74.5, color: "#4F5D95" },
    { name: "Blade (HTML)", percent: 14.3, color: "#F05340" },
    { name: "MySQL / SQL", percent: 11.2, color: "#00758F" }
  ]
};
