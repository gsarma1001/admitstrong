"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loadSession, loadStudentProfile, saveSession } from "@/lib/student-profile";

const formClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";

export function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState(() => {
    const savedProfile = loadStudentProfile();
    const savedSession = loadSession();

    return {
      name: savedSession?.name ?? savedProfile?.name ?? "",
      email: savedSession?.email ?? savedProfile?.email ?? "",
      password: "",
    };
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const safeName = form.name.trim() || "Student";
    const safeEmail = form.email.trim() || "student@example.com";

    saveSession({ name: safeName, email: safeEmail });
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
          Student access
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Welcome back</h2>
        <p className="mt-2 text-sm text-slate-600">
          Sign in to view your roadmap, update your profile, and get the next recommended action.
        </p>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
        <input
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
          className={formClass}
          placeholder="Ava Johnson"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Email address</span>
        <input
          type="email"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
          className={formClass}
          placeholder="ava@example.com"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
        <input
          type="password"
          value={form.password}
          onChange={(event) => handleChange("password", event.target.value)}
          className={formClass}
          placeholder="••••••••"
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Continue to my profile
      </button>

      <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm text-sky-900">
        Demo mode: your profile and recommendations are saved locally on this browser so you can return and keep improving it.
      </div>
    </form>
  );
}
