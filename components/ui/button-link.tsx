import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "inverse";
type ButtonLinkSize = "default" | "large";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none";

const variantStyles: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary-hover",
  secondary:
    "border border-border-strong bg-surface text-primary hover:border-secondary hover:bg-surface-soft",
  inverse:
    "bg-primary-foreground text-primary hover:-translate-y-0.5 hover:bg-surface-soft",
};

const sizeStyles: Record<ButtonLinkSize, string> = {
  default: "px-5 py-2.5 text-sm",
  large: "px-7 py-3.5 text-base",
};

export function ButtonLink({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}