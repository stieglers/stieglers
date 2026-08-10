"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SecureByDesignVisual } from "@/components/visuals/SecureByDesignVisual";

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
        >
          <SecureByDesignVisual />
        </motion.div>
      </div>
      <div className="glow-line" aria-hidden />
    </section>
  );
}
