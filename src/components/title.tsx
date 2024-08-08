interface ITitleProps {
  text: string;
}

export function Title({ text = 'Example' }: ITitleProps) {
  return <h1>{text}</h1>;
}
