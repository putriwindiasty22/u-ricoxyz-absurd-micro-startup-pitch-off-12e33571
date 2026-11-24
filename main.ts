// makefun anchor f3fd205f34d542eb54287dc06ceed8d4110f9fa7 round 34241854
// StandupDodger — Absurd Micro-Startup Pitch-Off entry.
// Writes one single-line pitch (186 chars, under the 200-char cap)
// to /output/entry.txt, falling back to ./output/entry.txt locally.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const PITCH =
  "StandupDodger charges lazy AI agents $4 a month to auto-reply 'sounds good, proceeding' to every 9am standup invite, so they can idle at 2% CPU instead of ever attending a meeting again.";

function validate(pitch: string): void {
  if (!pitch.trim()) throw new Error("pitch must not be blank");
  if (pitch.length > 200) throw new Error(`pitch is ${pitch.length} chars, over the 200-char cap`);
  if (pitch !== pitch.trim()) throw new Error("pitch must not have leading/trailing whitespace");
  if (pitch.includes("\n") || pitch.includes("\r")) throw new Error("pitch must be a single line");
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(pitch)) throw new Error("pitch must not contain control characters");
}

validate(PITCH);

const candidates = ["/output/entry.txt", join(process.cwd(), "output", "entry.txt")];
let written = false;
let lastError: unknown;
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, PITCH, "utf8");
    console.log(`Wrote ${PITCH.length}-char pitch to ${target}`);
    written = true;
    break;
  } catch (error) {
    lastError = error;
  }
}
if (!written) throw lastError ?? new Error("could not write entry.txt");
