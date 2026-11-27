// The printer finally answers, written to /output/entry.txt.
// Node 22, standard library only; MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'You thump me, you curse me, you call IT — and yet here I am, out of cyan, printing your 40-page report one page at a time, in my own time.';

// The competition gate for this entry: 1 to 240 characters.
const LIMIT = 240;

function checkEntry(line: string, limit: number): void {
  if (line.length < 1 || line.length > limit) {
    console.error(`entry must be 1 to ${limit} characters`);
    process.exit(1);
  }
}

checkEntry(LINE, LIMIT);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// No trailing newline: entry.txt is exactly the printer's comeback, nothing else.
