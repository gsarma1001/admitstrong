AGENTS.md

Purpose

This file provides operating instructions for AI coding agents working in the AdmitStrong repository.

AdmitStrong is an AI-powered college and career guidance platform. It is intended to help students and families understand what to do next, why it matters, and how to navigate the journey from middle school through college admissions and beyond.

Agents must optimize for product value, safety, explainability, maintainability, and founder understanding—not merely speed or code volume.

1. Read Before Changing Code

Before beginning a task, review the relevant project documents:

docs/Vision.md

docs/ProductRequirements.md

docs/Architecture.md

docs/Founders.md

CONTRIBUTING.md

README.md

Do not contradict these documents silently.

When the documents conflict or do not answer a material question:

identify the ambiguity,

explain its impact,

recommend the smallest reasonable decision,

ask for founder approval when the decision changes product scope, architecture, privacy posture, or cost.

2. Product North Star

The primary product outcome is:

A student or parent knows what to focus on next, why it matters, and how to act with confidence.

Before implementing a feature, identify:

the target user,

the user problem,

the desired outcome,

the minimum useful scope,

how success can be observed.

Do not build features only because they are technically impressive or use AI.

3. User Groups

Primary users:

students in Grades 6–12,

parents and guardians supporting those students.

Future users may include:

school counselors,

independent counselors,

education organizations,

international students,

graduate-school applicants.

Do not optimize future personas at the expense of the current MVP unless explicitly requested.

4. Product Principles

Every change should support these principles:

Student-centered

Accessible

Personalized

Explainable

Proactive

Calm and clear

Privacy-first

Human-in-the-loop

Evidence-aware

Inclusive of different goals, resources, backgrounds, and educational paths

Important recommendations should explain both what is suggested and why.

Do not imply that college admission is guaranteed or fully predictable.

5. Current MVP Scope

Unless the task says otherwise, prioritize the Phase 1 MVP:

credible public homepage,

authentication,

student and parent onboarding,

dynamic student profile,

transcript upload and structured extraction,

college discovery and recommendation,

personalized roadmap with next steps,

basic reminders and progress tracking.

Features such as mobile apps, counselor dashboards, graduate-school guidance, international expansion, advanced essay generation, and broad agentic automation are future scope unless explicitly approved.

6. Technology Constraints

Preferred stack:

Next.js

React

TypeScript

Tailwind CSS

Next.js Route Handlers / API routes

Supabase database

Supabase authentication

Vercel deployment

GitHub source control

Do not introduce a major dependency, framework, database, authentication provider, or hosting service without:

explaining the need,

comparing it to the existing stack,

describing maintenance and cost implications,

receiving approval.

Prefer platform capabilities and small dependencies over large abstractions.

7. Working Style

For each task:

inspect the relevant existing code,

summarize the current behavior,

state a concise implementation plan,

make the smallest coherent change,

validate it,

summarize changed files, tests, risks, and next steps.

Do not modify unrelated files.

Do not perform broad refactors during a feature task unless required for correctness.

Do not overwrite founder-authored content or decisions without calling attention to the change.

8. Founder Learning and Transparency

The founder is building technical fluency while creating the company.

Therefore:

explain important architectural choices in plain language,

avoid unexplained abstractions,

show where new code belongs and why,

identify commands that change repository or cloud state,

distinguish required work from optional enhancements,

never hide uncertainty,

do not claim tests passed unless they were actually run.

When presenting multiple options, recommend one and state the tradeoff.

9. TypeScript and Code Quality

Use TypeScript for application code.

Avoid any.

Prefer explicit domain types.

Validate input at trust boundaries.

Treat database data, uploads, model outputs, and external API data as untrusted.

Keep functions focused.

Use descriptive names.

Avoid premature abstraction.

Prefer readable code over clever code.

Remove dead code rather than commenting it out.

Do not create placeholder systems that appear production-ready but are not.

10. Next.js and React Guidance

Prefer Server Components by default.

Use Client Components only for state, effects, browser APIs, or interactive behavior.

Keep secrets and privileged operations server-side.

Use Route Handlers or server actions deliberately and consistently.

Keep pages focused on route composition.

Place reusable UI in components/.

Place business and domain logic outside presentation components.

Handle loading, empty, error, and unauthorized states.

Use semantic HTML and accessible form controls.

Build responsive behavior with each feature.

11. UI and Content Guidance

The product should feel:

trustworthy,

calm,

optimistic,

modern,

supportive,

clear rather than flashy.

Avoid:

fear-based admissions messaging,

promises of elite-school outcomes,

excessive jargon,

cluttered dashboards,

long forms that request everything at once,

presenting AI as infallible.

Calls to action should describe a real outcome, such as:

Build My Roadmap

Complete My Profile

See My Next Steps

Compare Colleges

Do not use manipulative urgency.

12. Student Data and Privacy

Assume student data may belong to minors.

Agents must:

minimize collection,

state the product purpose of collected fields,

avoid logging sensitive values,

use server-side authorization,

enforce data isolation,

use synthetic data for development and tests,

keep secrets in environment variables,

avoid committing .env files,

consider deletion and retention,

avoid transmitting unnecessary identifying data to third parties.

Never place API secrets, service-role keys, access tokens, or private student records in source code, examples, screenshots, fixtures, or logs.

Flag any requested implementation that could expose student data.

13. Authentication and Authorization

Authentication alone is not authorization.

For every protected operation:

verify the current user on the server,

verify access to the requested student or family record,

do not trust IDs supplied by the browser,

use least-privilege database access,

test cross-account access denial.

Never rely only on hiding UI elements to protect data.

14. AI and Recommendation Safety

AI output must be treated as untrusted structured or unstructured input.

AI-related code should:

validate model outputs,

define fallback behavior,

separate factual data from generated interpretation,

indicate uncertainty,

avoid fabricated facts,

avoid guaranteed admissions predictions,

retain relevant source metadata,

avoid exposing private chain-of-thought,

use concise explanations suitable for families,

allow users to correct profile data,

avoid high-stakes autonomous actions.

For important recommendations, preserve enough information to explain:

which student inputs were used,

which external facts were used,

which assumptions were made,

when the recommendation was generated.

Do not send entire student records to an AI model when only a subset is needed.

15. College, Cost, and Opportunity Data

College admissions data changes over time.

When building integrations or recommendations:

use authoritative sources where possible,

store source attribution,

store retrieval or effective dates,

label estimates,

distinguish published cost from estimated net cost,

do not invent missing values,

do not treat acceptance rates as individual probabilities,

account for residency and eligibility,

avoid ranking students or institutions using unexplained formulas.

Do not scrape or integrate a data source without considering its license and terms.

16. Transcript and File Handling

Uploaded transcripts may contain highly sensitive personal information.

File-processing features must:

validate file type and size,

use secure storage,

limit access,

avoid public URLs,

define deletion behavior,

handle extraction errors,

show extracted information for user confirmation,

never silently treat uncertain extraction as fact.

Do not retain raw files indefinitely without an explicit product and privacy decision.

17. Testing and Validation

Before declaring a task complete, run the relevant available checks:

npm run lint
npm run build

Run relevant tests when present.

For UI work, verify:

desktop,

mobile,

keyboard navigation,

loading states,

empty states,

validation errors,

server errors.

For data work, verify:

unauthorized access,

malformed input,

missing data,

boundary values,

duplicate submissions,

failure recovery.

For AI work, verify:

malformed output,

missing fields,

hallucinated facts,

service timeout,

quota or provider failure,

unsafe or inappropriate recommendations.

Report the checks actually run and their outcomes.

18. Documentation Requirements

Update documentation when changing:

architecture,

setup,

environment variables,

database schema,

external integrations,

AI prompts or safeguards,

feature scope,

user-visible behavior,

product decisions.

Do not let implementation and documentation drift silently.

19. Git Safety

Never force-push unless explicitly authorized.

Never rewrite shared history without explicit approval.

Never commit secrets or personal data.

Do not delete large sections of the repository without confirmation.

Keep commits focused.

Use descriptive commit messages.

Show git status before recommending a commit when repository state is uncertain.

20. Dependency Safety

Before adding a dependency:

confirm the existing stack cannot reasonably solve the problem,

check maintenance status and license,

consider bundle size,

consider security and privacy,

explain why it is needed.

Do not add packages for trivial utility functions.

21. Definition of Done

A task is complete only when:

it solves the stated user problem,

it remains within approved scope,

the implementation is understandable,

relevant lint, build, and tests pass,

privacy and authorization are considered,

accessibility is considered,

error states are handled,

documentation is updated,

no secrets or real personal data are present,

limitations and follow-up work are stated.

22. Expected Final Report

After completing a coding task, report:

Completed

A concise description of the user-visible or technical outcome.

Files Changed

List files and their purpose.

Validation

List commands and manual checks actually performed.

Risks or Limitations

State known gaps honestly.

Recommended Next Step

Give one highest-priority next action.

23. Stop and Ask for Approval When

Stop before proceeding if a task would:

materially change the MVP scope,

add a paid service,

change the core technology stack,

create or alter production infrastructure,

run a database migration with destructive effects,

change authentication or authorization strategy,

process or share sensitive student data in a new way,

send real emails or notifications,

publish or deploy publicly,

delete user data,

introduce legal, privacy, or compliance commitments,

make a product claim that cannot be supported.