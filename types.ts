import { LucideIcon } from 'lucide-react';

export interface PracticeArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  title: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface NavItem {
  label: string;
  href: string;
}