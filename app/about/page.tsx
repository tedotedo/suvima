import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About SUVIMA',
  description:
    'Learn about SUVIMA - Supporting Understanding Via Information for Medical Awareness. Our mission, approach, and commitment to evidence-based, neurodiversity-affirming health information.',
};

const principles = [
  {
    title: 'Evidence-Based',
    description:
      'All information is grounded in current research and aligned with NICE guidelines. We clearly distinguish between established evidence and emerging research.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Neurodiversity-Affirming',
    description:
      'We use respectful, strength-based language that celebrates diversity. We avoid deficit-focused narratives and recognise the value of different ways of thinking and being.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Accessible',
    description:
      'Plain language throughout, with visual aids and multiple reading levels. Medical terms are explained clearly, and content is designed for everyone.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Age-Appropriate',
    description:
      'Content tailored to developmental stages, from early years through to young adulthood. We write directly to young people where appropriate, not just to parents.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Culturally Sensitive',
    description:
      'We use inclusive examples and consider diverse family structures. We acknowledge that understanding and experience of conditions varies across cultures.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Regularly Updated',
    description:
      'All content is reviewed regularly to ensure accuracy. We display last-reviewed dates and maintain transparency about our editorial process.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const partnerProjects = [
  {
    name: 'EpilepsyHelper',
    description: 'A companion app for tracking seizures, managing medications, and creating care plans.',
    url: 'https://epilepsyhelper.app',
  },
  {
    name: 'TransitionReady',
    description: 'Supporting young people preparing for the transition from paediatric to adult healthcare.',
    url: 'https://transitionready.app',
  },
  {
    name: "Anna's Ultrasound Adventure",
    description: 'Interactive storybook helping children prepare for ultrasound procedures.',
    url: 'https://www.annas-ultrasound-adventure.app/',
  },
  {
    name: 'Practical Autism Research',
    description: 'In-depth autism resources translating the latest research for families.',
    url: 'https://practical-autism-research.co.uk',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary-50)] to-[var(--secondary-50)] dark:from-[var(--neutral-800)] dark:to-[var(--neutral-900)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--neutral-900)] dark:text-white mb-6">
              About SUVIMA
            </h1>
            <p className="text-xl text-[var(--neutral-600)] dark:text-[var(--neutral-300)] mb-4">
              <strong>S</strong>upporting <strong>U</strong>nderstanding <strong>V</strong>ia <strong>I</strong>nformation for <strong>M</strong>edical <strong>A</strong>wareness
            </p>
            <p className="text-lg text-[var(--neutral-600)] dark:text-[var(--neutral-300)]">
              We provide evidence-based, neurodiversity-affirming information about
              neurodevelopmental and pediatric conditions for parents, young people,
              and healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-[var(--neutral-900)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--neutral-900)] dark:text-white mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-[var(--neutral-600)] dark:text-[var(--neutral-300)]">
                <p>
                  Navigating a diagnosis or medical condition can be overwhelming. Whether
                  you&apos;re a parent seeking answers, a young person wanting to understand
                  yourself better, or a professional looking for reliable resources, finding
                  trustworthy information shouldn&apos;t be difficult.
                </p>
                <p>
                  SUVIMA brings together comprehensive, accessible information about
                  neurodevelopmental and pediatric conditions in one place. We translate
                  complex medical knowledge into practical guidance that makes a real
                  difference in daily life.
                </p>
                <p>
                  Our condition pages are structured by age group, recognising that support
                  needs change from early childhood through to adulthood. We provide
                  tailored information for each stage of the journey.
                </p>
              </div>
            </div>
            <div className="bg-[var(--primary-50)] dark:bg-[var(--primary-900)]/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[var(--neutral-900)] dark:text-white mb-4">
                Who We Serve
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[var(--primary-100)] dark:bg-[var(--primary-800)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[var(--primary-600)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-[var(--neutral-900)] dark:text-white">Parents and Carers</strong>
                    <p className="text-sm text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
                      Practical guidance and strategies to support your child at every stage
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[var(--secondary-100)] dark:bg-[var(--secondary-800)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[var(--secondary-600)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-[var(--neutral-900)] dark:text-white">Young People</strong>
                    <p className="text-sm text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
                      Age-appropriate information to help you understand yourself and advocate for your needs
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[var(--accent-100)] dark:bg-[var(--accent-800)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[var(--accent-600)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-[var(--neutral-900)] dark:text-white">Healthcare Professionals</strong>
                    <p className="text-sm text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
                      Evidence-based resources, clinical guidance, and materials to share with families
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-[var(--neutral-600)] dark:text-[var(--neutral-400)] max-w-2xl mx-auto">
              Every piece of content on SUVIMA is guided by these core principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-white dark:bg-[var(--neutral-900)] rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary-100)] dark:bg-[var(--primary-900)] flex items-center justify-center text-[var(--primary-600)] dark:text-[var(--primary-400)] mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--neutral-900)] dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)] text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Projects Section */}
      <section className="py-16 bg-white dark:bg-[var(--neutral-900)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--neutral-900)] dark:text-white mb-4">
              Partner Projects
            </h2>
            <p className="text-lg text-[var(--neutral-600)] dark:text-[var(--neutral-400)] max-w-2xl mx-auto">
              SUVIMA is part of a family of projects supporting families and healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-xl bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)] hover:bg-[var(--primary-50)] dark:hover:bg-[var(--primary-900)]/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--neutral-900)] dark:text-white mb-2 flex items-center gap-2">
                  {project.name}
                  <svg className="w-4 h-4 text-[var(--neutral-400)] group-hover:text-[var(--primary-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>
                <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)] text-sm">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use This Site Section */}
      <section className="py-16 bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--neutral-900)] dark:text-white mb-6 text-center">
              How to Use This Site
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-[var(--neutral-900)] rounded-xl p-6">
                <h3 className="font-semibold text-[var(--neutral-900)] dark:text-white mb-2">
                  1. Browse by Condition
                </h3>
                <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)] text-sm">
                  Visit our <Link href="/conditions" className="text-[var(--primary-600)] hover:underline">Conditions page</Link> to
                  explore neurodevelopmental, neurological, and common childhood conditions. Each
                  condition page provides comprehensive information organised by age group.
                </p>
              </div>
              <div className="bg-white dark:bg-[var(--neutral-900)] rounded-xl p-6">
                <h3 className="font-semibold text-[var(--neutral-900)] dark:text-white mb-2">
                  2. Select Your Age Group
                </h3>
                <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)] text-sm">
                  Within each condition page, use the age tabs (Under-5s, School-Age, Teenagers,
                  Young Adults) to find information relevant to your situation. Content is tailored
                  to each developmental stage.
                </p>
              </div>
              <div className="bg-white dark:bg-[var(--neutral-900)] rounded-xl p-6">
                <h3 className="font-semibold text-[var(--neutral-900)] dark:text-white mb-2">
                  3. Explore Resources
                </h3>
                <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)] text-sm">
                  Our <Link href="/resources" className="text-[var(--primary-600)] hover:underline">Resources section</Link> offers
                  practical guides on topics like school support, healthcare navigation, and
                  transition planning that apply across conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-white dark:bg-[var(--neutral-900)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--accent-50)] dark:bg-[var(--accent-900)]/20 border border-[var(--accent-200)] dark:border-[var(--accent-800)] rounded-xl p-6">
            <h3 className="font-semibold text-[var(--neutral-900)] dark:text-white mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--accent-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Medical Disclaimer
            </h3>
            <p className="text-sm text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
              The information provided on SUVIMA is for educational purposes only and is not
              intended as a substitute for professional medical advice, diagnosis, or treatment.
              Always seek the advice of your doctor or other qualified health provider with any
              questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
