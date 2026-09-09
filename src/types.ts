export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'medicine' | 'education' | 'productivity' | 'community' | 'ecommerce';
  intersections: string[];
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  impactOrStatus: string;
  link?: string;
  github?: string;
  demoType?: 'flashcard' | 'polymath' | 'wezena' | 'youtube' | 'hararmagala';
}

export interface EducationalGuide {
  id: string;
  title: string;
  subtitle: string;
  category: 'surgery' | 'internal-medicine';
  targetAudience: string;
  description: string;
  topicsCovered: string[];
  sampleChapters: {
    title: string;
    summary: string;
    keyTakeaway: string;
    clinicalPearl: string;
  }[];
  aiWorkflowTip: string;
}

export interface IntersectionItem {
  id: string;
  title: string;
  primaryField: string;
  secondaryField: string;
  iconName: string;
  description: string;
  concreteOutputs: string[];
  quote: string;
}

export interface CommunityRole {
  id: string;
  role: string;
  organization: string;
  location: string;
  period?: string;
  description: string;
  achievements: string[];
  badge: string;
  link?: string;
  links?: { label: string; url: string }[];
}

export interface TeachingAudience {
  group: string;
  description: string;
  impact: string;
  icon: string;
}

export interface Essay {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  keyQuote: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  description: string;
  items: string[];
}
