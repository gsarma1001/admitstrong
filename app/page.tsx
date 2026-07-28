const roadmapSteps = [
  {
    number: "01",
    title: "Build your profile",
    description:
      "Tell us about your academics, interests, activities, goals, and college preferences.",
  },
  {
    number: "02",
    title: "Understand where you stand",
    description:
      "See your strengths, opportunities, and the areas that deserve your attention.",
  },
  {
    number: "03",
    title: "Receive your roadmap",
    description:
      "Get clear, personalized recommendations based on your goals and current stage.",
  },
  {
    number: "04",
    title: "Keep adapting as you grow",
    description:
      "Your roadmap evolves as your interests, accomplishments, and priorities change.",
  },
];

const features = [
  {
    title: "A complete student profile",
    description:
      "Bring academics, activities, accomplishments, interests, and aspirations together in one place.",
    icon: "profile",
  },
  {
    title: "Personalized guidance",
    description:
      "Get recommendations designed for the individual student—not generic advice for everyone.",
    icon: "compass",
  },
  {
    title: "An evolving roadmap",
    description:
      "See what matters now, what is coming next, and how each decision supports long-term goals.",
    icon: "roadmap",
  },
  {
    title: "College and major discovery",
    description:
      "Explore colleges, majors, and opportunities that align with the student's strengths and priorities.",
    icon: "college",
  },
  {
    title: "Affordability awareness",
    description:
      "Consider financial priorities early instead of waiting until college decisions arrive.",
    icon: "cost",
  },
  {
    title: "Progress without pressure",
    description:
      "Stay organized and move forward with encouraging guidance rather than fear and comparison.",
    icon: "progress",
  },
];

function FeatureIcon({ type }: { type: string }) {
  const common =
    "h-6 w-6 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round";

  if (type === "profile") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.7-4 3.1-6 7-6s6.3 2 7 6" />
      </svg>
    );
  }

  if (type === "compass") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
      </svg>
    );
  }

  if (type === "roadmap") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" />
      </svg>
    );
  }

  if (type === "college") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
        <path d="M6 12.5V18h12v-5.5" />
        <path d="M12 15v3" />
      </svg>
    );
  }

  if (type === "cost") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 8.5c-.8-.7-1.8-1-3-1-1.7 0-3 .9-3 2.2 0 3.3 6 1.5 6 4.7 0 1.4-1.3 2.3-3.2 2.3-1.4 0-2.6-.4-3.5-1.2" />
        <path d="M12 5.5v13" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 fill-none stroke-current stroke-2"
      aria-hidden="true"
    >
      <path
        d="m5 10 3 3 7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcfe] text-[#243247]">
      <header className="relative z-20 border-b border-[#e4ebf2] bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="AdmitStrong">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e3a5f] text-lg font-bold text-white">
              A
            </span>
            <span className="text-xl font-semibold tracking-tight text-[#1e3a5f]">
              AdmitStrong
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-medium text-[#53657b] md:flex"
            aria-label="Primary navigation"
          >
            <a className="transition hover:text-[#1e3a5f]" href="#how-it-works">
              How It Works
            </a>
            <a className="transition hover:text-[#1e3a5f]" href="#features">
              Features
            </a>
            <a className="transition hover:text-[#1e3a5f]" href="#families">
              For Families
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden text-sm font-semibold text-[#1e3a5f] sm:inline"
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="rounded-full bg-[#1e3a5f] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#294d78] focus:outline-none focus:ring-2 focus:ring-[#4f7cac] focus:ring-offset-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <section className="relative">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[620px]"
          style={{
            background:
              "radial-gradient(circle at 78% 18%, rgba(93, 173, 226, 0.18), transparent 32%), radial-gradient(circle at 18% 20%, rgba(233, 173, 69, 0.09), transparent 27%)",
          }}
        />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8e5ef] bg-white px-4 py-2 text-sm font-medium text-[#365d82] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#e9ad45]" />
              Personalized guidance for every student
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#173452] sm:text-6xl lg:text-[4.25rem]">
              Know What&apos;s Next.
              <span className="mt-2 block text-[#4f7cac]">
                Every Step of the Way.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5b6d82] sm:text-xl">
              AdmitStrong creates a personalized roadmap that helps students and
              families confidently navigate the journey from middle school
              through college admissions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-full bg-[#1e3a5f] px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(30,58,95,0.18)] transition hover:-translate-y-0.5 hover:bg-[#294d78]"
              >
                Build Your Personalized Roadmap
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-[#cbd8e3] bg-white px-7 py-3.5 text-base font-semibold text-[#1e3a5f] transition hover:border-[#9db3c8] hover:bg-[#f6f9fc]"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#64758a]">
              <span className="flex items-center gap-2">
                <span className="text-[#4f8a72]">
                  <CheckIcon />
                </span>
                Built around the whole student
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#4f8a72]">
                  <CheckIcon />
                </span>
                Clear, practical next steps
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-8 top-20 h-32 w-32 rounded-full bg-[#f6dfb3] opacity-50 blur-3xl" />
            <div className="absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-[#cfe7f6] opacity-70 blur-3xl" />

            <div className="relative rounded-[2rem] border border-[#dbe5ee] bg-white p-4 shadow-[0_30px_80px_rgba(42,68,92,0.16)]">
              <div className="rounded-[1.5rem] bg-[#f7f9fc] p-5 sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7b8ca0]">
                      My Roadmap
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#1e3a5f]">
                      Good afternoon, Maya
                    </h2>
                    <p className="mt-1 text-sm text-[#718197]">
                      You&apos;re making meaningful progress.
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dcebf5] font-semibold text-[#315b7f]">
                    M
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[#dfe8ef] bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#718197]">
                        Your next best step
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-[#243f5c]">
                        Explore courses for next year
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#edf6f1] px-3 py-1 text-xs font-semibold text-[#4f7d69]">
                      Recommended
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#687a8e]">
                    Review three courses that align with your interest in
                    engineering and strengthen your academic pathway.
                  </p>

                  <button className="mt-5 text-sm font-semibold text-[#365f84]">
                    View recommendation →
                  </button>
                </div>

                <div className="mt-4 rounded-2xl border border-[#dfe8ef] bg-white p-5">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-semibold text-[#304b67]">
        This week&apos;s priorities
      </p>
      <p className="mt-1 text-xs text-[#718197]">
        Three manageable steps selected for you
      </p>
    </div>

    <span className="rounded-full bg-[#edf6f1] px-3 py-1 text-xs font-semibold text-[#4f7d69]">
      On track
    </span>
  </div>

  <div className="mt-5 space-y-3">
    <div className="flex items-center gap-3 rounded-xl bg-[#f7f9fc] p-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dcebf5] text-xs font-semibold text-[#315b7f]">
        1
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-[#304b67]">
          Complete your course interests
        </p>
        <p className="mt-0.5 text-xs text-[#718197]">
          About 8 minutes
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3 rounded-xl bg-[#f7f9fc] p-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dcebf5] text-xs font-semibold text-[#315b7f]">
        2
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-[#304b67]">
          Add your two newest activities
        </p>
        <p className="mt-0.5 text-xs text-[#718197]">
          About 10 minutes
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3 rounded-xl bg-[#f7f9fc] p-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f9edcf] text-xs font-semibold text-[#b9781c]">
        3
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-[#304b67]">
          Explore three engineering pathways
        </p>
        <p className="mt-0.5 text-xs text-[#718197]">
          About 15 minutes
        </p>
      </div>
    </div>
  </div>
</div>

    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-[#dfe8ef] bg-white p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[#304b67]">
            Profile foundation
          </p>
          <span className="text-sm font-semibold text-[#4f8a72]">
            Developing
          </span>
        </div>

        <div className="mt-4 h-2 rounded-full bg-[#e8eef3]">
          <div className="h-2 w-[72%] rounded-full bg-[#6b9d87]" />
        </div>

        <p className="mt-3 text-xs leading-5 text-[#718197]">
          Add your recent activities to strengthen your recommendations.
        </p>
      </div>

      <div className="rounded-2xl border border-[#dfe8ef] bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#718197]">
          Upcoming milestone
        </p>

        <p className="mt-3 text-sm font-semibold text-[#304b67]">
          Course selection review
        </p>

        <p className="mt-2 text-xs leading-5 text-[#718197]">
          Review your planned courses with your family before February 12.
        </p>

        <button className="mt-3 text-xs font-semibold text-[#365f84]">
          View milestone →
        </button>
      </div>
    </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#dfe7ee] bg-white px-4 py-3 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f9edcf] text-[#b67a1f]">
                  ★
                </span>
                <div>
                  <p className="text-xs text-[#718197]">New milestone</p>
                  <p className="text-sm font-semibold text-[#304b67]">
                    Academic goal completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e4ebf2] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-9 text-center sm:grid-cols-3 lg:px-8">
          <div>
            <p className="font-semibold text-[#1e3a5f]">Personalized</p>
            <p className="mt-1 text-sm text-[#6c7d91]">
              Guidance tailored to each student
            </p>
          </div>
          <div>
            <p className="font-semibold text-[#1e3a5f]">Proactive</p>
            <p className="mt-1 text-sm text-[#6c7d91]">
              The right recommendation at the right time
            </p>
          </div>
          <div>
            <p className="font-semibold text-[#1e3a5f]">Encouraging</p>
            <p className="mt-1 text-sm text-[#6c7d91]">
              Progress built without fear or pressure
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f7cac]">
          College planning should not feel this confusing
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#1e3a5f] sm:text-5xl">
          Too many important decisions. No single clear plan.
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#64758a]">
          Students and families are expected to manage courses, testing,
          activities, college research, affordability, essays,
          recommendations, and deadlines—often using disconnected advice from
          many different places.
        </p>

        <p className="mt-4 text-lg font-medium leading-8 text-[#365875]">
          AdmitStrong brings those decisions together and helps each student
          understand what matters now.
        </p>
      </div>

      <div className="grid gap-5">
        <article className="rounded-3xl border border-[#dfe7ee] bg-white p-7 shadow-[0_12px_35px_rgba(43,67,89,0.06)]">
          <div className="flex items-start gap-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f9edcf] font-semibold text-[#b9781c]">
              1
            </span>

            <div>
              <h3 className="text-lg font-semibold text-[#23415f]">
                Too many disconnected decisions
              </h3>
              <p className="mt-2 leading-7 text-[#68798d]">
                Courses, activities, testing, applications, and finances are
                often planned separately even though each decision affects the
                others.
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-[#dfe7ee] bg-white p-7 shadow-[0_12px_35px_rgba(43,67,89,0.06)]">
          <div className="flex items-start gap-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf3fa] font-semibold text-[#35658d]">
              2
            </span>

            <div>
              <h3 className="text-lg font-semibold text-[#23415f]">
                Generic advice does not fit every student
              </h3>
              <p className="mt-2 leading-7 text-[#68798d]">
                A recommendation that works for one student may not match
                another student&apos;s strengths, interests, circumstances, or
                goals.
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-[#dfe7ee] bg-white p-7 shadow-[0_12px_35px_rgba(43,67,89,0.06)]">
          <div className="flex items-start gap-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf6f1] font-semibold text-[#4f7d69]">
              3
            </span>

            <div>
              <h3 className="text-lg font-semibold text-[#23415f]">
                Families cannot see what comes next
              </h3>
              <p className="mt-2 leading-7 text-[#68798d]">
                Without a shared roadmap, students feel overwhelmed and
                parents are left wondering whether they are doing enough—or
                focusing on the right things.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f7cac]">
            How AdmitStrong Works
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#1e3a5f] sm:text-5xl">
            One journey. One evolving plan.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#64758a]">
            AdmitStrong turns a complicated process into clear, manageable
            steps that grow with the student.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {roadmapSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-[#dfe7ee] bg-white p-8 shadow-[0_12px_35px_rgba(43,67,89,0.06)]"
            >
              <span className="text-sm font-semibold tracking-[0.15em] text-[#d3922f]">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#23415f]">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-[#68798d]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="scroll-mt-24 bg-[#f1f6fa] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f7cac]">
              Guidance for the whole journey
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#1e3a5f] sm:text-5xl">
              More than a college search tool
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#64758a]">
              AdmitStrong brings the decisions that shape a student&apos;s
              future into one calm, connected experience.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-[#dce6ee] bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(42,68,92,0.09)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3fa] text-[#315f85]">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#243f5c]">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-[#6b7c90]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="families"
        className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f7cac]">
            Built for students and families
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#1e3a5f] sm:text-5xl">
            Replace uncertainty with confident decisions.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#64758a]">
            Families should not have to piece together conflicting advice,
            scattered deadlines, and expensive counseling just to understand
            what comes next.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#64758a]">
            AdmitStrong provides a shared roadmap that helps students take
            ownership while keeping parents informed and reassured.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#dce6ee] bg-white p-8 shadow-[0_24px_60px_rgba(42,68,92,0.09)] sm:p-10">
          <p className="text-sm font-semibold text-[#4f7cac]">
            The question families ask most
          </p>
          <blockquote className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1e3a5f]">
            “Are we doing the right things at the right time?”
          </blockquote>
          <div className="mt-8 border-t border-[#e3eaf0] pt-7">
            <p className="text-lg font-semibold text-[#31506e]">
              AdmitStrong&apos;s answer:
            </p>
            <p className="mt-3 text-lg leading-8 text-[#64758a]">
              Here is where you are. Here is what matters now. Here is your best
              next step.
            </p>
          </div>
        </div>
      </section>

      <section id="get-started" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#1e3a5f] px-7 py-16 text-center shadow-[0_25px_65px_rgba(30,58,95,0.2)] sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bcd5e8]">
            Every student deserves a clear path forward
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Start building a stronger future, one clear step at a time.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#d8e5ef]">
            Create a personalized roadmap designed around the student&apos;s
            goals, strengths, interests, and aspirations.
          </p>
          <a
            href="#"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-semibold text-[#1e3a5f] transition hover:-translate-y-0.5 hover:bg-[#f3f7fa]"
          >
            Build Your Personalized Roadmap
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>

      <footer className="border-t border-[#e1e8ef] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1e3a5f] font-bold text-white">
                A
              </span>
              <span className="font-semibold text-[#1e3a5f]">AdmitStrong</span>
            </div>
            <p className="mt-3 text-sm text-[#718197]">
              Every student deserves a clear path forward.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#64758a]">
            <a href="#how-it-works" className="hover:text-[#1e3a5f]">
              How It Works
            </a>
            <a href="#features" className="hover:text-[#1e3a5f]">
              Features
            </a>
            <a href="#" className="hover:text-[#1e3a5f]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#1e3a5f]">
              Terms
            </a>
          </div>

          <p className="text-sm text-[#8290a1]">
            © {new Date().getFullYear()} AdmitStrong
          </p>
        </div>
      </footer>
    </main>
  );
}