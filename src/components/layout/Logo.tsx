import Link from "next/link";
import { cn } from "@/lib/utils";

/** Brand mark matching the company geometric logo (blue + black outline). */
export function SyntraxMark({ className, size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g fill="#0A00F4" stroke="#0B0B0B" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M5 9 H33 L46 28 L33 47 H5 L21 28 Z" />
        <path d="M5 53 H33 L46 72 L33 91 H5 L21 72 Z" />
        <path d="M70 5 L95 50 L70 95 L48 50 Z" />
      </g>
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
  wordmark = true,
}: {
  className?: string;
  compact?: boolean;
  wordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Syntrax Technologies home"
    >
      <SyntraxMark size={34} className="shrink-0" />
      {wordmark ? (
        <span className="leading-none">
          <span className="block font-[family-name:var(--font-heading)] text-[0.95rem] font-bold tracking-[0.14em] text-[var(--heading)]">
            SYNTRAX<span className="text-[var(--brand)]">.</span>
          </span>
          {!compact ? (
            <span className="mt-1 block text-[9px] font-medium tracking-[0.2em] text-[var(--text-muted)]">
              TECHNOLOGIES
            </span>
          ) : null}
        </span>
      ) : null}
    </Link>
  );
}
