import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="Syntrax Technologies home"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={36}
        height={36}
        className="size-9"
        priority
      />
      <span className="leading-none">
        <span className="block text-sm font-bold tracking-[0.2em] text-[var(--heading)]">
          SYNTRAX
        </span>
        {!compact ? (
          <span className="mt-1 block text-[10px] font-medium tracking-[0.18em] text-[var(--text-muted)]">
            TECHNOLOGIES
          </span>
        ) : null}
      </span>
    </Link>
  );
}