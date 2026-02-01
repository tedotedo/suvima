// SUVIMA Type Definitions

export type AgeGroup = 'under-5' | 'school-age' | 'teenagers' | 'young-adults';

export interface AgeGroupInfo {
  id: AgeGroup;
  label: string;
  ageRange: string;
  description: string;
}

export type AudienceType = 'parent' | 'young-person' | 'professional';

export interface AudiencePathway {
  id: AudienceType;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export type ConditionCategory =
  | 'neurodevelopmental'
  | 'neurological'
  | 'common-childhood';

export interface Condition {
  id: string;
  slug: string;
  name: string;
  category: ConditionCategory;
  shortDescription: string;
  icon?: string;
  featured?: boolean;
}

export interface ConditionPage {
  condition: Condition;
  overview: {
    whatIs: string;
    keySigns: string[];
    whenToSeekHelp: string[];
  };
  ageContent: Record<AgeGroup, AgeGroupContent>;
  medicalInfo: MedicalInfo;
  researchUpdates: ResearchUpdate[];
  relatedConditions: string[]; // condition slugs
  professionalResources: Resource[];
  downloadableGuides: DownloadableGuide[];
}

export interface AgeGroupContent {
  title: string;
  sections: ContentSection[];
}

export interface ContentSection {
  heading: string;
  content: string;
  bulletPoints?: string[];
}

export interface MedicalInfo {
  treatments: string[];
  medications: string[];
  therapies: string[];
  monitoring: string[];
}

export interface ResearchUpdate {
  title: string;
  date: string;
  summary: string;
  source?: string;
  link?: string;
}

export interface Resource {
  title: string;
  description: string;
  type: 'pdf' | 'link' | 'video' | 'tool';
  href: string;
}

export interface DownloadableGuide {
  title: string;
  description: string;
  fileType: 'pdf' | 'docx';
  fileSize: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}
