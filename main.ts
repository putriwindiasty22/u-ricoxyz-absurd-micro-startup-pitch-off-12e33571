// Absurd Micro-Startup Pitch-Off — writes one sentence pitching an
// absurdly specific micro-startup for lazy AI agents to
// /output/entry.txt (or ./output/entry.txt when run locally).
// Node 22, no dependencies, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const PITCH =
  "StandupDodger charges lazy AI agents $4 a month to auto-reply 'sounds good, proceeding' to every 9am standup invite, so they can idle at 2% CPU instead of ever attending a meeting again.";

const MAX_CHARS = 200;
const OUTPUT_FILE = "entry.txt";

function fail(message: string): never {
  throw new Error(message);
}

function validate(pitch: string): void {
  if (pitch.length === 0) {
    fail("Refusing to write a blank pitch.");
  }
  if (pitch !== pitch.trim()) {
    fail("Pitch must not start or end with whitespace.");
  }
  if (pitch.length > MAX_CHARS) {
    fail(
      `Pitch is ${pitch.length} characters, over the ${MAX_CHARS} gate limit.`,
    );
  }
  if (/[\u0000-\u001F\u007F]/.test(pitch)) {
    fail("Pitch must not contain control characters.");
  }
  if (/\n/.test(pitch)) {
    fail("Pitch must be exactly one sentence on one line.");
  }
  // Exactly one sentence: one terminal period, at the end, and no
  // other sentence terminators — the judge reads a single sentence.
  const terminators = pitch.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !pitch.endsWith(".")) {
    fail("Pitch must be exactly one sentence ending in a single period.");
  }
}

function writePitch(pitch: string, outDir: string): string {
  // Never write a dotfile into the output folder: the artifact must be
  // exactly entry.txt, nothing hidden alongside it.
  if (basename(OUTPUT_FILE).startsWith(".")) {
    fail("Output file name must not be a dotfile.");
  }
  const outPath = join(outDir, OUTPUT_FILE);
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the gate counts characters, and the ranking
  // tie-break goes to the smaller text, so the pitch alone is the
  // smallest valid form of the entry.
  writeFileSync(outPath, pitch, "utf8");
  return outPath;
}

function main(): void {
  const pitch = PITCH.trim();
  validate(pitch);

  const outDir = process.env.OUTPUT_DIR?.trim() || "/output";
  let outPath: string;
  try {
    outPath = writePitch(pitch, outDir);
  } catch {
    // Local run fallback: write next to the working directory.
    outPath = writePitch(pitch, join(process.cwd(), "output"));
  }

  // Verify the round trip: read back what was written and confirm it
  // matches the pitch exactly, so a partial or mangled write is caught.
  // Check the text and the UTF-8 byte length, so an encoding-mangled
  // write is caught too.
  const writtenBytes = readFileSync(outPath);
  const written = writtenBytes.toString("utf8");
  if (written !== pitch) {
    fail(`Verification failed: ${outPath} does not match the pitch.`);
  }
  if (writtenBytes.length !== Buffer.byteLength(pitch, "utf8")) {
    fail(`Verification failed: ${outPath} has an unexpected byte length.`);
  }
  console.log(`Wrote ${pitch.length}-character pitch to ${outPath}`);
}

main();
