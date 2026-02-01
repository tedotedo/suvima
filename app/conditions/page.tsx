import { Metadata } from 'next';
import Link from 'next/link';
import { CONDITIONS, CATEGORY_LABELS, getConditionsByCategory } from '@/data/conditions';
import { SearchBar } from '@/components/ui';

export const metadata: Metadata = {
  title: 'All Conditions',
  description:
    'Browse our comprehensive guides on neurodevelopmental, neurological, and common childhood conditions.',
};

export default function ConditionsPage() {
  const categories = ['neurodevelopmental', 'neurological', 'common-childhood'] as const;

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
            All Conditions
          </h1>
          <p className="text-lg text-[var(--neutral-600)] dark:text-[var(--neutral-400)] max-w-2xl mx-auto mb-8">
            Explore our evidence-based guides covering neurodevelopmental,
            neurological, and common childhood conditions
          </p>
          <div className="max-w-xl mx-auto">
            <SearchBar placeholder="Search conditions..." />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category}
              className="text-center p-6 rounded-xl bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)]"
            >
              <div className="text-3xl font-bold text-[var(--primary-600)] mb-1">
                {getConditionsByCategory(category).length}
              </div>
              <div className="text-sm text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
                {CATEGORY_LABELS[category]}
              </div>
            </div>
          ))}
        </div>

        {/* Conditions by Category */}
        {categories.map((category) => {
          const conditions = getConditionsByCategory(category);
          return (
            <section key={category} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`w-4 h-4 rounded-full ${
                    category === 'neurodevelopmental'
                      ? 'bg-[var(--primary-500)]'
                      : category === 'neurological'
                      ? 'bg-[var(--secondary-500)]'
                      : 'bg-[var(--accent-500)]'
                  }`}
                />
                <h2 className="text-2xl font-bold text-[var(--neutral-900)] dark:text-white">
                  {CATEGORY_LABELS[category]}
                </h2>
                <span className="text-sm text-[var(--neutral-500)]">
                  ({conditions.length} conditions)
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {conditions.map((condition) => (
                  <Link
                    key={condition.id}
                    href={`/conditions/${condition.slug}`}
                    className="group block p-6 rounded-xl bg-white dark:bg-[var(--neutral-800)] border border-[var(--neutral-200)] dark:border-[var(--neutral-700)] hover:border-[var(--primary-500)] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-[var(--neutral-900)] dark:text-white group-hover:text-[var(--primary-600)] transition-colors">
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
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--primary-600)] dark:text-[var(--primary-400)]">
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
