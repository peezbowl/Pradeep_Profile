export interface ImpactMetric {
  id: string;
  value: string;
  numericTarget: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  description: string;
  category: 'Scale' | 'Strategy' | 'Governance' | 'Deal Pursuit';
}

export interface Competency {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  keyDeliverables: string[];
  iconName: string;
}

export interface StrategicCapability {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  strategicValue: string;
  executionPillars: string[];
  keyDeliverable: string;
  iconName: string;
  metricHighlight: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  domain: string;
  subtitle: string;
  timeframe: string;
  organization: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface CareerItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologiesAndTools: string[];
  impactMetric: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  focus: string;
  location?: string;
  badge?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  type: 'Executive' | 'Domain Certification' | 'Technical / Cloud' | 'Management';
  badge?: string;
}

export interface ThoughtLeadershipArticle {
  id: string;
  title: string;
  category: 'Knowledge Strategy' | 'Competitive Intelligence' | 'Sales Enablement' | 'Win/Loss Analysis';
  readingTime: string;
  publishedDate: string;
  excerpt: string;
  keyTakeaways: string[];
  fullContent: string[];
}
