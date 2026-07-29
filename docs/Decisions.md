# AdmitStrong Decision Log

**Version:** 1.0  
**Status:** Active  
**Last Updated:** 2026-07-28  
**Owner:** Founders  
**Primary Audience:** Founders, designers, engineers, and AI coding agents  
**Purpose:** Records significant product, design, architecture, data, AI, brand, and business decisions, including the reasoning behind them and their long-term consequences.

---

# Decision Log Principles

Record a decision when it:

- Establishes a lasting product, design, technical, data, AI, brand, or business direction
- Resolves a meaningful tradeoff
- Affects multiple parts of the product
- Would be costly or confusing to reverse
- Should remain understandable to future contributors

Do not use this log for:

- Routine implementation choices
- Temporary task tracking
- Minor copy edits
- Short-lived experiments
- Personal reminders

---

# Decision Status Definitions

- **Proposed** — Under discussion.
- **Accepted** — Approved and currently followed.
- **Rejected** — Considered but intentionally not adopted.
- **Superseded** — Replaced by a later decision.
- **Deprecated** — Still documented but no longer recommended.

---

# Decision Template

## DEC-000: Decision Title

**Date:** YYYY-MM-DD  
**Status:** Proposed | Accepted | Rejected | Superseded | Deprecated  
**Area:** Product | Design | Architecture | Data | AI | Brand | Business  
**Owner:** Founders  
**Supersedes:** DEC-XXX (optional)  
**Superseded By:** DEC-XXX (optional)

### Decision

Describe the decision.

### Why

Describe the reasoning.

### Alternatives Considered

List meaningful alternatives.

### Consequences

Describe benefits, limitations, risks, and follow-up work.

---

# DEC-001: Use Next.js App Router

**Date:** 2026-07-28  
**Status:** Accepted  
**Area:** Architecture  
**Owner:** Founders

### Decision

Use Next.js App Router with the root-level `app/` directory.

### Why

The project is already configured for the App Router.

It supports Server Components, nested layouts, Route Handlers, server-side rendering, and modern Next.js development practices that align well with the AdmitStrong MVP.

Retaining the existing root-level `app/` structure avoids unnecessary repository reorganization during early development.

### Alternatives Considered

- Next.js Pages Router
- Moving application code into a `src/` directory

### Consequences

The project will follow App Router conventions throughout the codebase.

Future contributors should avoid introducing Pages Router patterns unless a future architectural decision supersedes this one.

---

# DEC-002: Use Tailwind CSS v4

**Date:** 2026-07-28  
**Status:** Accepted  
**Area:** Design | Architecture  
**Owner:** Founders

### Decision

Use Tailwind CSS v4 together with reusable UI components and shared design tokens.

### Why

Tailwind CSS enables rapid product iteration while maintaining a consistent visual language.

Its utility-first approach works well with reusable components, responsive layouts, and the evolving AdmitStrong design system.

### Alternatives Considered

- CSS Modules
- Styled Components
- Emotion
- Material UI
- Other component or styling frameworks

### Consequences

Shared colors, typography, spacing, and sizing should be centralized through reusable components and design tokens.

Additional styling frameworks should not be introduced without an accepted architectural decision.

---

# DEC-003: Lead With Clarity, Not AI

**Date:** 2026-07-28  
**Status:** Accepted  
**Area:** Product | Brand  
**Owner:** Founders

### Decision

AdmitStrong's primary promise is clarity and personalized guidance.

AI is an enabling technology rather than the product's primary message.

### Why

Students and families are seeking confidence, understanding, and actionable direction—not AI for its own sake.

Leading with AI risks making the experience feel impersonal, experimental, or overly technical.

### Alternatives Considered

- Market AdmitStrong primarily as an AI college counselor
- Lead with automation and predictive capabilities
- Make AI the primary product identity

### Consequences

Marketing, onboarding, product copy, and user experiences should emphasize clarity, guidance, and the user's next best step.

AI should be explained only where it improves understanding, not as the emotional centerpiece of the brand.

---

# DEC-004: Avoid One Opaque Readiness Score

**Date:** 2026-07-28  
**Status:** Accepted  
**Area:** Product | Design  
**Owner:** Founders

### Decision

Do not present one unexplained application-readiness percentage as the primary measure of student progress.

Instead, use explainable progress dimensions and descriptive status indicators.

### Why

A single percentage suggests a level of precision that cannot be justified and may cause students to feel judged or ranked without understanding the underlying reasoning.

### Alternatives Considered

- Overall readiness score
- Admission-likelihood score
- Competitive ranking against other students
- Gamified profile-completion percentage

### Consequences

The product should communicate progress using understandable dimensions and descriptive states such as:

- Not Yet Relevant
- Getting Started
- Developing
- On Track
- Well Developed

Every progress indicator should be explainable.

---

# DEC-005: Dashboard Centers on the Next Best Step

**Date:** 2026-07-28  
**Status:** Accepted  
**Area:** Product | Design  
**Owner:** Founders

### Decision

The dashboard should prioritize the user's next meaningful action.

Dashboard hierarchy:

1. Today's Focus
2. Weekly Priorities
3. Upcoming Milestones
4. Journey Progress

### Why

Students often struggle because they do not know where to begin.

Making Today's Focus the most prominent element reinforces AdmitStrong's core promise of providing clear next steps.

### Alternatives Considered

- Equal-weight dashboard cards
- Timeline-first dashboard
- Readiness-score-first dashboard
- News-feed dashboard
- College-list-first dashboard

### Consequences

Today's Focus should always receive the greatest visual emphasis.

Secondary information should support—not compete with—the primary action.

---

# DEC-006: AI Is Not the System of Record

**Date:** 2026-07-28  
**Status:** Accepted  
**Area:** Architecture | AI | Data  
**Owner:** Founders

### Decision

AI-generated content must never become the authoritative application state.

Confirmed student information, roadmap data, source metadata, recommendations, and user feedback must be stored as structured data independent of AI conversations.

### Why

AI output may be incomplete, inconsistent, or factually incorrect.

Student guidance requires traceability, explainability, persistence, and correction.

### Alternatives Considered

- Store AI conversations as the primary student record
- Allow AI responses to modify profiles automatically
- Treat AI-generated facts as authoritative

### Consequences

AI recommendations must be validated before presentation or storage.

Structured data remains the authoritative source for all product functionality.

---

# DEC-007: Manual Student Profile Entry Is the Reliable MVP Foundation

**Date:** 2026-07-28  
**Status:** Accepted  
**Area:** Product | Architecture | Data  
**Owner:** Founders

### Decision

Manual structured profile entry is the reliable foundation for the MVP.

Transcript upload may be introduced later but must not be required for roadmap generation.

### Why

Transcript formats vary significantly.

Automated extraction introduces additional complexity, privacy concerns, and opportunities for incorrect data.

Manual entry provides a dependable and correctable starting point.

### Alternatives Considered

- Mandatory transcript upload
- Automated transcript extraction
- School information system integrations

### Consequences

Users should always be able to review and correct profile information.

Future transcript import capabilities should populate proposed values that require user confirmation.

---

# DEC-008: Enforce Authorization on the Server

**Date:** 2026-07-28  
**Status:** Accepted  
**Area:** Architecture | Security  
**Owner:** Founders

### Decision

All authorization decisions must be enforced on the server.

The client must never determine whether access to protected information is permitted.

### Why

AdmitStrong stores information about students and families.

Client-side authorization alone is not a security boundary.

### Alternatives Considered

- Client-side authorization
- Browser-supplied ownership identifiers
- UI-only access restrictions

### Consequences

Every protected request must verify the authenticated user's access before reading or modifying data.

Future database policies and APIs must support server-side authorization.

---

# DEC-009: Build the MVP as a Responsive Web Application

**Date:** 2026-07-28  
**Status:** Accepted  
**Area:** Product | Architecture  
**Owner:** Founders

### Decision

Deliver the initial MVP as a responsive web application.

Native mobile applications are intentionally deferred.

### Why

A responsive web application enables faster iteration, lower development cost, easier deployment, and broader accessibility while validating the product.

### Alternatives Considered

- Native iOS application
- Native Android application
- Cross-platform mobile application

### Consequences

All MVP experiences should work well on desktop and mobile browsers.

Native mobile development may be considered after product-market fit has been demonstrated.