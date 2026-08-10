"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { label: "Identity", angle: 225 },
  { label: "Apps", angle: 315 },
  { label: "Cloud", angle: 45 },
  { label: "Data", angle: 135 },
] as const;

function polar(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + radiusPct * Math.cos(rad)}%`,
    top: `${50 + radiusPct * Math.sin(rad)}%`,
  };
}

export function SecureByDesignVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#eef1f8] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,0,244,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,0,244,0.06) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 46%, rgba(90,70,255,0.42), rgba(10,0,244,0.12) 36%, transparent 64%)",
        }}
        aria-hidden
      />

      <div className="absolute inset-[11%] rounded-full border border-[rgba(110,120,220,0.28)]" />
      <div className="absolute inset-[23%] rounded-full border border-[rgba(110,120,220,0.2)]" />
      <div className="absolute inset-[35%] rounded-full border border-[rgba(110,120,220,0.14)]" />

      {!reduced ? (
        <>
          <motion.div
            className="absolute inset-[11%] rounded-full border border-dashed border-[rgba(10,0,244,0.5)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, ease: "linear", repeat: Infinity }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-[11%] rounded-full mix-blend-multiply"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(10,0,244,0) 16deg, rgba(10,0,244,0.26) 48deg, transparent 86deg)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8.5, ease: "linear", repeat: Infinity }}
            aria-hidden
          />
        </>
      ) : null}

      {/* Rotating constellation */}
      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={reduced ? undefined : { duration: 24, ease: "linear", repeat: Infinity }}
      >
        {NODES.map((node, index) => {
          const pos = polar(node.angle, 38);
          return (
            <div
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={pos}
            >
              <motion.span
                className="inline-flex whitespace-nowrap rounded-full border border-white/20 bg-[rgba(12,16,36,0.92)] px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_30px_rgba(15,23,42,0.35)] backdrop-blur-md"
                animate={
                  reduced
                    ? { opacity: 1, rotate: 0 }
                    : {
                        opacity: 1,
                        rotate: -360, // keep upright while parent spins
                        y: [0, -3, 0, 3, 0],
                      }
                }
                transition={{
                  rotate: reduced
                    ? undefined
                    : { duration: 24, ease: "linear", repeat: Infinity },
                  y: reduced
                    ? undefined
                    : {
                        duration: 3.2 + index * 0.35,
                        ease: "easeInOut",
                        repeat: Infinity,
                      },
                }}
              >
                {node.label}
              </motion.span>
            </div>
          );
        })}
      </motion.div>

      {/* Center hub */}
      <div className="absolute inset-0 z-10 grid place-items-center p-8">
        <motion.div
          className="relative w-[min(100%,17.5rem)] rounded-2xl border border-white/35 bg-[rgba(18,24,52,0.76)] px-6 py-5 text-center backdrop-blur-2xl"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: reduced
              ? "0 0 0 1px rgba(10,0,244,0.35), 0 24px 70px rgba(10,0,244,0.32)"
              : [
                  "0 0 0 1px rgba(10,0,244,0.28), 0 22px 60px rgba(10,0,244,0.26)",
                  "0 0 0 1px rgba(10,0,244,0.55), 0 30px 90px rgba(10,0,244,0.5)",
                  "0 0 0 1px rgba(10,0,244,0.28), 0 22px 60px rgba(10,0,244,0.26)",
                ],
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            boxShadow: reduced ? undefined : { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[rgba(10,0,244,0.3)] blur-3xl"
            aria-hidden
          />
          <p className="text-[0.72rem] font-bold tracking-[0.22em] text-[#6B63FF] uppercase">
            SYNTRAX
          </p>
          <p className="mt-2 font-[family-name:var(--font-heading)] text-[1.35rem] font-semibold tracking-[-0.03em] text-white md:text-[1.55rem]">
            Secure by design
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-x-5 bottom-4 z-20 flex items-center justify-between text-[10px] font-semibold tracking-[0.16em] uppercase">
        <span className="text-[rgba(70,80,120,0.7)]">Architecture</span>
        <motion.span
          className="text-[#0A00F4]"
          animate={reduced ? undefined : { opacity: [0.5, 1, 0.5] }}
          transition={reduced ? undefined : { duration: 2.2, repeat: Infinity }}
        >
          Live model
        </motion.span>
      </div>
    </div>
  );
}
