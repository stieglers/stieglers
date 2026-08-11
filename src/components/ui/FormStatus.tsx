import { cn } from "@/lib/utils";

export function FormStatus({
  status,
  message,
  className,
}: {
  status: "idle" | "loading" | "success" | "error" | "warning";
  message?: string;
  className?: string;
}) {
  if (!message || status === "idle" || status === "loading") return null;

  const tone =
    status === "error" ? "error" : status === "warning" ? "warning" : "success";

  return (
    <p
      role={status === "error" ? "alert" : "status"}
      className={cn(`status-message status-message--${tone}`, className)}
    >
      {message}
    </p>
  );
}
