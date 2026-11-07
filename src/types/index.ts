export interface ResearchDirection {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  category: string;
  status: 'Proposed direction';
  overview: string;
  whyItMatters: string;
  researchQuestions: string[];
  possiblePrototypes: string[];
  evaluationMetrics: string[];
  expectedLearning: string[];
  suggestedToolsAndStacks: string[];
}

export interface CurriculumModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
}

export interface TimelinePhase {
  weeks: string;
  title: string;
  focus: string;
  deliverables: string[];
  isExtension?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Eligibility' | 'Commitment' | 'Mentorship & Teams' | 'Outcomes' | 'Applications';
}

export interface SiteConfig {
  brandName: string;
  programmeName: string;
  tagline: string;
  cohortSize: string;
  duration: string;
  coreDuration: string;
  extensionDuration: string;
  weeklyCommitment: string;
  teamsStructure: string;
  deliveryMode: string;
  dates: string;
  applicationStatus: string;
  applicationOpen: boolean;
  contactEmail: string | null;
  communityUrl: string | null;
  githubUrl: string | null;
}
