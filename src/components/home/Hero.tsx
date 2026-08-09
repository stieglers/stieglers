"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-[var(--header-h)]">
      <div className="absolute inset-0 tech-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 20% 15%, rgba(10,0,244,0.28), transparent 55%), radial-gradient(700px 420px at 90% 10%, rgba(10,0,244,0.16), transparent 50%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[rgba(10,0,244,0.22)] blur-3xl brand-pulse"
        aria-hidden
      />

      <div className="container relative grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:min-h-[calc(100svh-var(--header-h))] lg:py-20">
        <div>
          <motion.p
            className="eyebrow"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            East African technology partner
          </motion.p>
          <motion.h1
            className="display mt-5 max-w-[14ch] text-gradient"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Secure systems. Confident digital operations.
          </motion.h1>
          <motion.p
            className="lead"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            We help East African institutions design, build, and defend the technology that keeps
            their business moving — with clear delivery and accountable partnership.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <Button href="/services" size="lg" arrow>
              Explore services
            </Button>
            <Button href="/contact" size="lg" variant="secondary" arrow>
              Talk to our team
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          aria-hidden
        >
          <div className="glass relative aspect-square overflow-hidden rounded-[1.75rem] p-8 md:p-10">
            <div className="absolute inset-0 tech-grid opacity-50" />
            <div className="relative grid h-full place-items-center">
              <div className="absolute inset-[10%] rounded-full border border-[rgba(10,0,244,0.35)]" />
              <div className="absolute inset-[24%] rounded-full border border-[rgba(10,0,244,0.22)]" />
              <div className="absolute inset-[38%] rounded-full border border-[rgba(10,0,244,0.18)]" />
              <div className="z-10 rounded-2xl border border-[var(--brand)]/50 bg-[rgba(10,0,244,0.18)] px-6 py-5 text-center shadow-[0_0_40px_rgba(10,0,244,0.35)]">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--brand-hover)] uppercase">
                  Syntrax
                </p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
                  Secure by design
                </p>
              </div>
              {[
                { label: "Identity", top: "12%", left: "18%" },
                { label: "Apps", top: "18%", left: "72%" },
                { label: "Data", top: "68%", left: "16%" },
                { label: "Cloud", top: "72%", left: "70%" },
              ].map((node) => (
                <span
                  key={node.label}
                  className="absolute rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs font-semibold text-[var(--heading)]"
                  style={{ top: node.top, left: node.left }}
                >
                  {node.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="glow-line" aria-hidden />
    </section>
  );
}
