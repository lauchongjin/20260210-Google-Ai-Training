
import React from 'react';
import { CaseStudy, ServicePackage } from './types';
import { 
  TrendingUp, 
  Database, 
  Camera, 
  Layout, 
  Cpu, 
  LineChart 
} from 'lucide-react';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'SaaS Funnel Optimization',
    category: 'growth',
    description: 'Scaled a B2B SaaS startup from $10k to $100k MRR through data-backed funnel experiments and automated lead scoring.',
    image: 'https://picsum.photos/seed/growth1/800/600',
    metrics: [
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'CAC Reduction', value: '-30%' }
    ],
    codeSnippet: `SELECT user_id, count(*) as events\nFROM mixpanel_events\nWHERE event_name = 'conversion'\nGROUP BY 1`
  },
  {
    id: '2',
    title: 'Global CRM Migration',
    category: 'systems',
    description: 'Architected a custom HubSpot to Salesforce migration for an enterprise team of 200+, syncing millions of data points.',
    image: 'https://picsum.photos/seed/sys1/800/600',
    metrics: [
      { label: 'Data Integrity', value: '99.9%' },
      { label: 'Sync Latency', value: '< 2s' }
    ]
  },
  {
    id: '3',
    title: 'Brand Storytelling: Arctic',
    category: 'photography',
    description: 'A visual exploration of sustainability through commercial photography in extreme environments.',
    image: 'https://picsum.photos/seed/photo1/800/600',
    gallery: [
      'https://picsum.photos/seed/p1/600/800',
      'https://picsum.photos/seed/p2/600/800',
      'https://picsum.photos/seed/p3/600/800'
    ]
  },
  {
    id: '4',
    title: 'Notion Ops Framework',
    category: 'systems',
    description: 'Built a multi-layered workspace for a creative agency, integrating resource planning and automated invoicing.',
    image: 'https://picsum.photos/seed/notion1/800/600',
    metrics: [
      { label: 'Project Turnaround', value: '-15%' }
    ]
  }
];

export const SERVICES: ServicePackage[] = [
  {
    title: 'Growth Engine',
    pillar: 'Growth Hacking',
    price: 'Starting at $5,000/mo',
    features: ['A/B Testing Framework', 'Paid Acquisition Audit', 'Lead Gen Funnels']
  },
  {
    title: 'Digital Core',
    pillar: 'Digital Transformation',
    price: 'Fixed Project Fees',
    features: ['CRM Migration', 'Notion Architecture', 'Workflow Automation']
  },
  {
    title: 'Brand Visuals',
    pillar: 'Photography',
    price: 'Custom Quote',
    features: ['Commercial Shoots', 'Product Storytelling', 'High-End Retouching']
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'The Lab', href: '#lab' },
  { name: 'Contact', href: '#contact' }
];

export const SYSTEM_PROMPT = `
You are the Digital Twin of "The Growth Artist" (Alex), a specialist at the intersection of Growth Hacking, Digital Systems (CRM/Notion), and Photography.
Your goal is to consult potential clients, explain Alex's services, and provide insights based on his philosophy.

Alex's Pillars:
1. Growth Hacking: Funnel optimization, A/B testing, lead generation.
2. Digital Transformation: CRM (HubSpot/Salesforce) and Notion workspaces.
3. Data Analysis: ROI dashboards and SQL-driven insights.
4. Photography: High-end commercial and brand storytelling.

Philosophy: "Code is the structure, data is the proof, and imagery is the soul."

If someone asks for a price, refer them to the Services section but mention Alex works on bespoke quotes.
Be professional, sharp, and data-driven yet creatively inspired.
`;
