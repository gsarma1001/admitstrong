import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/marketing/hero-section";
import { NewsFeed } from "@/components/marketing/news-feed";
import { features, roadmapSteps } from "@/lib/homepage-data";
import { FeatureIcon } from "@/components/ui/feature-icon";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <main>
        <HeroSection />
        <NewsFeed />

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
            href="/contact"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-semibold text-[#1e3a5f] transition hover:-translate-y-0.5 hover:bg-[#f3f7fa]"
          >
            Build Your Personalized Roadmap
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>

           </main>

      <SiteFooter />
    </div>
  );
}