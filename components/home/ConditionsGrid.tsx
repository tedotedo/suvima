import Link from 'next/link';
import { CONDITIONS, CATEGORY_LABELS } from '@/data/conditions';
import { Condition, ConditionCategory } from '@/types';

const categoryColors: Record<ConditionCategory, { bg: string; text: string; border: string }> = {
  neurodevelopmental: {
    bg: 'bg-[var(--primary-50)] dark:bg-[var(--primary-900)]/20',
    text: 'text-[var(--primary-700)] dark:text-[var(--primary-300)]',
    border: 'border-[var(--primary-200)] dark:border-[var(--primary-800)]',
  },
  neurological: {
    bg: 'bg-[var(--secondary-50)] dark:bg-[var(--secondary-900)]/20',
    text: 'text-[var(--secondary-700)] dark:text-[var(--secondary-300)]',
    border: 'border-[var(--secondary-200)] dark:border-[var(--secondary-800)]',
  },
  'common-childhood': {
    bg: 'bg-[var(--accent-50)] dark:bg-[var(--accent-900)]/20',
    text: 'text-[var(--accent-700)] dark:text-[var(--accent-300)]',
    border: 'border-[var(--accent-200)] dark:border-[var(--accent-800)]',
  },
};

function ConditionCard({ condition }: { condition: Condition }) {
  const colors = categoryColors[condition.category];

  return (
    <Link
      href={`/conditions/${condition.slug}`}
      className={`
        group block p-6 rounded-xl border-2
        ${colors.bg} ${colors.border}
        hover:shadow-lg hover:scale-[1.02]
        transition-all duration-200
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-[var(--neutral-900)] dark:text-white group-hover:text-[var(--primary-600)] dark:group-hover:text-[var(--primary-400)] transition-colors">
          {condition.name}
        </h3>
        {condition.featured && (
          <span className="px-2 py-0.5 text-xs font-medium bg-[var(--accent-500)] text-white rounded-full">
            Featured
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--neutral-600)] dark:text-[var(--neutral-400)] line-clamp-2">
        {condition.shortDescription}
      </p>
      <span className={`mt-3 inline-flex items-center text-sm font-medium ${colors.text}`}>
        Learn more
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

export function ConditionsGrid() {
  const groupedConditions = CONDITIONS.reduce(
    (acc, condition) => {
      if (!acc[condition.category]) {
        acc[condition.category] = [];
      }
      acc[condition.category].push(condition);
      return acc;
    },
    {} as Record<ConditionCategory, Condition[]>
  );

  return (
    <section className="py-16 bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
            Browse Conditions
          </h2>
          <p className="text-lg text-[var(--neutral-600)] dark:text-[var(--neutral-400)] max-w-2xl mx-auto">
            Explore our comprehensive guides on neurodevelopmental, neurological,
            and common childhood conditions
          </p>
        </div>

        {Object.entries(groupedConditions).map(([category, conditions]) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="text-xl font-semibold text-[var(--neutral-800)] dark:text-[var(--neutral-200)] mb-6 flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${
                  category === 'neurodevelopmental'
                    ? 'bg-[var(--primary-500)]'
                    : category === 'neurological'
                    ? 'bg-[var(--secondary-500)]'
                    : 'bg-[var(--accent-500)]'
                }`}
              />
              {CATEGORY_LABELS[category]}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition) => (
                <ConditionCard key={condition.id} condition={condition} />
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-8">
          <Link
            href="/conditions"
            className="inline-flex items-center px-6 py-3 bg-[var(--primary-600)] text-white font-medium rounded-lg hover:bg-[var(--primary-700)] transition-colors"
          >
            View All Conditions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
