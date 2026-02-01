import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CONDITIONS, getConditionBySlug } from '@/data/conditions';
import {
  ConditionHeader,
  ConditionOverview,
  AgeGroupTabs,
  RelatedConditions,
} from '@/components/conditions';
import { AgeGroup, AgeGroupContent } from '@/types';

interface ConditionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CONDITIONS.map((condition) => ({
    slug: condition.slug,
  }));
}

export async function generateMetadata({ params }: ConditionPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const condition = getConditionBySlug(resolvedParams.slug);

  if (!condition) {
    return {
      title: 'Condition Not Found',
    };
  }

  return {
    title: condition.name,
    description: condition.shortDescription,
    openGraph: {
      title: `${condition.name} | SUVIMA`,
      description: condition.shortDescription,
    },
  };
}

// Placeholder content - in production this would come from a CMS or database
function getConditionContent(slug: string) {
  const placeholderContent: Record<AgeGroup, AgeGroupContent> = {
    'under-5': {
      title: 'Early Years (0-4)',
      sections: [
        {
          heading: 'Understanding in Early Years',
          content:
            'Content for this section is being developed. Check back soon for comprehensive guidance on early identification and support.',
          bulletPoints: [
            'Early signs parents might notice',
            'Developmental considerations',
            'Working with early years settings',
          ],
        },
        {
          heading: 'Early Intervention',
          content:
            'Early intervention can make a significant difference. Learn about the support available for young children.',
          bulletPoints: [
            'Assessment pathways',
            'Therapy options',
            'Home-based strategies',
          ],
        },
      ],
    },
    'school-age': {
      title: 'Primary School Years (5-11)',
      sections: [
        {
          heading: 'School Support',
          content:
            'Information about educational support, including SEN provisions, EHCPs, and classroom accommodations.',
          bulletPoints: [
            'Working with teachers',
            'Classroom accommodations',
            'Homework strategies',
          ],
        },
        {
          heading: 'Social Development',
          content:
            'Supporting friendships and social skills during the primary school years.',
          bulletPoints: [
            'Peer relationships',
            'Playdates and activities',
            'Managing social challenges',
          ],
        },
      ],
    },
    teenagers: {
      title: 'Teenage Years (12-18)',
      sections: [
        {
          heading: 'Secondary School',
          content:
            'Navigating secondary education, exam accommodations, and increasing independence.',
          bulletPoints: [
            'Exam access arrangements',
            'Subject choices',
            'Self-advocacy skills',
          ],
        },
        {
          heading: 'Mental Health',
          content:
            'Understanding the mental health considerations specific to adolescence.',
          bulletPoints: [
            'Common challenges',
            'Support strategies',
            'When to seek help',
          ],
        },
      ],
    },
    'young-adults': {
      title: 'Young Adulthood (18+)',
      sections: [
        {
          heading: 'Transition to Adult Services',
          content:
            'Preparing for and navigating the transition from pediatric to adult healthcare services.',
          bulletPoints: [
            'Understanding the process',
            'Key contacts and services',
            'Advocating for yourself',
          ],
        },
        {
          heading: 'Further Education & Employment',
          content:
            'Support for university, college, apprenticeships, and entering the workplace.',
          bulletPoints: [
            'Disability support services',
            'Workplace rights',
            'Disclosure decisions',
          ],
        },
      ],
    },
  };

  // Condition-specific related conditions
  const relatedConditionsMap: Record<string, string[]> = {
    autism: ['adhd', 'developmental-language-disorder', 'dyspraxia'],
    adhd: ['autism', 'dyslexia', 'sleep-problems'],
    epilepsy: ['cerebral-palsy', 'intellectual-disability'],
    dyslexia: ['adhd', 'dyspraxia', 'developmental-language-disorder'],
    'cerebral-palsy': ['epilepsy', 'intellectual-disability'],
  };

  return {
    overview: {
      whatIs:
        'This is a placeholder description. Full content is being developed by our medical team and will provide comprehensive, evidence-based information about this condition.',
      keySigns: [
        'Placeholder sign 1 - content being developed',
        'Placeholder sign 2 - content being developed',
        'Placeholder sign 3 - content being developed',
        'Placeholder sign 4 - content being developed',
      ],
      whenToSeekHelp: [
        'If you notice concerning changes',
        'When symptoms affect daily life',
        'If you have questions or concerns',
        'For routine check-ups and monitoring',
      ],
    },
    ageContent: placeholderContent,
    relatedConditions: relatedConditionsMap[slug] || [],
  };
}

export default async function ConditionPage({ params }: ConditionPageProps) {
  const resolvedParams = await params;
  const condition = getConditionBySlug(resolvedParams.slug);

  if (!condition) {
    notFound();
  }

  const content = getConditionContent(resolvedParams.slug);

  return (
    <>
      <ConditionHeader condition={condition} />
      <ConditionOverview
        whatIs={content.overview.whatIs}
        keySigns={content.overview.keySigns}
        whenToSeekHelp={content.overview.whenToSeekHelp}
      />
      <AgeGroupTabs content={content.ageContent} />
      {content.relatedConditions.length > 0 && (
        <RelatedConditions conditionSlugs={content.relatedConditions} />
      )}
    </>
  );
}
