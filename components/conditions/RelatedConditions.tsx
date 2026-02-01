import Link from 'next/link';
import { getConditionBySlug } from '@/data/conditions';

interface RelatedConditionsProps {
  conditionSlugs: string[];
}

export function RelatedConditions({ conditionSlugs }: RelatedConditionsProps) {
  const conditions = conditionSlugs
    .map((slug) => getConditionBySlug(slug))
    .filter(Boolean);

  if (conditions.length === 0) return null;

  return (
    <section className="py-12 bg-white dark:bg-[var(--neutral-900)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--neutral-900)] dark:text-white mb-6">
          Related Conditions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conditions.map((condition) => (
            <Link
              key={condition!.id}
              href={`/conditions/${condition!.slug}`}
              className="group flex items-center gap-4 p-4 rounded-xl bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)] hover:bg-[var(--primary-50)] dark:hover:bg-[var(--primary-900)]/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--primary-100)] dark:bg-[var(--primary-800)] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[var(--primary-600)] dark:text-[var(--primary-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--neutral-900)] dark:text-white group-hover:text-[var(--primary-600)] dark:group-hover:text-[var(--primary-400)] transition-colors">
                  {condition!.name}
                </h3>
                <p className="text-sm text-[var(--neutral-500)] dark:text-[var(--neutral-400)] line-clamp-1">
                  {condition!.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
