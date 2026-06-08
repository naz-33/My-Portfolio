import { Experience, Skill, Project, Recommendation, Education, SocialLinks } from '@/types';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react';

export const personalInfo = {
  name: 'Nazlah Nanding',
  roles: ['Software Developer'],
  email: 'n.nanding.545627@umindanao.edu.ph',
  greeting: "Hi, my name is",
  description: "Computer Science undergraduate with a focus on web development, AI, and machine learning. I enjoy building practical applications and continuously improving my skills.",
  aboutText: [
    `I'm a Computer Science undergraduate who learns best by shipping things that work outside the classroom. I use projects as a testing ground, whether that means building a feature from scratch, debugging edge cases, or reworking architecture when the first version does not scale. That hands-on process is how I sharpen both technical judgment and execution.

My focus is software development with growing depth in AI and machine learning, especially where ideas need to become practical tools. I care about writing clear, maintainable code and solving problems with real constraints, not just ideal conditions. With each build, I aim to become a stronger engineer: faster at identifying root causes, better at making tradeoffs, and more deliberate about building systems people can actually use.`,
  ],
  resumeUrl: '/resume.pdf',
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Customer Experience Agent',
    company: 'Alorica',
    duration: 'May 2024 - December 2025',
    description: [
      'Provided support through inbound and outbound communication channels to resolve client issues efficiently.',
      'Performed basic issue analysis and followed step-by-step troubleshooting workflows to identify and resolve problems.',
      'Created detailed case documentation and incident reports to ensure proper tracking and resolution of recurring issues.',
      'Collaborated with internal teams for escalation of complex cases and follow-up resolution.',
    ],
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'HTML5', icon: React.createElement('img', { src: '/logos/html5.svg', alt: 'HTML5 logo', width: 36, height: 36 }), category: 'frontend' },
  { id: '2', name: 'CSS3', icon: React.createElement('img', { src: '/logos/css3.svg', alt: 'CSS3 logo', width: 36, height: 36 }), category: 'frontend' },
  { id: '3', name: 'JavaScript', icon: React.createElement('img', { src: '/logos/javascript.svg', alt: 'JavaScript logo', width: 36, height: 36 }), category: 'frontend' },

  // Backend
  { id: '4', name: 'Java', icon: React.createElement('img', { src: '/logos/java.svg', alt: 'Java logo', width: 36, height: 36 }), category: 'backend' },
  { id: '5', name: 'Python', icon: React.createElement('img', { src: '/logos/python.svg', alt: 'Python logo', width: 36, height: 36 }), category: 'backend' },
  { id: '6', name: 'PHP', icon: React.createElement('img', { src: '/logos/php.svg', alt: 'PHP logo', width: 36, height: 36 }), category: 'backend' },
  { id: '7', name: 'Node.js', icon: React.createElement('img', { src: '/logos/nodejs.svg', alt: 'Node.js logo', width: 36, height: 36 }), category: 'backend' },
  { id: '8', name: 'Laravel', icon: React.createElement('img', { src: '/logos/laravel.svg', alt: 'Laravel logo', width: 36, height: 36 }), category: 'backend' },

  // Database
  { id: '9', name: 'MySQL', icon: React.createElement('img', { src: '/logos/mysql.svg', alt: 'MySQL logo', width: 36, height: 36 }), category: 'database' },

  // AI / ML
  { id: '10', name: 'Machine Learning', icon: React.createElement('img', { src: '/logos/ml.svg', alt: 'Machine Learning logo', width: 36, height: 36 }), category: 'ai' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Wibrary - Mini Library System',
    description: 'Wibrary is a mini library management system developed for the University of Mindanao (UM) that streamlines book tracking, borrowing, returns, and user management through a simple and user-friendly interface.',
    technologies: ['Java'],
    links: {},
    image: '/Project1.png',
    galleryImages: ['/Project1.png', '/Project1-1.png', '/Project1-2.png'],
  },
  {
    id: '2',
    title: 'yUM-e Food Ordering App',
    description: 'Built an Android-based food ordering app for University of Mindanao students using Java, enabling menu browsing, order placement, and order tracking for campus canteens.',
    technologies: ['Java', 'MySQL'],
    links: {},
    image: '/Project2.png',
    galleryImages: ['/Project2.png', '/Project2-1.PNG'],
  },
  {
    id: '3',
    title: 'Pet Services System',
    description: 'Built desktop applications for managing pet information, appointments, and care schedules. Implemented features for pet registration, medical history tracking, and communication with veterinarians.',
    technologies: ['Laravel'],
    links: {},
    image: '/Project3.png',
    galleryImages: ['/Project3.png', '/Project3-1.PNG', '/Project3-2.PNG','/Project3-3.PNG','/Project3-4.PNG'],
  },
  {
    id: '4',
    title: 'Cemetery System',
    description: 'Built a cemetery management system to organize burial records, plot details, and visitor information through a simple web interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {},
    image: '/Project4.PNG',
    galleryImages: ['/Project4.PNG', '/Project4-1.PNG', '/Project4-2.PNG'],
  },
  {
    id: '5',
    title: 'Bank System',
    description: 'Developed a banking system to handle account creation, transactions, and balance tracking with reliable backend logic.',
    technologies: ['Python'],
    links: {},
    image: '/Project5.PNG',
    galleryImages: ['/Project5.PNG', '/Project5-1.PNG', '/Project5-2.PNG'],
  },
  {
    id: '6',
    title: 'PM2 Detection',
    description: 'Created a PM2 detection project focused on identifying particulate matter patterns from collected environmental data.',
    technologies: ['Machine Learning'],
    links: {},
    image: '/Project6.png',
    galleryImages: ['/Project6.png'],
  },
  {
    id: '7',
    title: 'Phishing Detection',
    description: 'Built a phishing detection model to classify suspicious links and improve early warning against fraudulent websites.',
    technologies: ['Machine Learning'],
    links: {},
    image: '/Project7.PNG',
    galleryImages: ['/Project7.PNG'],
  },
  {
    id: '8',
    title: 'Tic-Tac-Toe Game',
    description: 'Implemented a Tic-Tac-Toe game using Python, featuring a responsive design and intuitive user interface.',
    technologies: ['Python'],
    links: {},
    image: '/Project8.PNG',
    galleryImages: ['/Project8.PNG', '/Project8-1.PNG'],
  },
    {
    id: '9',
    title: 'Weather Forecasting App',
    description: 'Developed a weather forecasting application to provide accurate and up-to-date weather information to users.',
    technologies: ['Python'],
    links: {},
    image: '/Project9.PNG',
    galleryImages: ['/Project9.PNG', '/Project9-1.PNG'],
  },
  {
    id: '10',
    title: 'Student Information System',
    description: 'Developed a student information system to manage and track student records, grades, and academic progress.',
    technologies: ['Laravel'],
    links: {},
    image: '/Project10.PNG',
    galleryImages: ['/Project10.PNG', '/Project10-1.PNG', '/Project10-2.PNG'],
  },
   {
    id: '11',
    title: 'Simple Authentication System',
    description: 'Developed a simple authentication system to manage user login and registration with secure password handling.',
    technologies: ['React', 'Node.js'],
    links: {},
    image: '/Project11.PNG',
    galleryImages: ['/Project11.PNG', '/Project11-1.PNG', '/Project11-2.PNG'],
  },
  {
    id: '12',
    title: 'Movie Recommendation System',
    description: 'Built a movie recommendation system to suggest films based on user preferences and viewing history.',
    technologies: ['React', 'Node.js'],
    links: {},
    image: '/Project12.PNG',
    galleryImages: ['/Project12.PNG', '/Project12-1.PNG'],
  },
  {
    id: '13',
    title: 'Data Structure Visualizer',
    description: 'Developed a visualizer to help students understand and interact with various data structures and algorithms.',
    technologies: ['Python'],
    links: {},
    image: '/Project13.PNG',
    galleryImages: ['/Project13.PNG', '/Project13-1.PNG'],
  }


];

export const education: Education[] = [
  {
    id: '1',
    degree: "Bachelor of Science in Computer Science",
    institution: 'University of Mindanao',
    duration: '2023 - 2027',
    description: 'The curriculum focuses on algorithms, programming, software engineering, and systems. The program also features specialization tracks in cybersecurity.',
    type: 'education',
  },
  // Add certifications
  {
    id: '2',
    degree: 'IT Specialist - Network Security',
    institution: 'Pearson',
    duration: 'Issued Mar 2026',
    description: 'Professional certification covering network security principles, operating system security, and secure network infrastructure.',
    image: '/ITS3.PNG',
    type: 'certification',
  },
  {
    id: '3',
    degree: 'IT Specialist - Databases',
    institution: 'Certiport - A Pearson VUE Business',
    duration: 'Issued Mar 2025',
    description: 'Validation of fundamental database concepts, including design, manipulation, and administration of data.',
    image: '/ITS1.PNG',
    type: 'certification',
  },
  {
    id: '4',
    degree: 'IT Specialist - Java',
    institution: 'Certiport - A Pearson VUE Business',
    duration: 'Issued Mar 2024',
    description: 'Professional certification validating fundamental knowledge of Java programming, including data types, operators, and object-oriented concepts.',
    image: '/ITS2.PNG',
    type: 'certification',
  },

  

];

export const socialLinks: SocialLinks[] = [
  { name: 'GitHub', icon: React.createElement(Github, { size: 18 }), url: 'https://github.com/naz-33' },
  { name: 'LinkedIn', icon: React.createElement(Linkedin, { size: 18 }), url: 'https://www.linkedin.com/in/nazlah-nanding-5759822a6/' },
  { name: 'Email', icon: React.createElement(Mail, { size: 18 }), url: 'n.nanding.545627@umindanao.edu.ph' },
];