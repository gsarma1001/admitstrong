# AdmitStrong

AdmitStrong is a student-centered college admissions planning platform. The current MVP helps students and families understand the next step, why it matters, and which actions are most worth pursuing.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Supabase integration

This project is set up to persist student data through Supabase when the environment variables are configured.

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local`.
3. Add your project URL and keys.
4. Run the SQL in `supabase/schema.sql` in the Supabase SQL editor.

Example:

```bash
cp .env.example .env.local
```

Required values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

The app currently saves profile data locally in the browser as a fallback if Supabase is not configured yet. Once those values are present, the dashboard form will post to the `/api/profile` route and store the submitted student information in the `student_profiles` table.

## Student profile data captured

The profile questionnaire currently gathers:

- student name and email
- grade level and school location
- GPA and test scores
- college and career goals
- courses taken
- clubs and extracurricular activities
- volunteering, internships, and interests
- strengths and financial planning considerations

These fields feed the recommendation engine and future trajectory planning for academic, internship, volunteering, and summer opportunity suggestions.

## Roadmap and future expansion

The schema in `supabase/schema.sql` also includes a `student_trajectory_items` table so the platform can later track actions such as:

- recommended courses
- internship opportunities
- volunteer commitments
- summer programs
- academic competitions
- completed milestones

This is the foundation for the next layer of personalized guidance and application-portfolio tracking.
