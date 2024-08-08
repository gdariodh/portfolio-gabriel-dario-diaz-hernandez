export type TextPrismic = {
  type: string;
  text: string;
  spans: any[];
  direction: string;
};

export type LinkPrismic = {
  link_type: string;
  url: string;
  target: string;
};

export type ImagePrismic = {
  url: string;
  alt: string;
  width: number;
  height: number;
};
