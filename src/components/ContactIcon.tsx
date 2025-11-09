import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  MessageSquare, 
  Calendar,
  Globe
} from 'lucide-react';
import type { ComponentProps } from 'react';

type IconComponent = React.ComponentType<ComponentProps<'svg'>>;

const iconMap: Record<string, IconComponent> = {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  MessageSquare,
  Calendar,
  Globe
};

interface ContactIconProps {
  iconName: string;
  className?: string;
}

export default function ContactIcon({ iconName, className = "w-6 h-6" }: ContactIconProps) {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}

