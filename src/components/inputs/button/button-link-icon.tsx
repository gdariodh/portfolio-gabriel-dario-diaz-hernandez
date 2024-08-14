import { SocialMedia } from '@/models';
import { cn } from '@/utils';
import { Linkedin, Github, FileDown, Twitter, Link } from 'lucide-react';

interface ButtonLinkIconProps extends React.HTMLAttributes<HTMLDivElement> {
  item: SocialMedia;
  className?: string;
}

export function ButtonLinkIcon({ item, className }: ButtonLinkIconProps) {
  const name = item?.name?.toLowerCase();
  const link = item?.link.url;
  const label = item?.label;
  let icon = null;

  if (name === 'linkedin') {
    icon = <Linkedin size={24} />;
  }

  if (name === 'github') {
    icon = <Github size={24} />;
  }

  if (name === 'resume') {
    icon = <FileDown size={24} />;
  }

  if (name === 'x') {
    icon = <Twitter />;
  }

  if (name === 'link') {
    icon = <Link size={24} />;
  }

  return (
    <div className={cn(className)}>
      <a
        href={link}
        target="_blank"
        className="flex gap-1 items-center hover:underline hover:opacity-70
        "
      >
        {icon} <span className="text-sm">{label}</span>
      </a>
    </div>
  );
}
