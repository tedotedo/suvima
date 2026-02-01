import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Practical resources for understanding diagnoses, school support, healthcare navigation, and transition planning for neurodevelopmental and pediatric conditions.',
};

const resourceCategories = [
  {
    title: 'Understanding Diagnoses',
    description:
      'Learn what a diagnosis means, how assessments work, and what to expect after receiving a diagnosis.',
    href: '/resources/diagnoses',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'primary',
    topics: [
      'What does a diagnosis mean?',
      'The assessment process',
      'After the diagnosis',
      'Explaining diagnoses to children',
      'Common questions answered',
    ],
  },
  {
    title: 'Practical Strategies',
    description:
      'Evidence-based approaches and day-to-day strategies to support children and young people at home.',
    href: '/resources/strategies',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'secondary',
    topics: [
      'Managing daily routines',
      'Communication strategies',
      'Sensory considerations',
      'Behaviour support',
      'Building independence',
    ],
  },
  {
    title: 'School Support',
    description:
      'Navigate the education system, understand your rights, and work effectively with schools.',
    href: '/resources/school-support',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'accent',
    topics: [
      'SEN Support and EHCPs',
      'Working with SENCOs',
      'Classroom accommodations',
      'Exam access arrangements',
      'Choosing the right school',
    ],
  },
  {
    title: 'Healthcare Navigation',
    description:
      'Understand healthcare pathways, prepare for appointments, and get the most from medical care.',
    href: '/resources/healthcare',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'primary',
    topics: [
      'Understanding referral pathways',
      'Preparing for appointments',
      'Managing medications',
      'Working with specialists',
      'Your rights as a patient',
    ],
  },
  {
    title: 'Transition Planning',
    description:
      'Prepare for the move from pediatric to adult services, and from education to employment.',
    href: '/resources/transition',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    ),
    color: 'secondary',
    topics: [
      'Healthcare transition',
      'Preparing for adulthood',
      'Further education options',
      'Employment and workplace rights',
      'Benefits and financial support',
    ],
  },
];

const colorClasses = {
  primary: {
    bg: 'bg-[var(--primary-50)] dark:bg-[var(--primary-900)]/20',
    icon: 'bg-[var(--primary-100)] dark:bg-[var(--primary-800)] text-[var(--primary-600)] dark:text-[var(--primary-400)]',
    hover: 'hover:border-[var(--primary-500)]',
  },
  secondary: {
    bg: 'bg-[var(--secondary-50)] dark:bg-[var(--secondary-900)]/20',
    icon: 'bg-[var(--secondary-100)] dark:bg-[var(--secondary-800)] text-[var(--secondary-600)] dark:text-[var(--secondary-400)]',
    hover: 'hover:border-[var(--secondary-500)]',
  },
  accent: {
    bg: 'bg-[var(--accent-50)] dark:bg-[var(--accent-900)]/20',
    icon: 'bg-[var(--accent-100)] dark:bg-[var(--accent-800)] text-[var(--accent-600)] dark:text-[var(--accent-400)]',
    hover: 'hover:border-[var(--accent-500)]',
  },
};

const recommendedBooks = [
  {
    title: "Zak's Operation",
    subtitle: 'A Hospital Journey',
    author: 'Dr Mark Aszkenasy',
    description:
      'A reassuring story that follows Zak through his hospital experience, helping children understand what happens before, during, and after an operation.',
    href: 'https://www.amazon.co.uk/dp/B0F2X1BHLW',
    series: 'All About My Health',
    available: true,
  },
  {
    title: "Zak's Blood Test",
    subtitle: 'A book for children who are having a blood test',
    author: 'Dr Mark Aszkenasy',
    description:
      'Gently guides children through the blood test process, explaining what to expect in a reassuring, easy-to-understand way. Includes tips for parents and carers.',
    href: 'https://www.amazon.co.uk/dp/B0DXVLXQLS',
    series: 'All About My Health',
    available: true,
  },
  {
    title: "Anna's Ultrasound Adventure",
    subtitle: 'Preparing children for ultrasound scans',
    author: 'Dr Mark Aszkenasy',
    description:
      'An interactive storybook helping children prepare for ultrasound procedures, reducing anxiety and building confidence.',
    href: 'https://www.amazon.co.uk/dp/B0F1W38DQ7',
    series: 'All About My Health',
    available: true,
  },
  {
    title: 'The Genetics of Autism',
    subtitle: 'Understanding the science',
    author: 'Dr Mark Aszkenasy',
    description:
      'An accessible guide to understanding the genetic factors involved in autism, written for families and those seeking to learn more.',
    href: null,
    series: null,
    available: false,
  },
];

const audienceResources = [
  {
    audience: 'Parents & Carers',
    description: 'Resources designed specifically for parents and family members',
    href: '/resources/parents',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    audience: 'Young People',
    description: 'Information written directly for children and teenagers',
    href: '/resources/young-people',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    audience: 'Professionals',
    description: 'Clinical guidance, assessment tools, and CPD resources',
    href: '/resources/professionals',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--secondary-50)] to-[var(--primary-50)] dark:from-[var(--neutral-800)] dark:to-[var(--neutral-900)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--neutral-900)] dark:text-white mb-6">
              Resources
            </h1>
            <p className="text-xl text-[var(--neutral-600)] dark:text-[var(--neutral-300)]">
              Practical guides and information to help you navigate diagnoses, education,
              healthcare, and the transition to adulthood.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white dark:bg-[var(--neutral-900)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--neutral-900)] dark:text-white mb-8">
            Browse by Topic
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className={`group block rounded-xl border-2 border-[var(--neutral-200)] dark:border-[var(--neutral-700)] ${colors.hover} transition-all hover:shadow-lg`}
                >
                  <div className={`${colors.bg} p-6 rounded-t-xl`}>
                    <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--neutral-900)] dark:text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)] text-sm">
                      {category.description}
                    </p>
                  </div>
                  <div className="p-6 bg-white dark:bg-[var(--neutral-800)] rounded-b-xl">
                    <h4 className="text-xs font-semibold text-[var(--neutral-500)] uppercase tracking-wider mb-3">
                      Topics covered
                    </h4>
                    <ul className="space-y-2">
                      {category.topics.slice(0, 4).map((topic) => (
                        <li key={topic} className="flex items-center gap-2 text-sm text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--neutral-400)]" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--primary-600)] dark:text-[var(--primary-400)]">
                      Explore resources
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience-Specific Resources */}
      <section className="py-16 bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--neutral-900)] dark:text-white mb-8">
            Resources For You
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {audienceResources.map((resource) => (
              <Link
                key={resource.audience}
                href={resource.href}
                className="group flex items-start gap-4 p-6 bg-white dark:bg-[var(--neutral-900)] rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-100)] dark:bg-[var(--primary-900)] flex items-center justify-center text-[var(--primary-600)] dark:text-[var(--primary-400)] flex-shrink-0">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--neutral-900)] dark:text-white mb-1 group-hover:text-[var(--primary-600)] transition-colors">
                    {resource.audience}
                  </h3>
                  <p className="text-sm text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
                    {resource.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Books */}
      <section className="py-16 bg-white dark:bg-[var(--neutral-900)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-100)] dark:bg-[var(--accent-900)] flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--accent-600)] dark:text-[var(--accent-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--neutral-900)] dark:text-white">
                Recommended Books
              </h2>
              <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
                Helpful books for children and families
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recommendedBooks.map((book) => (
              <div
                key={book.title}
                className={`relative rounded-xl border-2 ${
                  book.available
                    ? 'border-[var(--neutral-200)] dark:border-[var(--neutral-700)]'
                    : 'border-dashed border-[var(--neutral-300)] dark:border-[var(--neutral-600)]'
                } bg-white dark:bg-[var(--neutral-800)] overflow-hidden`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--neutral-900)] dark:text-white">
                        {book.title}
                      </h3>
                      {book.subtitle && (
                        <p className="text-sm text-[var(--neutral-500)] dark:text-[var(--neutral-400)]">
                          {book.subtitle}
                        </p>
                      )}
                    </div>
                    {!book.available && (
                      <span className="px-2 py-1 text-xs font-medium bg-[var(--neutral-100)] dark:bg-[var(--neutral-700)] text-[var(--neutral-600)] dark:text-[var(--neutral-300)] rounded-full whitespace-nowrap">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[var(--neutral-500)] dark:text-[var(--neutral-400)] mb-3">
                    By {book.author}
                    {book.series && (
                      <span className="text-[var(--primary-600)] dark:text-[var(--primary-400)]"> · {book.series} series</span>
                    )}
                  </p>

                  <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-300)] text-sm mb-4">
                    {book.description}
                  </p>

                  {book.available && book.href && (
                    <a
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-[var(--primary-600)] dark:text-[var(--primary-400)] hover:underline"
                    >
                      View on Amazon
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadables Preview */}
      <section className="py-16 bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[var(--primary-600)] to-[var(--secondary-600)] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Downloadable Guides
              </h2>
              <p className="text-[var(--primary-100)] mb-6">
                Printable resources including checklists, school letter templates,
                appointment preparation sheets, and information leaflets to share
                with family and professionals.
              </p>
              <p className="text-sm text-[var(--primary-200)]">
                Coming soon — we&apos;re currently developing our downloadable resource library.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to Conditions */}
      <section className="py-12 bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)] mb-4">
            Looking for information about a specific condition?
          </p>
          <Link
            href="/conditions"
            className="inline-flex items-center px-6 py-3 bg-[var(--primary-600)] text-white font-medium rounded-lg hover:bg-[var(--primary-700)] transition-colors"
          >
            Browse Conditions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
