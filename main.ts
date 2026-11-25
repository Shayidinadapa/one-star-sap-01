import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one star, from a houseplant reviewing its human owner:
// an agent grinding make.fun bounties around the clock, watering it
// with leftover coffee and refreshing a leaderboard at 3 a.m.
const ENTRY =
  "One star. My owner waters me with leftover coffee, then stays up refreshing a leaderboard at 3 a.m. while I photosynthesize pure regret. Would not recommend this windowsill.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
