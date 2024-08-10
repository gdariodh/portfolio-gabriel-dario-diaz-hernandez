import { ImagePrismic, TextPrismic } from '@/models';

export const multiParagraphAdapter = (text: TextPrismic[]) => {
  return text?.map((item) => item.text.split('\n')).flat() || [];
};

export const singleParagraphAdapter = (text: TextPrismic[]) => {
  return text?.map((item) => item.text).join(' ') || '';
};

export const tagsAdapter = (tags: string[]) => {
  return tags?.flatMap((tag: string) => tag.split(','));
};

export const imageAdapter = (image: any) => {
  return {
    url: image?.url,
    alt: image?.alt,
    height: image?.dimensions?.height,
    width: image?.dimensions?.width,
  } as ImagePrismic;
};
