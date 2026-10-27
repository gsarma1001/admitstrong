import { NEWS_ITEMS } from "@/lib/news-feed";

function formatDate(value?: string) {
  if (!value) {
    return "Updated regularly";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Updated regularly";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function NewsFeed() {
  return (
    <section
      id="latest-updates"
      aria-label="Latest college admissions and education updates"
      className="border-t border-border bg-surface-muted/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-secondary">
              Latest updates
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#173452] sm:text-4xl">
              College Admissions &amp; Education Updates
            </h2>

            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Stay informed with important updates on college admissions,
              standardized testing, scholarships, and high school education—all
              in one place.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Admissions",
                "SAT/ACT",
                "AP Courses",
                "Scholarships",
                "Financial Aid",
                "High School",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#365d82]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {NEWS_ITEMS.map((article) => (
              <article
                key={`${article.source}-${article.title}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-[#edf5fb] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#365d82]">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {article.source}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-7 text-[#173452]">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {article.description}
                  </p>
                </div>

                <div className="mt-auto pt-5">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#173452] transition-colors hover:text-[#102b45]"
                  >
                    Read Article
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
