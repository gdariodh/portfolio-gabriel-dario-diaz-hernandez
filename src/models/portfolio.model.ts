import { LinkPrismic, ImagePrismic } from '@/models/prismic.model';

export interface Experience {
  title: string;
  text: string;
  image?: ImagePrismic;
  link?: LinkPrismic;
  altLink?: LinkPrismic;
  tags?: string[];
  time?: string;
}

export interface SocialMedia {
  name: string;
  link: LinkPrismic;
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
}
