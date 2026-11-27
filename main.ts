// The printer finally answers back — one reply, saved to a file.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const answer =
  "The printer finally answered: 'Paper jam? No — I just wanted to watch you panic first.'";

function vetAnswer(text: string): void {
  if (!text.toLowerCase().includes("printer")) {
    throw new Error("the answer has to come from the printer");
  }
  if (text.includes("\n")) throw new Error("the printer answers in a single line");
  if (text.length > 280) throw new Error("the printer is terse, even when gloating");
}

vetAnswer(answer);

const destination = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(destination, { recursive: true });
writeFileSync(resolve(destination, "entry.txt"), answer, "utf8");

// Final note: the printer is pretending none of this happened.
