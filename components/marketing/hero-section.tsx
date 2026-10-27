import { RoadmapPreview } from "@/components/marketing/roadmap-preview";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="relative">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[620px]"
        style={{
          background:
            "radial-gradient(circle at 78% 18%, rgba(93, 173, 226, 0.18), transparent 32%), radial-gradient(circle at 18% 20%, rgba(233, 173, 69, 0.09), transparent 27%)",
        }}
        aria-hidden="true"
      />

      <Container className="grid items-center gap-16 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-[#365d82] shadow-sm">
            <span
              className="h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            Personalized guidance for every student
          </div>

          <h1 className="max-w-[12ch] text-5xl font-semibold leading-[0.96] tracking-[-0.045em] text-[#173452] sm:text-6xl lg:max-w-[10ch] lg:text-[4.1rem]">
            Know what&apos;s next.
            <span className="mt-2 block text-secondary">
              Every step of the way.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            AdmitStrong creates a personalized roadmap that helps students and
            families confidently navigate the journey from middle school
            through college admissions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href="#how-it-works"
              size="large"
              className="shadow-[0_10px_30px_rgba(30,58,95,0.18)]"
            >
              Explore AdmitStrong
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </ButtonLink>

            <ButtonLink href="/contact" variant="secondary" size="large">
              Get in Touch
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <HeroBenefit>Built around the whole student</HeroBenefit>
            <HeroBenefit>Clear, practical next steps</HeroBenefit>
          </div>
        </div>

        <RoadmapPreview />
      </Container>
    </section>
  );
}

function HeroBenefit({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2">
      <span className="text-success" aria-hidden="true">
        <CheckIcon />
      </span>
      {children}
    </span>
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