import { Portfolio } from '@/models';
import {
  imageAdapter,
  multiParagraphAdapter,
  singleParagraphAdapter,
  tagsAdapter,
} from '@/adapters';

export const portfolioAdapter = (data: any) => {
  return {
    name: singleParagraphAdapter(data.name),
    role: singleParagraphAdapter(data.role),
    text_short: singleParagraphAdapter(data.text_short),
    summary: multiParagraphAdapter(data.summary),
    image: imageAdapter(data.image_profile),
    resumeLink: data.resume_link,
    location: singleParagraphAdapter(data.location),
    email: singleParagraphAdapter(data.email),
    socialMedia: data.social_media.map((social: any) => {
      return {
        name: singleParagraphAdapter(social.name_social),
        link: social.link_social,
      };
    }),
    workExperiences: data.experiences.map((experience: any) => {
      return {
        title: singleParagraphAdapter(experience.title_experience),
        text: multiParagraphAdapter(experience.text_experience),
        time: singleParagraphAdapter(experience.time_experience),
        link: experience.link_experience,
        altLink: experience.alt_link_experience,
        image: imageAdapter(experience.image_experience),
      };
    }),
    personalProjects: data.projects.map((project: any) => {
      const tags = tagsAdapter(multiParagraphAdapter(project.tags_project));
      return {
        title: singleParagraphAdapter(project.title_project),
        text: multiParagraphAdapter(project.text_project),
        link: project.link_project,
        altLink: project.alt_link_project,
        tags,
        image: imageAdapter(project.image_project),
      };
    }),
  } as Portfolio;
};
