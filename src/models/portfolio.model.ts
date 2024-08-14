import { LinkPrismic, ImagePrismic } from '@/models/prismic.model';

export type ExperienceType = 'work-experience' | 'personal-project';

export interface Experience {
  title: string;
  text: string[];
  image?: ImagePrismic;
  link?: LinkPrismic;
  altLink?: LinkPrismic;
  codeLink?: LinkPrismic;
  tags?: string[];
  time?: string;
  slug: string;
  type: ExperienceType;
}

export interface SocialMedia {
  name?: string;
  link: LinkPrismic;
  label?: string;
}

export interface Portfolio {
  name: string;
  role: string;
  text_short: string;
  socialMedia: any[];
  summary: string[];
  workExperiences: Experience[];
  personalProjects: Experience[];
  image: ImagePrismic;
  resumeLink: LinkPrismic;
  location: string;
  email: string;
  showPersonalProjects: boolean;
}
