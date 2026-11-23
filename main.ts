// One-Line Roast: The Gadget You Use Every Day.
// Writes a single original roast line to /output/entry.txt.
// Deterministic: the same line every run, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.ENTRY_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

const ROAST =
  "My smartwatch congratulates me on 10,000 steps every time I drive to the shops, then judges my resting heart rate like a disappointed GP.";

// Guard the gate before writing: one line, 1-200 characters, no newline.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error(`Roast line fails the gate: ${ROAST.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ROAST, "utf8");
