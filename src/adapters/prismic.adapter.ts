import { TextPrismic } from '@/models';

export const multiParagraphAdapter = (text: TextPrismic[]) => {
  return text?.map((item) => item.text.split('\n')).flat() || [];
};

export const singleParagraphAdapter = (text: TextPrismic[]) => {
  return text?.map((item) => item.text).join(' ') || '';
};

export const tagsAdapter = (tags: string[]) => {
  return tags?.flatMap((tag: string) => tag.split(','));
};
