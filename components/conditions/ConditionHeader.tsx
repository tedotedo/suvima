import Link from 'next/link';
import { Condition, ConditionCategory } from '@/types';
import { CATEGORY_LABELS } from '@/data/conditions';

interface ConditionHeaderProps {
  condition: Condition;
}

const categoryColors: Record<ConditionCategory, string> = {
  neurodevelopmental: 'bg-[var(--primary-500)]',
  neurological: 'bg-[var(--secondary-500)]',
  'common-childhood': 'bg-[var(--accent-500)]',
};

export function ConditionHeader({ condition }: ConditionHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-[var(--primary-50)] to-[var(--secondary-50)] dark:from-[var(--neutral-800)] dark:to-[var(--neutral-900)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[var(--neutral-500)]">
            <li>
              <Link href="/" className="hover:text-[var(--primary-600)] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/conditions" className="hover:text-[var(--primary-600)] transition-colors">
                Conditions
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-[var(--neutral-800)] dark:text-[var(--neutral-200)] font-medium">
              {condition.name}
            </li>
          </ol>
        </nav>

        {/* Category Badge */}
        <div className="mb-4">
          <span
            className={`
              inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white
              ${categoryColors[condition.category]}
            `}
          >
            <span className="w-2 h-2 rounded-full bg-white/50" />
            {CATEGORY_LABELS[condition.category]}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
          {condition.name}
        </h1>

        {/* Description */}
        <p className="text-xl text-[var(--neutral-600)] dark:text-[var(--neutral-300)] max-w-3xl">
          {condition.shortDescription}
        </p>
      </div>
    </div>
  );
}
