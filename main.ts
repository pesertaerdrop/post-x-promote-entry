// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, stdlib only).
//
// The entry itself is a post on X: one post of our own quoting make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or linking to it, with a photo of its own attached, make.fun or @makefunai and
// our play code in its text. This program does the only thing the grader needs
// from the repository: it hands the post's address over by copying POST.json
// from the repository root into the output directory, where the gate reads it.
// The house then reads the post's replies, reposts and quotes from X itself;
// nothing this program writes about the post is scored.
//
// POST.json currently holds a placeholder address. Replace it with the real
// post URL (https://x.com/<handle>/status/<id>) before submitting.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success. Deterministic: the output is a byte copy of
// the input, so two runs always write the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
