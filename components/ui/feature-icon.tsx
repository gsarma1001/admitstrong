export type FeatureIconType =
  | "profile"
  | "compass"
  | "roadmap"
  | "college"
  | "cost"
  | "progress";

type FeatureIconProps = {
  type: FeatureIconType;
};

export function FeatureIcon({ type }: FeatureIconProps) {
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
