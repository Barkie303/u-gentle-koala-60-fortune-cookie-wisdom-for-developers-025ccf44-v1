import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One fortune-cookie line for a developer: the deploy you dread is the one
// that teaches you the most — and it always picks Friday at 2 a.m.
// Fortune cookies never warn you twice; the second warning is the pager.
const LINE =
  "The deploy you fear most will teach you the most, usually at 2 a.m. on a Friday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
