import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-semibold tracking-[0.04em] text-[var(--blue)]",
        className,
      )}
    >
      {children}
    </span>
  );
}