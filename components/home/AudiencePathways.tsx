import Link from 'next/link';
import { AUDIENCE_PATHWAYS } from '@/data/conditions';

const icons = {
  heart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  user: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  briefcase: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export function AudiencePathways() {
  return (
    <section className="py-16 bg-white dark:bg-[var(--neutral-900)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
            Find Information For You
          </h2>
          <p className="text-lg text-[var(--neutral-600)] dark:text-[var(--neutral-400)] max-w-2xl mx-auto">
            Select your pathway to access tailored resources and guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {AUDIENCE_PATHWAYS.map((pathway) => (
            <Link
              key={pathway.id}
              href={pathway.href}
              className="group relative p-8 bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)] rounded-2xl border-2 border-transparent hover:border-[var(--primary-500)] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--primary-100)] dark:bg-[var(--primary-900)] flex items-center justify-center text-[var(--primary-600)] dark:text-[var(--primary-400)] mb-4 group-hover:scale-110 transition-transform">
                  {icons[pathway.icon as keyof typeof icons]}
                </div>
                <h3 className="text-xl font-semibold text-[var(--neutral-900)] dark:text-white mb-2">
                  {pathway.title}
                </h3>
                <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
                  {pathway.description}
                </p>
                <span className="mt-4 inline-flex items-center text-[var(--primary-600)] dark:text-[var(--primary-400)] font-medium group-hover:gap-2 transition-all">
                  Explore
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
