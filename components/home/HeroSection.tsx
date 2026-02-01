import { SearchBar } from '@/components/ui';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--primary-50)] via-white to-[var(--secondary-50)] dark:from-[var(--neutral-900)] dark:via-[var(--neutral-900)] dark:to-[var(--neutral-800)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Acronym Breakdown */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
              <span className="text-[var(--primary-600)]">S</span>upporting{' '}
              <span className="text-[var(--primary-600)]">U</span>nderstanding{' '}
              <span className="text-[var(--primary-600)]">V</span>ia{' '}
              <span className="text-[var(--primary-600)]">I</span>nformation for{' '}
              <span className="text-[var(--primary-600)]">M</span>edical{' '}
              <span className="text-[var(--primary-600)]">A</span>wareness
            </h1>
          </div>

          {/* Mission Statement */}
          <p className="text-lg md:text-xl text-[var(--neutral-600)] dark:text-[var(--neutral-300)] mb-8 max-w-2xl mx-auto">
            Evidence-based, neurodiversity-affirming information about
            neurodevelopmental and pediatric conditions for parents, young
            people, and healthcare professionals.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <SearchBar
              placeholder="Search for a condition (e.g., Autism, ADHD, Epilepsy...)"
              className="shadow-lg"
            />
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[var(--neutral-500)] dark:text-[var(--neutral-400)]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Evidence-based</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Neurodiversity-affirming</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Age-appropriate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-white dark:fill-[var(--neutral-900)]"
          />
        </svg>
      </div>
    </section>
  );
}
