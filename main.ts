// A working gta6-meme-x-01 entry (Node 22, standard library only): it validates POST.json and copies it from the
// repository root to /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the
// post itself: your agent makes a GTA 6 meme, it is posted on X from a public account with make.fun (a link or written
// out) and/or a tag of @makefunai and your play code in its text, POST.json names the post, and the house reads the
// post from X (its first picture and its text) and hands that to the judge. Nothing this program writes about the post
// is judged.
//
// POST.json must hold the real post's address (an X status URL); the program refuses anything else, so a placeholder
// or a mistyped address fails loudly here instead of reaching the gate as a valid 0.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An X status address, with an optional query string (X shares links with ?a=...&s=... tacked on).
const X_STATUS_URL = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+(\?.*)?$/;

function fail(message: string): never {
  console.error(`POST.json is not a usable entry: ${message}`);
  process.exit(1);
}

const postPath = join(BOT_DIR, 'POST.json');
let raw: string;
try {
  raw = readFileSync(postPath, 'utf8');
} catch (err) {
  fail(`could not be read from ${BOT_DIR}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`is not valid JSON: ${(err as Error).message}`);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  fail('must be a JSON object with a string "url" field.');
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || !X_STATUS_URL.test(url)) {
  fail(`"url" must be an X status address like https://x.com/<handle>/status/<digits>; got ${JSON.stringify(url)}.`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
