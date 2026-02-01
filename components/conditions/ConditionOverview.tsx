interface ConditionOverviewProps {
  whatIs: string;
  keySigns: string[];
  whenToSeekHelp: string[];
}

export function ConditionOverview({
  whatIs,
  keySigns,
  whenToSeekHelp,
}: ConditionOverviewProps) {
  return (
    <div className="py-12 bg-white dark:bg-[var(--neutral-900)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* What is this condition? */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)] rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-100)] dark:bg-[var(--primary-900)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--primary-600)] dark:text-[var(--primary-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
                    What is this condition?
                  </h2>
                  <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-300)] text-lg leading-relaxed">
                    {whatIs}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Signs */}
          <div className="lg:col-span-1.5">
            <div className="h-full bg-[var(--secondary-50)] dark:bg-[var(--secondary-900)]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--secondary-100)] dark:bg-[var(--secondary-800)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--secondary-600)] dark:text-[var(--secondary-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--neutral-900)] dark:text-white">
                  Key Signs to Look For
                </h3>
              </div>
              <ul className="space-y-3">
                {keySigns.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--secondary-200)] dark:bg-[var(--secondary-800)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--secondary-600)] dark:bg-[var(--secondary-400)]" />
                    </span>
                    <span className="text-[var(--neutral-700)] dark:text-[var(--neutral-300)]">
                      {sign}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* When to Seek Help */}
          <div className="lg:col-span-1.5">
            <div className="h-full bg-[var(--accent-50)] dark:bg-[var(--accent-900)]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-100)] dark:bg-[var(--accent-800)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--accent-600)] dark:text-[var(--accent-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--neutral-900)] dark:text-white">
                  When to Seek Help
                </h3>
              </div>
              <ul className="space-y-3">
                {whenToSeekHelp.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--accent-200)] dark:bg-[var(--accent-800)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[var(--accent-600)] dark:text-[var(--accent-400)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-[var(--neutral-700)] dark:text-[var(--neutral-300)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
