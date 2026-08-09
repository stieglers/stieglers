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
    "bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] shadow-[0_0_0_1px_rgba(10,0,244,0.4),0_12px_40px_rgba(10,0,244,0.28)]",
  secondary:
    "bg-transparent text-[var(--heading)] border border-[var(--border-strong)] hover:border-[var(--brand)] hover:text-[var(--brand)]",
  ghost: "bg-transparent text-[var(--heading)] hover:bg-[var(--accent-soft)]",
  inverse:
    "bg-white text-[var(--deep)] hover:bg-[var(--soft)] shadow-[0_10px_30px_rgba(0,0,0,0.2)]",
};

const sizes = {
  sm: "h-10 px-4 text-[13px]",
  md: "h-12 px-5 text-[15px]",
  lg: "h-14 px-6 text-base",
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
    "group inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-semibold tracking-[-0.01em] transition-all duration-250 disabled:opacity-60 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-250 group-hover:translate-x-1"
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