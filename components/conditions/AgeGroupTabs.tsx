'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui';
import { AGE_GROUPS } from '@/data/conditions';
import { AgeGroup, AgeGroupContent, ContentSection } from '@/types';

interface AgeGroupTabsProps {
  content: Record<AgeGroup, AgeGroupContent>;
}

function ContentSectionComponent({ section }: { section: ContentSection }) {
  return (
    <div className="mb-8 last:mb-0">
      <h4 className="text-lg font-semibold text-[var(--neutral-900)] dark:text-white mb-3">
        {section.heading}
      </h4>
      <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-300)] mb-4">
        {section.content}
      </p>
      {section.bulletPoints && section.bulletPoints.length > 0 && (
        <ul className="space-y-2 pl-4">
          {section.bulletPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-[var(--neutral-600)] dark:text-[var(--neutral-300)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)] mt-2 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function AgeGroupTabs({ content }: AgeGroupTabsProps) {
  return (
    <section className="py-12 bg-[var(--neutral-50)] dark:bg-[var(--neutral-800)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--neutral-900)] dark:text-white mb-2">
            Age-Specific Information
          </h2>
          <p className="text-[var(--neutral-600)] dark:text-[var(--neutral-400)]">
            Select an age group to see tailored guidance and resources
          </p>
        </div>

        <Tabs defaultTab="under-5" className="bg-white dark:bg-[var(--neutral-900)] rounded-2xl p-6 shadow-sm">
          <TabsList className="mb-0">
            {AGE_GROUPS.map((group) => (
              <TabsTrigger key={group.id} value={group.id}>
                <div className="text-center">
                  <div className="font-medium">{group.label}</div>
                  <div className="text-xs opacity-70">{group.ageRange}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {AGE_GROUPS.map((group) => (
            <TabsContent key={group.id} value={group.id}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[var(--neutral-200)] dark:border-[var(--neutral-700)]">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary-100)] dark:bg-[var(--primary-900)] flex items-center justify-center">
                    <span className="text-2xl">
                      {group.id === 'under-5' && '👶'}
                      {group.id === 'school-age' && '🎒'}
                      {group.id === 'teenagers' && '🎓'}
                      {group.id === 'young-adults' && '🎯'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--neutral-900)] dark:text-white m-0">
                      {content[group.id]?.title || group.label}
                    </h3>
                    <p className="text-sm text-[var(--neutral-500)] m-0">
                      {group.description}
                    </p>
                  </div>
                </div>

                {content[group.id]?.sections?.map((section, index) => (
                  <ContentSectionComponent key={index} section={section} />
                )) || (
                  <p className="text-[var(--neutral-500)] italic">
                    Content for this age group is coming soon.
                  </p>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
