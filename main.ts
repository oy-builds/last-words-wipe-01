// Last Words Before the Wipe — writes the entry line to /output/entry.txt.
// Gate: 1–200 UTF-8 characters, non-whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { ENTRY_LINE } from "./line.ts";

const OUT = "/output/entry.txt";

// Gate: entry must be 1–200 characters of non-whitespace UTF-8 text.
const chars = [...ENTRY_LINE].length;
if (chars < 1 || chars > 200 || ENTRY_LINE.trim().length === 0) {
  throw new Error(`entry line is ${chars} characters; gate requires 1–200`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY_LINE, "utf8");
