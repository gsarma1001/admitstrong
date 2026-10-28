"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loadSession, loadStudentProfile, saveSession } from "@/lib/student-profile";

const formClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-50";

export function LoginForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
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
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const safeName = form.name.trim() || "Student";
    const safeEmail = form.email.trim().toLowerCase();

    if (!safeEmail || !form.password.trim()) {
      setError("Please enter your email and password to continue.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/auth/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode,
          name: safeName,
          email: safeEmail,
          password: form.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to continue with authentication.");
      }

      saveSession({
        name: result.session.name,
        email: result.session.email,
      });

      router.push("/dashboard");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong while signing in.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerClass = compact
    ? "space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
    : "space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_55px_rgba(15,23,42,0.08)]";

  return (
    <form onSubmit={handleSubmit} className={containerClass}>
      <div>
        <div className="flex rounded-full border border-slate-200 bg-slate-100 p-1">
          {(["login", "signup"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setMode(tab)}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                mode === tab
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab === "login" ? "Log in" : "Sign up"}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          {mode === "login" ? "Access your roadmap" : "Build your roadmap"}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {mode === "login"
            ? "Sign in to review your roadmap, update your profile, and get the next recommended action."
            : "Create a secure account so your goals, timeline, and recommendations stay in sync."}
        </p>
      </div>

      {mode === "signup" && (
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
          <input
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className={formClass}
            placeholder="Ava Johnson"
            autoComplete="name"
          />
        </label>
      )}

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Email address</span>
        <input
          type="email"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
          className={formClass}
          placeholder="ava@example.com"
          autoComplete="email"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={(event) => handleChange("password", event.target.value)}
            className={`${formClass} pr-11`}
            placeholder="Enter your password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
          />
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="absolute inset-y-0 right-3 my-auto text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </label>

      <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
          Remember me
        </label>

        <button type="button" className="font-medium text-sky-700 hover:text-sky-800">
          Forgot password?
        </button>
      </div>

      {error && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting
          ? mode === "login"
            ? "Signing in..."
            : "Creating account..."
          : mode === "login"
            ? "Continue to my profile"
            : "Create my account"}
      </button>

      <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm text-sky-900">
        Passwords are hashed in the backend before the session is created, and your roadmap stays saved locally on this browser for a personalized return visit.
      </div>
    </form>
  );
}
