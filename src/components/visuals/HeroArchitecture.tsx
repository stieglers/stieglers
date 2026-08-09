"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  { id: "syntrax", label: "SYNTRAX", x: 50, y: 12 },
  { id: "security", label: "SECURITY", x: 18, y: 38 },
  { id: "systems", label: "SYSTEMS", x: 50, y: 38 },
  { id: "data", label: "DATA", x: 82, y: 38 },
  { id: "identity", label: "IDENTITY", x: 18, y: 62 },
  { id: "apps", label: "APPS", x: 50, y: 62 },
  { id: "analytics", label: "ANALYTICS", x: 82, y: 62 },
  { id: "network", label: "NETWORK", x: 18, y: 86 },
  { id: "api", label: "API", x: 50, y: 86 },
  { id: "cloud", label: "CLOUD", x: 82, y: 86 },
];

const links = [
  ["syntrax", "security"],
  ["syntrax", "systems"],
  ["syntrax", "data"],
  ["security", "identity"],
  ["systems", "apps"],
  ["data", "analytics"],
  ["identity", "network"],
  ["apps", "api"],
  ["analytics", "cloud"],
];

export function HeroArchitecture() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      setOffset({ x: x * 12, y: y * 10 });
    };
    node.addEventListener("mousemove", onMove);
    return () => node.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const point = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--border)] bg-[rgba(8,13,36,0.65)] sm:aspect-[5/4] lg:aspect-square"
    >
      <div className="absolute inset-0 tech-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(420px 280px at 50% 20%, rgba(10,0,244,0.28), transparent 65%)",
        }}
        aria-hidden
      />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: reduced ? undefined : "transform 0.25s ease-out",
        }}
        aria-hidden
      >
        {links.map(([from, to]) => {
          const a = point(from);
          const b = point(to);
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(10,0,244,0.75)"
              strokeWidth="0.35"
              strokeDasharray="1.2 1.2"
              style={{
                animation: reduced ? undefined : "flow 1.8s linear infinite",
              }}
            />
          );
        })}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.id === "syntrax" ? 2.2 : 1.35}
              fill={node.id === "syntrax" ? "#0A00F4" : "#0C122B"}
              stroke="#0A00F4"
              strokeWidth="0.35"
              style={{
                filter:
                  node.id === "syntrax"
                    ? "drop-shadow(0 0 6px rgba(10,0,244,0.8))"
                    : undefined,
              }}
            />
            <text
              x={node.x}
              y={node.y + (node.id === "syntrax" ? -4.2 : -2.8)}
              textAnchor="middle"
              fill="rgba(245,247,255,0.9)"
              fontSize="2.2"
              fontFamily="Manrope, sans-serif"
              fontWeight="600"
              letterSpacing="0.08em"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-[10px] tracking-[0.16em] text-[var(--muted)] uppercase">
        <span>Architecture map</span>
        <span className="text-[var(--brand)]">Live model</span>
      </div>
    </div>
  );
}