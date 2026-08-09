import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
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
    "bg-[var(--navy-2)] text-white hover:bg-[var(--royal)] shadow-[var(--shadow-sm)]",
  secondary:
    "bg-transparent text-[var(--heading)] border border-[var(--border-strong)] hover:border-[var(--navy-2)] hover:text-[var(--navy-2)]",
  ghost: "bg-transparent text-[var(--heading)] hover:bg-[var(--accent-soft)]",
  inverse:
    "bg-white text-[var(--navy)] hover:bg-[#e8eef8] shadow-[var(--shadow-sm)]",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-13 px-6 text-base min-h-12",
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
    "group inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-semibold tracking-[-0.01em] transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
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