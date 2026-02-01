import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define resource pages with their content
const resourcePages: Record<string, {
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'accent';
  sections: {
    heading: string;
    content: string;
    items?: string[];
  }[];
}> = {
  diagnoses: {
    title: 'Understanding Diagnoses',
    description: 'Learn what a diagnosis means, how assessments work, and what to expect after receiving a diagnosis.',
    icon: 'document',
    color: 'primary',
    sections: [
      {
        heading: 'What Does a Diagnosis Mean?',
        content: 'A diagnosis is a way of understanding and describing a set of characteristics or challenges. It can help explain experiences, access support, and connect with others who share similar experiences.',
        items: [
          'A diagnosis describes patterns of strengths and challenges',
          'It can open doors to support and services',
          'A diagnosis does not define who someone is',
          'Understanding can bring relief and clarity',
        ],
      },
      {
        heading: 'The Assessment Process',
        content: 'Assessment processes vary depending on the condition and local services. Generally, they involve gathering information from multiple sources to build a comprehensive picture.',
        items: [
          'Referral from GP, school, or self-referral',
          'Questionnaires and developmental history',
          'Observations and direct assessments',
          'Feedback and diagnosis discussion',
        ],
      },
      {
        heading: 'After the Diagnosis',
        content: 'Receiving a diagnosis can bring mixed emotions. Taking time to process and learn more at your own pace is important.',
        items: [
          'Allow time to adjust and process',
          'Learn about the condition from reliable sources',
          'Connect with support groups if helpful',
          'Explore what support is available',
        ],
      },
    ],
  },
  strategies: {
    title: 'Practical Strategies',
    description: 'Evidence-based approaches and day-to-day strategies to support children and young people at home.',
    icon: 'lightbulb',
    color: 'secondary',
    sections: [
      {
        heading: 'Managing Daily Routines',
        content: 'Consistent routines can provide predictability and reduce anxiety for many children and young people.',
        items: [
          'Visual schedules and timetables',
          'Transition warnings before changes',
          'Consistent bedtime routines',
          'Breaking tasks into smaller steps',
        ],
      },
      {
        heading: 'Communication Strategies',
        content: 'Adapting how we communicate can make a significant difference in understanding and reducing frustration.',
        items: [
          'Use clear, concrete language',
          'Allow processing time before expecting responses',
          'Use visual supports where helpful',
          'Check understanding rather than assuming',
        ],
      },
      {
        heading: 'Building Independence',
        content: 'Supporting independence is about finding the right balance between support and allowing growth.',
        items: [
          'Teach skills in small, manageable steps',
          'Use visual guides and checklists',
          'Celebrate effort and progress',
          'Gradually reduce support as skills develop',
        ],
      },
    ],
  },
  'school-support': {
    title: 'School Support',
    description: 'Navigate the education system, understand your rights, and work effectively with schools.',
    icon: 'book',
    color: 'accent',
    sections: [
      {
        heading: 'SEN Support and EHCPs',
        content: 'Schools have a duty to identify and support children with special educational needs. Understanding the system helps you advocate for your child.',
        items: [
          'SEN Support is the first level of additional help',
          'EHCPs provide legally binding support for complex needs',
          'Annual reviews ensure plans stay current',
          'You can request an EHCP assessment',
        ],
      },
      {
        heading: 'Working with Schools',
        content: 'Building a positive relationship with your child\'s school is key to ensuring they receive appropriate support.',
        items: [
          'Regular communication with the SENCO',
          'Keep records of meetings and agreements',
          'Share what works at home',
          'Attend parents\' evenings and reviews',
        ],
      },
      {
        heading: 'Exam Access Arrangements',
        content: 'Students with additional needs may be entitled to adjustments during exams to ensure fair access.',
        items: [
          'Extra time for processing difficulties',
          'Rest breaks for fatigue or anxiety',
          'Separate room for sensory needs',
          'Use of a reader or scribe',
        ],
      },
    ],
  },
  healthcare: {
    title: 'Healthcare Navigation',
    description: 'Understand healthcare pathways, prepare for appointments, and get the most from medical care.',
    icon: 'hospital',
    color: 'primary',
    sections: [
      {
        heading: 'Understanding Referral Pathways',
        content: 'Healthcare systems can feel complex. Understanding how referrals work helps you navigate the system more effectively.',
        items: [
          'GPs are usually the first point of contact',
          'Some services accept self-referral',
          'Waiting times vary by area and service',
          'You can ask about the expected timeline',
        ],
      },
      {
        heading: 'Preparing for Appointments',
        content: 'Getting the most from medical appointments often requires preparation beforehand.',
        items: [
          'Write down your questions in advance',
          'Bring a list of current medications',
          'Note any changes since the last appointment',
          'Consider bringing someone for support',
        ],
      },
      {
        heading: 'Your Rights as a Patient',
        content: 'Understanding your rights helps you advocate for appropriate care.',
        items: [
          'Right to be involved in decisions about care',
          'Right to a second opinion',
          'Right to access your medical records',
          'Right to complain if care is inadequate',
        ],
      },
    ],
  },
  transition: {
    title: 'Transition Planning',
    description: 'Prepare for the move from paediatric to adult services, and from education to employment.',
    icon: 'arrow-right',
    color: 'secondary',
    sections: [
      {
        heading: 'Healthcare Transition',
        content: 'Moving from children\'s to adult health services is a significant change that requires careful planning.',
        items: [
          'Transition planning should start early (around 14)',
          'Adult services work differently to paediatric services',
          'You may need to be more proactive as an adult',
          'TransitionReady app can help with preparation',
        ],
      },
      {
        heading: 'Education to Employment',
        content: 'The move from education to work or further training opens new opportunities and challenges.',
        items: [
          'Consider supported internships or apprenticeships',
          'Access to Work scheme provides workplace support',
          'Disclosure is a personal choice',
          'Know your workplace rights',
        ],
      },
      {
        heading: 'Benefits and Financial Support',
        content: 'Various benefits and support are available for young people with disabilities or health conditions.',
        items: [
          'Personal Independence Payment (PIP)',
          'Universal Credit for those able to work',
          'Disabled Students\' Allowance for higher education',
          'Local authority support for those with higher needs',
        ],
      },
    ],
  },
  parents: {
    title: 'Resources for Parents',
    description: 'Guidance and support specifically designed for parents and carers of children with neurodevelopmental and medical conditions.',
    icon: 'heart',
    color: 'primary',
    sections: [
      {
        heading: 'Looking After Yourself',
        content: 'Caring for a child with additional needs can be demanding. Your wellbeing matters too.',
        items: [
          'Connect with other parents who understand',
          'Accept help when it\'s offered',
          'Take breaks when you can',
          'Seek support if you\'re struggling',
        ],
      },
      {
        heading: 'Supporting Siblings',
        content: 'Brothers and sisters of children with additional needs have their own experiences and may need support.',
        items: [
          'Make time for one-to-one attention',
          'Answer their questions honestly and age-appropriately',
          'Acknowledge their feelings',
          'Consider sibling support groups',
        ],
      },
      {
        heading: 'Working with Professionals',
        content: 'You are the expert on your child. Effective collaboration with professionals leads to better outcomes.',
        items: [
          'Keep organised records',
          'Prepare for meetings in advance',
          'Ask for things in writing',
          'Know when to seek second opinions',
        ],
      },
    ],
  },
  'young-people': {
    title: 'Resources for Young People',
    description: 'Information written for teenagers and young adults to help you understand yourself and advocate for your needs.',
    icon: 'user',
    color: 'secondary',
    sections: [
      {
        heading: 'Understanding Yourself',
        content: 'Learning about your diagnosis or condition can help you understand yourself better and explain things to others.',
        items: [
          'Your diagnosis is one part of who you are',
          'Many successful people share your diagnosis',
          'Understanding your needs helps you ask for support',
          'You get to decide who you tell',
        ],
      },
      {
        heading: 'Speaking Up for Yourself',
        content: 'Self-advocacy means being able to explain what you need and asking for help when you need it.',
        items: [
          'You have the right to ask for support',
          'Practice explaining your needs',
          'It\'s okay to ask for things in writing',
          'You can bring someone to important meetings',
        ],
      },
      {
        heading: 'Planning Your Future',
        content: 'Thinking about your future can feel overwhelming, but taking it step by step helps.',
        items: [
          'Explore your interests and strengths',
          'Research support available in further education',
          'Consider work experience opportunities',
          'Connect with others on similar journeys',
        ],
      },
    ],
  },
  professionals: {
    title: 'Resources for Professionals',
    description: 'Clinical guidance, assessment tools, and evidence-based resources for healthcare and education professionals.',
    icon: 'briefcase',
    color: 'accent',
    sections: [
      {
        heading: 'Clinical Guidance',
        content: 'Access evidence-based guidance aligned with NICE recommendations and current best practice.',
        items: [
          'Condition-specific clinical pathways',
          'Assessment and diagnostic criteria',
          'Treatment and intervention options',
          'Referral guidance and thresholds',
        ],
      },
      {
        heading: 'Resources to Share',
        content: 'Downloadable materials designed to share with families and young people.',
        items: [
          'Patient information leaflets',
          'Post-diagnosis support guides',
          'School information sheets',
          'Transition planning resources',
        ],
      },
      {
        heading: 'Professional Development',
        content: 'Opportunities to develop your knowledge and skills in neurodevelopmental and paediatric conditions.',
        items: [
          'Training opportunities',
          'Conference and event listings',
          'Research updates',
          'Professional networks and forums',
        ],
      },
    ],
  },
};

const colorClasses = {
  primary: {
    bg: 'bg-[var(--primary-50)] dark:bg-[var(--primary-900)]/20',
    icon: 'bg-[var(--primary-100)] dark:bg-[var(--primary-800)] text-[var(--primary-600)] dark:text-[var(--primary-400)]',
    bullet: 'bg-[var(--primary-500)]',
  },
  secondary: {
    bg: 'bg-[var(--secondary-50)] dark:bg-[var(--secondary-900)]/20',
    icon: 'bg-[var(--secondary-100)] dark:bg-[var(--secondary-800)] text-[var(--secondary-600)] dark:text-[var(--secondary-400)]',
    bullet: 'bg-[var(--secondary-500)]',
  },
  accent: {
    bg: 'bg-[var(--accent-50)] dark:bg-[var(--accent-900)]/20',
    icon: 'bg-[var(--accent-100)] dark:bg-[var(--accent-800)] text-[var(--accent-600)] dark:text-[var(--accent-400)]',
    bullet: 'bg-[var(--accent-500)]',
  },
};

interface ResourcePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(resourcePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = resourcePages[resolvedParams.slug];

  if (!page) {
    return { title: 'Resource Not Found' };
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const resolvedParams = await params;
  const page = resourcePages[resolvedParams.slug];

  if (!page) {
    notFound();
  }

  const colors = colorClasses[page.color];

  return (
    <div>
      {/* Header */}
      <section className={`${colors.bg} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-[var(--neutral-500)]">
              <li>
                <Link href="/" className="hover:text-[var(--primary-600)]">Home</Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li>
                <Link href="/resources" className="hover:text-[var(--primary-600)]">Resources</Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-[var(--neutral-800)] dark:text-[var(--neutral-200)] font-medium">
                {page.title}
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
            {page.title}
          </h1>
          <p className="text-xl text-[var(--neutral-600)] dark:text-[var(--neutral-300)] max-w-3xl">
            {page.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white dark:bg-[var(--neutral-900)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {page.sections.map((section, index) => (
              <div key={index} className="border-b border-[var(--neutral-200)] dark:border-[var(--neutral-700)] pb-12 last:border-0">
                <h2 className="text-2xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
                  {section.heading}
                </h2>
                <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-300)] mb-6">
                  {section.content}
                </p>
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className={`w-2 h-2 rounded-full ${colors.bullet} mt-2 flex-shrink-0`} />
                        <span className="text-[var(--neutral-700)] dark:text-[var(--neutral-300)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 p-6 bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)] rounded-xl">
            <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)] text-sm">
              <strong>Note:</strong> This page contains summary information. We are actively
              developing more detailed guides, downloadable resources, and practical tools
              for this section. Check back soon for updates.
            </p>
          </div>

          {/* Back to Resources */}
          <div className="mt-8">
            <Link
              href="/resources"
              className="inline-flex items-center text-[var(--primary-600)] dark:text-[var(--primary-400)] font-medium hover:underline"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
