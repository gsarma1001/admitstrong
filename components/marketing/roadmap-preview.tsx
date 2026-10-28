"use client";

import { useEffect, useState } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { loadSession } from "@/lib/student-profile";

export function RoadmapPreview() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuthenticated(Boolean(loadSession()));
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="relative mx-auto w-full max-w-xl animate-pulse">
        <div className="relative rounded-[2rem] border border-border bg-surface p-4 shadow-floating">
          <div className="h-[420px] rounded-[1.5rem] bg-slate-100" />
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="relative mx-auto w-full max-w-xl">
        <div className="absolute -left-8 top-20 h-32 w-32 rounded-full bg-[#f6dfb3] opacity-50 blur-3xl" />
        <div className="absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-[#cfe7f6] opacity-70 blur-3xl" />
        <div className="relative rounded-[2rem] border border-border bg-surface p-4 shadow-floating">
          <div className="rounded-[1.5rem] bg-surface-soft p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#dcebf5] text-sm font-semibold text-[#315b7f]">
                A
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  My Roadmap
                </p>
                <p className="text-sm font-medium text-slate-700">
                  Sign in to personalize your plan
                </p>
              </div>
            </div>
            <LoginForm compact />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-8 top-20 h-32 w-32 rounded-full bg-[#f6dfb3] opacity-50 blur-3xl" />
      <div className="absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-[#cfe7f6] opacity-70 blur-3xl" />

      <div className="relative rounded-[2rem] border border-border bg-surface p-4 shadow-floating">
        <div className="rounded-[1.5rem] bg-surface-soft p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                My Roadmap
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-primary">
                Welcome back
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Your plan is ready to keep moving.
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dcebf5] font-semibold text-[#315b7f]">
              {loadSession()?.name?.charAt(0)?.toUpperCase() ?? "S"}
            </div>
          </div>

          <NextStepCard />
          <WeeklyPrioritiesCard />
          <RoadmapSummaryCards />
        </div>
      </div>

      <MilestoneNotification />
    </div>
  );
}

function NextStepCard() {
  return (
    <article className="mt-6 rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Your next best step
          </p>

          <h3 className="mt-2 text-lg font-semibold text-[#243f5c]">
            Explore courses for next year
          </h3>
        </div>

        <span className="w-fit rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
          Recommended
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Review three courses that align with your interest in engineering and
        strengthen your academic pathway.
      </p>

      <a
        href="#how-it-works"
        className="mt-5 inline-flex text-sm font-semibold text-secondary hover:text-primary"
      >
        View recommendation
        <span className="ml-1" aria-hidden="true">
          →
        </span>
      </a>
    </article>
  );
}

function WeeklyPrioritiesCard() {
  const priorities = [
    {
      number: "1",
      title: "Complete your course interests",
      estimate: "About 8 minutes",
      highlight: false,
    },
    {
      number: "2",
      title: "Add your two newest activities",
      estimate: "About 10 minutes",
      highlight: false,
    },
    {
      number: "3",
      title: "Explore three engineering pathways",
      estimate: "About 15 minutes",
      highlight: true,
    },
  ];

  return (
    <section className="mt-4 rounded-2xl border border-border bg-surface p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[#304b67]">
            This week&apos;s priorities
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Three manageable steps selected for you
          </p>
        </div>

        <span className="w-fit rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
          On track
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {priorities.map((priority) => (
          <div
            key={priority.number}
            className="flex items-center gap-3 rounded-xl bg-surface-soft p-3"
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                priority.highlight
                  ? "bg-accent-soft text-warning"
                  : "bg-[#dcebf5] text-[#315b7f]"
              }`}
            >
              {priority.number}
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#304b67]">
                {priority.title}
              </p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                {priority.estimate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RoadmapSummaryCards() {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      <article className="rounded-2xl border border-border bg-surface p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-[#304b67]">
            Profile foundation
          </h3>

          <span className="text-sm font-semibold text-success">Developing</span>
        </div>

        <div className="mt-4 h-2 rounded-full bg-[#e8eef3]">
          <div
            className="h-2 w-[72%] rounded-full bg-success"
            aria-hidden="true"
          />
        </div>

        <p className="mt-3 text-xs leading-5 text-muted-foreground">
          Add your recent activities to strengthen your recommendations.
        </p>
      </article>

      <article className="rounded-2xl border border-border bg-surface p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Upcoming milestone
        </p>

        <h3 className="mt-3 text-sm font-semibold text-[#304b67]">
          Course selection review
        </h3>

        <p className="mt-2 text-xs leading-5 text-muted-foreground">
          Review your planned courses with your family before February 12.
        </p>

        <a
          href="#how-it-works"
          className="mt-3 inline-flex text-xs font-semibold text-secondary hover:text-primary"
        >
          View milestone
          <span className="ml-1" aria-hidden="true">
            →
          </span>
        </a>
      </article>
    </div>
  );
}

function MilestoneNotification() {
  return (
    <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:block">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-warning">
          <span aria-hidden="true">★</span>
        </span>

        <div>
          <p className="text-xs text-muted-foreground">New milestone</p>
          <p className="text-sm font-semibold text-[#304b67]">
            Academic goal completed
          </p>
        </div>
      </div>
    </div>
  );
}