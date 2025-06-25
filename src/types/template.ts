
import { ReactNode } from 'react';

export interface Template {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  category: string;
  color: string;
  code: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  templates: Template[];
}
