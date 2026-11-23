// The Vacuum's Alibi — one line, 200 characters max.
//
// A robot vacuum's deadpan excuse for missing a spot. The line is a
// fixed string: the program is fully deterministic, makes zero network
// requests, and writes exactly the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v1: the vacuum treats the missed spot as a structural feature.
const LINE =
  "I scanned the spot three times, classified it as load-bearing dust, and left it there. The house needs it more than you do.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
