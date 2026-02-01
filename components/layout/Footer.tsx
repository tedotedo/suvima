import Link from 'next/link';

const footerLinks = {
  conditions: [
    { label: 'Autism', href: '/conditions/autism' },
    { label: 'ADHD', href: '/conditions/adhd' },
    { label: 'Epilepsy', href: '/conditions/epilepsy' },
    { label: 'All Conditions', href: '/conditions' },
  ],
  resources: [
    { label: 'For Parents', href: '/resources/parents' },
    { label: 'For Young People', href: '/resources/young-people' },
    { label: 'For Professionals', href: '/resources/professionals' },
    { label: 'School Support', href: '/resources/school-support' },
  ],
  about: [
    { label: 'About SUVIMA', href: '/about' },
    { label: 'Our Approach', href: '/about/approach' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
  tools: [
    { label: 'EpilepsyHelper App', href: '/tools/epilepsy-helper' },
    { label: "Anna's Ultrasound Adventure", href: '/tools/annas-ultrasound' },
    { label: 'All Tools', href: '/tools' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--neutral-900)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-[var(--primary-400)]">
              SUVIMA
            </Link>
            <p className="mt-4 text-sm text-[var(--neutral-400)]">
              Supporting Understanding Via Information for Medical Awareness
            </p>
            <p className="mt-4 text-xs text-[var(--neutral-500)]">
              Evidence-based, neurodiversity-affirming health information for
              families and professionals.
            </p>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="font-semibold text-[var(--neutral-100)] mb-4">
              Conditions
            </h3>
            <ul className="space-y-2">
              {footerLinks.conditions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-400)] hover:text-[var(--primary-400)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-[var(--neutral-100)] mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-400)] hover:text-[var(--primary-400)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-[var(--neutral-100)] mb-4">
              Tools & Apps
            </h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-400)] hover:text-[var(--primary-400)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-[var(--neutral-100)] mb-4">
              About
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-400)] hover:text-[var(--primary-400)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--neutral-800)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--neutral-500)]">
              &copy; {new Date().getFullYear()} SUVIMA. All rights reserved.
            </p>
            <p className="text-xs text-[var(--neutral-600)]">
              This website provides general information and is not a substitute
              for professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
