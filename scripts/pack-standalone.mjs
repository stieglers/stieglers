import { cpSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next/standalone");
const out = join(root, "dist-standalone");

if (!existsSync(standalone)) {
  console.error("Missing .next/standalone. Run next build with output: 'standalone' first.");
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(standalone, out, { recursive: true });
cpSync(join(root, "public"), join(out, "public"), { recursive: true });
mkdirSync(join(out, ".next"), { recursive: true });
cpSync(join(root, ".next/static"), join(out, ".next/static"), { recursive: true });

console.log("Standalone package ready at dist-standalone/");
