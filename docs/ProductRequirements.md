# AdmitStrong Product Requirements

**Version:** 1.0  
**Status:** Approved for UX Planning  
**Last Updated:** 2026-07-28  
**Owner:** Founders  
**Product Stage:** Early Development  
**Primary Audience:** Founders, designers, engineers, and AI coding agents  
**Purpose:** Defines the scope, required experience, and success criteria for the AdmitStrong MVP.

---

## Product Goal

Reduce uncertainty by giving each student a personalized, explainable, and manageable roadmap that helps them take meaningful action.

The MVP must consistently answer:

> **What should this student do next, why does it matter, and how should they begin?**

---

## Primary Users

### Student

Needs:

- Clear priorities
- Manageable next steps
- Personalized guidance
- Encouragement
- Ownership of progress

Pain points:

- Information overload
- Conflicting advice
- Uncertainty
- Comparison pressure
- Not knowing where to begin

### Parent or Guardian

Needs:

- Confidence
- Appropriate visibility
- Understandable explanations
- Awareness of major milestones
- Earlier academic and financial planning

Pain points:

- Fragmented information
- Uncertainty about timing
- Fear of missing opportunities
- Difficulty supporting without micromanaging

---

## MVP User and Account Model

The MVP supports two user roles:

- Student
- Parent or guardian

A student profile represents one student’s educational journey.

The MVP should support:

- A student creating and managing their own profile
- A parent or guardian creating and initially managing a student profile when appropriate
- A student later claiming or joining that profile through an approved process
- A student and parent being associated with the same student profile
- Role-appropriate access to profile information, recommendations, and progress
- Users reviewing account connections and revoking access where appropriate

The product must not assume that every student account has a connected parent or that every parent account is managed by the student.

Detailed permissions, consent rules, account ownership, and profile-sharing behavior will be defined during UX and architecture design.

---

## MVP Scope

### Required for Initial MVP Release

1. Public website
2. Account creation and authentication
3. Student onboarding
4. Whole-Student Profile
5. Initial Personalized Roadmap
6. Today’s Focus
7. Weekly Priorities
8. Upcoming Milestones
9. Basic progress tracking
10. User correction and confirmation of profile information

### Included If the Core Journey Is Stable

11. Profile-aware AI Counselor
12. Basic college and major exploration
13. Parent access to a shared student profile

### Deferred Until After MVP

- Counselor dashboard
- School or district integrations
- Native mobile applications
- Recommendation-letter workflow
- Essay generation
- Advanced scholarship matching
- Detailed affordability optimizer
- Automated transcript extraction
- Predictive admission probability
- Autonomous agents taking external actions
- Graduate-school guidance
- International admissions workflows
- Multilingual support
- Email and SMS automation beyond essential account messages
- Social or peer-comparison features
- Direct messaging between students and counselors
- Application document management
- Calendar integrations
- Automated submission to external systems
- Structured side-by-side college comparison using comprehensive institutional data

Transcript upload may be explored during the MVP, but structured manual profile entry should remain the reliable fallback.

Essential account messages may include:

- Email verification
- Password reset
- Security notifications
- Invitations to join a student profile
- Important consent or privacy notices

Product-engagement reminders are not required for the initial MVP release.

---

## Primary User Journeys

### Primary First-Time User Journey

Visitor

↓

Homepage

↓

Create account

↓

Choose student or parent role

↓

Create or join a student profile

↓

Complete onboarding

↓

Review and correct profile summary

↓

Generate initial roadmap

↓

View Today’s Focus

↓

Review Weekly Priorities and Upcoming Milestones

↓

Complete, defer, dismiss, or question a recommendation

↓

Return as the roadmap evolves

### Primary Returning-User Journey

Sign in

↓

View Today’s Focus

↓

Review changes or new recommendations

↓

Complete, defer, dismiss, question, or update an action

↓

Review Weekly Priorities and Upcoming Milestones

↓

Ask for guidance or update the profile when circumstances change

### Primary Parent Journey

Create or join a student profile

↓

Review the student’s roadmap and major milestones

↓

Understand why recommendations matter

↓

Support appropriate actions without taking ownership away from the student

---

## Core Product Experience

### 1. Whole-Student Profile

The profile should include only information necessary for useful recommendations.

Initial fields may include:

- Preferred name
- Grade
- Graduation year
- School state or region
- Academic interests
- Possible majors or careers
- Current courses
- Academic strengths
- Activities and commitments
- Accomplishments
- Goals
- Challenges or concerns
- College preferences
- Basic affordability priorities

The profile must be:

- Editable
- Understandable
- Reviewable before AI-generated recommendations are created
- Incrementally completable
- Protected as sensitive student information

The product should not require users to complete the entire profile before receiving initial value.

The product should explain why required information is being requested.

---

### 2. Personalized Roadmap

The Personalized Roadmap is the central organizing experience of AdmitStrong. It turns the student profile into a prioritized set of explainable and manageable recommendations.

The product should present one clearly prioritized next action when appropriate.

When there is no single clearly superior action, the product may present alternatives, but it must explain the tradeoffs and avoid presenting several actions as equally urgent.

The roadmap must:

- Be appropriate for the student’s grade and current time of year
- Prioritize a small number of meaningful actions
- Avoid recommending work that is not yet relevant
- Distinguish required, suggested, and exploratory actions
- Avoid duplicating actions across timeframes
- Explain which student circumstances influenced important recommendations
- Update when relevant profile information changes
- Allow users to complete, defer, dismiss, or question a recommendation

The roadmap organizes recommendations by timeframe:

- Today
- This Week
- This Month
- This School Term
- Later

Each roadmap item should include:

- Recommended action
- Explanation
- Estimated effort
- Suggested timing
- A user-friendly explanation of the profile factors that influenced the recommendation
- Status
- Category
- Optional resource or next screen

Users should be able to:

- Mark an item complete
- Defer it
- Dismiss it with an optional reason
- Ask why it was recommended
- Report that it is inaccurate or irrelevant
- Reopen a completed, deferred, or dismissed item when appropriate

---

### 3. Today’s Focus

The dashboard should feature one primary action.

It should answer:

- What should I do?
- Why does this matter?
- How long might it take?
- How do I begin?

Avoid showing several equal-priority actions above the fold.

---

### 4. Weekly Priorities

Show a maximum of three to five manageable actions.

Each priority should include:

- Title
- Category
- Estimated time
- Due date or suggested window
- Reason
- Completion status

---

### 5. Upcoming Milestones

Milestones are important future events, not fear-based countdowns.

Examples include:

- Course-registration review
- Testing decision
- Summer-program research
- College-list review
- Financial-planning conversation
- Application milestone

Each milestone should show:

- Milestone
- Date or time window
- Suggested preparation step
- Source when based on external facts

---

### 6. Journey Progress

Journey Progress is secondary to actionable guidance.

It should help users understand development across important areas without becoming the primary focus of the dashboard.

Do not use one unexplained application-readiness percentage.

Use transparent dimensions such as:

- Academic Foundation
- Interests and Direction
- Activities and Contribution
- College Exploration
- Application Preparation
- Financial Planning

Use understandable states such as:

- Not Yet Relevant
- Getting Started
- Developing
- On Track
- Well Developed

The user must be able to understand why a status was assigned.

The initial MVP does not need to calculate or display every dimension for every student. Dimensions should appear only when relevant to the student’s grade, goals, and stage.

---

### 7. AI Counselor

The AI Counselor should:

- Use relevant profile context
- Explain recommendations
- Distinguish facts from suggestions
- Acknowledge uncertainty
- Avoid admission guarantees
- Avoid fabricating dates, costs, programs, or requirements
- Ask clarifying questions when necessary
- Recommend small and achievable actions
- Allow correction of inaccurate assumptions
- Avoid presenting legal, medical, financial, or immigration guidance as professional advice
- Avoid changing the student profile without explicit confirmation
- Identify when an answer depends on current external information
- Use reliable and current sources when factual information may have changed
- Show the source and source date when recommendations depend on changing requirements
- Clearly state when current information cannot be verified

The AI Counselor must not silently modify authoritative student information or roadmap state.

Structured profile data, user-confirmed facts, and action status must remain separate from conversational output.

Example questions include:

- Which courses should I consider next year?
- What activities fit my interest in biomedical engineering?
- How should I explore possible majors?
- What should I focus on this month?
- How can I make this goal more manageable?

---

### 8. College and Major Exploration

The initial version should support lightweight exploration rather than a comprehensive college-search product.

It should support:

- Saving a limited number of colleges or majors
- Recording why an option is interesting
- Identifying questions to investigate
- Viewing broad fit considerations
- Connecting exploration to the student’s roadmap

The MVP should not attempt to replicate a full college-search database.

Structured side-by-side comparison using comprehensive institutional data is deferred to a later phase.

---

## Product Principles

1. Always clarify the next best step.
2. Reduce anxiety rather than increase it.
3. Explain important recommendations.
4. Personalize using relevant student context.
5. Encourage student ownership.
6. Build momentum through achievable actions.
7. Do not create false precision.
8. Preserve human judgment.
9. Collect only information needed for a defined purpose.
10. Make important facts traceable to current sources.

---

## Experience Requirements

The product should feel:

- Calm
- Reassuring
- Encouraging
- Trustworthy
- Modern
- Simple
- Age-appropriate
- Useful to both students and parents

The product should:

- Provide clear loading, empty, success, and error states
- Preserve user-entered information when recoverable errors occur
- Explain why required information is being requested
- Avoid requiring completion of the entire profile before providing initial value
- Use language that is understandable to users unfamiliar with college admissions terminology

Avoid:

- Fear-based warnings
- Arbitrary readiness scores
- Cluttered dashboards
- Manipulative urgency
- Elite-college obsession
- Comparisons that shame students
- Unexplained AI output

---

## Accessibility and Responsive Requirements

The MVP must:

- Work on desktop and mobile web
- Support keyboard navigation
- Use readable contrast and text sizes
- Provide clear focus and error states
- Avoid relying on color alone to communicate meaning
- Use age-appropriate language
- Remain understandable for users unfamiliar with college admissions terminology

---

## Privacy, Consent, and Account Requirements

The MVP must:

- Clearly explain what student information is collected and why
- Collect only information needed for defined product purposes
- Allow users to review and edit stored profile information
- Support account deletion and an appropriate process for deleting, transferring, or retaining shared student-profile data
- Avoid exposing one student’s information to another user
- Require appropriate confirmation before connecting student and parent accounts
- Allow users to review account connections and revoke access where appropriate
- Distinguish user-confirmed information from AI-generated assumptions
- Avoid using sensitive student data for unrelated purposes
- Avoid placing sensitive student information in logs, analytics events, or AI prompts unless necessary for a defined function

Requirements related to minors, parental consent, data retention, and regional privacy laws must be reviewed before public launch.

---

## MVP Success Metrics

### Primary MVP Outcome

The primary MVP outcome is the percentage of activated users who:

1. Report that they understand their next best step
2. Meaningfully respond to at least one recommendation

A meaningful response includes:

- Completing a recommendation
- Deferring a recommendation
- Dismissing a recommendation
- Questioning a recommendation
- Correcting a recommendation

### Activation

- Account-creation completion
- Onboarding completion
- Initial roadmap generation
- Completion or meaningful response to the first recommended action

### Engagement

- Weekly active students
- Weekly priority completion
- Return rate
- AI Counselor engagement
- Recommendation response rate

### Value and Trust

- Percentage of users who report knowing what to do next
- Recommendation helpfulness rating
- Parent confidence rating
- Rate of user corrections to generated recommendations
- AI factual-error reports

### Business Learning

- Beta signup conversion
- Willingness to pay
- Parent and student retention
- Referral intent
- Most frequently requested capabilities

Metric definitions, event names, reporting windows, and target thresholds must be documented before beta launch.

This includes clear definitions for:

- Return rate
- Parent confidence
- Recommendation helpfulness
- Recommendation response rate
- Retention

---

## MVP Readiness Criteria

The MVP is ready for controlled beta testing when a user can:

1. Create an account
2. Create or join a student profile
3. Complete the minimum required onboarding
4. Review and correct their profile
5. Receive an initial personalized roadmap
6. Understand why the primary recommendation was made
7. Complete, defer, dismiss, or question that recommendation
8. Return later and see an updated, persistent experience
9. Access the experience on desktop and mobile web
10. Report inaccurate or unhelpful guidance

The beta should not launch until critical privacy, access-control, data-loss, and fabricated-guidance risks have been reviewed.

---

## Non-Goals for the MVP

The MVP is not intended to:

- Replace a school or independent counselor
- Guarantee admission
- Fully automate college applications
- Generate complete application essays
- Make decisions for students
- Rank a student’s worth
- Predict a student’s future with certainty