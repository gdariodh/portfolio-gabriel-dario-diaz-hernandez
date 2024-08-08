import { TextPrismic } from '@/models';

export const multiParagraphAdapter = (text: TextPrismic[]) => {
  return text?.map((item) => item.text.split('\n')).flat() || [];
};

export const singleParagraphAdapter = (text: TextPrismic[]) => {
  return text?.map((item) => item.text).join(' ') || '';
};
