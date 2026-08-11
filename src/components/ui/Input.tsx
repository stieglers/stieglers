import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  children,
  hint,
  error,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  hint?: string;
  error?: string;
}) {
  return (
    <label className="block space-y-2" htmlFor={htmlFor}>
      <span className="text-sm font-semibold text-[var(--heading)]">{label}</span>
      {children}
      {hint ? <span className="block text-xs text-[var(--text-muted)]">{hint}</span> : null}
      {error ? (
        <span className="field-error mt-1 block text-xs font-medium" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function Input({
  className,
  invalid,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        "h-12 w-full rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--blue)]",
        invalid && "input-invalid",
        className,
      )}
      {...props}
    />
  );
}

export function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-3 text-[var(--text)] outline-none transition focus:border-[var(--blue)]",
        className,
      )}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-12 w-full rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 text-[var(--text)] outline-none transition focus:border-[var(--blue)]",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}