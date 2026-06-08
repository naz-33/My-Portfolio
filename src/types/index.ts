import { JSX } from "react";

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string | string[];
}

export interface Skill {
  id: string;
  name: string;
  icon: JSX.Element;
  category: 'all' | 'frontend' | 'backend' | 'devops' | 'database' | 'messaging' | 'testing' | 'other-skills' | 'ai';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    screenshots?: string;
    publication?: string;
  };
  image: string;
  galleryImages?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  image?: string;
  type: 'education' | 'certification';
}

export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface SocialLinks {
  name: string;
  icon: JSX.Element;
  url: string;
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'devops' | 'database' | 'messaging' | 'testing' | 'other-skills' | 'ai';