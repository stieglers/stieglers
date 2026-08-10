import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
      <Image
        src="/logo.svg"
        alt=""
        width={36}
        height={36}
        className="size-8 md:size-9"
        priority
      />
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
