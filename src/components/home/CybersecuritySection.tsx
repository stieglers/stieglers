import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";
import { SecurityLayers } from "@/components/visuals/SecurityLayers";

export function CybersecuritySection() {
  return (
    <section className="section bg-[linear-gradient(160deg,var(--navy)_0%,var(--navy-2)_45%,var(--royal)_120%)] text-white">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <div className="eyebrow text-white/90">Cybersecurity</div>
            <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-[-0.04em] text-white">
              Security is not an add-on.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              Security must be engineered into the systems that power your organization.
            </p>
          </div>
        </Reveal>
        <div className="mt-10">
          <Reveal>
            <div className="[&_button]:border-white/10 [&_button:hover]:border-white/25 [&_.bg-\[var\(--bg-elevated\)\]]:bg-white/5 [&_.bg-\[var\(--bg\)\]]:bg-white/5 [&_.text-\[var\(--heading\)\]]:text-white [&_.text-\[var\(--text-muted\)\]]:text-slate-300 [&_.eyebrow]:text-[var(--cyan)] [&_.border-\[var\(--border\)\]]:border-white/10">
              <SecurityLayers />
            </div>
          </Reveal>
        </div>
        <div className="mt-8">
          <Button href="/services/cybersecurity" variant="inverse" arrow>
            Explore cybersecurity
          </Button>
        </div>
      </div>
    </section>
  );
}