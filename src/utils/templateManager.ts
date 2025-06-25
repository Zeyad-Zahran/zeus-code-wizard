
import { Template } from '../types/template';
import { authenticationTemplates } from '../templates/authentication';
import { marketingTemplates } from '../templates/marketing';
import { saasTemplates } from '../templates/saas';
import { businessTemplates } from '../templates/business';
import { creativeTemplates } from '../templates/creative';
import { ecommerceTemplates } from '../templates/ecommerce';
import { healthTemplates } from '../templates/health';
import { educationTemplates } from '../templates/education';
import { foodTemplates } from '../templates/food';
import { technologyTemplates } from '../templates/technology';
import { realEstateTemplates } from '../templates/real-estate';
import { fitnessTemplates } from '../templates/fitness';
import { travelTemplates } from '../templates/travel';

export const getAllTemplates = (): Template[] => {
  return [
    ...authenticationTemplates,
    ...marketingTemplates,
    ...saasTemplates,
    ...businessTemplates,
    ...creativeTemplates,
    ...ecommerceTemplates,
    ...healthTemplates,
    ...educationTemplates,
    ...foodTemplates,
    ...technologyTemplates,
    ...realEstateTemplates,
    ...fitnessTemplates,
    ...travelTemplates,
  ];
};

export const getTemplatesByCategory = (category: string): Template[] => {
  const allTemplates = getAllTemplates();
  return allTemplates.filter(template => template.category === category);
};

export const getTemplateById = (id: string): Template | undefined => {
  const allTemplates = getAllTemplates();
  return allTemplates.find(template => template.id === id);
};

export const getAllCategories = (): string[] => {
  const allTemplates = getAllTemplates();
  const categories = new Set(allTemplates.map(template => template.category));
  return Array.from(categories).sort();
};

export const getTemplateCount = (): number => {
  return getAllTemplates().length;
};
