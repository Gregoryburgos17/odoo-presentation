import { LucideIcon } from 'lucide-react';

export interface CompanyInfo {
  description: string;
  mission: string;
  vision: string;
  objectives: string[];
}

export interface Service {
  title: string;
  icon: LucideIcon;  // Reemplazamos 'any' con el tipo correcto de Lucide
  description: string;
  benefits: string[];
}

// Tipos adicionales que podrían ser útiles
export interface ServiceSectionProps {
  services: Service[];
}

export interface CompanySection {
  info: CompanyInfo;
}