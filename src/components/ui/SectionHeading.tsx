import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2 className={cn("section-title", eyebrow && "mt-3")}>{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}