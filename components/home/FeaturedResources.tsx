import Link from 'next/link';

const resources = [
  {
    title: 'EpilepsyHelper App',
    description:
      'Track seizures, manage medications, and create care plans for epilepsy management.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: '/tools/epilepsy-helper',
    color: 'primary',
  },
  {
    title: "Anna's Ultrasound Adventure",
    description:
      'Interactive storybook helping children prepare for ultrasound procedures.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    href: '/tools/annas-ultrasound',
    color: 'secondary',
  },
  {
    title: 'Practical Autism Research',
    description:
      'In-depth autism resources and the latest research translated for families.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: 'https://practical-autism-research.co.uk',
    color: 'accent',
    external: true,
  },
];

const colorClasses = {
  primary: {
    bg: 'bg-[var(--primary-100)] dark:bg-[var(--primary-900)]',
    icon: 'text-[var(--primary-600)] dark:text-[var(--primary-400)]',
    hover: 'hover:bg-[var(--primary-50)] dark:hover:bg-[var(--primary-900)]/80',
  },
  secondary: {
    bg: 'bg-[var(--secondary-100)] dark:bg-[var(--secondary-900)]',
    icon: 'text-[var(--secondary-600)] dark:text-[var(--secondary-400)]',
    hover: 'hover:bg-[var(--secondary-50)] dark:hover:bg-[var(--secondary-900)]/80',
  },
  accent: {
    bg: 'bg-[var(--accent-100)] dark:bg-[var(--accent-900)]',
    icon: 'text-[var(--accent-600)] dark:text-[var(--accent-400)]',
    hover: 'hover:bg-[var(--accent-50)] dark:hover:bg-[var(--accent-900)]/80',
  },
};

export function FeaturedResources() {
  return (
    <section className="py-16 bg-white dark:bg-[var(--neutral-900)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
            Tools & Resources
          </h2>
          <p className="text-lg text-[var(--neutral-600)] dark:text-[var(--neutral-400)] max-w-2xl mx-auto">
            Interactive apps and specialist resources to support your journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => {
            const colors = colorClasses[resource.color as keyof typeof colorClasses];
            const LinkComponent = resource.external ? 'a' : Link;
            const linkProps = resource.external
              ? { href: resource.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: resource.href };

            return (
              <LinkComponent
                key={resource.title}
                {...linkProps}
                className={`
                  group block p-6 rounded-xl
                  bg-white dark:bg-[var(--neutral-800)]
                  border border-[var(--neutral-200)] dark:border-[var(--neutral-700)]
                  ${colors.hover}
                  transition-all duration-200
                  hover:shadow-lg hover:-translate-y-1
                `}
              >
                <div className={`w-12 h-12 rounded-lg ${colors.bg} ${colors.icon} flex items-center justify-center mb-4`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--neutral-900)] dark:text-white mb-2 flex items-center gap-2">
                  {resource.title}
                  {resource.external && (
                    <svg className="w-4 h-4 text-[var(--neutral-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </h3>
                <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)] text-sm">
                  {resource.description}
                </p>
              </LinkComponent>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/tools"
            className="inline-flex items-center text-[var(--primary-600)] dark:text-[var(--primary-400)] font-medium hover:underline"
          >
            Explore all tools and apps
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
