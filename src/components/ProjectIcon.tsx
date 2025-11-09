import { Rocket, Book, Volleyball, Headphones, BarChart3, PenTool, Star } from 'lucide-react';
import type { ComponentProps } from 'react';

type IconComponent = React.ComponentType<ComponentProps<'svg'>>;

const iconMap: Record<string, IconComponent> = {
  Rocket,
  Book,
  Volleyball,
  Headphones,
  BarChart3,
  PenTool,
  Star
};

interface ProjectIconProps {
  iconName?: string;
  className?: string;
}

export default function ProjectIcon({ iconName, className = "w-6 h-6" }: ProjectIconProps) {
  if (!iconName) return null;
  
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}

