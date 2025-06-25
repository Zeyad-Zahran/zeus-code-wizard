
import { Template, TemplateCategory } from '../types/template';
import { authenticationTemplates } from '../templates/authentication';
import { marketingTemplates } from '../templates/marketing';
import { saasTemplates } from '../templates/saas';
import { businessTemplates } from '../templates/business';

export const getAllTemplates = (): Template[] => {
  return [
    ...authenticationTemplates,
    ...marketingTemplates,
    ...saasTemplates,
    ...businessTemplates,
  ];
};

export const getTemplatesByCategory = (): TemplateCategory[] => {
  return [
    {
      id: 'authentication',
      name: 'Authentication',
      templates: authenticationTemplates,
    },
    {
      id: 'marketing',
      name: 'Marketing',
      templates: marketingTemplates,
    },
    {
      id: 'saas',
      name: 'SaaS',
      templates: saasTemplates,
    },
    {
      id: 'business',
      name: 'Business',
      templates: businessTemplates,
    },
  ];
};

export const getTemplateById = (id: string): Template | undefined => {
  return getAllTemplates().find(template => template.id === id);
};

export const searchTemplates = (query: string): Template[] => {
  const searchQuery = query.toLowerCase();
  return getAllTemplates().filter(template => 
    template.title.toLowerCase().includes(searchQuery) ||
    template.description.toLowerCase().includes(searchQuery) ||
    template.category.toLowerCase().includes(searchQuery)
  );
};
