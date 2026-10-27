"use client";

import { useMemo, useState } from "react";
import {
  emptyStudentProfile,
  generateRecommendation,
  loadStudentProfile,
  saveStudentProfile,
  type StudentProfile,
} from "@/lib/student-profile";

const fieldClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";

export function StudentProfileForm() {
  const savedProfile = loadStudentProfile();
  const [form, setForm] = useState<StudentProfile>(savedProfile ?? emptyStudentProfile);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [status, setStatus] = useState<{ type: "idle" | "saving" | "saved" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const recommendation = useMemo(
    () => generateRecommendation(form),
    [form],
  );

  const handleChange = (field: keyof StudentProfile, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedProfile = {
      ...form,
      name: form.name.trim() || "Student",
      email: form.email.trim() || "student@example.com",
      profileComplete: true,
    };

    saveStudentProfile(normalizedProfile);

    try {
      setStatus({ type: "saving", message: "Saving your profile..." });
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(normalizedProfile),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Profile could not be saved to the database.");
      }

      setStatus({ type: "saved", message: "Profile saved to your student record." });
      setSavedAt(new Date().toLocaleString());
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your local profile was saved, but the cloud record could not be updated.",
      });
      setSavedAt(new Date().toLocaleString());
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.06)] sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">Student profile</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Create your admission profile</h2>
          <p className="mt-2 text-sm text-slate-600">
            Add the details that matter most so the roadmap can recommend a smart next step.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Student name</span>
            <input value={form.name} onChange={(event) => handleChange("name", event.target.value)} className={fieldClass} placeholder="Ava Johnson" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input type="email" value={form.email} onChange={(event) => handleChange("email", event.target.value)} className={fieldClass} placeholder="ava@example.com" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Grade level</span>
            <select value={form.gradeLevel} onChange={(event) => handleChange("gradeLevel", event.target.value)} className={fieldClass}>
              <option>9th grade</option>
              <option>10th grade</option>
              <option>11th grade</option>
              <option>12th grade</option>
              <option>Recent graduate</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">School zip code</span>
            <input value={form.schoolZip} onChange={(event) => handleChange("schoolZip", event.target.value)} className={fieldClass} placeholder="94105" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">State</span>
            <input value={form.schoolState} onChange={(event) => handleChange("schoolState", event.target.value)} className={fieldClass} placeholder="California" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">GPA</span>
            <input value={form.gpa} onChange={(event) => handleChange("gpa", event.target.value)} className={fieldClass} placeholder="3.7" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">SAT</span>
            <input value={form.satScore} onChange={(event) => handleChange("satScore", event.target.value)} className={fieldClass} placeholder="1320" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">ACT</span>
            <input value={form.actScore} onChange={(event) => handleChange("actScore", event.target.value)} className={fieldClass} placeholder="29" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Target major</span>
            <input value={form.targetMajor} onChange={(event) => handleChange("targetMajor", event.target.value)} className={fieldClass} placeholder="Computer Science" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">School type</span>
            <select value={form.schoolType} onChange={(event) => handleChange("schoolType", event.target.value)} className={fieldClass}>
              <option>4-year university</option>
              <option>2-year community college</option>
              <option>Private college</option>
              <option>Public university</option>
              <option>Career-focused program</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Courses already taken</span>
          <textarea value={form.coursesTaken} onChange={(event) => handleChange("coursesTaken", event.target.value)} className={`${fieldClass} min-h-20`} placeholder="Algebra II, Biology, AP English Language, Computer Science" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Clubs and organizations</span>
          <textarea value={form.clubsParticipating} onChange={(event) => handleChange("clubsParticipating", event.target.value)} className={`${fieldClass} min-h-20`} placeholder="Robotics club, debate team, coding club" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Extra-curricular activities inside and outside school</span>
          <textarea value={form.extracurriculars} onChange={(event) => handleChange("extracurriculars", event.target.value)} className={`${fieldClass} min-h-24`} placeholder="Science fairs, volunteering, youth leadership, weekend workshops" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Top interests</span>
          <input value={form.interests} onChange={(event) => handleChange("interests", event.target.value)} className={fieldClass} placeholder="STEM, research, and problem solving" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Academic and personal goals</span>
          <textarea value={form.goals} onChange={(event) => handleChange("goals", event.target.value)} className={`${fieldClass} min-h-28`} placeholder="I want to build a strong profile and make thoughtful college choices." />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">College goals</span>
          <textarea value={form.collegeGoals} onChange={(event) => handleChange("collegeGoals", event.target.value)} className={`${fieldClass} min-h-20`} placeholder="I want a strong academic environment with research opportunities and affordable pathways." />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Career goals</span>
          <textarea value={form.careerGoals} onChange={(event) => handleChange("careerGoals", event.target.value)} className={`${fieldClass} min-h-20`} placeholder="I am exploring engineering, computer science, and product design roles." />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Current activities</span>
          <textarea value={form.currentActivities} onChange={(event) => handleChange("currentActivities", event.target.value)} className={`${fieldClass} min-h-24`} placeholder="Robotics club, debate team, coding projects" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Volunteer experience</span>
          <textarea value={form.volunteerExperience} onChange={(event) => handleChange("volunteerExperience", event.target.value)} className={`${fieldClass} min-h-20`} placeholder="Community tutoring, food pantry support" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Internships or work experience</span>
          <textarea value={form.internships} onChange={(event) => handleChange("internships", event.target.value)} className={`${fieldClass} min-h-20`} placeholder="Summer coding camp, local library intern" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Strengths and differentiators</span>
          <textarea value={form.strengths} onChange={(event) => handleChange("strengths", event.target.value)} className={`${fieldClass} min-h-20`} placeholder="Leadership, persistence, analytical thinking" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Financial and planning considerations</span>
          <textarea value={form.financialNeed} onChange={(event) => handleChange("financialNeed", event.target.value)} className={`${fieldClass} min-h-20`} placeholder="I want to balance affordability with a strong academic match." />
        </label>

        <div className="flex items-center justify-between gap-4 pt-2">
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800">
            Save profile
          </button>

          {savedAt ? <span className="text-xs text-slate-500">Saved {savedAt}</span> : null}
        </div>

        {status.message ? (
          <div className={status.type === "error" ? "rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700" : "rounded-2xl border border-sky-200 bg-sky-50 p-3 text-sm text-sky-700"}>
            {status.message}
          </div>
        ) : null}
      </form>

      <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.04)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">Recommended next move</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-900">{recommendation.headline}</h3>

        <div className="mt-6 rounded-2xl border border-sky-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">Readiness score</span>
            <span className="text-lg font-semibold text-slate-900">{recommendation.readinessScore}/100</span>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-sky-600" style={{ width: `${recommendation.readinessScore}%` }} />
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-600">{recommendation.summary}</p>

        <div className="mt-6 rounded-2xl bg-slate-900 p-4 text-white">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Next action</p>
          <p className="mt-2 text-lg font-semibold">{recommendation.nextAction}</p>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-800">Priority actions</p>
          <ul className="mt-4 space-y-3">
            {recommendation.recommendedActions.map((action) => (
              <li key={action.title} className="rounded-2xl border border-slate-200 bg-white p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-800">{action.title}</span>
                  <span className="rounded-full bg-sky-100 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-sky-700">
                    {action.priority}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-6 text-slate-600">{action.reason}</p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">{action.due}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-800">Focus areas</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {recommendation.focusAreas.map((area) => (
              <span key={area} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-800">Future opportunities</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {recommendation.futureOpportunities.map((opportunity) => (
              <li key={opportunity} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                {opportunity}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
