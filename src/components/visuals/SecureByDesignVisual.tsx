"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { label: "Identity", top: "11%", left: "14%" },
  { label: "Apps", top: "14%", left: "68%" },
  { label: "Data", top: "74%", left: "12%" },
  { label: "Cloud", top: "72%", left: "70%" },
];

export function SecureByDesignVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(420px 300px at 50% 42%, rgba(10,0,244,0.28), transparent 62%)",
        }}
        aria-hidden
      />

      <div className="absolute inset-[9%] rounded-full border border-[rgba(140,150,255,0.28)]" />
      <div className="absolute inset-[22%] rounded-full border border-[rgba(140,150,255,0.2)]" />
      <div className="absolute inset-[35%] rounded-full border border-[rgba(140,150,255,0.14)]" />

      {!reduced ? (
        <motion.div
          className="pointer-events-none absolute inset-[9%] rounded-full border border-[rgba(10,0,244,0.35)]"
          style={{
            borderStyle: "dashed",
            borderTopColor: "rgba(10,0,244,0.55)",
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
            borderLeftColor: "transparent",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          aria-hidden
        />
      ) : null}

      <div className="absolute inset-0 grid place-items-center p-6">
        <div className="relative z-10 w-[min(100%,17.5rem)] rounded-2xl border border-white/20 bg-[rgba(18,22,48,0.55)] px-6 py-5 text-center shadow-[0_0_0_1px_rgba(10,0,244,0.25),0_20px_60px_rgba(10,0,244,0.35)] backdrop-blur-xl">
          <div
            className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[rgba(10,0,244,0.35)] blur-3xl brand-pulse"
            aria-hidden
          />
          <p className="text-[0.7rem] font-bold tracking-[0.22em] text-[var(--brand-hover)] uppercase">
            SYNTRAX
          </p>
          <p className="mt-2 font-[family-name:var(--font-heading)] text-[1.35rem] font-semibold tracking-[-0.03em] text-white md:text-[1.5rem]">
            Secure by design
          </p>
        </div>
      </div>

      {nodes.map((node, index) => (
        <motion.span
          key={node.label}
          className="absolute z-20 rounded-full border border-white/15 bg-[rgba(12,16,36,0.88)] px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[-0.01em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
          style={{ top: node.top, left: node.left }}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 + index * 0.08, duration: 0.45 }}
        >
          {node.label}
        </motion.span>
      ))}

      <div className="absolute inset-x-5 bottom-4 flex items-center justify-between text-[10px] font-semibold tracking-[0.16em] text-white/40 uppercase">
        <span>Architecture</span>
        <span className="text-[var(--brand-hover)]">Live model</span>
      </div>
    </div>
  );
}
