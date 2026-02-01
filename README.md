# SUVIMA

**Supporting Understanding Via Information for Medical Awareness**

A comprehensive medical education website providing evidence-based, neurodiversity-affirming information about neurodevelopmental and paediatric conditions for parents, young people, and healthcare professionals.

## Overview

SUVIMA serves as an umbrella educational resource covering:
- **Neurodevelopmental conditions**: Autism, ADHD, Dyslexia, Dyspraxia/DCD, Developmental Language Disorder, Intellectual Disability
- **Neurological conditions**: Epilepsy, Cerebral Palsy, Headaches/Migraine
- **Common childhood conditions**: Asthma, Eczema, Allergies, Sleep Problems, Feeding Difficulties

## Features

- **Condition-based navigation** with comprehensive guides for each condition
- **Age-specific content** organised into four groups: Under-5s, School-Age (5-11), Teenagers (12-18), Young Adults (18+)
- **Audience pathways** for Parents, Young People, and Healthcare Professionals
- **Resource sections** covering diagnoses, practical strategies, school support, healthcare navigation, and transition planning
- **Recommended books** for children and families

## Partner Projects

SUVIMA is part of a family of projects:
- [EpilepsyHelper](https://epilepsyhelper.app) - Seizure tracking and epilepsy management app
- [TransitionReady](https://transitionready.app) - Supporting healthcare transition for young people
- [Anna's Ultrasound Adventure](https://www.annas-ultrasound-adventure.app/) - Helping children prepare for ultrasound procedures
- [Practical Autism Research](https://practical-autism-research.co.uk) - In-depth autism resources and research

## Recommended Books

Part of the "All About My Health" series by Dr Mark Aszkenasy:
- [Zak's Operation: A Hospital Journey](https://www.amazon.co.uk/dp/B0F2X1BHLW) - Helping children understand hospital experiences
- [Zak's Blood Test](https://www.amazon.co.uk/dp/B0DXVLXQLS) - Preparing children for blood tests
- [Anna's Ultrasound Adventure](https://www.amazon.co.uk/dp/B0F1W38DQ7) - Reducing anxiety about ultrasound scans
- The Genetics of Autism *(Coming Soon)*

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: DM Sans (body), Crimson Pro (headings)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
suvima/
├── app/                      # Next.js App Router pages
│   ├── about/               # About SUVIMA page
│   ├── conditions/          # Conditions listing + [slug] pages
│   ├── resources/           # Resources landing + [slug] pages
│   ├── globals.css          # Design system & global styles
│   ├── layout.tsx           # Root layout with Header/Footer
│   └── page.tsx             # Homepage
├── components/
│   ├── conditions/          # Condition page components
│   ├── home/                # Homepage sections
│   ├── layout/              # Header, Footer
│   └── ui/                  # Reusable UI components
├── data/                    # Conditions data and navigation
├── types/                   # TypeScript interfaces
└── SUVIMA_WEBSITE_PLAN.md   # Original planning document
```

## Content Principles

- **Evidence-based**: Aligned with NICE guidelines and current research
- **Neurodiversity-affirming**: Strength-based, respectful language
- **Accessible**: Plain language, WCAG 2.1 AA compliant
- **Age-appropriate**: Content tailored to developmental stages
- **Culturally sensitive**: Inclusive examples and diverse perspectives

## Development Roadmap

### Phase 1 (Current)
- [x] Homepage with condition search
- [x] Condition page template with age tabs
- [x] About page
- [x] Resources section structure
- [x] Recommended books section
- [ ] Full content for Autism, ADHD, Epilepsy

### Phase 2
- [ ] Remaining condition content
- [ ] Downloadable resources (PDFs, checklists)
- [ ] Professional resources section

### Phase 3
- [ ] Video content
- [ ] Multi-language support
- [ ] Analytics integration

## Deployment

The site can be deployed on Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
```

## License

All rights reserved. Content is intended for educational purposes only.

## Medical Disclaimer

The information provided on SUVIMA is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your doctor or other qualified health provider with any questions you may have regarding a medical condition.
