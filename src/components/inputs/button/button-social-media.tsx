import { SocialMedia } from '@/models';
import { Linkedin, Github, FileDown, Twitter } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';
import { capitalizeString } from '@/utils';

interface ButtonSocialMediaProps {
  item: SocialMedia;
}

export function ButtonSocialMedia({ item }: ButtonSocialMediaProps) {
  const name = item?.name.toLowerCase();
  const link = item?.link.url;
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

  if (!name || !icon) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div>
            <a href={link} target="_blank" className="hover:text-primary">
              {icon}
            </a>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {name === 'resume' && 'Download'} My {capitalizeString(name)}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
