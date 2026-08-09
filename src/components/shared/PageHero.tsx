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
    <section
      className={cn(
        "relative overflow-hidden border-b border-[var(--border)] pt-[calc(var(--header-h)+2.5rem)] pb-14",
        className,
      )}
    >
      <div className="absolute inset-0 tech-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(720px 280px at 8% 0%, rgba(10,0,244,0.28), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container relative">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        {eyebrow ? <div className="eyebrow mt-4">{eyebrow}</div> : null}
        <h1 className="mt-4 max-w-4xl text-[clamp(2.3rem,5vw,4.25rem)] font-bold tracking-[-0.045em]">
          {title}
        </h1>
        {lead ? <p className="lead">{lead}</p> : null}
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
