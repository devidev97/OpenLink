import { icons } from 'lucide-react';
import type { Tool } from '@/lib/types';

type CardProps = Pick<Tool, 'title' | 'href' | 'imageSrc' | 'iconName' | 'imageVariant'>;

function kebabToPascal(name: string): string {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function LucideIcon({ name, size }: { name: string; size: number }) {
  const Icon = icons[kebabToPascal(name) as keyof typeof icons];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.5} />;
}

export default function Card({ title, href, imageSrc, iconName, imageVariant }: CardProps) {
  const isExternal = /^https?:\/\//.test(href);
  const imageVariantClass = imageVariant === 'large' ? 'card-image--large' : '';

  return (
    <div className="card-wrap">
      <a
        href={href}
        className="card"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <div className="card-icon">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className={`card-image ${imageVariantClass}`} />
          ) : iconName ? (
            <LucideIcon name={iconName} size={64} />
          ) : null}
        </div>
        <p className="card-title">{title}</p>
      </a>
    </div>
  );
}
