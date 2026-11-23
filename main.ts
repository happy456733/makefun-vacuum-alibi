// The Vacuum's Alibi — one line, 200 characters max.
//
// A robot vacuum's deadpan excuse for missing a spot. The line is a
// fixed string: the program is fully deterministic, makes zero network
// requests, and writes exactly the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2: revised — the vacuum does not miss the spot, it hires it.
// Stronger turn (interviewed / references / hired as a rug) and a
// tighter punch at the end ("It starts Monday").
const LINE =
  "I did not miss the spot. I interviewed it, checked its references, and hired it as a rug. It starts Monday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
