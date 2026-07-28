Contributing to AdmitStrong

Thank you for contributing to AdmitStrong.

AdmitStrong is an AI-powered college and career guidance platform designed to help students and families understand what to do next, why it matters, and how to make confident decisions over time.

This repository is currently in an early-stage startup phase. Contributions should favor clarity, safety, maintainability, and measurable user value over unnecessary complexity.

1. Guiding Principle

Before making a change, ask:

Does this help a student or parent make a better decision, understand the next step, or feel less overwhelmed?

If the answer is unclear, document the user problem before writing code.

2. Product Principles

Contributions should align with these principles:

Student-centered: Build for the student's long-term growth, not only college admission outcomes.

Accessible: Expert-quality guidance should not depend on a family's income.

Personalized: Recommendations should reflect the student's academics, interests, goals, constraints, and context.

Explainable: Important recommendations must include a clear reason.

Proactive: Surface timely next steps instead of waiting for users to ask every question.

Calm and clear: Reduce anxiety. Do not overwhelm users with too many actions at once.

Human-in-the-loop: AI supports decisions; it does not make high-stakes decisions for families.

Privacy-first: Protect student and family data, especially data relating to minors.

3. Current Technology Stack

Next.js

React

TypeScript

Tailwind CSS

Next.js Route Handlers / API routes

Supabase for database and authentication

Vercel for deployment

GitHub for source control and collaboration

Do not introduce a major new framework, state-management library, database, or hosting dependency without documenting the need and tradeoffs.

4. Development Setup

Clone the repository:

git clone https://github.com/gsarma1001/admitstrong.git
cd admitstrong

Install dependencies:

npm install

Start the development server:

npm run dev

Open:

http://localhost:3000

Before submitting changes, run:

npm run lint
npm run build

If tests are available for the changed area, run them as well.

5. Branching and Workflow

Do not develop directly on main for feature work.

Create a focused branch:

git checkout -b feature/homepage-hero

Recommended branch prefixes:

feature/ — new functionality

fix/ — bug fixes

docs/ — documentation

refactor/ — internal improvements without behavior changes

test/ — test coverage

chore/ — tooling or maintenance

Keep each branch focused on one outcome.

6. Commit Messages

Use short, descriptive, imperative commit messages.

Good examples:

Add homepage hero section
Create student profile form
Validate GPA input
Document recommendation safeguards
Fix mobile navigation spacing

Avoid vague messages such as:

updates
changes
fixed stuff
work in progress

7. Pull Requests

Every pull request should include:

Summary

What changed?

User Problem

What student, parent, counselor, or business problem does this solve?

Approach

Why was this implementation chosen?

Validation

How was it tested?

Screenshots

Include before-and-after screenshots for meaningful UI changes.

Risks

List privacy, accessibility, data-quality, AI, performance, or migration risks.

Follow-up Work

Identify anything intentionally left for a future change.

Keep pull requests small enough to review confidently.

8. Coding Standards

TypeScript

Use TypeScript for application code.

Avoid any unless there is a documented reason.

Define clear types for domain concepts such as students, activities, recommendations, deadlines, and colleges.

Validate data at system boundaries.

Treat external API responses as untrusted.

React and Next.js

Prefer Server Components unless client-side interactivity is required.

Add "use client" only where necessary.

Keep page components focused on composition.

Move reusable UI into components/.

Move business logic into lib/ or a domain-specific module.

Do not place secrets or privileged operations in client components.

Use semantic HTML.

Styling

Use Tailwind CSS consistently.

Prefer reusable design tokens and shared components over repeated arbitrary values.

Build responsive layouts from the beginning.

Avoid decorative complexity that reduces clarity or accessibility.

Naming

Components: PascalCase

Functions and variables: camelCase

Constants: UPPER_SNAKE_CASE when truly constant

Files: use the naming convention already established in the relevant directory

Database fields: use one consistent convention and document it

Comments

Write comments to explain:

why a decision was made,

important constraints,

unusual edge cases,

safety or privacy considerations.

Do not comment obvious syntax.

9. Project Structure

Use this structure as the initial guideline:

admitstrong/
├── app/                  # Routes, layouts, pages, route handlers
├── components/           # Shared UI components
├── lib/                  # Domain logic, services, utilities
├── public/               # Static assets
├── docs/                 # Product, architecture, and operating documents
├── types/                # Shared TypeScript types when needed
├── tests/                # Automated tests when added
├── AGENTS.md             # Instructions for AI coding agents
├── CONTRIBUTING.md       # Contribution guide
└── README.md

Do not create directories preemptively. Add them when the codebase requires them.

10. Testing Expectations

Prioritize tests for:

profile data validation,

recommendation rules and transformations,

deadlines and date calculations,

authorization and data isolation,

AI output validation,

transcript-processing logic,

affordability and net-cost calculations,

critical user journeys.

A feature is not complete merely because the happy path works.

At minimum, test:

valid input,

missing input,

malformed input,

unauthorized access,

boundary conditions,

mobile behavior for user-facing interfaces.

11. Accessibility

All user-facing changes should:

support keyboard navigation,

use semantic headings,

provide visible focus states,

include labels for form inputs,

provide meaningful alternative text,

maintain readable contrast,

avoid relying only on color to communicate meaning,

use plain, understandable language.

AdmitStrong should be usable by students and parents with varied abilities, technical familiarity, and English proficiency.

12. Privacy and Security

AdmitStrong may process sensitive information about minors.

Therefore:

collect only data required for a defined product purpose,

never commit secrets, API keys, tokens, or personal data,

use environment variables for secrets,

enforce authorization on the server,

ensure one family cannot access another family's records,

avoid exposing sensitive data in logs,

do not use real student data in tests or examples,

document retention and deletion requirements,

review third-party services before sending student data to them.

Do not include highly sensitive personal attributes in prompts or analytics unless the feature has a documented need and approved safeguards.

13. AI Feature Standards

AI-generated guidance must be treated as advisory.

AI features should:

explain the basis for important recommendations,

distinguish facts from suggestions,

communicate uncertainty,

avoid guarantees about admission,

avoid inventing deadlines, acceptance rates, costs, or program details,

use authoritative and current data for factual claims,

preserve user control,

allow correction of inaccurate profile information,

include fallback behavior when the AI service is unavailable,

avoid sending unnecessary personally identifiable information to model providers.

Prompts, model settings, validation logic, and known limitations should be documented.

High-impact recommendations should be reviewable and traceable to relevant profile inputs and data sources.

14. Data and Recommendation Quality

For external college, scholarship, testing, or program data:

record the source,

record when the data was retrieved or updated,

do not silently substitute missing values,

label estimates clearly,

avoid presenting correlation as certainty,

include geographic and eligibility constraints,

design for correction when source data changes.

15. Documentation

Update documentation when a change affects:

product behavior,

architecture,

data models,

environment variables,

setup steps,

external integrations,

AI prompts or safeguards,

major product decisions.

Relevant documents currently live in docs/.

16. Definition of Done

A change is complete when:

the user problem is clearly addressed,

the code is understandable and appropriately scoped,

linting and production build pass,

relevant tests pass,

loading, empty, error, and unauthorized states are considered,

mobile and accessibility behavior are checked,

privacy and AI risks are reviewed,

documentation is updated,

no secrets or personal data are committed.

17. Questions and Decisions

When requirements are ambiguous, do not guess silently.

Document the open question, propose the smallest reasonable options, and request a decision. Significant technical decisions should be added to the appropriate architecture or decision document.