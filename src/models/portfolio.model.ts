import { LinkPrismic, ImagePrismic } from '@/models/prismic.model';

export type ExperienceType = 'work-experience' | 'personal-project';

export interface Experience {
  altLink?: LinkPrismic;
  codeLink?: LinkPrismic;
  image?: ImagePrismic;
  link?: LinkPrismic;
  slug: string;
  tags?: string[];
  text: string[];
  time?: string;
  title: string;
  type: ExperienceType;
}

export interface SocialMedia {
  label?: string;
  link: LinkPrismic;
  name?: string;
}

export interface Portfolio {
  email: string;
  image: ImagePrismic;
  location: string;
  name: string;
  personalProjects: Experience[];
  resumeLink: LinkPrismic;
  role: string;
  showPersonalProjects: boolean;
  socialMedia: any[];
  summary: string[];
  text_short: string;
  workExperiences: Experience[];
}
