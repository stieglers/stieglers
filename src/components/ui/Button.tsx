import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  external?: boolean;
  "aria-label"?: string;
};

const variants = {
  primary:
    "bg-[var(--brand)] text-white shadow-[0_10px_28px_rgba(10,0,244,0.22)] hover:bg-[var(--brand-hover)] hover:shadow-[0_14px_32px_rgba(10,0,244,0.28)]",
  secondary:
    "border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--heading)] hover:border-[var(--brand)]/35 hover:bg-[var(--bg-muted)]",
  ghost: "bg-transparent text-[var(--heading)] hover:bg-[var(--brand-soft)]",
  outline:
    "border border-[var(--border-strong)] bg-transparent text-[var(--heading)] hover:border-[var(--brand)]/40 hover:text-[var(--brand)]",
  inverse:
    "bg-white text-[var(--bg-dark)] shadow-[0_10px_28px_rgba(0,0,0,0.16)] hover:bg-[var(--bg-muted)]",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  type = "button",
  disabled,
  onClick,
  external,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.01em] transition duration-200 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      ) : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
