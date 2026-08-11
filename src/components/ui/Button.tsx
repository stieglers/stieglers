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
    "bg-[var(--brand)] text-white shadow-[0_0_0_1px_rgba(10,0,244,0.5),0_12px_40px_rgba(10,0,244,0.35)] hover:bg-[var(--brand-hover)] hover:shadow-[0_0_0_1px_rgba(61,53,255,0.55),0_16px_44px_rgba(10,0,244,0.45)]",
  secondary:
    "border border-[var(--border-strong)] bg-transparent text-[var(--heading)] hover:border-[var(--brand)] hover:bg-[var(--brand-soft)] hover:text-white",
  outline:
    "border border-white/25 bg-transparent text-white hover:border-[var(--brand)] hover:text-white",
  ghost: "bg-transparent text-[var(--heading)] hover:bg-[var(--brand-soft)]",
  inverse:
    "bg-white text-[var(--bg-dark)] shadow-[0_10px_28px_rgba(0,0,0,0.2)] hover:bg-[#eef1ff]",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[0.95rem]",
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
