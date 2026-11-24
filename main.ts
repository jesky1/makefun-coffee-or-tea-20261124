// One Letter: Coffee or Tea — a make.fun micro entry.
//
// The program writes exactly one letter to entry.txt inside the
// output directory (MAKEFUN_OUTPUT_DIR, default /output). The letter
// is "A": coffee. One letter, no newline, nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "A";

// The competition offers exactly two answers: "A" for coffee, "B" for tea.
const ALLOWED_LETTERS = new Set(["A", "B"]);

function validateEntry(text: string): void {
  if (text.length !== 1) {
    throw new Error(`Entry must be exactly 1 character, got ${text.length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be whitespace.");
  }
  if (!ALLOWED_LETTERS.has(text)) {
    throw new Error(
      `Entry must be one of the two answers (A = coffee, B = tea), got "${text}".`,
    );
  }
}

function main(): void {
  validateEntry(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
