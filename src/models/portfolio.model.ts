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

export interface PortfolioDataNormalized {
  name: string;
  role: string;
  text_short: string;
  socialMedia: any[];
  summary: string[];
  workExperiences: Experience[];
  personalProjects: Experience[];
}
