# AdmitStrong Architecture

**Version:** 1.0  
**Status:** Approved for MVP Planning  
**Last Updated:** 2026-07-28  
**Owner:** Founders  
**Purpose:** Defines the technical architecture and engineering principles that guide implementation of the AdmitStrong MVP.

---

# Architecture Goals

The system should be:

- Understandable by a small founding team
- Secure for student and family data
- Inexpensive to operate during the MVP
- Easy to change as the product is validated
- Explainable when generating recommendations
- Reliable even when an AI provider is unavailable

---

# Current Confirmed Stack

## Application

- Next.js 16
- React 19
- TypeScript
- App Router
- Root-level `app/` directory
- Tailwind CSS v4

## Backend

- Next.js Route Handlers and server-side application logic
- Server Components by default
- Client Components only where interactivity requires them

## Data and Authentication

Planned:

- Supabase Postgres
- Supabase Auth
- Supabase Storage when secure file storage is required

## Deployment

Planned:

- Vercel
- Supabase Cloud
- GitHub source control

---

# Repository Structure

```text
admitstrong/
├── app/                  # Routes, layouts, pages, and route handlers
├── components/
│   ├── ui/               # Reusable design-system components
│   ├── layout/           # Header, footer, navigation, page shells
│   ├── home/             # Public homepage sections
│   ├── onboarding/       # Student onboarding components
│   └── dashboard/        # Roadmap and dashboard components
├── hooks/                # Reusable React hooks
│   ├── useAuth.ts
│   ├── useProfile.ts
│   └── useRoadmap.ts
├── lib/
│   ├── auth/             # Authentication and authorization helpers
│   ├── profile/          # Student profile domain logic
│   ├── roadmap/          # Roadmap generation and prioritization
│   ├── ai/               # AI providers, prompts, validation, fallbacks
│   └── data/             # External data access and source metadata
├── types/                # Shared domain types
├── public/               # Static assets
├── docs/                 # Product and engineering documentation
└── tests/                # Automated tests
```

---

# High-Level Product Flow

```text
User Input
        │
        ▼
Validated Student Profile
        │
        ▼
User Review & Confirmation
        │
        ▼
Roadmap Orchestrator
        │
        ├───────────────┐
        ▼               ▼
Roadmap Rules     AI Recommendation Engine
        │               │
        └───────┬───────┘
                ▼
     Verified Product Facts
 (Profile + Rules + External Data)
                │
                ▼
 Quality & Policy Validation
                │
                ▼
Structured Recommendation Objects
                │
                ▼
Today's Focus
Weekly Priorities
Upcoming Milestones
                │
                ▼
User Feedback & Profile Updates
                │
                ▼
Roadmap Recalculation
```

---

# Architectural Principle: AI Is Not the System of Record

The database stores authoritative application state, including:

- User-provided facts
- Confirmed student-profile information
- Roadmap items
- Recommendation explanations
- Source metadata
- Completion state
- User feedback
- Generation timestamps

AI output must be validated before it is shown or stored as a recommendation.

The AI model must never be treated as the authoritative source for:

- Deadlines
- Costs
- Admission requirements
- Acceptance rates
- School policies
- Program availability

Every AI-generated recommendation should be traceable to one or more of:

- Confirmed student profile information
- Product rules
- Authoritative external data

---

# Proposed Core Domains

## Identity & Access

- User
- Household / Family
- Student
- Family Membership
- Roles
- Permissions

## Student Profile

- Academic Profile
- Courses
- Activities
- Accomplishments
- Interests
- Goals
- Preferences
- Constraints

## Roadmap

- Roadmap
- Roadmap Item
- Milestone
- Recommendation
- Recommendation Explanation
- Progress Event

## Exploration

- College
- Major
- Saved College
- Saved Major
- Comparison

## AI

- AI Conversation
- AI Message
- Generation Record
- Prompt Version
- Model Output Validation

---

# Authentication and Authorization

Authentication verifies identity.

Authorization verifies access to a student or family record.

Every protected operation must:

- Identify the current user on the server
- Verify household or student access
- Avoid trusting browser-provided ownership identifiers
- Enforce least privilege
- Prevent cross-family record access

Authorization decisions must always occur on the server.

The client should never determine whether access is permitted.

---

# Client and Server State

The MVP should prefer:

- Server Components
- Server Actions
- Database as the authoritative source of truth

Client-side state should be limited to:

- Temporary UI state
- Form interactions
- Optimistic updates
- Presentation behavior

Business state should remain on the server whenever practical.

---

# AI Architecture

## Initial AI Capabilities

- Profile summarization
- Recommendation generation
- Recommendation prioritization
- Roadmap explanation
- Task decomposition
- Profile-aware counselor conversation

## AI Processing Flow

```text
Relevant Profile Context
        │
        ▼
Current Roadmap Context
        │
        ▼
Verified Product Facts
        │
        ▼
Prompt Template & Model Call
        │
        ▼
Structured Output Validation
        │
        ▼
Policy & Quality Checks
        │
        ▼
User-Facing Recommendation
```

## Required Safeguards

- Schema validation
- Factual-source separation
- Uncertainty communication
- No admission guarantees
- No fabricated dates or costs
- Limited personal information sent to providers
- Prompt and model version tracking
- Rate limiting
- Fallback behavior when AI is unavailable

Agentic task execution is intentionally outside MVP scope.

---

# External Data Strategy

Potential external data sources should be evaluated based on:

- Authority
- Freshness
- Licensing
- Update cadence
- Cost
- API availability
- Coverage

Initial candidate sources include:

- U.S. Department of Education College Scorecard
- NCES
- Official college websites
- Common Data Set publications
- College Board resources
- Scholarship providers

Third-party commercial sites should not be assumed available for unrestricted use.

Every external fact should retain:

- Source
- Retrieval date
- Effective date (when available)
- Confidence or data-quality status

---

# Public Routes

## Public

- /
- /about
- /how-it-works
- /resources
- /faq
- /contact
- /sign-in
- /sign-up

## Authenticated

- /onboarding
- /dashboard
- /profile
- /roadmap
- /explore
- /chat
- /settings

## Future

- /admin
- /counselor

The final navigation model will be defined in the MVP UX Blueprint.

---

# Reliability and Failure Behavior

The application should continue providing value when:

- AI generation fails
- An external data source is unavailable
- A profile is incomplete
- A recommendation cannot be generated confidently
- External information is stale or uncertain

Whenever practical, users should still be able to:

- Review their roadmap
- Edit their profile
- Browse previously generated recommendations
- Continue using non-AI functionality

The system must never silently display invented or stale information.

---

# Error Handling Philosophy

Errors should be:

- Understandable
- Actionable
- Recoverable
- Logged appropriately
- Free of sensitive implementation details

The user should always understand what happened and what they can do next.

---

# Security and Privacy

Because the platform may store information about minors, the architecture must:

- Collect only necessary data
- Protect records with server-side authorization
- Encrypt sensitive data in transit and at rest
- Never expose storage objects publicly
- Use synthetic data during development
- Avoid sensitive information in logs
- Define data deletion and retention policies
- Document third-party data transfers
- Allow users to review and correct stored information

Security should be considered throughout the architecture rather than added after implementation.

---

# Near-Term Architecture Decisions

The following architectural decisions will be finalized during MVP implementation:

1. Authentication model
2. Family membership model
3. Database schema
4. Roadmap prioritization algorithm
5. Structured AI output schema
6. External education data strategy
7. Transcript ingestion strategy
8. Analytics and consent approach