import { Condition, AgeGroupInfo, AudiencePathway, NavItem } from '@/types';

export const AGE_GROUPS: AgeGroupInfo[] = [
  {
    id: 'under-5',
    label: 'Under-5s',
    ageRange: '0-4 years',
    description: 'Early years development and intervention',
  },
  {
    id: 'school-age',
    label: 'School-Age',
    ageRange: '5-11 years',
    description: 'Primary school support and learning',
  },
  {
    id: 'teenagers',
    label: 'Teenagers',
    ageRange: '12-18 years',
    description: 'Secondary school and adolescent challenges',
  },
  {
    id: 'young-adults',
    label: 'Young Adults',
    ageRange: '18+',
    description: 'Transition to adult services and independence',
  },
];

export const AUDIENCE_PATHWAYS: AudiencePathway[] = [
  {
    id: 'parent',
    title: "I'm a Parent",
    description:
      'Find guidance, support strategies, and resources to help your child thrive.',
    icon: 'heart',
    href: '/resources/parents',
  },
  {
    id: 'young-person',
    title: "I'm a Young Person",
    description:
      'Age-appropriate information written for you, about understanding yourself.',
    icon: 'user',
    href: '/resources/young-people',
  },
  {
    id: 'professional',
    title: "I'm a Professional",
    description:
      'Clinical guidance, assessment tools, and evidence-based resources.',
    icon: 'briefcase',
    href: '/resources/professionals',
  },
];

export const CONDITIONS: Condition[] = [
  // Neurodevelopmental
  {
    id: 'autism',
    slug: 'autism',
    name: 'Autism',
    category: 'neurodevelopmental',
    shortDescription:
      'A neurodevelopmental difference affecting social communication and interaction.',
    featured: true,
  },
  {
    id: 'adhd',
    slug: 'adhd',
    name: 'ADHD',
    category: 'neurodevelopmental',
    shortDescription:
      'Attention Deficit Hyperactivity Disorder affects focus, activity levels, and impulse control.',
    featured: true,
  },
  {
    id: 'dld',
    slug: 'developmental-language-disorder',
    name: 'Developmental Language Disorder',
    category: 'neurodevelopmental',
    shortDescription:
      'A condition affecting how children understand and use language.',
  },
  {
    id: 'dyslexia',
    slug: 'dyslexia',
    name: 'Dyslexia',
    category: 'neurodevelopmental',
    shortDescription:
      'A learning difference that primarily affects reading and spelling.',
  },
  {
    id: 'dyspraxia',
    slug: 'dyspraxia',
    name: 'Dyspraxia/DCD',
    category: 'neurodevelopmental',
    shortDescription:
      'Developmental Coordination Disorder affecting motor coordination and planning.',
  },
  {
    id: 'intellectual-disability',
    slug: 'intellectual-disability',
    name: 'Intellectual Disability',
    category: 'neurodevelopmental',
    shortDescription:
      'A condition characterized by limitations in intellectual functioning and adaptive behavior.',
  },

  // Neurological
  {
    id: 'epilepsy',
    slug: 'epilepsy',
    name: 'Epilepsy',
    category: 'neurological',
    shortDescription:
      'A neurological condition causing recurrent seizures due to abnormal brain activity.',
    featured: true,
  },
  {
    id: 'cerebral-palsy',
    slug: 'cerebral-palsy',
    name: 'Cerebral Palsy',
    category: 'neurological',
    shortDescription:
      'A group of conditions affecting movement and muscle tone.',
  },
  {
    id: 'headaches-migraine',
    slug: 'headaches-migraine',
    name: 'Headaches & Migraine',
    category: 'neurological',
    shortDescription:
      'Recurrent headaches and migraines in children and young people.',
  },

  // Common Childhood Conditions
  {
    id: 'asthma',
    slug: 'asthma',
    name: 'Asthma',
    category: 'common-childhood',
    shortDescription:
      'A common condition affecting the airways and breathing.',
  },
  {
    id: 'eczema',
    slug: 'eczema',
    name: 'Eczema',
    category: 'common-childhood',
    shortDescription:
      'A skin condition causing dry, itchy, and inflamed patches.',
  },
  {
    id: 'allergies',
    slug: 'allergies',
    name: 'Allergies',
    category: 'common-childhood',
    shortDescription:
      'Immune system reactions to normally harmless substances.',
  },
  {
    id: 'sleep-problems',
    slug: 'sleep-problems',
    name: 'Sleep Problems',
    category: 'common-childhood',
    shortDescription:
      'Difficulties with falling asleep, staying asleep, or sleep quality.',
  },
  {
    id: 'feeding-difficulties',
    slug: 'feeding-difficulties',
    name: 'Feeding Difficulties',
    category: 'common-childhood',
    shortDescription:
      'Challenges with eating, feeding, and nutrition in children.',
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  neurodevelopmental: 'Neurodevelopmental',
  neurological: 'Neurological',
  'common-childhood': 'Common Childhood Conditions',
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Conditions',
    href: '/conditions',
    children: [
      { label: 'All Conditions', href: '/conditions' },
      { label: 'Neurodevelopmental', href: '/conditions?category=neurodevelopmental' },
      { label: 'Neurological', href: '/conditions?category=neurological' },
      { label: 'Common Childhood', href: '/conditions?category=common-childhood' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Understanding Diagnoses', href: '/resources/diagnoses' },
      { label: 'Practical Strategies', href: '/resources/strategies' },
      { label: 'School Support', href: '/resources/school-support' },
      { label: 'Healthcare Navigation', href: '/resources/healthcare' },
      { label: 'Transition Planning', href: '/resources/transition' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
];

// External partner apps - standalone applications linked from SUVIMA
export const PARTNER_APPS = [
  {
    name: 'EpilepsyHelper',
    url: 'https://epilepsyhelper.app',
    description: 'Track seizures, manage medications, and create care plans for epilepsy management.',
  },
  {
    name: 'TransitionReady',
    url: 'https://transitionready.app',
    description: 'Supporting young people preparing for the transition from pediatric to adult healthcare services.',
  },
  {
    name: "Anna's Ultrasound Adventure",
    url: 'https://www.annas-ultrasound-adventure.app/',
    description: 'Interactive storybook helping children prepare for ultrasound procedures.',
  },
  {
    name: 'Practical Autism Research',
    url: 'https://practical-autism-research.co.uk',
    description: 'In-depth autism resources and the latest research translated for families.',
  },
];

export function getConditionsByCategory(category: string): Condition[] {
  return CONDITIONS.filter((c) => c.category === category);
}

export function getFeaturedConditions(): Condition[] {
  return CONDITIONS.filter((c) => c.featured);
}

export function getConditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}
