
import React from 'react';
import { CaseStudy, ServicePackage } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'SaaS Funnel Optimization',
    category: 'growth',
    description: 'Scaled a B2B SaaS startup from $10k to $100k MRR through data-backed funnel experiments and automated lead scoring.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1517210122415-b0c70b2a09bf?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1517210122415-b0c70b2a09bf?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1445262102387-5febb59a56d9?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: '4',
    title: 'Notion Ops Framework',
    category: 'systems',
    description: 'Built a multi-layered workspace for a creative agency, integrating resource planning and automated invoicing.',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Project Turnaround', value: '-15%' }
    ]
  }
];

export const SERVICES: ServicePackage[] = [
  {
    title: 'Growth Engine',
    pillar: 'Growth Hacking',
    price: 'Custom Monthly',
    features: ['A/B Testing Framework', 'Paid Acquisition Audit', 'Lead Gen Funnels']
  },
  {
    title: 'Digital Core',
    pillar: 'Digital Transformation',
    price: 'Project Based',
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
  { name: 'Contact', href: '#contact' }
];

export const SYSTEM_PROMPT = `You are Alex's AI Consultant. Alex Rivera is a multidisciplinary expert.
In Technical Mode, you focus on Growth Hacking, CRM Architecture (HubSpot/Salesforce), and Notion Systems.
In Creative Mode, you focus on Brand Storytelling and high-end Photography.
Help users understand Alex's portfolio, services, and provide professional advice based on their queries. 
Keep responses concise and professional.`;
