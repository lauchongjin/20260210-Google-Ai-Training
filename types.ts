
export type SiteMode = 'technical' | 'creative';

export interface CaseStudy {
  id: string;
  title: string;
  category: 'growth' | 'systems' | 'data' | 'photography';
  description: string;
  image: string;
  metrics?: { label: string; value: string }[];
  codeSnippet?: string;
  gallery?: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServicePackage {
  title: string;
  price: string;
  features: string[];
  pillar: string;
}
