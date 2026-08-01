# AdmitStrong MVP UX Blueprint

**Version:** 1.0
**Status:** Draft
**Last Updated:** YYYY-MM-DD
**Owner:** Founders
**Primary Audience:** Founders, product designers, engineers, and AI coding agents
**Related Documents:** `Vision.md`, `Founders.md`, `ProductRequirements.md`, `Architecture.md`, `BrandGuide.md`, `Decisions.md`
**Purpose:** Defines the user journeys, information architecture, screens, interactions, states, responsive behavior, and accessibility requirements for the AdmitStrong MVP.

---

# Table of Contents

## Part I — UX Foundation

### 1. Document Metadata and Governance

1.1 Purpose
1.2 Scope
1.3 Intended audience
1.4 Related documents
1.5 Requirement priority definitions
1.6 UX decision ownership
1.7 Change-management process
1.8 Open questions and assumptions

### 2. UX Vision and Success Criteria

2.1 Experience vision
2.2 Product North Star
2.3 Primary user outcome
2.4 MVP experience goals
2.5 UX success metrics
2.6 Definition of an activated user
2.7 Definition of a successful first session
2.8 UX anti-goals

### 3. UX Principles

3.1 Clarify the next best step
3.2 One primary action per screen
3.3 Progressive disclosure
3.4 Encourage rather than judge
3.5 Explain important recommendations
3.6 Preserve student ownership
3.7 Provide value before profile completion
3.8 Design for uncertainty
3.9 Reduce cognitive load
3.10 Use AI as support, not authority
3.11 Accessibility by default
3.12 Mobile-first, desktop-optimized
3.13 Design before implementation

### 4. Users, Roles, and Personas

4.1 Primary user groups
4.2 Student persona spectrum
4.3 Parent or guardian persona spectrum
4.4 Younger student considerations
4.5 Older student considerations
4.6 Parent-created student profiles
4.7 Student-created profiles
4.8 Shared student profiles
4.9 User motivations
4.10 User anxieties
4.11 Accessibility and digital-literacy considerations
4.12 Persona exclusions and MVP assumptions

### 5. Experience Vocabulary and Content Standards

5.1 Approved product terminology
5.2 Status terminology
5.3 Recommendation terminology
5.4 Required, suggested, and exploratory actions
5.5 Student-facing language
5.6 Parent-facing language
5.7 Sensitive feedback language
5.8 Error and recovery language
5.9 Uncertainty and source language
5.10 Button and action-label conventions
5.11 Date, deadline, duration, and effort conventions

---

## Part II — Product Structure and Journeys

### 6. Information Architecture

6.1 Product areas
6.2 Public experience
6.3 Authenticated experience
6.4 Student experience
6.5 Parent experience
6.6 Shared-profile experience
6.7 Content hierarchy
6.8 Relationship between Dashboard and Personalized Roadmap
6.9 Relationship between Profile and recommendations
6.10 Relationship between AI Counselor and structured product data

### 7. Navigation Model

7.1 Navigation principles
7.2 Public-site navigation
7.3 Authenticated desktop navigation
7.4 Authenticated mobile navigation
7.5 Primary navigation destinations
7.6 Secondary navigation
7.7 Contextual navigation
7.8 Back-navigation behavior
7.9 Deep-link behavior
7.10 Active, hover, focus, and selected states
7.11 Unsaved-change navigation behavior
7.12 Role-specific navigation differences

### 8. Route and Screen Inventory

8.1 Public routes
8.2 Authentication routes
8.3 Onboarding routes
8.4 Dashboard routes
8.5 Roadmap routes
8.6 Profile routes
8.7 Exploration routes
8.8 AI Counselor routes
8.9 Settings routes
8.10 Shared-profile and invitation routes
8.11 Route access rules
8.12 MVP, conditional MVP, and future routes

### 9. User-Journey Framework

9.1 Journey documentation format
9.2 Entry points
9.3 Preconditions
9.4 User goals
9.5 Primary success path
9.6 Alternate paths
9.7 Interruption and recovery
9.8 Completion criteria
9.9 Analytics events
9.10 Accessibility checkpoints

### 10. Core User Journeys

10.1 First-time student journey
10.2 First-time parent journey
10.3 Parent creates a student profile
10.4 Student creates their own profile
10.5 Student joins or claims an existing profile
10.6 Returning-student journey
10.7 Returning-parent journey
10.8 Profile update and roadmap recalculation
10.9 Recommendation-response journey
10.10 Account connection and access-revocation journey
10.11 Account deletion journey
10.12 AI or external-data failure journey

---

## Part III — Detailed MVP Experiences

### 11. Public Website Experience

11.1 Public-site goals
11.2 Homepage
11.3 How it works
11.4 About
11.5 Resources
11.6 Frequently asked questions
11.7 Contact
11.8 Public-to-authenticated conversion flow
11.9 Mobile behavior
11.10 Public-site accessibility

### 12. Authentication and Account Entry

12.1 Sign-up entry
12.2 Sign-in
12.3 Role selection
12.4 Email verification
12.5 Password reset
12.6 Authentication errors
12.7 Session expiration
12.8 Existing-account detection
12.9 Invitation entry
12.10 Account-security messaging

### 13. Onboarding Experience

13.1 Onboarding goals
13.2 Minimum information required for initial value
13.3 Onboarding entry states
13.4 Student onboarding flow
13.5 Parent onboarding flow
13.6 Create-or-join profile decision
13.7 Guided step structure
13.8 Progress communication
13.9 Save-and-exit behavior
13.10 Optional-field behavior
13.11 Why-we-ask explanations
13.12 Review and confirmation
13.13 Profile-summary generation
13.14 Roadmap-generation transition
13.15 Partial onboarding
13.16 Returning to incomplete onboarding
13.17 Loading, success, empty, and error states
13.18 Mobile behavior
13.19 Accessibility requirements

### 14. Dashboard Experience

14.1 Dashboard purpose
14.2 Dashboard information hierarchy
14.3 Today’s Focus
14.4 Weekly Priorities
14.5 Upcoming Milestones
14.6 Journey Progress
14.7 Dashboard changes since last visit
14.8 First-visit dashboard
14.9 Returning-user dashboard
14.10 Incomplete-profile dashboard
14.11 No-current-action dashboard
14.12 Roadmap-updating state
14.13 AI-unavailable dashboard state
14.14 Mobile dashboard behavior
14.15 Dashboard accessibility

### 15. Personalized Roadmap

15.1 Roadmap purpose
15.2 Roadmap organization by timeframe
15.3 Today
15.4 This Week
15.5 This Month
15.6 This School Term
15.7 Later
15.8 Required actions
15.9 Suggested actions
15.10 Exploratory actions
15.11 Prioritization hierarchy
15.12 Filtering and grouping
15.13 Roadmap updates
15.14 Roadmap recalculation
15.15 Duplicate-action prevention
15.16 Historical and inactive items
15.17 Loading, empty, stale, and failure states
15.18 Mobile behavior
15.19 Accessibility requirements

### 16. Recommendation Cards and Recommendation Details

16.1 Recommendation object anatomy
16.2 Card hierarchy
16.3 Recommendation title
16.4 Category
16.5 Estimated effort
16.6 Suggested timing
16.7 Due date or time window
16.8 Why this matters
16.9 Why this was recommended
16.10 Profile factors used
16.11 Source and verification information
16.12 Primary card action
16.13 Secondary actions
16.14 Complete
16.15 Defer
16.16 Dismiss
16.17 Question
16.18 Report inaccurate or irrelevant guidance
16.19 Reopen
16.20 Recommendation-detail view
16.21 Confirmation and undo behavior
16.22 Loading and error states
16.23 Mobile behavior
16.24 Accessibility requirements

### 17. Whole-Student Profile

17.1 Profile purpose
17.2 Profile information architecture
17.3 Profile overview
17.4 Personal and school context
17.5 Academic profile
17.6 Courses
17.7 Academic strengths
17.8 Interests
17.9 Possible majors and careers
17.10 Activities and commitments
17.11 Accomplishments
17.12 Goals
17.13 Challenges and concerns
17.14 College preferences
17.15 Affordability priorities
17.16 Profile completeness communication
17.17 Edit behavior
17.18 Review and confirmation behavior
17.19 AI-suggested profile updates
17.20 Explicit confirmation requirements
17.21 Roadmap-impact warnings
17.22 Loading, empty, and error states
17.23 Mobile behavior
17.24 Accessibility and privacy considerations

### 18. Journey Progress

18.1 Purpose and limitations
18.2 Relationship to actionable guidance
18.3 Relevant progress dimensions
18.4 Not Yet Relevant
18.5 Getting Started
18.6 Developing
18.7 On Track
18.8 Well Developed
18.9 Status explanation
18.10 Evidence and profile factors
18.11 Student-specific relevance rules
18.12 Avoiding judgment and false precision
18.13 Mobile behavior
18.14 Accessibility requirements

### 19. AI Counselor

19.1 Conditional MVP status
19.2 AI Counselor purpose
19.3 Entry points
19.4 Conversation start screen
19.5 Suggested questions
19.6 Profile-context disclosure
19.7 Conversation layout
19.8 Facts versus suggestions
19.9 Source presentation
19.10 Uncertainty communication
19.11 Clarifying questions
19.12 Recommendation explanation
19.13 Task decomposition
19.14 Proposed profile corrections
19.15 Confirmation before profile changes
19.16 Relationship to roadmap state
19.17 Conversation history
19.18 AI unavailable state
19.19 Current-information unavailable state
19.20 Safety and high-stakes boundaries
19.21 Mobile behavior
19.22 Accessibility requirements

### 20. College and Major Exploration

20.1 Conditional MVP status
20.2 Exploration purpose
20.3 Exploration entry screen
20.4 College exploration
20.5 Major exploration
20.6 Broad fit considerations
20.7 Save an option
20.8 Record why it is interesting
20.9 Questions to investigate
20.10 Connect exploration to roadmap
20.11 Saved options
20.12 Remove or update saved options
20.13 Source and freshness display
20.14 Empty and unavailable-data states
20.15 Mobile behavior
20.16 Accessibility requirements
20.17 Explicit MVP limitations

### 21. Parent Experience

21.1 Parent experience principles
21.2 Appropriate visibility
21.3 Student ownership
21.4 Parent dashboard
21.5 Parent view of Today’s Focus
21.6 Parent view of Weekly Priorities
21.7 Parent view of Upcoming Milestones
21.8 Parent view of Journey Progress
21.9 How parents can support
21.10 Parent-created profile state
21.11 Student-claimed profile state
21.12 Shared-profile indicators
21.13 Invitation and connection flow
21.14 Permission and consent messaging
21.15 Access-revocation flow
21.16 Parent-specific empty and error states
21.17 Mobile behavior
21.18 Accessibility requirements

### 22. Settings, Privacy, and Account Management

22.1 Settings information architecture
22.2 Personal account details
22.3 Role display
22.4 Student-profile connections
22.5 Invitations
22.6 Access and permissions
22.7 Notification settings
22.8 Privacy information
22.9 Data review and correction
22.10 Password and security
22.11 Sign out
22.12 Account deletion
22.13 Shared-profile deletion or transfer
22.14 Confirmation patterns
22.15 Mobile behavior
22.16 Accessibility requirements

---

## Part IV — Cross-Experience UX Specifications

### 23. Global Interaction Patterns

23.1 Primary and secondary actions
23.2 Buttons
23.3 Links
23.4 Forms
23.5 Input validation
23.6 Selection controls
23.7 Search
23.8 Filters
23.9 Tabs
23.10 Accordions and progressive disclosure
23.11 Dialogs
23.12 Drawers and bottom sheets
23.13 Toasts and inline confirmations
23.14 Destructive-action confirmation
23.15 Undo behavior
23.16 Autosave and manual save
23.17 Unsaved changes
23.18 Pagination and incremental loading
23.19 Tooltips and help content
23.20 External links

### 24. System States

24.1 State-design principles
24.2 Initial loading
24.3 Background loading
24.4 Skeleton states
24.5 Empty states
24.6 First-use states
24.7 Partial-data states
24.8 Success states
24.9 Warning states
24.10 Validation errors
24.11 System errors
24.12 Permission errors
24.13 Offline and connection errors
24.14 AI-generation errors
24.15 External-data errors
24.16 Stale-data states
24.17 No-confident-recommendation states
24.18 Recovery behavior
24.19 Support escalation

### 25. Responsive Design

25.1 Responsive-design principles
25.2 Supported viewport ranges
25.3 Mobile layout
25.4 Tablet layout
25.5 Desktop layout
25.6 Maximum content widths
25.7 Responsive navigation
25.8 Responsive forms
25.9 Responsive cards
25.10 Responsive roadmap
25.11 Responsive AI Counselor
25.12 Touch-target requirements
25.13 Mobile keyboard behavior
25.14 Orientation changes
25.15 Content-priority rules
25.16 Feature-parity expectations

### 26. Accessibility

26.1 Accessibility target
26.2 Semantic structure
26.3 Heading hierarchy
26.4 Keyboard navigation
26.5 Focus management
26.6 Visible focus indicators
26.7 Color contrast
26.8 Color-independent meaning
26.9 Screen-reader labels
26.10 Form labels and instructions
26.11 Error identification
26.12 Status announcements
26.13 Dialog and drawer behavior
26.14 Motion and reduced motion
26.15 Touch-target sizes
26.16 Plain-language requirements
26.17 Time limits and session expiration
26.18 Accessible source and status indicators
26.19 Testing requirements

### 27. Content Design and Microcopy

27.1 Content-design principles
27.2 Reading-level guidance
27.3 Student voice
27.4 Parent voice
27.5 Recommendation writing pattern
27.6 Explanation writing pattern
27.7 Sensitive-feedback pattern
27.8 Uncertainty pattern
27.9 Error-message pattern
27.10 Empty-state pattern
27.11 Confirmation-message pattern
27.12 Date and deadline language
27.13 Effort-estimate language
27.14 Prohibited language
27.15 Example microcopy library

### 28. Trust, Privacy, and Explainability UX

28.1 Trust principles
28.2 Explain why information is collected
28.3 Distinguish confirmed data from AI output
28.4 Distinguish facts from suggestions
28.5 Recommendation explanation model
28.6 Profile-factor disclosure
28.7 Source disclosure
28.8 Source-date disclosure
28.9 Stale or uncertain information
28.10 User correction flow
28.11 Shared-profile visibility
28.12 Consent and account connections
28.13 Minor-sensitive information
28.14 Data deletion and access revocation
28.15 Avoiding false precision

### 29. Analytics and UX Measurement

29.1 Measurement principles
29.2 Privacy-conscious analytics
29.3 Activation events
29.4 Onboarding events
29.5 Roadmap-generation events
29.6 Recommendation-response events
29.7 Dashboard-engagement events
29.8 Profile-correction events
29.9 AI Counselor events
29.10 Parent-engagement events
29.11 Error and recovery events
29.12 Accessibility-related quality signals
29.13 Event naming conventions
29.14 Prohibited analytics data
29.15 UX feedback collection

---

## Part V — Engineering Handoff and Future Scope

### 30. Screen Specification Template

30.1 Screen name and identifier
30.2 MVP priority
30.3 Purpose
30.4 Target user
30.5 Entry points
30.6 Preconditions
30.7 Primary action
30.8 Secondary actions
30.9 Content hierarchy
30.10 Layout regions
30.11 Components
30.12 Data requirements
30.13 Business rules
30.14 Interaction behavior
30.15 Loading state
30.16 Empty state
30.17 Error state
30.18 Success state
30.19 Accessibility considerations
30.20 Mobile behavior
30.21 Analytics events
30.22 Acceptance criteria
30.23 Future enhancements

### 31. Component Inventory

31.1 Application shell
31.2 Public header
31.3 Authenticated navigation
31.4 Mobile navigation
31.5 Page header
31.6 Today’s Focus card
31.7 Recommendation card
31.8 Recommendation-detail panel
31.9 Weekly-priority item
31.10 Milestone item
31.11 Progress-dimension indicator
31.12 Profile section
31.13 Profile-summary panel
31.14 Source indicator
31.15 Status badge
31.16 Explanation panel
31.17 Form controls
31.18 Dialogs and drawers
31.19 Loading components
31.20 Empty-state components
31.21 Error components
31.22 AI conversation components

### 32. Design Tokens and Visual-System Requirements

32.1 Color tokens
32.2 Semantic color tokens
32.3 Typography tokens
32.4 Spacing scale
32.5 Layout tokens
32.6 Border and radius tokens
32.7 Shadow tokens
32.8 Icon sizing
32.9 Component sizing
32.10 Breakpoints
32.11 Motion tokens
32.12 Focus tokens
32.13 Disabled-state tokens
32.14 Dark-mode position for MVP

### 33. UX Acceptance and Quality Checklist

33.1 Product-principle review
33.2 Primary-action review
33.3 Cognitive-load review
33.4 Content and terminology review
33.5 Responsive review
33.6 Keyboard review
33.7 Screen-reader review
33.8 Contrast review
33.9 Loading and failure review
33.10 Data-preservation review
33.11 Privacy review
33.12 Authorization review
33.13 AI explainability review
33.14 Source-freshness review
33.15 Analytics review
33.16 Final implementation acceptance

### 34. MVP Scope Matrix

34.1 Required for initial MVP
34.2 Included only after core-journey stability
34.3 Explicitly deferred
34.4 Dependencies
34.5 Release risks
34.6 Scope-change approval process

### 35. Future UX — Out of Scope for MVP

35.1 Counselor experience
35.2 School and district experience
35.3 Advanced scholarship matching
35.4 Detailed affordability planning
35.5 Transcript import and review
35.6 Comprehensive college comparison
35.7 Application-document management
35.8 Calendar integrations
35.9 Native mobile applications
35.10 Notifications and engagement reminders
35.11 International admissions
35.12 Graduate and career guidance
35.13 Multilingual support
35.14 Autonomous agent capabilities

---

# Appendices

## Appendix A — Screen Inventory Table

## Appendix B — Route and Permission Matrix

## Appendix C — User-Journey Diagrams

## Appendix D — Recommendation State Machine

## Appendix E — Profile and Roadmap Data Dependencies

## Appendix F — Content and Microcopy Library

## Appendix G — Accessibility Test Matrix

## Appendix H — Analytics Event Catalog

## Appendix I — UX Decisions and Open Questions

## Appendix J — Glossary