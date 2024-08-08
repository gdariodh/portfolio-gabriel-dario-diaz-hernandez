import { LinkPrismic, ImagePrismic } from '@/models/prismic.model';

interface Experience {
  title: string;
  text: string;
  image?: ImagePrismic;
  link?: LinkPrismic;
  altLink?: LinkPrismic;
}

interface WorkExperience extends Experience {
  time: string;
}

export interface PortfolioDataNormalized {
  name: string;
  role: string;
  text_short: string;
  socialMedia: {
    name: string;
    link: LinkPrismic;
  }[];
  summary: string[];
  workExperiences: WorkExperience[];
  personalProjects: Experience[];
}
