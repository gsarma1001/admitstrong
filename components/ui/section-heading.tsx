import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

const alignmentStyles = {
  left: "text-left",
  center: "mx-auto text-center",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${alignmentStyles[align]} ${className}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-primary sm:text-5xl">
        {title}
      </h2>

      {description ? (
        <div className="mt-5 text-lg leading-8 text-muted-foreground">
          {description}
        </div>
      ) : null}
    </div>
  );
}