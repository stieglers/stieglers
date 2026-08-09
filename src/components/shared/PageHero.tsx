import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  actions,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: { label: string; href: string; variant?: "primary" | "secondary" | "inverse" }[];
  className?: string;
}) {
  return (
    <section className={cn("section-tight border-b border-[var(--border)]", className)}>
      <div className="container">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1
          className={cn(
            "mt-3 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] font-semibold tracking-[-0.04em]",
          )}
        >
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg text-[var(--text-muted)]">{lead}</p>
        ) : null}
        {actions?.length ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => (
              <Button
                key={action.href + action.label}
                href={action.href}
                variant={action.variant ?? "primary"}
                arrow
              >
                {action.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}